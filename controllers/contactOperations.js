const axios = require ('axios');
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

const urlTest = 'https://script.google.com/macros/s/AKfycbytKVKRPQA03UYxoyWhOUprekY10vKSPdDpFGpyheqsQ21uvG1SBCg7MsDETatOsdKf/exec';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbyE3WnCqDFPWED7P3VUtKY6_unzSDPGS4X0kYGw4yBFKUnGGdP2uy-2wkWhZf2vk7wX/exec';


const sendEmail = async(req, res)=>{
  try {
    const {
      firstName,
      lastName,
      email,
      subject,
      message,
    } = req.body;

    if(req.body){
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);

    //   const response = await fetch(urlTest, {
    //   method: 'POST',
    //   body: formData,
    // });

      const response = await axios.post(urlTest, formData, {headers:{'Content-Type': 'multipart/form-data',},});
      console.log("Your email has been sent successfully!");
      // console.log("Here is FormData:", formData);
    }
  } 
  catch (error) {
    throw new BadRequestError('Your message was not sent! There is a problem with the provided data.');
  }
  res.status(StatusCodes.OK).send("email was sent!");
}

module.exports = {sendEmail};