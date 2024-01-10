const Router = require('express')
const router = new Router()
const awardsController = require('../contollers/awardsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), awardsController.create)
router.get('/', awardsController.getAll)

module.exports = router