let username = localStorage.getItem("username")
export default {
     data: [{}],
     columns: [
        { label: '方向', prop: 'date'  },
        { label: '物料', prop: 'name'},
        { label: '描述', prop: 'province'},
        { label: '直径', prop: 'city'},
        { label: '数量', prop: 'address'},
        { label: '组数', prop: 'zip' },
        { label: '损耗率', prop: 'zip'}
      ],
      base: {
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
            value: username,
            width:'50%',
            isInput:true
        }]
    }
      
}