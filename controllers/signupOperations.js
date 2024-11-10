
const FormData = require('form-data'); 
const {StatusCodes} = require('http-status-codes');
const {BadRequestError} = require('../errors');

// const urlTest = 'https://script.google.com/macros/s/AKfycbytKVKRPQA03UYxoyWhOUprekY10vKSPdDpFGpyheqsQ21uvG1SBCg7MsDETatOsdKf/exec';
// const realKeelWorksURL = 'https://script.google.com/macros/s/AKfycbwwlgVzJv42ERjRKso-pk8Xu9HD3GZl4nxdEltQ3nEzNcX_f9U0_U2ww4kZPlqZi51_Yg/exec';


const signup = async(req, res)=>{
  try {
    // ** changing the object to a normal JS object: ***
    // const data = Object.assign({}, req.body);

    
    if(req.body){

      const filteredData = {...req.body};

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

      // /*----------------Append References in Request Payload------------*/

      data.append(
        "Reference 1 First Name",
        filteredData.reference1RefFirstName ?? " "
      );
      data.append(
        "Reference 1 Last Name",
        filteredData.reference1RefLastName ?? " "
      );
      data.append("Reference 1 Email", filteredData.reference1RefEmail ?? " ");
      data.append(
        "Reference 1 Contact No",
        filteredData.reference1RefContactNo ?? " "
      );
      data.append("Reference 1 City", filteredData.reference1RefCity ?? " ");
      data.append("Reference 1 State", filteredData.reference1RefState ?? " ");
      data.append(
        "Reference 1 Country",
        filteredData.reference1RefCountry ?? " "
      );
      data.append(
        "Reference 1 Relationship",
        filteredData.reference1RelationshipToRef ?? " "
      );

      data.append(
        "Reference 2 First Name",
        filteredData.reference2RefFirstName ?? " "
      );
      data.append(
        "Reference 2 Last Name",
        filteredData.reference2RefLastName ?? " "
      );
      data.append("Reference 2 Email", filteredData.reference2RefEmail ?? " ");
      data.append(
        "Reference 2 Contact No",
        filteredData.reference2RefContactNo ?? " "
      );
      data.append("Reference 2 City", filteredData.reference2RefCity ?? " ");
      data.append("Reference 2 State", filteredData.reference2RefState ?? " ");
      data.append(
        "Reference 2 Country",
        filteredData.reference2RefCountry ?? " "
      );
      data.append(
        "Reference 2 Relationship",
        filteredData.reference2RelationshipToRef ?? " "
      );

      /*----------------Append References in Request Payload------------*/

    //   const response = await fetch(url, {
    //   method: 'POST',
    //   body: formData,
    // });

      console.log("Your email has been sent successfully!", filteredData);
      // console.log("Here is FormData:", formData);
    }
  } 
  catch (error) {
    throw new BadRequestError('Your message was not sent! There is a problem with the provided data.');
  }
  res.status(StatusCodes.OK).send("email was sent!");
}

module.exports = {signup};