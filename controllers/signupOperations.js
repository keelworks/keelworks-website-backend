const axios = require ('axios');
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

const urlTest = 'https://script.google.com/macros/s/AKfycbxBIUntQ1EB-vaR3nMuUabSn0WO3YghlyFAGFFB-tx02vnc6DtU_AgLgCFiLsHLWjTO/exec';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbwwlgVzJv42ERjRKso-pk8Xu9HD3GZl4nxdEltQ3nEzNcX_f9U0_U2ww4kZPlqZi51_Yg/exec';


const signup = async(req, res)=>{
  try {
    
    if(req.body){

      const filteredData = {...req.body};

      const formData = new FormData();
      formData.append("First Name", filteredData.firstName);
      formData.append("Last Name", filteredData.lastName);
      formData.append("Email", filteredData.email);
      formData.append("Contact No", filteredData.contactNo);
      formData.append("City", filteredData.city);
      formData.append("State", filteredData.state);
      formData.append("Country", filteredData.country);
      formData.append("Volunteer Position", filteredData.volunteerPosition);
      formData.append("Brief Info", filteredData.briefInfo);
      formData.append("Skills And Experience", filteredData.skillsAndExperience);
      formData.append("Volunteer Experience", filteredData.volunteerExperience);
      formData.append("Why Keelworks", filteredData.whyKeelworks);
      formData.append("Goal Or Expectation", filteredData.goalOrExpectation);
      formData.append("Additional Info", filteredData.additionalInfo);
      formData.append("Working Days", filteredData.daysCheckbox);
      formData.append("Working Hours", filteredData.workingHours);

      // /*----------------Append References in Request Payload------------*/

      formData.append(
        "Reference 1 First Name",
        filteredData.reference1RefFirstName ?? " "
      );
      formData.append(
        "Reference 1 Last Name",
        filteredData.reference1RefLastName ?? " "
      );
      formData.append("Reference 1 Email", filteredData.reference1RefEmail ?? " ");
      formData.append(
        "Reference 1 Contact No",
        filteredData.reference1RefContactNo ?? " "
      );
      formData.append("Reference 1 City", filteredData.reference1RefCity ?? " ");
      formData.append("Reference 1 State", filteredData.reference1RefState ?? " ");
      formData.append(
        "Reference 1 Country",
        filteredData.reference1RefCountry ?? " "
      );
      formData.append(
        "Reference 1 Relationship",
        filteredData.reference1RelationshipToRef ?? " "
      );

      formData.append(
        "Reference 2 First Name",
        filteredData.reference2RefFirstName ?? " "
      );
      formData.append(
        "Reference 2 Last Name",
        filteredData.reference2RefLastName ?? " "
      );
      formData.append("Reference 2 Email", filteredData.reference2RefEmail ?? " ");
      formData.append(
        "Reference 2 Contact No",
        filteredData.reference2RefContactNo ?? " "
      );
      formData.append("Reference 2 City", filteredData.reference2RefCity ?? " ");
      formData.append("Reference 2 State", filteredData.reference2RefState ?? " ");
      formData.append(
        "Reference 2 Country",
        filteredData.reference2RefCountry ?? " "
      );
      formData.append(
        "Reference 2 Relationship",
        filteredData.reference2RelationshipToRef ?? " "
      );

      /*----------------Append References in Request Payload------------*/

      const response = await axios.post(urlTest, formData, {headers:{'Content-Type': 'multipart/form-data',},});
      console.log("Your information has been sent successfully!", filteredData);
    }
  } 
  catch (error) {
    throw new BadRequestError('Your message was not sent! There is a problem with the provided data.');
  }
  res.status(StatusCodes.OK).send("Information was sent!");
}

module.exports = {signup};