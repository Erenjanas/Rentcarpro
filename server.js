const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const { apiLimiter, adminLimiter, secureHeaders } = require('./middleware/security');
const path = require('path');
const env = require('./config/env');
const { init } = require('./db/database');
const { notFound, errorHandler } = require('./middleware/error');

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(cookieParser(process.env.COOKIE_SECRET || 'dev-cookie-secret'));
app.use(secureHeaders);
app.use(cors());
fs.mkdirSync(path.join(env.root, 'backend/logs'), { recursive: true });
const accessLog = fs.createWriteStream(path.join(env.root, 'backend/logs/access.log'), { flags: 'a' });
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev', { stream: process.env.NODE_ENV === 'production' ? accessLog : process.stdout }));
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(env.uploadDir));
app.use('/admin-assets', express.static(path.join(env.root, 'admin/assets')));
app.use('/assets', express.static(path.join(env.root, 'frontend/assets')));
app.use(express.static(path.join(env.root, 'public')));
app.use(express.static(path.join(env.root, 'frontend')));

app.get('/admin', adminLimiter(), (req, res) => res.sendFile(path.join(env.root, 'admin/index.html')));

app.use('/api', apiLimiter());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/cars', require('./routes/cars'));
app.use('/api/reservations', require('./routes/reservations'));
app.use('/api/users', require('./routes/users'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/uploads', require('./routes/uploads'));
app.use('/api/payments', require('./routes/payments'));

app.use('/api', notFound);
app.use(errorHandler);

init().then(() => {
  app.listen(env.port, () => console.log(`RentCar running: http://localhost:${env.port}`));
}).catch(err => {
  console.error('Database init failed', err);
  process.exit(1);
});
