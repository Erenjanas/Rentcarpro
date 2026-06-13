const fs = require('fs');
const required = [
  'backend/server.js',
  'backend/routes/auth.js',
  'backend/routes/cars.js',
  'backend/routes/reservations.js',
  'frontend/index.html',
  'admin/index.html',
  'database/schema.sql'
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error('Eksik dosya: ' + file);
}
console.log('Smoke test başarılı.');
