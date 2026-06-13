const router = require('express').Router();
const multer = require('multer');
const env = require('../config/env');
const { auth, adminOnly } = require('../middleware/auth');
const { uploadImage } = require('../controllers/uploadController');

const upload = multer({ dest: env.uploadDir });
router.post('/image', auth, adminOnly, upload.single('image'), uploadImage);
module.exports = router;
