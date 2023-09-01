const router = require('express').Router()
const userController = require('../controllers/user')

router.post('/signup',userController.createUser)
router.post('/sign',userController.verifyUser)

module.exports = router