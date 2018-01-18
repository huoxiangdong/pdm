/* require 加载代码
 * module。exports 导出代码
*/

// Koa
const Koa = require('koa')
// 路由
const Router = require('koa-router')
// 静态文件中间件
const static = require('koa-static')
// bodyparser
const bodyParser = require('koa-bodyparser')
// cors
const cors = require('kcors')
// 路径处理
const path = require('path')

// Koa实例
const app = new Koa()

// 配置解析
app.use(bodyParse())

// 配置静态资源加载中间件
app.use(static(path.join(__dirname,'static')))

// 配置跨域
app.use(cors())

/* 
 *     ***** ——路由配置—— *****
*/
// 引入路由
const index = require('./routes/index')
const api = require('./routes/api')
// 路由实例
const router = new Router()
// 定义路由
router.use('/',index.routes(),index.allowedMethods())
router.use('api',api.routes(),api.allowedMethods())
// 使路由生效
app.use(router.routes())

// 错误处理
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
})

// 端口监听
const port = process.enc.PORT || 3000

app.listen(port, () => {
  console.log(`正在监听${port}端口`)
})
