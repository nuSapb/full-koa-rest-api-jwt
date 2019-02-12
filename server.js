const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const jwt = require('jsonwebtoken')
const logger = require('koa-morgan')
const koaBody = require('koa-bodyparser');

app.use(logger('dev'))
app.use(koaBody())

router.get('/', async (ctx, next) => {
    ctx.body = {
        "redirect": "from auth passed"
    }
    await next()
})

// const stripPrefix = async (ctx, next) => {
//     if (!ctx.path.startsWith("/-")) {
//       ctx.status = 404
//       return
//     }
// }
  
app.use(require('./routes'))
// app.use(stripPrefix)
app.use(router.routes())
app.listen(5000, () => {
    console.log('server start on port 5000')
})