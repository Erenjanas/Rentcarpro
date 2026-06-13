const { run, get } = require('../db/database');
const { hashPassword, comparePassword, signToken } = require('../utils/security');
const { required, email } = require('../utils/validators');

async function register(req, res, next) {
  try {
    required(req.body, ['name', 'email', 'password']);
    if (!email(req.body.email)) return res.status(400).json({ error: 'Geçersiz e-posta' });
    const existing = await get('SELECT id FROM users WHERE email = ?', [req.body.email]);
    if (existing) return res.status(409).json({ error: 'Bu e-posta kayıtlı' });
    const passwordHash = await hashPassword(req.body.password);
    const result = await run(
      'INSERT INTO users (name,email,phone,password_hash,role) VALUES (?,?,?,?,?)',
      [req.body.name, req.body.email, req.body.phone || '', passwordHash, 'customer']
    );
    const user = await get('SELECT id,name,email,role FROM users WHERE id = ?', [result.id]);
    res.status(201).json({ user, token: signToken(user) });
  } catch (err) { next(err); }
}

async function login(req, res, next) {
  try {
    required(req.body, ['email', 'password']);
    const user = await get('SELECT * FROM users WHERE email = ?', [req.body.email]);
    if (!user) return res.status(401).json({ error: 'E-posta veya şifre hatalı' });
    const ok = await comparePassword(req.body.password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'E-posta veya şifre hatalı' });
    res.json({ user: { id:user.id, name:user.name, email:user.email, role:user.role }, token: signToken(user) });
  } catch (err) { next(err); }
}

async function me(req, res) {
  res.json({ user: req.user });
}

module.exports = { register, login, me };
