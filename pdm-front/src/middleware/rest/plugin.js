/* api接口 以插件形式存在 */
export default class Rest {
    static install () {} // 类的静态方法 install()
    constructor (options = {}) {
      // 对象合并到 new Rest{}
      Object.assign(this, options.rest) // { rest: config } -> options.rest -> config{} -> submit{} -> this.submit
    }
  }
  
  // 全局混入将this.$options.rest -> this.rest
  function install (Vue) {
    //console.log(Vue)
    if (install.installed) return // 添加状态判断,如果true表示已安装，直接返回
    install.installed = true
    // 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例
    Vue.mixin({ // 注入组件
      beforeCreate () {
       // 将$rest挂在到vue实例
       //console.log(this.$options)
        const options = this.$options // 当前 Vue 实例的初始化选项
         if (options.rest) {
          this.$rest = options.rest
        } else if (options.parent && options.parent.$rest) {
          this.$rest = options.parent.$rest
        } 
      }
    })
  }
  
  // Rest.instal = install
  // Vue.use的时候，会执行 Rest.install
  Rest.install = function (Vue) {
    //console.log(Vue)
    if (install.installed) return // 添加状态判断,如果true表示已安装，直接返回
    install.installed = true
    // 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例
    Vue.mixin({ // 注入组件
      beforeCreate () {
       // 将$rest挂在到vue实例
       //console.log(this.$options)
        const options = this.$options // 当前 Vue 实例的初始化选项
         if (options.rest) {
          this.$rest = options.rest
        } else if (options.parent && options.parent.$rest) {
          this.$rest = options.parent.$rest
        } 
      }
    })
  }
  
  Rest.version = '__VERSION__'


  