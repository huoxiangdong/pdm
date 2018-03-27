import { Message } from 'element-ui'
import ajax from './ajax'

// 使用 el message方法弹出错误
ajax.setTipFn((tips) => {
  Message.error(tips)
})

export default {
  submit: {
    register: ajax.create('/api/register'),
    login: ajax.create('/api/login'),
    token: ajax.query('/api/token'),
    addMaterial: ajax.create('/api/material'),
    queryMaterial: ajax.create('/api/material/query'),
    
  },
}