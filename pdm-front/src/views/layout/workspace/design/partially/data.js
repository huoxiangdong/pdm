export default {
    data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ],
      
      columns: [
        { label: '方向', prop: 'date',resizable:false  },
        { label: '物料', prop: 'name',resizable:false  },
        { label: '描述', prop: 'province',resizable:false  },
        { label: '直径', prop: 'city',resizable:false  },
        { label: '数量', prop: 'address','show-overflow-tooltip':true,resizable:false  },
        { label: '组数', prop: 'zip',resizable:false  },
        { label: '损耗率', prop: 'zip',resizable:false  }
      ],
      header: {
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
            key:'MatName',
            title:'创建人',
            value:'',
            isInput:true
        }]
    }
      
}