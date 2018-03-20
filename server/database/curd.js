import mysql from 'mysql' // MYSQL 驱动

// mysql登录配置
let db = {
    DATABASE: 'PDM_SYS',
    USERNAME: 'root',
    PASSWORD: 'root',
    PROT: '3306',
    HOST: 'localhost'
}

// 创建连接池
const pool = mysql.createPool({
    //connectionLimit : 10, // 连接时长
    host: db.HOST,
    user: db.USERNAME,
    password: db.PASSWORD,
    database: db.DATABASE
})

// 查 sql总入口
let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, values, (err, results, fields) => { // fields 返回结果的一些信息
                    if (err) {
                        /* console.log("这个是")
                        console.log(err) */
                        //reject(err) 抛出错误，不会往下传送结果
                        
                        results = err
                       /*  console.log('query返回的结果')
                        console.log(JSON.stringify(results)) */
                        resolve(err)
                    } else {
                        resolve(results)
                    }
                    connection.release() // 释放连接
                }) // 连接查询
            }
        }) // pool
    }) // promise
} // query
// 增
let insertData = (table, values) => {
    let _sql = 'INSERT INTO ?? SET ?'  // ? 占位符
    return query(_sql, [table, values])
}

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



// 账号处理
const user = {
    /**
     * 创建用户
     * @param {object} data 用户数据
     */
    async create(data) {
        let result = await insertData('user', data)
        return result
    },
    /**
     * 查找用户
     * @param {object} options 查找条件参数
     */
    async findOne(options) {
        let sql = `SELECT * FROM user WHERE name="${options.name}" limit 1`
        let result = await query(sql)
        if (Array.isArray(result) && result.length > 0) {
            result = result[0]
        } else {
            result = null
        }
        return result
    }
}
// 物料处理
const material = {
    async create(data) {
        let result = await insertData('material', data)
       /*  console.log(1111)
        console.log(result) */
        /* console.log('create返回的结果')
        console.log(result) */
        return result
    },
    async findOne(options) {
        let sql = `SELECT * FROM material WHERE MaterialNumber="${options.MaterialNumber}" limit 1`
        let result = await query(sql)
        if (Array.isArray(result) && result.length > 0) {
            result = result[0]
        } else {
            result = null
        }
        /* console.log('物料处理')
        console.log(result) */
        return result
    }
}
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

// 模块导出
module.exports = {
    query,
    user,
    material
}