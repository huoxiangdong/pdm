/* request helper */

import axios from 'axios'
//import qs from 'qs'
/* 创建ajax类 */
/* 类的创建
class name {
  constructor() {}
} */
class ajax {
  constructor(options) {
    this.$http = axios
    this.baseUrl = options && options.baseUrl ? options.baseUrl : '' //`baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
    this.authUrl = options && options.authUrl ? options.authUrl : ''
    this.isLogin = false
    this.queryMap = {}
    this.createMap = {}
    this.putWayMap = {}
    this.patchMap = {}
    this.deleteMap = {}
    this.logining = false // 正在登陆
    this.next = ''
    // 传入的tips ？
    this.showTips = (tips) => { // 输出提示
      if (window.console) {
        console.log(tips)
      }
    }
    
    // 通用拦截器
    if (options && typeof options.success === 'function') { // true: options传入并且 options.success是函数
     
      this.success = options.success // 挂载为 ajax.success
    } else {
      this.success = res => {} // ƒ (res) {}
     
    }
    
    // ajax 全局响应错误处理
    axios.interceptors.response.use( // axios方法
      response => {
        console.log(`ajax全局拦截响应:`)
        console.log(JSON.stringify(response,null,2))
        this.success(response) 
        return response
      },
      
      err => {
        if (err.response) {
          console.log(`ajax拦截错误响应:`)
          console.log(JSON.stringify(response,null,2))
          // 返回错误状态
          switch (err.response.status) {
            case 404:
              this.showTips('请求发生404错误')
              break
            case 500:
              this.showTips('请求发生500错误')
              break
            case 504:
              this.showTips('请求超时')
              break
            case 400: // 用户没有csrf-token
            case 401: // 用户没有登录态
              if (!this.logining) { // 只使第一次401的hash
                this.logining = true
                // 如果有锚链接
                if (window.location.hash) { 
                  // location是js里边管理地址栏的内置对象
                  // location.hash则可以用来获取或设置页面的标签值
                  // #代表网页中的一个位置 位置标识符可以为 name锚点 id 属性
                  // window.location.href表示重定向，后面跟着的是完整的url地址,得到和使用的是完整的url
                  // window.location.hash得到的是锚链接,相比如href,通过window.location.hash并不会跳转到新的链接，只会在当前链接里面
                  // encodeURIComponent 编码
                  console.log(window.location.hash)
                  this.next = encodeURIComponent(window.location.hash)
                }
              }
              // 401重定向
              //window.location.href = 'auth/login?next=' + this.next
              break
            default: // 默认处理 401错误提示
              this.showTips('error:' + err.response.status)
              break
          }
          return Promise.reject(err.response.data) // 返回接口返回的错误信息
        }
      }
    )
  }

  // 设置用展示提示信息的函数
  setTipFn(fn) {
    this.showTips = fn // 将fn传给this.showTips 即console.log(fn)
  }
  // 设置自定义的回调
  setSuccess(success) {
    this.success = success
  }
  // 格式化get请求参数 or 使用qs
  parse(path, id) {
   
    if (typeof id === 'string') {
      return path + '/' + id
    }
    if (typeof id === 'object') {
      let search = '?'
      let counter = 0
      for (let key in id) {
        if (counter) search += '&'
        search += key + '=' + id[key]
        counter++
      }
      return path + search
    }
    return path
  }

