require("dotenv").config();
require('express-async-errors');

// ********** Security Packages **********
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const rateLimiter = require('express-rate-limit');

const express = require("express");
const app = express();
const port = process.env.PORT || 5500;

// ********** Routes ***********
const contact = require('./routes/contact');
const subscribe = require('./routes/subscribe');
const signup = require('./routes/signup');
app.use(rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

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
