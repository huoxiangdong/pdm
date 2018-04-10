/* api 接口 */

import Vue from 'vue'
import Rest from './plugin'
import config from './config'

// 将rest对象挂载到vue实例,即执行rest类
Vue.use(Rest)

// 导出rest实例
// 将config对象赋值给rest，然后将rest属性挂在到 Rest类上
export default new Rest({ rest: config })

