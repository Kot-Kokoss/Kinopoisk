const Router = require('express')
const router = new Router()
const filmController = require('../contollers/filmController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), filmController.create)
router.get('/', filmController.getAll)
router.get('/', filmController.getOne)

module.exports = router