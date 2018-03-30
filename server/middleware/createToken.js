import jwt from 'jsonwebtoken'
// 创建token
module.exports = name => { 
    return jwt.sign({ name: name }
                   ,'secret'
                   ,{ expiresIn: '12h' })
}