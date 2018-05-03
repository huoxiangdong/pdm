//import mysql from 'mysql' // MYSQL 驱动
//import Sequelize from 'sequelize'

// 增
let newData = async(model,data) => {
    const key = Object.keys(model.primaryKeys).filter(key=> key !== 'id')// 主键 查询条件
    return  await model.findOrCreate({
        where: { [key]: data[key] }, // 查询条件,如果存在，返回false
        defaults: data }).spread((data, created) => {
                data = data.get({ plain: true })
                return { data,created }
             })
}
// 改
let updateDate = async(model,data) => {
    const key = Object.keys(model.primaryKeys).filter(key=> key !== 'id')
    return await model.update(data, { where: {[key]: data[key] }})
}
// 删
let deleteDate = async(model,data) => {
    console.log(data)
    return await model.destroy({ where: data })
}

// 查一条
let findOneData = async(model,data) => {

    const key = Object.keys(model.primaryKeys).filter(key=> key !== 'id')
    return  await model.findOne({ 
        where: {
            [key]: data[key]
        } 
    })
}
// mysql配置
/* let db = {
    DATABASE: 'PDM_SYS',
    //DATABASE: 'mysql',
    USERNAME: 'root',
    PASSWORD: 'root',
    PROT: '3306',
    HOST: 'localhost',
    TIMEZONE:'+08:00'
}

const sequelize = new Sequelize(db.DATABASE,db.USERNAME,db.PASSWORD, {
    host: db.HOST,
    port: db.PROT,
    dialect: 'mysql', // 语言
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: '+08:00'
}) */

// 查 sql总入口
// let query = (sql, values) => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if (err) {
//                 resolve(err)
//             } else {
//                 connection.query(sql, values, (err, results, fields) => { // fields 返回结果的一些信息
//                     if (err) {
//                         /* console.log("这个是")
//                         console.log(err) */
//                         //reject(err) 抛出错误，不会往下传送结果
                        
//                         results = err // 如果mysql报错将错误信息返回
//                        /*  console.log('query返回的结果')
//                         console.log(JSON.stringify(results)) */
//                         resolve(err)
//                     } else {
//                         console.log('响应结果')
//                         console.log(results)
//                         resolve(results)
//                     }
//                     connection.release() // 释放连接
//                 }) // 连接查询
//             }
//         }) // pool
//     }) // promise
// } // query
// 创建连接池
/* const pool = mysql.createPool({
    //connectionLimit : 10, // 连接时长
    host: db.HOST,
    user: db.USERNAME,
    password: db.PASSWORD,
    database: db.DATABASE,
    timezone: db.TIMEZONE
}) */

// 查 sql总入口
// let query = (sql, values) => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection((err, connection) => {
//             if (err) {
//                 resolve(err)
//             } else {
//                 connection.query(sql, values, (err, results, fields) => { // fields 返回结果的一些信息
//                     if (err) {
//                         /* console.log("这个是")
//                         console.log(err) */
//                         //reject(err) 抛出错误，不会往下传送结果
                        
//                         results = err // 如果mysql报错将错误信息返回
//                        /*  console.log('query返回的结果')
//                         console.log(JSON.stringify(results)) */
//                         resolve(err)
//                     } else {
//                         console.log('响应结果')
//                         console.log(results)
//                         resolve(results)
//                     }
//                     connection.release() // 释放连接
//                 }) // 连接查询
//             }
//         }) // pool
//     }) // promise
// } // query

// // 增
// let insertData = (table, values) => {
//     let _sql = 'INSERT INTO ?? SET ?'  // ? 占位符
//     return query(_sql, [table, values])
// }
// // 改
// let updateData = (table, values, id) => {
//    let _sql = 'UPDATE ?? SET ? WHERE id = ?'
//    return query(_sql, [table, values, id])
//  }

// 建表
/* let createTable = sql => {
    return query(sql,[])
} */
// 删
// let deleteDataById = (table, id) => {
//   let _sql = 'DELETE FROM ?? WHERE id = ?'
//   return query(_sql, [table, id])
// }

// let select = (table, keys) => {
//   let _sql = 'SELECT ?? FROM ?? '
//   return query(_sql, [keys, table])
// }

// let count = (table) => {
//   let _sql = 'SELECT COUNT(*) AS total_count FROM ?? '
//   return query(_sql, [table])
// }

// 改
// let updateData = (table, values, id) => {
//   let _sql = 'UPDATE ?? SET ? WHERE id = ?'
//   return query(_sql, [table, values, id])
// }
/* let createTable = sql => {
    return query(sql,[])
} */

// 通过ID查找数据
// let findDataById = (table, id) => {
//   let _sql = 'SELECT * FROM ?? WHERE id = ?'
//   return query(_sql, [table, id])
// }

// 分页查找
// let findDataByPage = (table, keys, start, end) => {
//   let _sql = 'SELECT ?? FROM ??  LIMIT ? , ?'
//   return query(_sql, [keys, table, start, end])
// }



// 账号处理
// const user = {
//     /**
//      * 创建用户
//      * @param {object} data 用户数据
//      */
//     async create(data) {
//         let result = await insertData('user', data)
//         return result
//     },
//     /**
//      * 查找用户
//      * @param {object} options 查找条件参数
//      */
//     async findOne(options) {
//         let sql = `SELECT * FROM user WHERE name="${options.name}" limit 1`
//         let result = await query(sql)
//         if (Array.isArray(result) && result.length > 0) {
//             result = result[0]
//         } else {
//             result = null
//         }
//         return result
//     }
// }
// // 物料处理
// const material = {
//     async create(data) { // 增
//         let result = await insertData('material', data)
//         /*  console.log(1111)
//          console.log(result) */
//         /* console.log('create返回的结果')
//         console.log(result) */
//         return result
//     },
//     async findOne(data) { // 查  
//         let sql = `SELECT * FROM material WHERE ${Object.keys(data)[0]} = "${data[Object.keys(data)]}" limit 1`
//         //let sql = `SELECT * FROM material WHERE ${qs.stringify(options,{ encode: false })} limit 1`
//         console.log(sql)
//         let result = await query(sql)
//         if (Array.isArray(result) && result.length > 0) {
//             result = result[0]
//         } else {
//             result = null
//         }
//         return result
//     },
//     // 更新
//     async update(data) {
//         let result = await updateData('material', data)
//         return result
//     }
// }




/* let t = newData(User,{id:'1'})
setTimeout(() => {
    console.log(t)
},1000) */

/* let sql = `SHOW KEYS FROM '${ Material }' WHERE Key_name = 'PRIMARY'`
sequelize.query(sql).spread((results, metadata) => {
    console.log(results)
  }) */
 /*  sequelize.query("SHOW KEYS FROM Materials WHERE Key_name = 'PRIMARY'", { type: sequelize.QueryTypes.SHOWCONSTRAINTS})
  .then(users => {
    console.log(users)
  }) */
// 模块导出
module.exports = { newData, findOneData,updateDate,deleteDate  }