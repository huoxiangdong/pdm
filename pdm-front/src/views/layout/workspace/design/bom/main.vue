<template lang='pug'>
// 
 :columns-schema="columnsSchema"
    :columns-props="columnsProps"
    :columns-handler="columnsHandler"
    @selection-change="selectionChange"
    column-type="selection"
    :show-header="index==0?true:false"
el-card(:style="card_style" :body-style="cardBodyStyle" )
  div(slot="header")
    span 产品名称: APEX-XXX
    el-button(type="text" style="float: right; padding: 1px 0;" @click="dialogVisible = true")
      i(class="iconfont icon-tianjia1")
  // 弹出框    
  el-dialog(title="添加工序" append-to-body width="30%" top="30vh" :show-close="false" :visible.sync="dialogVisible")
   el-form(size="mini" label-position="left" label-width="80px" :model="formProcess" style="margin-left:50px")
    el-form-item(label="工序号")
      el-input(style="width:173px" v-model="formProcess.layer")
    el-form-item(label="工序")
      el-select(v-model="formProcess.process" placeholder="请选择")
        el-option(
         v-for="item in options"
         :key="item.value"
         :label="item.label"
         :value="item.value")
    //el-form-item(label="BOM项")
      el-input( v-model="formProcess.item")
   span(slot="footer" class="dialog-footer")
     el-button(type="plain" size="mini" @click="handleClose") 确 定
  // table
  template(v-for="(value,index) in main_row" v-bind="getIndex(value)" style="display:grid;grid-template-columns:1fr 1fr")
    egrid(
        :data="value"
        :columns="main_columns"
        border
        stripe
        size="small"
        :header-cell-style="main_headerStyle"
        :cell-style="main_cellStyle"
        :columns-props="columnsProps"
        @cell-dblclick="cell_dblclick")
    //el-button(size="mini" 
              type="danger" 
              plain 
              icon="el-icon-delete" 
              style="width:10%;padding-right: 15px;padding-left: 5px;;margin:26px 0px 1px" 
              class="delete"
              ) 
    div(style="display:grid;grid-template-columns:1fr 1fr" v-for="item in 2")
      egrid(
        style="width:140px;height:28px;justify-self: right;"
        :data="half"
        :columns="halfCol"
        :show-header="false"
        :cell-style="half_cellStyle")
      // 物料
      egrid(
        :data="material_row"
        :columns="material_columns"
        border
        stripe
        empty-text
        :columns-props="columnsProps"
        @cell-dblclick="cell_dblclick"
        size="small"
        :header-cell-style="material_headerStyle"
        :cell-style="material_cellStyle"
        :style="material_style"
        )
</template>

<script>
import cardBodyStyle from '@/views/shared/mixins/card-style.js'
import Vue from "vue";
import Data from "./data";
import Layer from "./layer";
import Editor from "@/views/shared/cell-editor";
import { mapActions } from "vuex";
export default {
  mixins: [cardBodyStyle],
  data() {
    return {
      options: [
          {
            value: "黄金糕",
            label: "黄金糕"
          },
          {
            value: "双皮奶",
            label: "双皮奶"
          },
          {
            value: "蚵仔煎",
            label: "蚵仔煎"
          },
          {
            value: "龙须面",
            label: "龙须面"
          },
          {
            value: "北京烤鸭",
            label: "北京烤鸭"
          }
        ],
      formProcess: {
        // 弹出框表单
        layer: "",
        //item: "",
        process: "",
      },
      
      dialogVisible: false,
      //Layer: Layer.data, // 层
      half: [{ tag: "APEX-XX01" }],
      halfCol: [{ label: "half", prop: "tag" }],
      half_cellStyle: {
        height: `27px`,
        background: `#FF5000`,
        color: `#fff`,
        //padding: `0px 10px`,
        border: `1px solid #ebeef5`,
        "font-size": `13px`
      },
      columnsProps: {
        // 定义表格列如何渲染
        /*  component: Vue.extend({
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
        }) */
        component: Editor
      },
      /*   columnsSchema: {
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
      },  */
      
      // data
      main_row: Data.main_row,
      main_columns: Data.main_columns,

      material_row: Layer.material_row,
      material_columns: Layer.material_columns,
      material_headerStyle: {
        background: `#737373`,
        color: `#fff`,
        padding: `1px 10px`
        //border: `1px solid #ebeef5`
      },
      material_cellStyle: {
        //background: `#f2f2f2`,
        color: "#000",
        padding: `1px 0px`
      },
      main_headerStyle: {
        //'text-align': `center`,
        background: `#666666`,
        color: `#fff`,
        padding: `1px 10px`

        //border: `1px solid #ebeef5`
      },
      main_cellStyle: {
        //background: `#e6e6e6`,
        background: `#fff`,
        padding: `1px 0`,
        color: "#000"
      }
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
    //...mapActions(['isReadOnly']),
    handleClose(e) {   // 弹出框
      console.log(this.formProcess);
      let data = Object.assign({},this.formProcess)
      this.main_row.push([this.formProcess])

      this.dialogVisible = !this.dialogVisible; // 关闭弹框
    },
    /* delCell() {
      this.main_row.unshift()
      console.log(111)
    }, */
    getIndex(index) {
      console.log(index);
    },

    cell_dblclick(row, column, cell, event) {
      // cell双击
      //this.isReadOnly()
      //event.target.hidden = true
      event.target.readOnly = !event.target.readOnly;
      console.log(this);
    },
    
  },
  beforeMount() {
    /*   [].slice.call(this.data).map(val => {
      for (let index in val) {
        //console.log(val[index].length);
      }
    }); */
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.el-card >>>
 .el-table--border th:first-child .cell, .el-table--border td:first-child .cell 
    padding-left: 0px
  .el-table .cell 
    padding-left: 0px // cell
    padding-right: 0px
  .el-table tr > td 
    padding: 0px 0px
  .el-table--enable-row-hover .el-table__body tr:hover>td 
    background-color: #ff5000;
    // box-shadow: 0 0 1px 0 rgba(45,140,240,.9);
  .delete
    display: none 
  .el-card__body > div:hover .delete
    display: inline-block;
</style>
  