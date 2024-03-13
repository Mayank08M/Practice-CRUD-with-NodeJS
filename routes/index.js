const Router = require('express').Router()
Router.use('/user', require('./users'))
module.exports = Router
