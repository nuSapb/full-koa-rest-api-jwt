const Router = require('koa-router')

const router = new Router()

router.use(require('./api'))

module.exports = router.routes()
