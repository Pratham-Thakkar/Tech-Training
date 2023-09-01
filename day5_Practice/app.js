// Create a project which have users ( diff types - talent, cd, admin)
// -> signup, login -> DONE
// -> only talent can signup by themselves -> DONE
// ->Cd can’t signup, admin can signup behalf of them and set password for cd ->Done
// -> Project creation can be done by cd ->Done
// -> Admin can update or delete the project (edited)
// Only admin can create CD users and set passwords.
// Project will be created by only CD
// Admin and CD can update and delete the project.

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const AWS = require("aws-sdk");
const multers3 = require("multer-s3");
const path = require("path");
const dotenv = require("dotenv").config();
const talentRoutes = require("./routes/talent");
const cdRoutes = require("./routes/cd");
const adminRoutes = require("./routes/admin");
const projectController = require("./controllers/project");

AWS.config.update({
  accessKeyId: "your_access_key_id",
  secretAccessKey: "your_secret_access_key",
  region: "your_bucket_region",
});

const s3 = new AWS.S3();

const upload = multer({
  storage: s3,
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(multer({ storage: upload }).single("cover-file"));

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/talent", talentRoutes);
app.use("/admin", adminRoutes);
app.use("/cd", cdRoutes);
app.use("/listProject", projectController.getProject);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log(" Database Connected");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
