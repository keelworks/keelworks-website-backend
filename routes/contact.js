const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();

const{sendEmail} = require('../controllers/contactOperations');

router.route('/').post(upload.none(), sendEmail);
router.route('/test').get((req,res)=>{res.json({success:true, msg:"Hi Hello why"})});

module.exports = router;