const { all, get, run } = require('../db/database');

async function listUsers(req, res, next) {
  try {
    res.json(await all('SELECT id,name,email,phone,role,status,created_at FROM users ORDER BY id DESC'));
  } catch (err) { next(err); }
}

async function updateUser(req, res, next) {
  try {
    await run('UPDATE users SET name=?, phone=?, role=?, status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?',
      [req.body.name, req.body.phone || '', req.body.role || 'customer', req.body.status || 'active', req.params.id]);
    res.json(await get('SELECT id,name,email,phone,role,status FROM users WHERE id=?', [req.params.id]));
  } catch (err) { next(err); }
}

module.exports = { listUsers, updateUser };
