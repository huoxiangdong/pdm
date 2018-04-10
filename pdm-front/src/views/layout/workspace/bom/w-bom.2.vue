<template lang='pug'>
   //-
    stripe='斑马纹'
    maxHeight="500" 表格最大高度
    column-type -> type:column-type
   div
    egrid(
      ref='egrid'
      fit
      border
      :header-cell-style="headerStyle"
      :cell-style="cellStyle"
      :data='data'
      :columns="columns"
      :columns-schema="columnsSchema"
      :span-method="objectSpanMethod"
      )
     //div(style="margin-left:252px;")
     //wLayerTable
</template>

  <script>
import Data from "./wTable/data";
import wAddLayerBtn from "./wBom/wAddLayerBtn.vue";
import wLayerTable from './wBom/wLayerTable.vue'

export default {
  data() {
    return {
      dialogVisible: false,
      headerStyle: {
        
        background: `#333333`,
        color: `#fff`,
        padding: `1px 0`,
        "font-size": "12px"
      },
      cellStyle: {
        padding: `0px 0`,
        "font-size": `13px`,
        "white-space": `nowrap`
      },
      columnsSchema: {
        '添加工序': {
          width: "auto",

          // 这里的 props 是 address
          component: wAddLayerBtn,
          listeners: {
          'add-table' () {
           // console.log(this)
          }
        }
        }
      },
      data: Data.data,
      columns: Data.columns
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex,index}) {
    
     
       if (columnIndex === 0) {       
         if (rowIndex > 0 && rowIndex <2) {
               return [30,3];
          } 
        }else if (columnIndex === 2 && columnIndex < 5) {
          //if (rowIndex === 1) {
            return [1,2]
         // }

        }
     
     
      }

  },
  beforeMount() {
    
    [].slice.call(this.data).map(val => {
      for (let index in val) {
        //console.log(val[index].length);
      }
    });
  },
  mounted() {
   // console.log(this)
  },
  components: {
    wLayerTable: wLayerTable
  }

};
</script>

  <style lang='stylus'>
 /*  .el-table .cell 
    &:hover
      background-color : #fff */
  /* .el-table .cell
     white-space: nowrap
     text-overflow:clip
     padding-right:0px
     overflow:visible */
</style>
  