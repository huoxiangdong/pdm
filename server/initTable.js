require('babel-core/register');
require('babel-polyfill');
const models = require('./models')
// 建表
models.sequelize.sync().then(res => console.log(res));