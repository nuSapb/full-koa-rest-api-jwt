const bcrypt = require('bcrypt')
const user = require('../../models/user')
const jwt = require('jsonwebtoken')
let authToken = {}


// TODO: Verify Token


const postHandler = async (ctx, next) => {
    console.log('postHandler')
    const results = await user.verifyUser(ctx.request.body.username)

    if (results[0]) {
        const match = await bcrypt.compare(ctx.request.body.password, results[0].password)
        if (match) {
            const { username } = results[0]
            console.log('match!!!!!!!!!!!!', { username })
            token = await jwt.sign({ username }, 'secretkey', { expiresIn: '30s' })
            ctx.body = {token}
            console.log('the response ctx.body is ', ctx.body)
            console.log('the response status is ', ctx.status)

        }
    } else {
        ctx.status = 401
        console.log('the response status is ', ctx.status)
        
    }
    //  await ctx.redirect('/signin')

}

const getHandler = async (ctx, next) => {
    ctx.body = {
        authToken

    }
    console.log('the response status is ', ctx.status)

}

module.exports = {
    postHandler,
    getHandler
}