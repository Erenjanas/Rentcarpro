const { all, get, run } = require('../db/database');
const { required, toInt } = require('../utils/validators');
const mailService = require('../services/mailService');

function dayDiff(a, b) {
  const start = new Date(a);
  const end = new Date(b);
  const diff = Math.ceil((end - start) / 86400000);
  return diff > 0 ? diff : 1;
}

async function listReservations(req, res, next) {
  try {
    const rows = await all(`SELECT r.*, c.title car_title, c.brand car_brand, c.model car_model
      FROM reservations r JOIN cars c ON c.id = r.car_id ORDER BY r.id DESC`);
    res.json(rows);
  } catch (err) { next(err); }
}

async function createReservation(req, res, next) {
  try {
    required(req.body, ['car_id','customer_name','customer_email','pickup_location','return_location','pickup_date','return_date']);
    const car = await get('SELECT * FROM cars WHERE id = ?', [req.body.car_id]);
    if (!car) return res.status(404).json({ error: 'Araç bulunamadı' });
    const days = dayDiff(req.body.pickup_date, req.body.return_date);
    const subtotal = days * car.price_daily;
    const discount = toInt(req.body.discount);
    const total = Math.max(0, subtotal - discount);
    const result = await run(`INSERT INTO reservations
      (user_id,car_id,customer_name,customer_email,customer_phone,pickup_location,return_location,pickup_date,return_date,days,subtotal,discount,total,status,payment_status,notes)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [req.user?.id || null, req.body.car_id, req.body.customer_name, req.body.customer_email, req.body.customer_phone || '',
       req.body.pickup_location, req.body.return_location, req.body.pickup_date, req.body.return_date,
       days, subtotal, discount, total, 'pending', 'unpaid', req.body.notes || '']);
    const created = await get('SELECT * FROM reservations WHERE id = ?', [result.id]);
    mailService.reservationCreated(created).catch(console.error);
    res.status(201).json(created);
  } catch (err) { next(err); }
}

async function updateReservation(req, res, next) {
  try {
    await run('UPDATE reservations SET status=?, payment_status=?, notes=?, updated_at=CURRENT_TIMESTAMP WHERE id=?',
      [req.body.status || 'pending', req.body.payment_status || 'unpaid', req.body.notes || '', req.params.id]);
    res.json(await get('SELECT * FROM reservations WHERE id = ?', [req.params.id]));
  } catch (err) { next(err); }
}

async function deleteReservation(req, res, next) {
  try {
    await run('DELETE FROM reservations WHERE id=?', [req.params.id]);
    res.json({ ok:true });
  } catch (err) { next(err); }
}

module.exports = { listReservations, createReservation, updateReservation, deleteReservation };
