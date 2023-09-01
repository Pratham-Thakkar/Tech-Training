const router = require('express').Router()
const publicController = require('../controller/public')

router.get('/project/list',publicController)

module.exports=router