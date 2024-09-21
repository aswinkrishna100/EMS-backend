const express = require('express')
const userController = require('../Controllers/usercontroller')
const adminController = require('../Controllers/admincontroller')
const jwtAuthorization = require('../Middlewares/jwtMiddleware')
const router = new express.Router()

router.post('/adduser',jwtAuthorization,userController.addUser)
router.get('/getuser',jwtAuthorization,userController.getUser)
router.put('/edituser',jwtAuthorization,userController.editUser)
router.delete('/delete-user/:id',jwtAuthorization,userController.deleteUser)

router.post('/addadmin',adminController.addAdmin)
router.post('/admin/login',adminController.login)

module.exports = router
