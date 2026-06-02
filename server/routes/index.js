const { Router } = require('express')
const habitsRouter = require('./habitsRouter')

const router = Router()

router.use('/habits', habitsRouter)

module.exports = router
