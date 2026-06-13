const { all, get, run } = require('../db/database');
const { required, toInt } = require('../utils/validators');

async function listCars(req, res, next) {
  try {
    const where = [];
    const params = [];
    if (req.query.category) { where.push('category = ?'); params.push(req.query.category); }
    if (req.query.status) { where.push('status = ?'); params.push(req.query.status); }
    if (req.query.search) {
      where.push('(brand LIKE ? OR model LIKE ? OR title LIKE ?)');
      params.push(`%${req.query.search}%`, `%${req.query.search}%`, `%${req.query.search}%`);
    }
    const sql = 'SELECT * FROM cars ' + (where.length ? 'WHERE ' + where.join(' AND ') : '') + ' ORDER BY featured DESC, id DESC';
    res.json(await all(sql, params));
  } catch (err) { next(err); }
}

async function getCar(req, res, next) {
  try {
    const car = await get('SELECT * FROM cars WHERE id = ?', [req.params.id]);
    if (!car) return res.status(404).json({ error: 'Araç bulunamadı' });
    res.json(car);
  } catch (err) { next(err); }
}

function payload(body) {
  required(body, ['brand','model','title','category','price_daily','year','fuel','transmission','seats']);
  return [
    body.brand, body.model, body.title, body.category, toInt(body.price_daily), toInt(body.price_weekly),
    toInt(body.price_monthly), toInt(body.year), body.fuel, body.transmission, toInt(body.seats),
    toInt(body.doors, 4), body.color || 'Siyah', body.image_url || '', body.gallery_json || '[]',
    body.plate || '', toInt(body.mileage), toInt(body.deposit), body.status || 'available',
    body.featured ? 1 : 0, body.description || ''
  ];
}

async function createCar(req, res, next) {
  try {
    const p = payload(req.body);
    const result = await run(`INSERT INTO cars
      (brand,model,title,category,price_daily,price_weekly,price_monthly,year,fuel,transmission,seats,doors,color,image_url,gallery_json,plate,mileage,deposit,status,featured,description)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, p);
    res.status(201).json(await get('SELECT * FROM cars WHERE id = ?', [result.id]));
  } catch (err) { next(err); }
}

async function updateCar(req, res, next) {
  try {
    const p = payload(req.body);
    p.push(req.params.id);
    await run(`UPDATE cars SET brand=?,model=?,title=?,category=?,price_daily=?,price_weekly=?,price_monthly=?,year=?,fuel=?,transmission=?,seats=?,doors=?,color=?,image_url=?,gallery_json=?,plate=?,mileage=?,deposit=?,status=?,featured=?,description=?,updated_at=CURRENT_TIMESTAMP WHERE id=?`, p);
    res.json(await get('SELECT * FROM cars WHERE id = ?', [req.params.id]));
  } catch (err) { next(err); }
}

async function deleteCar(req, res, next) {
  try {
    await run('DELETE FROM cars WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (err) { next(err); }
}

module.exports = { listCars, getCar, createCar, updateCar, deleteCar };
