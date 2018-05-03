export default {
    data: [
        {
          // date: '2016-05-03',
          // name: '王小虎',
          // province: '上海',
          // city: '普陀区',
          // address: '上海市普陀区金沙江路 1518 弄',
          // zip: 200333
        },
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // },
        // {
        //   date: '2016-05-08',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // },
        // {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // },
        // {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   province: '上海',
        //   city: '普陀区',
        //   address: '上海市普陀区金沙江路 1518 弄',
        //   zip: 200333
        // }
      ],
      
      columns: [
        { label: '方向', prop: 'date'  },
        { label: '物料', prop: 'name'},
        { label: '描述', prop: 'province'},
        { label: '直径', prop: 'city'},
        { label: '数量', prop: 'address'},
        { label: '组数', prop: 'zip' },
        { label: '损耗率', prop: 'zip'}
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