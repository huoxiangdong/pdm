// 拦截请求
import axios from 'axios'
import router from '@/router'

axios.default.timeout = 5000 //设置超时时间
axios.defaults.headers.post['Content-Type'] = 'application/json' // 设置请求头
//axios.defaults.baseURL = 'http://localhost:4000/api/v1/'; //这是调用数据接口

// http request 拦截器（所有发送的请求都要从这儿过一次），通过这个，我们就可以把token传到后台，我这里是使用localStorage来存储token等权限信息和用户信息，若要使用cookie可以自己封装一个函数并import便可使用
axios.interceptors.request.use(
  config => {
    //console.log('到这里了吗')
    // 判断localStorage是否存在token，如果存在的话，则每个http header都加上token
    console.log('当前url')
    console.log(router.currentRoute)
    const token = localStorage.getItem("token"); //获取存储在本地的token
    if (token) {
      config.headers.Authorization = `token ${ token }`.replace(/(^")|("$)/g, '') // //携带权限参数 请求添加token
    } else {
      router.replace({
        path: '/auth/login',
        query: {
          redirect: router.currentRoute.fullPath // 当前路由全路径
        }
      })
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器（所有接收到的请求都要从这儿过一次）
 axios.interceptors.response.use(
   response => {
  //if(response.config.url.match(/^\/api\/(register|login|token).*/g)) { //response.config.url.match(/^\/api\/(register|login|token).*/g)
  
    if (!response.data.token && response.data.message != '密码错误') { // 后端的checkLogin返回的json数据作为跳转依据
       router.replace({
        path: '/auth/login',
        query: {
          redirect: router.currentRoute.fullPath
        }
      }) 
    }
  //}
  return response
}, err => {
  return Promise.reject(err)
}) 

export default axios

