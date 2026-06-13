const path = require('path');

function uploadImage(req, res) {
  if (!req.file) return res.status(400).json({ error: 'Dosya yüklenmedi' });
  res.json({ url: '/uploads/' + path.basename(req.file.path), filename: req.file.filename });
}

module.exports = { uploadImage };
