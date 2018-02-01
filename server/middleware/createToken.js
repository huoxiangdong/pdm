import jwt from 'jsonwebtoken'

// 创建token
let  createToken = name => {
    return jwt.sign({
        name: name
    }, 'secret', {
        expiresIn: '12h'
    })
}

module.exports = createToken