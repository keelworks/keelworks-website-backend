// ** no need for axios **


const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {badReuest} = require('../errors');
const BadRequest = require('../errors/badRequest');

const url = 'localhost:5500/api/v1/contact';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbyE3WnCqDFPWED7P3VUtKY6_unzSDPGS4X0kYGw4yBFKUnGGdP2uy-2wkWhZf2vk7wX/exec';


const sendEmail = async(req, res)=>{
  try {
    // ** changing the object to a normal JS object: ***
    const data = Object.assign({}, req.body);

    if(data){
      const formData = new FormData();
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

    //   const response = await fetch(url, {
    //   method: 'POST',
    //   body: formData,  // Send formData just like in your front-end
    // });

      console.log("Your email has been sent successfully!", data);
      // console.log("Here is FormData:", formData);
    }
  } 
  catch (error) {
    throw new BadRequest('Your message was not sent! There is a problem with the provided data.');
  }
  res.status(StatusCodes.OK).send("email was sent2!");
}

module.exports = {sendEmail};