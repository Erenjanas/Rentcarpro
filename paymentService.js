async function createPaymentIntent({ reservationId, amount, currency = 'TRY' }) {
  const provider = process.env.PAYMENT_PROVIDER || 'manual';
  if (provider === 'manual') {
    return {
      provider,
      status: 'manual_pending',
      reservationId,
      amount,
      currency,
      instructions: 'Ödeme entegrasyonu manuel modda. Banka havalesi veya POS entegrasyonu production ortamında bağlanmalıdır.'
    };
  }
  return {
    provider,
    status: 'not_configured',
    reservationId,
    amount,
    currency,
    instructions: 'PAYMENT_PROVIDER seçildi ancak gerçek ödeme anahtarları yapılandırılmadı.'
  };
}

module.exports = { createPaymentIntent };
