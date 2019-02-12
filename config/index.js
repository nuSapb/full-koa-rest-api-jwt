const Router = require('koa-router')

const router = new Router()

router.use(require('./db')) 


module.exports = router.routes()