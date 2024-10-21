require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

// ********** Routes ***********
const contact = require('./routes/contact');
app.use(express.json());

app.use("/api/v1/contact", contact);







// *****************************
// ********** Server ***********
// *****************************

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
