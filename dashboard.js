const router = require('express').Router();
const { stats } = require('../controllers/dashboardController');
const { auth, adminOnly } = require('../middleware/auth');
router.get('/stats', auth, adminOnly, stats);
module.exports = router;
