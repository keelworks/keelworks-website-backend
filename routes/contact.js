const express = require('express');
const router = express.Router();

const{sendEmail} = require('../controllers/contactOperations');

router.route('/').get(sendEmail);
router.route('/test').get((req,res)=>{res.json({success:true, msg:"Hi Hello why"})});

module.exports = router;