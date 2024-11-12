require("dotenv").config();
require('express-async-errors');
const cors = require('cors');

const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

// ********** Routes ***********
const contact = require('./routes/contact');
const subscribe = require('./routes/subscribe');
const signup = require('./routes/signup');
app.use(express.json());
app.use(cors());

app.use("/api/v1/contact", contact);
app.use("/api/v1/subscribe", subscribe);
app.use("/api/v1/signup", signup);






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
