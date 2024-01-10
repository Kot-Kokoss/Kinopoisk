const Router = require('express')
const router = new Router()
const facesController = require('../contollers/facesController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), facesController.create)
router.get('/', facesController.getAll)
router.get('/', facesController.getOne)

module.exports = router