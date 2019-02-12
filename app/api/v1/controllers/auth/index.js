const Router = require('koa-router')
const signIn = require('./signin')

const router = new Router()


router.post('/signin', signIn.postHandler)

module.exports = router.routes()