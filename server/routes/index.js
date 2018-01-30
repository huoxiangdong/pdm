import {
    query,
    user
} from '../database/curd'
import jwt from 'jsonwebtoken'
import Router from 'koa-router'
const router = new Router()


// 创建token
let createToken = name => {
    return jwt.sign({
        name: name
    }, 'secret', {
        expiresIn: '24h'
    })
}
// 检查token
let checkToken = (ctx,next) => {
    if (ctx,request.headers['authorization']) {
        let token = ctx.request.headers['authorization'].split(' ')
        // 结构token， 生成一个对象 { name: xx, iat: xx, exp: xx}
        let decoded = jwt.decode(token)
        // 检查 token 是否过期，decoded.exp为创建时间，增加设置过期时间
        if (token && decoded.exp <= Data.now() / 1000 ) {
            ctx.response.status = 401
            ctx.token = {
                success: false,
                token: false,
                message: '登录过期，请重新登录'
            }   
        }else {
            ctx.token = {
                success: true,
                token: true
            }
        }
    }
    next()
}
// 返回结果初始
let result = {
    success: false,
    message: '',
    data: null
}

router.get('/', (ctx, next) => {
    ctx.body = 'nature'
})

// api
router.get('/api', (ctx) => {
    ctx.body = "FUCK!!!!!"
})
// 注册
router.post('/api/register', async (ctx) => {
    
    let req = ctx.request.body
    // 判断用户是否注册
    await user.findOne({ name: req.name })
              .then(data => {
                if (data) {
                    result.message = '已注册,请直接登录'
                    ctx.body = result
                    //return false
                } else {
                    // 创建账号
                    let createUser = user.create({
                        name: req.name,
                        password: req.password,
                        // 创建token
                        token: createToken(req.name)                  
                    })
                    
                    if (createUser) {
                        result.success = true
                        result.message = '注册成功'
                        result.data = {
                            name: req.name
                        }
                    }
                    ctx.body = result // 将result返回
                }
            }).catch(err => {
                ctx.body = err
            })
}) // 注册

// 登录
router.post('/api/login',async (ctx) => {
   let req = ctx.request.body 
   await user.findOne({ name: req.name})
             .then(data => {
                 if (!data){
                     result.message = '账号不存在'
                     ctx.body = result 
                 }else if (req.password === data.password) {
                     result.success = true
                     result.message = '登录成功'
                     result.data = { name: data.name,token: createToken(data.name)}
                 }else { result.message = '密码错误'}
             }).catch(err => { ctx.body = err})
             ctx.body = result
})


// 导出 router
module.exports = router