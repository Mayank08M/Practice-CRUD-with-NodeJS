const { userController } = require('../../contoller')

const userRoutes = require('express').Router()
userRoutes.get('/getAll', userController.getDetail)
userRoutes.post('/registration', userController.addDetail)
userRoutes.post('/login', userController.loginDetails)
userRoutes.put('/updateprofile/:id', userController.updateDetails)
userRoutes.get('/getByID/:id', userController.getByID)
module.exports = userRoutes