const { get, all } = require('../db/database');

async function stats(req, res, next) {
  try {
    const cars = await get('SELECT COUNT(*) count FROM cars');
    const users = await get('SELECT COUNT(*) count FROM users');
    const reservations = await get('SELECT COUNT(*) count FROM reservations');
    const revenue = await get('SELECT COALESCE(SUM(total),0) total FROM reservations WHERE status != "cancelled"');
    const latest = await all(`SELECT r.id, r.customer_name, r.total, r.status, c.title car_title
      FROM reservations r JOIN cars c ON c.id=r.car_id ORDER BY r.id DESC LIMIT 8`);
    res.json({ cars: cars.count, users: users.count, reservations: reservations.count, revenue: revenue.total, latest });
  } catch (err) { next(err); }
}

module.exports = { stats };
