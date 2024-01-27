const Router = require('express')
const router = new Router()
const awardController = require('../contollers/awardController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), awardController.create)
router.get('/', awardController.getAll)

module.exports = router