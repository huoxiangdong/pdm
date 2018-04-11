<template lang='pug'>
 // -
   :columns-schema="columnsSchema"
  :header-cell-style="headerStyle"
      :cell-style="cellStyle"
 egrid(
      ref='egrid'
      fit
      border
      :resizable="false"
     
      
      :data='data'
      :columns="columns"
      :columns-handler="columnsHandler"
      :span-method="objectSpanMethod"
  
      )
</template>

<script>
import Data from "./data";
export default {
  data() {
    return {
      data: Data.data,
      columns: Data.columns,
 
    };
  },
  
  methods: {
    // 选择条件一定要有两个条件,选中单元格,
    // 并且把要占据的单元格内容删除
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(columnIndex)

      if (columnIndex >= 1 && columnIndex < 3 && rowIndex >= 1) {
        //console.log( column,columnIndex,rowIndex)
        return [0, 0];
      } else if (columnIndex === 0 && rowIndex >= 2) {
        // 删除第2列和第3列,第2行一下所有
        return [0, 0];
      } else if (columnIndex === 0 && rowIndex === 1) {
        // 删除第1列,第三行以后
        return [100, 3];
      } else if (columnIndex >= 5 && columnIndex < 8 && rowIndex >= 1) {
        // 表格空白区域
        return [0, 0];
      } else if (columnIndex === 4 && rowIndex >= 1) {
        //console.log( column,columnIndex,rowIndex)
        return [1, 4];
      } else if (columnIndex >= 9 && columnIndex < 15 && rowIndex >= 1) {
        //
        return [0, 0];
      } else if (columnIndex === 8 && rowIndex >= 1) {
        //console.log( column,columnIndex,rowIndex)
        return [1, 7];
      }
    },
    columnsHandler(cols) {
      console.log(cols)
    }
  }
};
</script>

