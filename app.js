require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "Welcome to KeelWorks back-end application" });
});







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
