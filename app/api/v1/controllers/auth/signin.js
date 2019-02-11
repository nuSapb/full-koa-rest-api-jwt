const bcrypt = require('bcrypt')
const user = require('../../models/user')
const jwt = require('jsonwebtoken')

const postHandler = async (ctx) => {
    const results = await user.findUserByUsername(ctx.request.body.username)

    if (results[0]){
        const match = await bcrypt.compare(ctx.request.body.password, results[0].password)
        if(match) {
            await jwt.sign(results[0], 'key4testapi', {expireIn: '30s'}, (err, token) => {
                ctx.body = {
                    token
                }
            })

        }
    }

    await next()
}