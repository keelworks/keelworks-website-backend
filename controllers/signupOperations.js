
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

const url = 'localhost:5500/api/v1/signup';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbyE3WnCqDFPWED7P3VUtKY6_unzSDPGS4X0kYGw4yBFKUnGGdP2uy-2wkWhZf2vk7wX/exec';


const signup = async(req, res)=>{
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

module.exports = {signup};