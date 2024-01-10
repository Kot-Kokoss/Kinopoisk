const Router = require('express')
const router = new Router()
const nominationsController = require('../contollers/nominationsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN') ,nominationsController.create)
router.get('/', nominationsController.getAll)

module.exports = router