const Router = require('express')
const router = new Router()
const nominationController = require('../contollers/nominationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN') ,nominationController.create)
router.get('/', nominationController.getAll)

module.exports = router