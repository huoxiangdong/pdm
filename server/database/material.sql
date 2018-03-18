# 创建material表
CREATE TABLE IF NOT EXISTS `material` (
  `MaterialNumber` int(11) NOT NULL AUTO_INCREMENT, # 物料编号
  `Preset` varchar(255) DEFAULT NULL, # 预设来源类型
  `MaterialClass` int(11) DEFAULT NULL,     # 物料种类 
  `BarCode` varchar(255) DEFAULT NULL,   # 条形码 
  `MaterialName` varchar(255) DEFAULT NULL,   # 物料名称 
  `BatchNumber` int(11) DEFAULT NULL, # 批号控制 
  `Standard_1` int(11) DEFAULT NULL, # 规格1 
  `Standard_2` int(11) DEFAULT NULL, # 规格2  
  `Unit` varchar(255) DEFAULT NULL, # 库存单位
  `Quantity` int(11) DEFAULT NULL, # 库存数量小位数
  PRIMARY KEY (`MaterialNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
