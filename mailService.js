const nodemailer = require('nodemailer');

function enabled() {
  return !!process.env.SMTP_HOST && !!process.env.SMTP_USER && !!process.env.SMTP_PASS;
}

function transporter() {
  if (!enabled()) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

async function sendMail({ to, subject, html, text }) {
  const t = transporter();
  if (!t) {
    console.log('[MAIL DISABLED]', { to, subject });
    return { disabled: true };
  }
  return t.sendMail({
    from: process.env.MAIL_FROM || 'RentCar <no-reply@example.com>',
    to,
    subject,
    html,
    text
  });
}

async function reservationCreated(reservation) {
  return sendMail({
    to: reservation.customer_email,
    subject: `Rezervasyonunuz alındı #${reservation.id}`,
    text: `Rezervasyonunuz alındı. Toplam: ${reservation.total} TL`,
    html: `<h2>Rezervasyonunuz alındı</h2><p>Rezervasyon No: <b>${reservation.id}</b></p><p>Toplam: <b>${reservation.total} TL</b></p>`
  });
}

module.exports = { sendMail, reservationCreated };
