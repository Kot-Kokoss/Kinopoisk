const Router = require('express')
const router = new Router()
const genreController = require('../contollers/genreController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), genreController.create)
router.get('/', genreController.getAll)
router.get('/', genreController.getOne)

module.exports = router