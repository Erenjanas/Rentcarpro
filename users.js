const router = require('express').Router();
const ctrl = require('../controllers/userController');
const { auth, adminOnly } = require('../middleware/auth');
router.get('/', auth, adminOnly, ctrl.listUsers);
router.put('/:id', auth, adminOnly, ctrl.updateUser);
module.exports = router;
