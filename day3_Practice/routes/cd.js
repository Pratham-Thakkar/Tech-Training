const express = require('express')
const fs = require('fs')


const router = express.Router()

const projectDetails = {
    projects: [],
  };
router.post("/addProject", (req, res) => {
  const {
    body: { title, description },
  } = req;
  projectDetails.projects.push({
    title: title,
    desciption: description,
  },);
  fs.writeFile('projects.txt',JSON.stringify(projectDetails), err=>{
    console.log(err);
  })
  res.status(200).send({ title, description });
});

module.exports=router