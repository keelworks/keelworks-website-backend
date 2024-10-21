const {StatusCodes} = require('http-status-codes');

const sendEmail = async(req, res)=>{
  console.log("Your email has been sent!");
  return res.status(StatusCodes.OK).send("email was sent!");
}

module.exports = {sendEmail};