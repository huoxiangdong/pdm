// 加载代码
import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import createToken from '../middleware/createToken'
import checkToken from '../middleware/checkToken'
import { newData,findOneData,updateDate,deleteDate } from '../database/curd'
import { User, Material, sequelize } from '../models'

const router = new Router()  // 路由实例

// 注册
const register =async(ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.body
        requestBody.token = createToken(requestBody.name)
    await newData(User,requestBody)
                            .then(resData => {
                            resData.created  // 插入返回 true
                                ?(result.success = true
                                 ,result.message = '注册成功'
                                 ,result.data = resData.data
                                 ,ctx.body = result)
                                :(result.message = '已注册,请直接登录'
                                 ,ctx.body = result)
                            }).catch(err => { 
                                 result.data = err
                                ,ctx.body = result })
}     
// 登录
const login = async(ctx) => {
    let result = { success: false,message: '',data: null }
    let requestBody = ctx.request.body
    await findOneData(User,requestBody)
              .then(user => {
                  if(!user) { 
                      result.message = '账号不存在'
                      ctx.body = result 
                    } else if(requestBody.password === user.password) {
                          result.success = true
                          result.message = '登录成功'
                          result.data = {
                               name: user.name,
                               token: createToken(user.name) // 登录成功，返回的token重新创建
                          }
                     }else { result.message = '密码错误' }
              }).catch(err => { ctx.body = err })
    ctx.body = result          
}
// 基础物料新增
const addMaterialData = async (ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.body
    await newData(Material,requestBody)
                                    .then(resData => {
                                        resData.created 
                                        ?(result.success = true
                                            ,result.message = '保存成功'
                                            ,result.data = resData.data
                                            ,ctx.body = result)
                                           :(result.message = '物料重复,请重新输入'
                                            ,result.success = 'false'
                                            ,result.data = data
                                            ,ctx.body = result)
                                    }).catch(err => {
                                        result.message = '保存失败'
                                        result.data = err
                                        ctx.body = result
                                    })
}
// 基础物料查询
const queryMaterialData = async (ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.query
    await findOneData(Material,requestBody).then(resData => {
        if (!resData) {
            result.message = '物料不存在,请确认输入是否正确'
            ctx.body = result
        } else if (resData) {
            result.success = true
            result.message = '物料查询成功'
            result.data = resData
            ctx.body = result
        } 
     }).catch(err => { ctx.body = err })
}
// 基础物料更新
const updateMaterialData = async(ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.body
    await updateDate(Material,requestBody).then(resData => {
        (resData[0] == 0)
        ?(result.success = false
            ,result.message = '更新失败,请检查提交的数据'
            ,result.data = resData
            ,ctx.body = result)
           :(result.success = true,
             result.message = '更新成功'
            ,ctx.body = result)
    }).catch(err => { ctx.body = err })
}
// 基础数据删除
const deleteMaterialData = async(ctx) => {
    let result = { success: false, message: '', data: null }
    let requestBody = ctx.request.query
    console.log(requestBody)
    await deleteDate(Material,requestBody).then(resData => {
        (resData == 0)
        ?(result.success = false
         ,result.message = '删除失败，请检查提交的数据'
         ,result.data = resData
         ,ctx.body = result)
        :(result.success = true,
          result.message = '删除成功'
         ,ctx.body = result)
        console.log('删除结果')
        console.log(resData)
    })
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
router.get('/api/token', checkToken, async (ctx) => { ctx.body = ctx.token })
// 基础物料新增
router.post('/api/material', addMaterialData)
// 基础物料查询
router.get('/api/material/query', queryMaterialData)
// 基础物料更新
router.post('/api/material/update', updateMaterialData)
// 基础物料删除
router.get('/api/material/delete', deleteMaterialData)
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