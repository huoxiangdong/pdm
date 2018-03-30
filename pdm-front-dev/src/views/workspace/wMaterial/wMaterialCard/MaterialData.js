import moment from 'moment'
moment.locale('zh-CN')
let username = localStorage.getItem("username")
export default {
  data: {
    '基本信息': [
      {
          key:'MatNumber',
          title:'物料编号',
          value:'',
          isInput:true
      },
      {
          key:'MatName',
          title:'物料名称',
          value:'',
          isInput:true
      },
      {
          key:'MatDesc',
          title:'物料描述',
          value:'',
          isInput:true
      },
      {
          key:'Creator',
          title:'创建者',
          value:'',
          isInput:true
      },
      {
          key:'CreateDate',
          title:'创建时间',
          value:'',
          isInput:true
      },
      {
          key:'LastUpdate',
          title:'更新时间',
          value:'',
          isInput:true
      },
      {
          key:'Version',
          title:'版本号',
          value:'',
          isInput:true
      },
      {
          key:'Preset',
          title:'预设来源类型', //下拉选项（dropdownbox)
          value:'',
          isInput:true
      },
      {
          key:'MatClass',
          title:'物料种类', //dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'MatGrp',
          title:'物料细分',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'BarCode',
          title:'条形码',
          value:'',
          isInput:true
      },

      {
          key:'BatControl',
          title:'批号控制', //optionbox
          value:'',
          isInput:true
      },
      {
          key:'Standard_1',
          title:'规格1',
          value:'',
          isInput:true
      },
      {
          key:'Standard_2',
          title:'规格2',
          value:'',
          isInput:true
      },
      {
          key:'Weight',
          title:'单位重量',
          value:'',
          isInput:true
      },
      {
          key:'Unit',
          title:'库存单位',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'Quantity',
          title:'库存数量小位数',
          value:'',
          isInput:true
      }
    ],
    '采购(或外协)参数': [
      {
          key:'DefLoc',
          title:'默认收货仓库',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'PurExcRecRate',
          title:'采购超量收货比率%',
          value:'',
          isInput:true
      },
      {
          key:'PurUnit',
          title:'采购单位',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'PurUniConRate',
          title:'采购单位转化率(库存数量=采购数量*单位转化率)',
          value:'',
          isInput:true
      },
      {
          key:'Purfloat',
          title:'采购数量小数位',
          value:'',
          isInput:true
      }
    ],
    '状态控制': [
      {
          key:'PurAllow',
          title:'允许采购',//optionbox
          value:'',
          isInput:true
      },
      {
          key:'OutAllow',
          title:'允许外协',//optionbox
          value:'',
          isInput:true
      },
      {
          key:'ProAllow',
          title:'允许生产',//optionbox
          value:'',
          isInput:true
      },
      {
          key:'ProHaiMatAllow',
          title:'允许生产发料',//optionbox
          value:'',
          isInput:true
      },
      {
          key:'WorCenPicAllow',
          title:'允许工作中心领料(计入杂费)',//optionbox
          value:'',
          isInput:true
      },
      {
          key:'SalAllow',
          title:'允许销售',//optionbox
          value:'',
          isInput:true
      }
    ],
    '销售数量控制': [
      {
          key:'SalQuaMinimum',
          title:'最小销售数量',
          value:'',
          isInput:true
      },
      {
          key:'SalOrdIncrement',
          title:'销售订单增量',
          value:'',
          isInput:true
      },
      {
          key:'SalExcShiRate',
          title:'销售超量发货比率',
          value:'',
          isInput:true
      }
    ],
    '生产相关参数': [
      {
          key:'DefProLoc',
          title:'默认生产仓区',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'ProExcMatRate',
          title:'生产超量发料比率%',
          value:'',
          isInput:true
      },
      {
          key:'ProExcFinRate',
          title:'生产产品超量入库比率%',
          value:'',
          isInput:true
      },
      {
          key:'ProQuaControl',
          title:'生产数量控制,最小生产数量',
          value:'',
          isInput:true
      },
      {
          key:'ManAdvTime',
          title:'制造提前期,固定时间(天)',
          value:'',
          isInput:true
      },
      {
          key:'DefBomLosRate',
          title:'BOM的默认损耗率%',
          value:'',
          isInput:true
      }
    ],
    '装箱信息': [
      {
          key:'PacBoxLength',
          title:'包装箱体积参数·长',
          value:'',
          isInput:true
      },
      {
          key:'PacBoxWidth',
          title:'包装箱体积参数·宽',
          value:'',
          isInput:true
      },
      {
          key:'PacBoxHeight',
          title:'包装箱体积参数·高',
          value:'',
          isInput:true
      },
      {
          key:'PacBoxLenUnit',
          title:'包装箱体积参数·长度单位',
          value:'',
          isInput:true
      },
      {
          key:'PerBoxNumber',
          title:'每箱数量',
          value:'',
          isInput:true
      },
      {
          key:'PerBoxGross',
          title:'每箱毛重',
          value:'',
          isInput:true
      },
      {
          key:'SinProPiece',
          title:'产品单件净重',
          value:'',
          isInput:true
      },
      {
          key:'WeiUnit',
          title:'重量单位',
          value:'',
          isInput:true
      }
    ],
    '库存有关参数': [
      {
          key:'DefPasStoArea',
          title:'默认合格品存放仓区',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'DefBadStoArea',
          title:'默认坏品存放仓区',//dropdownbox
          value:'',
          isInput:true
      },
      {
          key:'MinInventory',
          title:'最低库存量',
          value:'',
          isInput:true
      },
      {
          key:'MaxInventory',
          title:'最高库存量',
          value:'',
          isInput:true
      }
    ],
    '财务相关': [
      {
          key:'MolGroCode',
          title:'模具组别代号',
          value:'1',
          isInput:true
      },
      {
          key:'MatFinClass',
          title:'物料的财务分类',//dropdownbox
          value:'12',
          isInput:true
      }
    ]
  },
  initData: {
    CreateDate: moment().format('YYYY-MM-DD HH:mm:ss'), 
    Creator: username,
    LastUpdate: moment().format('YYYY-MM-DD HH:mm:ss')
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
