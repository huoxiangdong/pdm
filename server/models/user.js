'use strict';
import moment from 'moment'
// 导出为 module
module.exports = (sequelize, DataTypes) => { // DataTypes:所有类型
  var User = sequelize.define('User', { // 表名 User
    // 主键、created_at、updated_at默认包含，不用特殊定义
     name: { 
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false, //允许为 NULL
        unique: false // 约束
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false, //允许为 NULL
        unique: false // 约束
    }, 
    token: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: false // 约束
    },
    createdAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    },  
    updatedAt: {
        type: DataTypes.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    }, 
  });

/*   User.associate = function(models) {
    models.User.hasMany(models.Task);
  }; */

  return User;
};