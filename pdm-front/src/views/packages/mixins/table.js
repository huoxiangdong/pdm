
// import Vue from 'vue'
// const h = Vue.$createElement;
import Editor from "../table/cell-editor";
export default {
    data() {
        return {
            headerStyle: { // 表格头部样式
                //'text-align': `center`,
                background: "#666666",
                color: "#fff",
                padding: "1px 10px",
                'font-size':'12px'
                //border: `1px solid #ebeef5`
              },
              cellStyle: { // 单元格样式
                //background: `#e6e6e6`,
                //background: `#fff`,
                padding: `1px 0`,
                
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
        }
    },
    methods:{
        cell_dblclick(row, column, cell, event) { // cell双击
            //this.isReadOnly()
            //event.target.hidden = true
            event.target.readOnly = !event.target.readOnly;
            //console.log(this);
          },
          row_contextmenu(row,event) { // 选中某行
            event.preventDefault() 
            let x = event.clientX + 'px'
            let y = event.clientY + 'px'
            
            this.$contextmenu({ x,y })
            
          }
    }
}