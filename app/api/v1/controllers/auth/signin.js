const bcrypt = require('bcrypt')
const user = require('../../models/user')
const jwt = require('jsonwebtoken')

const postHandler = async (ctx, next) => {
    console.log('postHandler')
    const results = await user.verifyUser(ctx.request.body.username)
    console.log(results[0].username)

    if (results[0]){
        const match = await bcrypt.compare(ctx.request.body.password, results[0].password)
        console.log(match)
        if(match) {
            const {username}  = results[0]
            console.log('match!!!!!!!!!!!!', {username})
            await jwt.sign({username}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
                if(err) {
                    console.error(err)
                } else {
                    ctx.body = {
                        token
                    }
                    
                    console.log(ctx.body)
                    console.log('the response status is ', ctx.status);
                    
                }
            })
        }
    }
    ctx.redirect('/')

    await next()
}

module.exports = {
    postHandler
}