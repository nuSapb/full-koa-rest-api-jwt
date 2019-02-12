const Router = require('koa-router')

const router = new Router()

router.use(require('./models'))


module.exports = router.routes()