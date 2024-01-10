const Router = require('express')
const router = new Router()
const positionController = require('../contollers/positionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), positionController.create)
router.get('/', positionController.getAll)
router.get('/', positionController.getOne)

module.exports = router