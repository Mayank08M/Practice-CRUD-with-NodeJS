const Router = require('express').Router()
Router.use('/user', require('./users'))
// Router.use('/auth', require('./Auth'))
module.exports = Router
