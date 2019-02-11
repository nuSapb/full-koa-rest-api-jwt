const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const jwt = require('jsonwebtoken')
const logger = require('koa-morgan')
const koaBody = require('koa-body')

app.use(logger('dev'))
app.use(koaBody())

router.get('/', async (ctx, next) => {
    ctx.body = {"example": "Build REST API with Koa"}
})



app.use(router.routes())
app.listen(5000, () => {
    console.log('server start on port 5000')
})