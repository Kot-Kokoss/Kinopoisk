const Router = require('express')
const router = new Router()
const filmController = require('../contollers/filmController')

router.post('/', filmController.create)
router.get('/', filmController.getAll)
router.get('/', filmController.getOne)

module.exports = router