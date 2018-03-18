# 开始写喽

1. 先写服务器

### 开发依赖
- koa 
- pm2

### bug

> 服务器响应的result必须为局部初始化
```
 bug演示， 将result置为全局变量， 在返回的结果里会有缓存， 任意账号皆可登录
 let result = { // 这里必须放在方法内初始化，不能全局，否则返回的结果会有缓存
     success: false,
     message: '',
     data: null
 }
 ```
 > 对账号创建为空格的处理，对于空格的个数没有判定，如果账号为空格，任意空格就会进入系统
 ```
 修改 checkUserName 规则，添加如果输入空格判定
 value.match(/^\s+$/gi)
 ```
