export default {
  data: {
    '基本信息': [{
        key: 'MatNumber',
        title: '物料编号',
        value: '',
        isInput: true
      },
      {
        key: 'Preset',
        title: '预设来源类型',
        value: '',
        isInput: true
      },
      {
        key: 'MatClass',
        title: '物料种类',
        value: '',
        isInput: true
      },
      {
        key: 'BarCode',
        title: '条形码',
        value: '',
        isInput: true
      },
      {
        key: 'MatName',
        title: '物料名称',
        value: '',
        isInput: true
      },
      {
        key: 'BatNumber',
        title: '批号控制',
        value: '',
        isInput: true
      },
      {
        key: 'Standard_1',
        title: '规格1',
        value: '',
        isInput: true
      },
      {
        key: 'Standard_2',
        title: '规格2',
        value: '',
        isInput: true
      },
      {
        key: 'Unit',
        title: '库存单位',
        value: '',
        isInput: true
      },
      {
        key: 'Quantity',
        title: '库存数量小位数',
        value: '',
        isInput: true
      }
    ],
    '采购(或外协)参数': [{
        key: 'DefRecWarehouse',
        title: '默认收货仓库',
        value: '',
        isInput: true
      },
      {
        key: 'PurExcRecRate',
        title: '采购超量收货比率%',
        value: '',
        isInput: true
      },
      {
        key: 'PurUnit',
        title: '采购单位',
        value: '',
        isInput: true
      },
      {
        key: 'PurUniConRate',
        title: '采购单位转化率(库存数量=采购数量*单位转化率)',
        value: '',
        isInput: true
      },
      {
        key: 'PurNumber',
        title: '采购数量小数位',
        value: '',
        isInput: true
      }
    ],
    '状态控制': [{
        key: 'PurAllow',
        title: '允许采购',
        value: '',
        isInput: true
      },
      {
        key: 'OutAllow',
        title: '允许外协',
        value: '',
        isInput: true
      },
      {
        key: 'ProAllow',
        title: '允许生产',
        value: '',
        isInput: true
      },
      {
        key: 'ProHaiMatAllow',
        title: '允许生产发料',
        value: '',
        isInput: true
      },
      {
        key: 'WorCenPicAllow',
        title: '允许工作中心领料(计入杂费)',
        value: '',
        isInput: true
      },
      {
        key: 'SalAllow',
        title: '允许销售',
        value: '',
        isInput: true
      }
    ],
    '销售数量控制': [{
        key: 'SalQuaMinimum',
        title: '最小销售数量',
        value: '',
        isInput: true
      },
      {
        key: 'SalOrdIncrement',
        title: '销售订单增量',
        value: '',
        isInput: true
      },
      {
        key: 'SalExcShiRate',
        title: '销售超量发货比率',
        value: '',
        isInput: true
      }
    ],
    '生产相关参数': [{
        key: 'DefProStorehouse',
        title: '默认生产仓区',
        value: '',
        isInput: true
      },
      {
        key: 'ProExcMatRate',
        title: '生产超量发料比率%',
        value: '',
        isInput: true
      },
      {
        key: 'ProExcFinRate',
        title: '生产产品超量入库比率%',
        value: '',
        isInput: true
      },
      {
        key: 'ProQuaControl',
        title: '生产数量控制,最小生产数量',
        value: '',
        isInput: true
      },
      {
        key: 'ManAdvTime',
        title: '制造提前期,固定时间(天)',
        value: '',
        isInput: true
      },
      {
        key: 'DefBomLosRate',
        title: 'BOM的默认损耗率%',
        value: '',
        isInput: true
      }
    ],
    '装箱信息': [{
        key: 'PacBoxLength',
        title: '包装箱体积参数·长',
        value: '',
        isInput: true
      },
      {
        key: 'PacBoxWidth',
        title: '包装箱体积参数·宽',
        value: '',
        isInput: true
      },
      {
        key: 'PacBoxHeight',
        title: '包装箱体积参数·高',
        value: '',
        isInput: true
      },
      {
        key: 'PacBoxLenUnit',
        title: '包装箱体积参数·长度单位',
        value: '',
        isInput: true
      },
      {
        key: 'PerBoxNumber',
        title: '每箱数量',
        value: '',
        isInput: true
      },
      {
        key: 'PerBoxGross',
        title: '每箱毛重',
        value: '',
        isInput: true
      },
      {
        key: 'SinProPiece',
        title: '产品单件净重',
        value: '',
        isInput: true
      },
      {
        key: 'WeiUnit',
        title: '重量单位',
        value: '',
        isInput: true
      }
    ],
    '库存有关参数': [{
        key: 'DefPasStoArea',
        title: '默认合格品存放仓区',
        value: '',
        isInput: true
      },
      {
        key: 'DefBadStoArea',
        title: '默认坏品存放仓区',
        value: '',
        isInput: true
      },
      {
        key: 'MinInventory',
        title: '最低库存量',
        value: '',
        isInput: true
      },
      {
        key: 'MaxInventory',
        title: '最高库存量',
        value: '',
        isInput: true
      }
    ],
    '财务相关': [{
        key: 'MolGroCode',
        title: '模具组别代号',
        value: '',
        isInput: true
      },
      {
        key: 'MatFinClass',
        title: '物料的财务分类',
        value: '',
        isInput: true
      }
    ]
  },
  initData: {
    MatNumber: "",
    Preset: "",
    MatClass: "",
    BarCode: "",
    MatName: "",
    BatNumber: "",
    Standard_1: "",
    Standard_2: "",
    Unit: "",
    Quantity: "",
    DefRecWarehouse: "",
    PurExcRecRate: "",
    PurUnit: "",
    PurUniConRate: "",
    PurNumber: "",
    PurAllow: "",
    OutAllow: "",
    ProAllow: "",
    ProHaiMatAllow: "",
    WorCenPicAllow: "",
    SalAllow: "",
    SalQuaMinimum: "",
    SalOrdIncrement: "",
    SalExcShiRate: "",
    DefProStorehouse: "",
    ProExcMatRate: "",
    ProExcFinRate: "",
    ProQuaControl: "",
    ManAdvTime: "",
    DefBomLosRate: "",
    PacBoxLength: "",
    PacBoxWidth: "",
    PacBoxHeight: "",
    PacBoxLenUnit: "",
    PerBoxNumber: "",
    PerBoxGross: "",
    SinProPiece: "",
    WeiUnit: "",
    DefPasStoArea: "",
    DefBadStoArea: "",
    MinInventory: "",
    MaxInventory: "",
    MolGroCode: "",
    MatFinClass: ""
  },
}
/* 
    initInputData: {
        MaterialNumber: "",
        Preset: "",
        MaterialClass: "",
        BarCode: "",
        MaterialName: "",
        BatchNumber: "",
        Standard_1: "",
        Standard_2: "",
        Unit: "",
        Quantity: ""
      } */
