const Router = require('koa-router')
const signIn = require('./signin')

const router = new Router()


router.post('/signin', signIn.postHandler)
router.get('/signin', signIn.getHandler)

module.exports = router.routes()