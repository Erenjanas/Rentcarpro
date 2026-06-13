const fs = require('fs');
const env = require('../backend/config/env');
if (fs.existsSync(env.dbPath)) fs.unlinkSync(env.dbPath);
console.log('Veritabanı silindi. Şimdi npm run seed çalıştır.');
