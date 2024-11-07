
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

const url = 'localhost:5500/api/v1/signup';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbwwlgVzJv42ERjRKso-pk8Xu9HD3GZl4nxdEltQ3nEzNcX_f9U0_U2ww4kZPlqZi51_Yg/exec';


const signup = async(req, res)=>{
  try {
    // ** changing the object to a normal JS object: ***
    const data = Object.assign({}, req.body);

    if(data){
      const data = new FormData();
      data.append("First Name", filteredData.firstName);
      data.append("Last Name", filteredData.lastName);
      data.append("Email", filteredData.email);
      data.append("Contact No", filteredData.contactNo);
      data.append("City", filteredData.city);
      data.append("State", filteredData.state);
      data.append("Country", filteredData.country);
      data.append("Volunteer Position", filteredData.volunteerPosition);
      data.append("Brief Info", filteredData.briefInfo);
      data.append("Skills And Experience", filteredData.skillsAndExperience);
      data.append("Volunteer Experience", filteredData.volunteerExperience);
      data.append("Why Keelworks", filteredData.whyKeelworks);
      data.append("Goal Or Expectation", filteredData.goalOrExpectation);
      data.append("Additional Info", filteredData.additionalInfo);
      data.append("Working Days", filteredData.daysCheckbox);
      data.append("Working Hours", filteredData.workingHours);

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