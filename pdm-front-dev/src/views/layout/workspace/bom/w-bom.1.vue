<template lang='pug'>
    el-table(
        :data="tableData"
        style="width: 100%" 
        :header-cell-style="headerStyle"
        :cell-style="cellStyle"
        :border='true'
         )
      el-table-column(prop="date"
        label="方位"
        width="100")
      el-table-column(prop="name"
        label="设计"
        width="150")
      el-table-column(prop="address"
        label="描述")
      el-table-column(prop="diameter"
        label="直径"
        width="100")
      el-table-column(prop="quantity"
        label="数量"
        width="100")
  </template>

  <script>
    export default {
      data() {
        return {
          headerStyle: { 
              background: `#333333`,
              color: `#fff`,
              padding: `1px 0`,
              //border: `1px solid #ebeef5`
              },
          cellStyle: {
               padding: `3px 0`,
               'font-size': `13px`
          },
          tableData: [{
            date: '10',
            name: '4CORELVBS_1',
            address: '1x70 Sq.mm PAC, PVC - GD2196 - TI1, BLACK',
            diameter: '13.6',
            quantity: '733.03000'
          }, {
            date: '20',
            name: '4CORELVBS_2',
            address: '1x70 Sq.mm PAC, PVC - GD2196 - TI1, BLACK',
            diameter: '13.6',
            quantity: '733.03000'
          }, {
            date: '30',
            name: '4CORELVBS_3',
            address: '1x70 Sq.mm PAC, PVC - GD2196 - TI1, BLACK',
            diameter: '13.6',
            quantity: '733.03000'
          }, {
            date: '100',
            name: '4CORELVBS_4',
            address: '1x70 Sq.mm PAC, PVC - GD2196 - TI1, BLACK',
            diameter: '13.6',
            quantity: '733.03000'
          }]
        }
      }
    }
  </script>