
const axios = require ('axios');
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

// const realKeelWorksURL = "https://script.google.com/macros/s/AKfycbyjny6A1XeEKYTS3M0yNMLX97hO1SRkMudZUddPKIDnPMCAh5wE6D7kxZlo9FyD3NPspQ/exec";

const urlTest = 'https://script.google.com/a/macros/keelworks.org/s/AKfycbzhbpvQsNgjDXJNeWCPLeFePbtFN8uPoLivWC_H44ltfSUbbUvsbQcN9yWM302skBtt/exec';



const subscribe = async(req, res)=>{
  try {
    // ** changing the object to a normal JS object: ***
    // ** have to receive JSON data here
    const data = Object.assign({}, req.body);

    if(data){
      const formData = new FormData();
      formData.append('Email', data.Email);

    //   const response = await fetch(urlTest, {
    //   method: 'POST',
    //   body: formData,
    //   muteHttpExceptions: true,
    // });
      const response = await axios.post(urlTest, formData, {headers:{'Content-Type': 'multipart/form-data',},});

      console.log("Your email address has been sent successfully!", data);
      // console.log("Here is FormData:", formData);
    }
  } 
  catch (error) {
    throw new BadRequestError('Your email address was not sent! There is a problem with the provided data.');
  }
  res.status(StatusCodes.OK).send("You have subscribed successfully!");
}

module.exports = {subscribe};