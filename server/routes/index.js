// 加载代码
import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import { query,user } from '../database/curd'
import createToken from '../middleware/createToken'
import checkToken from '../middleware/checkToken'

// 路由实例
const router = new Router()

// bug演示，将result置为全局变量，在返回的结果里会有缓存，任意账号皆可登录
//let result = {  // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
//    success: false,
//    message: '',
//    data: null
//}


// home page
router.get('/', (ctx) => { ctx.body = 'nature'})

// api
router.get('/api', (ctx) => { ctx.body = "FUCK!!!!!" })

// 注册
router.post('/api/register', async (ctx) => {
    let result = {  // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
        success: false,
        message: '',
        data: null
    }
    let requestBody = ctx.request.body
    console.log(requestBody)
    await user.findOne({ name: requestBody.name}) // 判断用户是否注册
            .then(data => {
                if (data) {
                    result.message = '已注册,请直接登录'
                    ctx.body = result
                    return false
                }else {
                    let createUser = user.create({ // 创建账号
                        name: requestBody.name,
                        password: requestBody.password,
                        token: createToken(requestBody.name) // 创建token
                    })
                    if (createUser) {
                        result.success = true
                        result.message = '注册成功'
                        result.data = { name: requestBody.name }
                    }
                    ctx.body = result // 将result返回
                }
            }).catch(err => { ctx.body = err }) // 抛出错误
})

// 登录
router.post('/api/login', async (ctx) => {
    let result = {  // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
        success: false,
        message: '',
        data: null
    }
    let requestBody = ctx.request.body
    await user.findOne({ name: requestBody.name})
            .then(user => {
                if (!user) {
                    result.message = '账号不存在'
                    ctx.body = result
                } else if (requestBody.password === user.password) {
                    result.success = true
                    result.message = '登录成功'
                    result.data = {
                        name: user.name,
                        token: createToken(user.name)
                    }
                } else {
                    result.message = '密码错误'
                }
            }).catch(err => { ctx.body = err })
    ctx.body = result
})

// token检查
router.get('/api/token', checkToken, async (ctx) => {
    ctx.body = ctx.token
})

// 导出 router
module.exports = router