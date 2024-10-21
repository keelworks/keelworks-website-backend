const axios = require('axios');
const {StatusCodes} = require('http-status-codes');

const url = 'http://localhost:5500/api/v1/contact';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbyE3WnCqDFPWED7P3VUtKY6_unzSDPGS4X0kYGw4yBFKUnGGdP2uy-2wkWhZf2vk7wX/exec';


const sendEmail = async(req, res)=>{
  try {
    const data = req.body;
    if(data){
      // const response = await axios.post(url, data);
      console.log("Your email has been sent!", data);
    }
  } 
  catch (error) {
    console.log(`The email wasn't sent! ${error}`);
  }
  res.status(StatusCodes.OK).send("email was sent2!");
}

module.exports = {sendEmail};