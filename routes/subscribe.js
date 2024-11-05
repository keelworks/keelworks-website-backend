const express = require('express');
const router = express.Router();

// const multer = require('multer');
// const upload = multer();

const{subscribe} = require('../controllers/subscribeOperations');

router.route('/').post(subscribe);

module.exports = router;