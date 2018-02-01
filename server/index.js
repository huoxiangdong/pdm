// import 加载代码
// module.exports 导出代码


import Koa from 'koa' 
import Router from 'koa-router' 
import _static from 'koa-static' // 静态文件中间件
import bodyParser from 'koa-bodyparser' // body解析
import cors from 'kcors' // 跨域
import path from 'path' // 路径处理

// Koa实例
const app = new Koa() 
// 注册中间件
      app
        .use(bodyParser()) 
        .use(_static(path.join(__dirname,'static'))) // 配置静态资源加载中间件 __dirname:当前目录
        .use(cors()) // 配置跨域
 
 // 路由配置 
import routes from './routes' // 引入路由

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
  console.log(`********服务已启动,正在监听${port}端口********`)
})
