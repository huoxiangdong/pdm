// 创建数据库
import fs from 'fs'
import path from 'path'
import curd from './curd'

// 获取sql表配置
const sql = path.join(__dirname,'user.sql')
// 读取 user.sql
fs.readFile(sql,'utf8',(err,data) => {
    if(err) throw err
    curd.query(data)
    console.log(data)
     
})