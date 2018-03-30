
// 数据库初始化

// 创建数据库
import fs from 'fs'
import path from 'path'
import curd from './curd'

const sqlfile = 'material.sql'
//const sqlfile = 'user.sql'
//const sqlfile = 'timezone_leaps.sql'
//const sqlfile = 'timezone_leaps.sql'
// 获取sql创建表配置
const sql = path.join(__dirname, sqlfile)
// 读取 user.sql
fs.readFile(sql,'utf8',(err,data) => {
    if(err) throw err
    curd.query(data)
    console.log(data)
     
})