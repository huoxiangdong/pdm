<template lang='pug'>
// 
 :columns-schema="columnsSchema"
    :columns-props="columnsProps"
    :columns-handler="columnsHandler"
    @selection-change="selectionChange"
    column-type="selection"
el-card(:style="card_style" :body-style="bodyStyle" )
  div(slot="header" class="clearfix")
    span 产品名称: APEX-XXX
    el-button(type="text" style="float: right; padding: 1px 0;" @click="dialogVisible = true")
      i(class="iconfont icon-tianjia1")
  el-dialog(
  width="30%"
  top="30vh"
  append-to-body
  :show-close='false'
  title="添加工序"
  :visible.sync="dialogVisible"
  )
   span 这是一段信息
   span(slot="footer" class="dialog-footer")
     el-button(type="plain" size="mini" @click="handleClose") 确 定

  div(v-for="(key,value,index) in Layer" v-bind="getIndex(key)")
    egrid(
        border
        :show-header="index!=0?false:true"
        size="small"
        :data="main_row"
        :columns="main_columns"
        :header-cell-style="main_headerStyle"
        :cell-style="main_cellStyle"
        :columns-props="columnsProps"
        @cell-dblclick="cell_dblclick"
        )
    egrid(
      border
      stripe
      size="small"
      :header-cell-style="material_headerStyle"
      :cell-style="material_cellStyle"
      :style="material_style"
      :data="key"
      :columns="material_columns"
      @cell-dblclick="cell_dblclick"
      )
    el-input(
      style="width:100px;border-radius:0px"
      readonly 
      size="mini") 
      
</template>

  <script>
import Vue from "vue";
import Data from "./data";
import Layer from "./layer";
//import wBtn from "./btn";
//import wLayerTable from './layer-table'

export default {
  data() {
    return {
      columnsProps: {
        // 定义表格列如何渲染
        component: Vue.extend({
          props: ["row", "column"],
          render(h) {
            return h("el-input", {
              attrs: { // 属性
                readonly: true,
                value: this.row[this.column.property],
                style: { width: '100%',height:'100%',}
              }
            });
          }
        })
      },
      dialogVisible: false,
      Layer: Layer,
      bodyStyle: {
        margin: "0px auto",
        background: "#f2f2f2",
        height: "600px"
      },
      main_columns: Data.main_columns,
      main_row: Data.main_row,
      material_columns: Data.material_columns,
      material_row: Data.material_row,
      material_headerStyle: {
        background: `#737373`,
        color: `#fff`,
        padding: `1px 0`
        //border: `1px solid #ebeef5`
      },
      material_cellStyle: {
        //background: `#f2f2f2`,
        color: "#000",
        padding: `1px 0`
      },
      main_headerStyle: {
        background: `#666666`,
        color: `#fff`,
        padding: `1px 0`

        //border: `1px solid #ebeef5`
      },
      main_cellStyle: {
        background: `#e6e6e6`,
        padding: `1px 0`,
        color: "#000"
      }

      /*  dialogVisible: false,
      headerStyle: {
        
        background: `#595959`,
        color: `#fff`,
        padding: `1px 0`,
        "font-size": "12px"
      },
      cellStyle: {
        background:`#e6e6e6`,
        padding: `0px 0`,
        "font-size": `13px`,
        "white-space": `nowrap`
      },
      columnsSchema: {
        '添加工序': {
          width: "auto",

          // 这里的 props 是 address
          //component: wAddLayerBtn,
          listeners: {
          'add-table' () {
           // console.log(this)
          }
        }
        }
      }, */
      //data: Data.data,
      //columns: Data.columns
    };
  },
  computed: {
    card_style() {
      return {
        margin: "10px auto",
        width: this.main_t_width + 41 + "px" // card padding + table width
      };
    },
    material_style() {
      return {
        float: "right",
        width: this.material_t_width + 1 + "px"
      };
    },
    main_t_width() {
      let width = 0;
      this.main_columns.map(data => {
        width += data.width;
      });
      // card padding + table width
      return width;
    },
    material_t_width() {
      let width = 0;
      this.material_columns.map(data => {
        width += data.width;
      });
      // card padding + table width
      return width;
    }
  },
  methods: {
    handleClose(e) {
      const tr = this.$el.querySelector("tbody").children;
      const rows = [].filter.call(tr, row => row);
      console.log(rows);
      this.dialogVisible = !this.dialogVisible;
      // console.log(e)
    },
    getIndex(index) {
      //console.log(index)
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "color:#000";
    },
    cell_dblclick(row, column, cell, event) {
      console.log(column)
      //console.log(row[column.property] == event.target.innerText)
     /*  column.renderCell = function(h, data) {
        console.log(data);
      }; */
      //console.log(row[column],event.target.innerText)
      /*    if (event) {
        column.renderCell = function(h, data) {

          console.log(data)
          if (data.row === row) {
            return 0;
          }else {
            console.log('ddd')
            //return  h("div", { class: "cell" }, [ _renderCell(h, data)]);  
          }
        };
      } */
    }

    /*   objectSpanMethod({ row, column, rowIndex, columnIndex,index}) {
    
     
       if (columnIndex === 0) {       
         if (rowIndex > 0 && rowIndex <2) {
               return [30,3];
          } 
        }else if (columnIndex === 2 ) {
          if (rowIndex === 1) {
            return [1,4]
          }else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }

        }
     
     
      } */
  },
  beforeMount() {

    /*   [].slice.call(this.data).map(val => {
      for (let index in val) {
        //console.log(val[index].length);
      }
    }); */
  },
  mounted() {},
  components: {
    //wLayerTable: wLayerTable
  }
};
</script>

  <style lang='stylus'>
  .el-card__header {
    background-color: #999999;
    padding: 10px 20px;
  }

  .el-button--text {
    color: #000;
  }

  .el-button--text:active {
    color: #000;
  }

  // 滚动
  .el-carousel__item.is-active {
    overflow-y: auto;
    overflow-x: hidden;
  }

  .el-input__inner {
    border-radius: 0px;
    border: 0px solid #dcdfe6;
  }
</style>
  