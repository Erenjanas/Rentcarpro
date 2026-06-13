const path = require('path');
require('dotenv').config();

const root = path.join(__dirname, '..', '..');

module.exports = {
  port: Number(process.env.PORT || 3000),
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-me',
  dbPath: path.join(root, process.env.DB_PATH || 'database/rentcar.sqlite'),
  uploadDir: path.join(root, process.env.UPLOAD_DIR || 'backend/uploads'),
  adminEmail: process.env.ADMIN_EMAIL || 'admin@rentcar.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
  whatsappNumber: process.env.WHATSAPP_NUMBER || '16395697826',
  root
};
