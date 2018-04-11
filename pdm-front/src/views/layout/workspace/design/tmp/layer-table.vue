<template lang='pug'>
   //-
    stripe='斑马纹'
    maxHeight="500" 表格最大高度
    column-type -> type:column-type
     :header-cell-style="headerCellStyle"
     :span-method="arraySpanMethod"
    :show-header="false" 
   div(style="margin-left:201px")
    egrid(
      fit
      border
      :data='data'
      :columns="columns"
      :columns-schema="columnsSchema"
      :column-type="columnType"
      :cell-style="cellStyle"
      :header-cell-style="headerStyle"
      )
          
</template>

  <script>

import Data from "./wAddLayer";
export default {
  data() {
    return {
      dialogVisible: false,
   headerStyle: {
        
        background: `#666666`,
        color: `#fff`,
        padding: `1px 0`,
        "font-size": "12px"
      },
      cellStyle: {
        padding: `0px 0`,
        "font-size": `13px`,
        "white-space": `nowrap`
      },
      data: Data.data,
      columns: Data.columns,
       columnsSchema: {
        '方向': { width: 123 },
        '物料': { width: 369},
        '描述': { width: 492}
      },
      // columnType: 'selection',
      columnType: 'expand',
      // columnType: ['expand', 'selection'],
    }
  
  },
  methods: {
      /* arraySpanMethod({ row, column, rowIndex, columnIndex }) {
          //wLayerTable.vueconsole.log(row)
          //console.log(column, columnIndex)
        if (rowIndex % 2 === 0) { // 选中第一行
        //console.log(row,rowIndex)
          if (columnIndex === 0) { // 选中第一列
            return [1, 2]; // 3 返回的是几个单元格
          } else if (columnIndex === 1) {
              //console.log(row, rowIndex)
            return [0, 0];
          }
        }
      }, */
    /*   headerCellStyle({row, column, rowIndex, columnIndex} ) {
         if (columnIndex === 0) {
              return "width:120px;background: #333333;color: #fff;padding: 1px 0;'font-size': 12px"
          }
         
      },
      cellStyle({row, column, rowIndex, columnIndex}) {
           if (columnIndex === 0) {
              return "width:20px"
          }
         
      } */
     /*  objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex => 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      } */
    

  }

};
</script>

  <style lang='stylus' scoped>
 /*  .el-table .cell 
    &:hover
      background-color : #fff */
  /* .el-table .cell
     white-space: nowrap
     text-overflow:clip
     padding-right:0px
     overflow:visible */
</style>
  