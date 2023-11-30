const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const filmRouter = require('./filmRouter')
const facesRouter = require('./facesRouter')
const nominationsRouter = require('./nominationsRouter')
const awardsRouter = require('./awardsRouter')

router.use('/user', userRouter)
router.use('/film', filmRouter)
router.use('/faces', facesRouter)
router.use('/nominations', nominationsRouter)
router.use('/awards', awardsRouter)

module.exports = router