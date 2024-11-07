const express = require('express');
const router = express.Router();

// const multer = require('multer');
// const upload = multer();

const{signup} = require('../controllers/signupOperations');

router.route('/').post(signup);

module.exports = router;