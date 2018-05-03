<template lang="pug">
div(id="table" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);")
  multi-menu(type="table" )
  egrid(border
        highlight-current-row
        max-height="470"
         ref="egrid"
         :column-type="type"
         :data="tableData"
         :columns="columns"
         :columns-props="columnsProps"
         @cell-dblclick="cell_dblclick"
         @row-contextmenu="row_contextmenu"
         @row-click="row_click"  
         style="border-radius: 0px;"
         :header-cell-style="headerStyle"
         :cell-style="cellStyle")
  //el-button(@click="Exl(data)") 导出
</template>

<script>
//import cardStyle from './card-style'
//import XLSX from "xlsx";
import Editor from "./cell-editor";
import Data from "./data";
import { mapState, mapActions } from "vuex";
export default {
  name: "xTable",
  //mixins: [cardStyle],
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      type: "index",
      rowIndex: "",
      cellText: "",
      inputGrid: {
        display: "grid",
        "grid-template-columns": "1fr 1fr",
        "grid-row-gap": "10px",
        "grid-column-gap": "30px"
      },
      headerStyle: {
        // 表格头部样式
        //'text-align': `center`,
        background: "#666666",
        color: "#fff",
        padding: "1px 10px",
        "font-size": "12px"
        //border: `1px solid #fff`
      },
      cellStyle: {
        // 单元格样式
        //background: `#e6e6e6`,
        //background: `#fff`,
        padding: `1px 0`

        //color: "#000"
      },
      columnsProps: {
        // 定义表格列如何渲染
        component: Editor
        /* component: Vue.extend({ 
                  props: ["row", "column"],
                  render(h) {
                    return h("el-input", {
                      //nativeOn:{click:()=>{ console.log(this)}},
                      on: {
                        input: function (event) {
                            console.log(event)
                          //self.$emit('input', event.target.value)
                        }
                    },
                      attrs: { // 属性
                        //readonly: true,
                        value: this.row[this.column.property],
                        
                        style: {}
                      }
                    });
                  }
                }) */
      },
      //data: Data.data,
      columns: Data.columns,
      headerData: Data.header
    };
  },
  computed: {
    ...mapState(["multiMenuIndex"])
  },
  methods: {
    ...mapActions(["getMultiMenuState"]),
    row_click(row, event, column) {
      this.rowIndex = this.tableData.indexOf(row)
      //  if(event.target.nodeName === "INPUT") {   this.rowIndex = event.target.parentNode.parentNode.parentNode.parentNode.rowIndex }
      //  else if(event.target.className === "cell") { this.rowIndex = event.target.parentNode.parentNode.rowIndex }
      //  else{ this.rowIndex = event.target.parentNode.parentNode.parentNode.rowIndex }
      //console.dir(this.data.indexOf(row))
      //console.log(this.data)
    },
    cell_dblclick(row, column, cell, event) {
      console.log(this);
      // cell双击
      //this.isReadOnly()
      //event.target.hidden = true
      event.target.readOnly = !event.target.readOnly;
      console.log(event);
    },
    // cell_click(row, column, cell, event) {
    //   this.cellText = cell.childNodes[0].childNodes[0].childNodes[1];
    //   //console.dir(row)
    // },
    row_contextmenu(row, event) {
      // 选中某行
      // event.preventDefault();
      // this.rowIndex = this.data.indexOf(row); // 获取行索引
      // console.log(this.rowIndex)
      // let x = event.clientX + "px";
      // let y = event.clientY + "px";

      // this.$contextmenu({x, y},true);
    },

    // Exl(data) {
    //   var ws = {
    //     SheetNames: ["mySheet"],
    //     Sheets: {
    //       mySheet: {
    //         "!ref": "A1:E4", // 必须要有这个范围才能输出，否则导出的 excel 会是一个空表
    //         A1: { v: "id" }
    //       }
    //     }
    //   };
    //   XLSX.writeFile(ws, "output.xlsx");
    //   console.log(data);
    // }
  },
  watch: {
    multiMenuIndex(val, oldVal) {
      switch (val) {
        case 'table1': // 复制
            localStorage.setItem(
              "COPYROW",
              JSON.stringify(this.tableData[this.rowIndex])
            )
          this.getMultiMenuState(0);
          break;
        case 'table2': // 粘贴
           let cut = localStorage.getItem("CUT");
           let COPYROW = localStorage.getItem("COPYROW");
            if (cut) {
              this.tableData.splice(cut, 1);
              localStorage.removeItem("CUT");
              return false
            }else if(COPYROW != 'undefined'){
              
              this.$set(this.tableData, this.rowIndex, JSON.parse(COPYROW));
            }
          this.getMultiMenuState(0);
          break;
        case 'table3': // 剪切
          localStorage.setItem(
            "COPYROW",
            JSON.stringify(this.tableData[this.rowIndex])
          );
          localStorage.setItem("CUT", this.rowIndex);
          this.getMultiMenuState(0);
          break;
        //case 4: // 向上添加行
          //this.data.push({})
          //this.$set(this.data, this.rowIndex, {})
          //console.log(this.rowIndex)
          //this.data.splice(this.rowIndex, 0, {});
          //console.log("new: %s, old: %s", val, oldVal);
          //this.getMultiMenuState(~~0); // 置0
          //break;
        case 'table4': // 向下添加行
          //this.data.push({})
          //this.$set(this.data, this.rowIndex, {})
          //console.log(this.rowIndex)
          this.tableData.splice(this.rowIndex + 1, 0, {});
          this.getMultiMenuState(0);
          break;
        case 'table5': // 删除当前行
          this.tableData.splice(this.rowIndex, 1);
          this.getMultiMenuState(0);
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
#table >>> {
  .el-table--group, .el-table--border {
    border: 0px solid #ebeef5;
  }

  .el-table--border {
    border-left: 1px solid #fff;
    border-bottom: 0px solid #000;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #c8e1ff;
  }
}
</style>
