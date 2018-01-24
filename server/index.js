/* import 加载代码
 * module。exports 导出代码
*/

import Koa from 'koa'; // Koa
import Router from 'koa-router' // 路由
import kstatic from 'koa-static' // 静态文件中间件
import bodyParser from 'koa-bodyparser' // 请求体解析
import cors from 'kcors' // 跨域
import path from 'path' // 路径处理
const app = new Koa() // Koa实例
      app
        .use(bodyParser()) // 配置解析
        .use(kstatic(path.join(__dirname,'static'))) // 配置静态资源加载中间件 __dirname:当前目录
        .use(cors()) // 配置跨域
 
 // 路由配置 
import routes from './routes' // 引入路由
//import index from './routes/index'
//const user = require('./routes/user')

//const router = new Router() // 路由实例

/* router  // 定义路由
      .use('',index.routes(),index.allowedMethods())
      //.use('/api',user.routes(),user.allowedMethods()) */

app  // 注册 使路由生效
   .use(routes.routes())
   .use(routes.allowedMethods())

// 错误处理
app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})

// 端口监听
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`正在监听${port}端口`)
})
