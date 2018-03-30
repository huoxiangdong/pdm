#!/usr/bin/env node
var shell = require("shelljs");
shell.exec("docker start mysql" );

//node_modules/.bin/sequelize db:create // 创建数据库
// 启动mysql脚本