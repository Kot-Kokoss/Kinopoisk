const Router = require('express')
const router = new Router()
const userController = require('../contollers/userController')

router.post('/registration', userController.registraton)
router.post('/login', userController.login)
router.get('/auth', userController.check)

module.exports = router