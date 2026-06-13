const router = require('express').Router();
const { createIntent } = require('../controllers/paymentController');
router.post('/intent', createIntent);
module.exports = router;
