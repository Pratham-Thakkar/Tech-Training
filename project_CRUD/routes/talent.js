const router = require('express').Router()
const submitProject = require('../controller/talent')

router.post('/project/submit',submitProject)

module.exports=router