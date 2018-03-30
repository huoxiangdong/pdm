'use strict';
import moment from 'moment'
module.exports = (sequelize, DataTypes) => {
    var Material = sequelize.define('Material', {
        MatNumber: {
            type: DataTypes.CHAR(50),
            primaryKey: true,
            allowNull: false, //允许为 NULL
            unique: false, // 约束
            validate: {
                notEmpty: true
            }
        }, // 物料编号	  
        MatName: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 物料名称 
        MatDesc: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 物料描述
        Creator: {
            type: DataTypes.CHAR(20),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 创建者


        Version: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, //版本
        Preset: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 预设来源类型 NC
        MatClass: {
            type: DataTypes.CHAR(20),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 物料种类 NC
        MatGrp: {
            type: DataTypes.CHAR(20),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 物料细分
        BarCode: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 条形码 
        BatControl: {
            type: DataTypes.INTEGER,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 批号控制  
        Standard_1: {
            type: DataTypes.CHAR(100),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 规格1 
        Standard_2: {
            type: DataTypes.CHAR(100),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 规格2  
        Weight: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 重量
        Unit: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 库存单位
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 库存数量小位数
        DefLoc: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 默认收货仓库 NC
        PurExcRecRate: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 采购超量收货比率%
        PurUnit: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 采购单位
        PurUniConRate: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 采购单位转化率(库存数量=采购数量*单位转化率)
        Purfloat: {
            type: DataTypes.INTEGER,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 采购数量小数位
        PurAllow: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 允许采购 optionbox
        OutAllow: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 允许外协  optionbox
        ProAllow: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 允许生产 optionbox
        ProHaiMatAllow: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 允许生产发料 optionbox
        WorCenPicAllow: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 允许工作中心领料(计入杂费)optionbox
        SalAllow: {
            type: DataTypes.BOOLEAN,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 允许销售 optionbox
        SalQuaMinimum: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 最小销售数量 
        SalOrdIncrement: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 销售订单增量
        SalExcShiRate: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 销售超量发货比率
        DefProLoc: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 默认生产仓区
        ProExcMatRate: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 生产超量发料比率%
        ProExcFinRate: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 生产产品超量入库比率% 
        ProQuaControl: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 生产数量控制,最小生产数量
        ManAdvTime: {
            type: DataTypes.INTEGER,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 制造提前期,固定时间(天)
        DefBomLosRate: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // BOM的默认损耗率%
        PacBoxLength: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 包装箱体积参数·长
        PacBoxWidth: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 包装箱体积参数·宽
        PacBoxHeight: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 包装箱体积参数·高
        PacBoxLenUnit: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 包装箱体积参数·长度单位
        PerBoxNumber: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 每箱数量
        PerBoxGross: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 每箱毛重
        SinProPiece: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 产品单件净重
        WeiUnit: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 重量单位
        DefPasStoArea: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 默认合格品存放仓区
        DefBadStoArea: {
            type: DataTypes.CHAR(10),
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 默认坏品存放仓区
        MinInventory: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 最低库存量
        MaxInventory: {
            type: DataTypes.FLOAT,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 最高库存量
        MolGroCode: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 模具组别代号
        MatFinClass: {
            type: DataTypes.STRING,
            allowNull: true, //允许为 NULL
            defaultValue: null,
            unique: false // 约束
        }, // 物料的财务分类
        CreateDate: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        LastUpdate: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
    },
    {
        createdAt: 'CreateDate',
        updatedAt: 'LastUpdate',

    });
    return Material;
};