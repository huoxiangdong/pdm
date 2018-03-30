# 创建material表
CREATE TABLE IF NOT EXISTS `material` (
   `id` serial,
   `MatNumber` char(50)  NOT NULL, # 物料编号	  
   `MatName` varchar(255) DEFAULT NULL,   # 物料名称 
   `MatDesc` varchar(255) DEFAULT NULL,  # 物料描述
   `Creator` char(20) DEFAULT NULL, # 创建者
   `CreateDate` TIMESTAMP DEFAULT  CURRENT_TIMESTAMP , # 创建时间
   `LastUpdate` TIMESTAMP DEFAULT  CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, # 更新时间
   `Version`  char(10)  DEFAULT NULL, #版本
   `Preset` varchar(255) DEFAULT NULL, # 预设来源类型 NC
   `MatClass` varchar(20) DEFAULT NULL,     # 物料种类 NC
   `MatGrp` varchar(20) DEFAULT NULL, # 物料细分
   `BarCode` varchar(255) DEFAULT NULL,   # 条形码 
   `BatControl` tinyint DEFAULT NULL, # 批号控制  
   `Standard_1` varchar(100) DEFAULT NULL, # 规格1 
   `Standard_2` varchar(100) DEFAULT NULL, # 规格2  
   `Weight` float DEFAULT NULL,# 重量
   `Unit` varchar(10) DEFAULT NULL, # 库存单位
   `Quantity` int DEFAULT NULL, # 库存数量小位数
   `DefLoc` varchar(255) DEFAULT NULL, # 默认收货仓库 NC
   `PurExcRecRate` float DEFAULT NULL, # 采购超量收货比率%
   `PurUnit` varchar(10) DEFAULT NULL,     # 采购单位
   `PurUniConRate` float DEFAULT NULL,  # 采购单位转化率(库存数量=采购数量*单位转化率)
   `Purfloat` int(255) DEFAULT NULL, # 采购数量小数位
   `PurAllow` tinyint DEFAULT NULL, # 允许采购 optionbox
   `OutAllow` tinyint DEFAULT NULL, # 允许外协  optionbox
   `ProAllow` tinyint  DEFAULT NULL, # 允许生产 optionbox
   `ProHaiMatAllow` tinyint DEFAULT NULL, # 允许生产发料 optionbox
   `WorCenPicAllow` tinyint  DEFAULT NULL, # 允许工作中心领料(计入杂费)optionbox
   `SalAllow` tinyint  DEFAULT NULL, # 允许销售 optionbox
   `SalQuaMinimum` float DEFAULT NULL,     # 最小销售数量 
   `SalOrdIncrement` float DEFAULT NULL,   # 销售订单增量
   `SalExcShiRate` float  DEFAULT NULL,   # 销售超量发货比率
   `DefProLoc` varchar(10) DEFAULT NULL, # 默认生产仓区
   `ProExcMatRate` float  DEFAULT NULL, # 生产超量发料比率%
   `ProExcFinRate`  float DEFAULT NULL, # 生产产品超量入库比率% 
   `ProQuaControl` float DEFAULT NULL, # 生产数量控制,最小生产数量
   `ManAdvTime` integer  DEFAULT NULL, # 制造提前期,固定时间(天)
   `DefBomLosRate` float  DEFAULT NULL, # BOM的默认损耗率%
   `PacBoxLength` float  DEFAULT NULL, # 包装箱体积参数·长
   `PacBoxWidth` float  DEFAULT NULL, # 包装箱体积参数·宽
   `PacBoxHeight` float DEFAULT NULL, # 包装箱体积参数·高
   `PacBoxLenUnit` varchar(20) DEFAULT NULL, # 包装箱体积参数·长度单位
   `PerBoxNumber` float DEFAULT NULL, # 每箱数量
   `PerBoxGross` float DEFAULT NULL, # 每箱毛重
   `SinProPiece` float DEFAULT NULL, # 产品单件净重
   `WeiUnit` varchar(10) DEFAULT NULL,     # 重量单位
   `DefPasStoArea` varchar(10) DEFAULT NULL, # 默认合格品存放仓区
   `DefBadStoArea` varchar(10) DEFAULT NULL,     # 默认坏品存放仓区
   `MinInventory` float DEFAULT NULL,   # 最低库存量
   `MaxInventory` float DEFAULT NULL,   # 最高库存量
   `MolGroCode` varchar(255) DEFAULT NULL,   # 模具组别代号
   `MatFinClass` varchar(255) DEFAULT NULL,   # 物料的财务分类
   PRIMARY KEY (`id`,`MatNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8; 
