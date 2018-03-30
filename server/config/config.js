module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'PDM_SYS',
    host: 'localhost',
    prot: '3306',
    dialect: 'mysql',
    timezone: '+08:00',
    dialectOptions: {
      //charset: "utf8mb4",
      //collate: "utf8mb4_unicode_ci",
      //supportBigNumbers: true,
      //bigNumberStrings: true
    },
    define: {
      //underscored: false,
      //freezeTableName: false,
      //syncOnAssociation: true,
      //charset: 'utf8',
      //collate: 'utf8_general_ci',
      //classMethods: {method1: function() {}},
      //instanceMethods: {method2: function() {}},
      //timestamps: true
    }
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'mysql'
  }
}