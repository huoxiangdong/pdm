// 加载代码
import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import {
    query,
    user,
    material
} from '../database/curd'
import createToken from '../middleware/createToken'
import checkToken from '../middleware/checkToken'


/*  (async function(){
    await  material.create({
        MaterialNumber: 3323345,
        Preset: 342342,
        MaterialClass: 42342,
        BarCode: 42342,
        MaterialName: 42342,
        BatchNumber: 342,
        Standard_1: 23,
        Standard_2: 23,
        Unit: 23,
        Quantity: 23}).then(data => console.log(data))
})()
 */

// 路由实例
const router = new Router()

// bug演示，将result置为全局变量，在返回的结果里会有缓存，任意账号皆可登录
//let result = {  // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
//    success: false,
//    message: '',
//    data: null
//}

// 注册
const register = async (ctx) => {
    let result = { // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
        success: false,
        message: '',
        data: null
    }
    let requestBody = ctx.request.body
    
    await user.findOne({
            name: requestBody.name
        }) // 判断用户是否注册
        .then(data => {
            if (data) {
                result.message = '已注册,请直接登录'
                ctx.body = result
                return false
            } else {
                let createUser = user.create({ // 创建账号
                    name: requestBody.name,
                    password: requestBody.password,
                    token: createToken(requestBody.name) // 创建token
                })
                if (createUser) {
                    result.success = true
                    result.message = '注册成功'
                    result.data = {
                        name: requestBody.name
                    }
                }
                ctx.body = result // 将result返回
            }
        }).catch(err => {
            ctx.body = err
        }) // 抛出错误
}
// 登录
const login = async (ctx) => {
    let result = { // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
        success: false,
        message: '',
        data: null
    }
    let requestBody = ctx.request.body
    await user.findOne({
            name: requestBody.name
        })
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
        }).catch(err => {
            ctx.body = err
        })
    ctx.body = result
}

// 基础物料新增
const addMaterialData = async (ctx) => {
    let result = { // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
        success: false,
        message: '',
        data: null
    }
    let requestBody = ctx.request.body
    console.log('请求结果是')
    console.log(ctx.request.body)
    /*  await material.findOne({
         MaterialNumber: requestBody.MaterialNumber
     }).then(data => {
         if (data) {
             result.message = '物料编号不可重复',
             result.success ='false' 
             ctx.body = result
             return 1
         }    
     }).catch(err => {
         //cosole.log('错误' + err)
         //result.message = err 
     }) // 抛出错误 */
    //await material.create(requestBody).then(data => console.log(data))
    let _only = await material.findOne({
        MatNumber: requestBody.MatNumber
    })
    if (_only == null) {
        await material.create(requestBody).then(data => {
            if (data.errno) {
                result.message = '保存失败',
                    result.success = 'false',
                    result.data = data
                ctx.body = result

            } else {
                result.message = '保存成功',
                    result.success = 'true',
                    result.data = data
                ctx.body = result
                console.log('only是')
                console.log(ctx.body)
            }

        })

    } else {
        result.message = '物料重复,请重新输入',
        result.success = 'false',
        ctx.body = result

    }


}
// 基础物料查询
const queryMaterialData = async (ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.query
    await material.findOne(requestBody)
        .then(val => {
            if (!val) {
                result.message = '物料不存在,请确认输入是否正确'
                ctx.body = result
            } else if (val) {
                result.success = true
                result.message = '物料查询成功'
                console.log(val)
                result.data = val
            } else { result.message = '密码错误' }
         }).catch(err => {
            ctx.body = err
    })
ctx.body = result }
// 基础物料更新
const updateMaterialData = async (ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.body
    if (requestBody) {
        await material.create(requestBody).then(data => {
            if (data.errno) {
                result.message = '更新失败',
                result.success = 'false',
                result.data = data
                ctx.body = result // mysql报错会返回
            } else {
                result.message = '更新成功',
                result.success = 'true',
                result.data = data
                ctx.body = result
            }
        })
    } else {
        result.message = '请检查填写信息是否有误',
        result.success = 'false',
        ctx.body = result
    }
}
// 首页
router.get('/', (ctx) => { ctx.body = 'nature' })
// api
router.get('/api', (ctx) => { ctx.body = "FUCK!!!!!" })
// 注册
router.post('/api/register', register)
// 登录
router.post('/api/login', login)
// token检查
router.get('/api/token', checkToken, async (ctx) => {
    ctx.body = ctx.token
})
// 基础物料新增
router.post('/api/material', addMaterialData)
// 基础物料查询
router.get('/api/material/query', queryMaterialData)
// 基础物料更新
router.post('/api/material/update',updateMaterialData)

/* router.post('/api/register', async (ctx) => {
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
}) */


/* router.post('/api/login', async (ctx) => {
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
}) */


// 导出 router
module.exports = router