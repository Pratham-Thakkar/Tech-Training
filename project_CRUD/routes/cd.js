const router = require('express').Router()
const {createProject, updateProject, deleteProject} = require('../controller/cd')

router.post('/project/add',createProject)

router.post('/project/update',updateProject)

router.post('/project/delete',deleteProject)

module.exports=router