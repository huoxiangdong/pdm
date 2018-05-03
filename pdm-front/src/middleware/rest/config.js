import { Message } from 'element-ui' // 单独引入 Message(options)
import ajax from './ajax'
console.log(ajax)
// 使用 el message方法弹出错误
ajax.setTipFn((tips) => {
  Message.error(tips)
})

// axios 提交
export default {
  submit: {
    register: ajax.create('/api/register'),
    login: ajax.create('/api/login'),
    token: ajax.query('/api/token'),
    // query 为 Get方法
    addMaterialData: ajax.create('/api/material',{}), // config2
    queryMaterialData: ajax.query('/api/material/query'),
    updateMaterialData: ajax.create('/api/material/update'),
    deleteMaterialData: ajax.query('/api/material/delete')
    
  },
}