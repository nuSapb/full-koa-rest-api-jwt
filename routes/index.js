const Router = require('koa-router')

const router = new Router()

router.use(require('../app/api/v1/controllers'))

module.exports = router.routes()
