const fs = require('fs');
const path = require('path');

const required = [
  'backend/server.js',
  'backend/middleware/security.js',
  'backend/services/mailService.js',
  'backend/services/paymentService.js',
  'frontend/pages/privacy.html',
  'frontend/pages/kvkk.html',
  'frontend/pages/terms.html',
  'public/robots.txt',
  'public/sitemap.xml',
  'docs/PRODUCTION-CHECKLIST.md'
];

let ok = true;
for (const file of required) {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    ok = false;
    console.error('Eksik:', file);
  }
}
if (!ok) process.exit(1);
console.log('Production audit dosya kontrolü başarılı.');
