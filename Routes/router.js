const express = require('express')
const userController = require('../Controllers/usercontroller')

const router = new express.Router()

router.post('/adduser',userController.addUser)

module.exports = router