const axios = require ('axios');
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

const urlTest = 'localhost:5500/api/v1/contact';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbyE3WnCqDFPWED7P3VUtKY6_unzSDPGS4X0kYGw4yBFKUnGGdP2uy-2wkWhZf2vk7wX/exec';


const sendEmail = async(req, res)=>{
  try {
    // ** changing the object to a normal JS object: ***
    // const data = Object.assign({}, req.body);

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

      console.log("Your email has been sent successfully!", data);
      // console.log("Here is FormData:", formData);
    }
  } 
  catch (error) {
    throw new BadRequestError('Your message was not sent! There is a problem with the provided data.');
  }
  res.status(StatusCodes.OK).send("email was sent!");
}

module.exports = {sendEmail};