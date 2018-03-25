# 创建material表
CREATE TABLE IF NOT EXISTS `material` (
  `MatNumber` int(11) NOT NULL AUTO_INCREMENT, # 物料编号
  `Preset` varchar(255) DEFAULT NULL, # 预设来源类型
  `MatClass` int(11) DEFAULT NULL,     # 物料种类 
  `BarCode` varchar(255) DEFAULT NULL,   # 条形码 
  `MatName` varchar(255) DEFAULT NULL,   # 物料名称 
  `BatNumber` int(11) DEFAULT NULL, # 批号控制 
  `Standard_1` int(11) DEFAULT NULL, # 规格1 
  `Standard_2` int(11) DEFAULT NULL, # 规格2  
  `Unit` varchar(255) DEFAULT NULL, # 库存单位
  `Quantity` int(11) DEFAULT NULL, # 库存数量小位数
  `DefRecWarehouse` varchar(255) DEFAULT NULL, # 默认收货仓库
  `PurExcRecRate` varchar(255) DEFAULT NULL, # 采购超量收货比率%
  `PurUnit` varchar(255) DEFAULT NULL,     # 采购单位
  `PurUniConRate` varchar(255) DEFAULT NULL,  # 采购单位转化率(库存数量=采购数量*单位转化率)
  `PurNumber` varchar(255) DEFAULT NULL, # 采购数量小数位
  `PurAllow` varchar(255) DEFAULT NULL, # 允许采购
  `OutAllow` varchar(255) DEFAULT NULL, # 允许外协  
  `ProAllow` varchar(255) DEFAULT NULL, # 允许生产
  `ProHaiMatAllow` varchar(255) DEFAULT NULL, # 允许生产发料
  `WorCenPicAllow` varchar(255) DEFAULT NULL, # 允许工作中心领料(计入杂费)
  `SalAllow` varchar(255) DEFAULT NULL, # 允许销售
  `SalQuaMinimum` varchar(255) DEFAULT NULL,     # 最小销售数量 
  `SalOrdIncrement` varchar(255) DEFAULT NULL,   # 销售订单增量
  `SalExcShiRate` varchar(255) DEFAULT NULL,   # 销售超量发货比率
  `DefProStorehouse` varchar(255) DEFAULT NULL, # 默认生产仓区
  `ProExcMatRate` varchar(255) DEFAULT NULL, # 生产超量发料比率%
  `ProExcFinRate` varchar(255) DEFAULT NULL, # 生产产品超量入库比率% 
  `ProQuaControl` varchar(255) DEFAULT NULL, # 生产数量控制,最小生产数量
  `ManAdvTime` varchar(255) DEFAULT NULL, # 制造提前期,固定时间(天)
  `DefBomLosRate` varchar(255) DEFAULT NULL, # BOM的默认损耗率%
  `PacBoxLength` varchar(255) DEFAULT NULL, # 包装箱体积参数·长
  `PacBoxWidth` varchar(255) DEFAULT NULL, # 包装箱体积参数·宽
  `PacBoxHeight` varchar(255) DEFAULT NULL, # 包装箱体积参数·高
  `PacBoxLenUnit` varchar(255) DEFAULT NULL, # 包装箱体积参数·长度单位
  `PerBoxNumber` varchar(255) DEFAULT NULL, # 每箱数量
  `PerBoxGross` varchar(255) DEFAULT NULL, # 每箱毛重
  `SinProPiece` varchar(255) DEFAULT NULL, # 产品单件净重
  `WeiUnit` varchar(255) DEFAULT NULL,     # 重量单位
  `DefPasStoArea` varchar(255) DEFAULT NULL, # 默认合格品存放仓区
  `DefBadStoArea` varchar(255) DEFAULT NULL,     # 默认坏品存放仓区
  `MinInventory` varchar(255) DEFAULT NULL,   # 最低库存量
  `MaxInventory` varchar(255) DEFAULT NULL,   # 最高库存量
  `MolGroCode` varchar(255) DEFAULT NULL,   # 模具组别代号
  `MatFinClass` varchar(255) DEFAULT NULL,   # 物料的财务分类
  PRIMARY KEY (`MatNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
