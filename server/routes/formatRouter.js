const Router = require('express')
const router = new Router()
const formatController = require('../contollers/formatController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), formatController.create)
router.get('/', formatController.getAll)
router.get('/', formatController.getOne)

module.exports = router