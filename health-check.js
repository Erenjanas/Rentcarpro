const http = require('http');

const url = process.env.HEALTH_URL || 'http://localhost:3000/api/cars';
http.get(url, res => {
  console.log('Health status:', res.statusCode);
  process.exit(res.statusCode >= 200 && res.statusCode < 500 ? 0 : 1);
}).on('error', err => {
  console.error('Health check failed:', err.message);
  process.exit(1);
});
