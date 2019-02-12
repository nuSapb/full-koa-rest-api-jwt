const Router = require('koa-router')
const router = new Router()

const auth = require('../app/api/v1/controllers/auth/signin')

router.post('/login', auth.postHandler)