const fs = require('fs');
const path = require('path');
const env = require('../backend/config/env');

const backupDir = path.join(env.root, 'backups');
fs.mkdirSync(backupDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const target = path.join(backupDir, `rentcar-${stamp}.sqlite`);
if (!fs.existsSync(env.dbPath)) {
  console.error('Veritabanı bulunamadı:', env.dbPath);
  process.exit(1);
}
fs.copyFileSync(env.dbPath, target);
console.log('Yedek alındı:', target);
