import jwt from 'jsonwebtoken'
// 检查token
module.exports = (ctx, next) => {
  if (ctx.request.headers['authorization']) {
    let token = ctx.request.headers['authorization'].split(' ')[1] // split按空格分割成数组
    let decoded = jwt.decode(token) // 解码
    //console.log(decoded)
    if(token && decoded.exp <= Date.now() / 1000) { // 检查token 是否过期，decoded.exp为创建时时间 ➕ 增加设置的过期时间
       ctx.response.status = 401 // 返回状态码
       ctx.token = { success: false, token: false, message: '登录超时，请重新登录' }}
    else { ctx.token = { success: true, token: true } }
  }
  next()
}
