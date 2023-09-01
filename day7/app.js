const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connected");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
