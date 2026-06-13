const { get } = require('../db/database');
const { createPaymentIntent } = require('../services/paymentService');

async function createIntent(req, res, next) {
  try {
    const reservation = await get('SELECT * FROM reservations WHERE id=?', [req.body.reservation_id]);
    if (!reservation) return res.status(404).json({ error: 'Rezervasyon bulunamadı' });
    const intent = await createPaymentIntent({ reservationId: reservation.id, amount: reservation.total });
    res.json(intent);
  } catch (err) { next(err); }
}

module.exports = { createIntent };
