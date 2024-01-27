const Router = require('express')
const router = new Router()
const personController = require('../contollers/personController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), personController.create)
router.get('/', personController.getAll)
router.get('/', personController.getOne)

module.exports = router