  //  增
  //  参数: path-->路径 
  create(path, config1 = { cache: false }) {
    // createMap={}

    if (!this.createMap[path]) { // cache path closure
      let url = ''
      this.createMap[path] = (data, expand, config2 = {}) => {
        
        // data是登录提交的formData
        // 合并config Object.assign合并对象到一个新的{}
        // config1:{ cache: false } config2:{}
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) { // true
          //console.log('这里有执行')
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce' // 不写入缓存
          headers['If-Modified-Since'] = '0' // 上次更新时间戳
        }
        if (expand) {
          console.log('expand是'+ expand)
          url = path + '/' + expand
        } else {
          url = path
        }
       
        let baseUrl = config.baseUrl || this.baseUrl
        console.log(`请求的数据:`)
        console.log(`url:` + baseUrl + url + `\n`, JSON.stringify(data,null,2), JSON.stringify(config,null,2))
        // @param: axios.post(url, data, config)
        return this.$http.post(baseUrl + url, data, config).then((res) => {// // 最终执行的方法
          console.log(baseUrl + url)
          console.log(`POST请求拦截响应:\n` + JSON.stringify(res.data,null,2))
          return res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.createMap[path] // 关键是这句，返回的是什么
  }
  // 删
  delete(path, config1 = {
    cache: false
  }) {
    if (!this.deleteMap[path]) {
      let url = ''
      this.deleteMap[path] = (data, expand, config2 = {}) => { 
        // config2 自定义axios配置
        let config = Object.assign({}, config1, config2) // 合并config
        if (!config.cache) {  // 关闭缓存
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        if (expand) {
          url = path + '/' + expand
        } else {
          url = path
        }
        let baseUrl = config.baseUrl || this.baseUrl
        return this.$http.delete(baseUrl + url, data, config).then((res) => {// 最终执行的方法
          return res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.deleteMap[path]
  }

  // 查
  query(path, config1 = { cache: false } ) {
    if (!this.queryMap[path]) { // cache path closure queryMap内不存在path
      let url = ''
      this.queryMap[path] = (id, expand, config2 = {}) => {
        let config = Object.assign({}, config1, config2) // 合并config
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce' // 加入头部信息
          // If-Modified-Since是标准的HTTP请求头标签，在发送HTTP请求时，把浏览器端缓存页面的最后修改时间一起发到服务器去，服务器会把这个时间与服务器上实际文件的最后修改时间进行比较。
          //如果时间一致，那么返回HTTP状态码304（不返回文件内容），客户端接到之后，就直接把本地缓存文件显示到浏览器中。
          //如果时间不一致，就返回HTTP状态码200和新的文件内容，客户端接到之后，会丢弃旧文件，把新文件缓存起来，并显示到浏览器中
          headers['If-Modified-Since'] = '0'
        }
        if (expand) {
          url = path + '/' + expand
        } else {
          url = path
        }
        let newPath = url
        if (id) {
          newPath = this.parse(url, id)
        }
        let baseUrl = config.baseUrl || this.baseUrl
        console.log(baseUrl + newPath, config)
        // 执行
        return this.$http.get(baseUrl + newPath, config).then((res) => {
          
          return res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.queryMap[path]
  }




  // put 方法~
  putWay(path, config1 = {
    cache: false
  }) {
    if (!this.putWayMap[path]) { // cache path closure
      let url = ''
      this.putWayMap[path] = (data, expand, config2 = {}) => {
        // 合并config
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        if (expand) {
          url = path + '/' + expand
        } else {
          url = path
        }
        let baseUrl = config.baseUrl || this.baseUrl
        return this.$http.put(baseUrl + url, data, config).then((res) => {
          return res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.putWayMap[path]
  }

  // patch 方法~
  patch(path, config1 = {
    cache: false
  }) {
    if (!this.patchMap[path]) { // cache path closure
      let url = ''
      this.patchMap[path] = (data, expand, config2 = {}) => {
        // 合并config
        let config = Object.assign({}, config1, config2)
        // 关闭缓存
        if (!config.cache) {
          let headers = config.headers = config.headers || {}
          headers['Cache-Control'] = 'no-cahce'
          headers['If-Modified-Since'] = '0'
        }
        if (expand) {
          url = path + '/' + expand
        } else {
          url = path
        }
        let baseUrl = config.baseUrl || this.baseUrl
        return this.$http.patch(baseUrl + url, data, config).then((res) => {
          return res.data
        }, (res) => {
          return res
        })
      }
    }
    return this.patchMap[path]
  }

}

// 导出ajax实例
export default new ajax()


