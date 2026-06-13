function notFound(req, res) {
  res.status(404).json({ error: 'Endpoint bulunamadı' });
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Sunucu hatası' });
}

module.exports = { notFound, errorHandler };
