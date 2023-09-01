const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(projectRoutes); // should have /project route

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
