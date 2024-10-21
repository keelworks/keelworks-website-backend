const express = require('express');
const router = express.Router();

const{sendEmail} = require('../controllers/contactOperations');

router.route('/').get(sendEmail);

module.exports = router;