<template>
  <egrid border
    max-height="500"
    :data="data"
    :columns="columns"
    :columns-schema="columnsSchema"
    :columns-props="columnsProps"
    :columns-handler="columnsHandler"
    @selection-change="selectionChange">
  </egrid>
</template>

<script>
import Vue from 'vue'
import Data from './data'
import Btn from './cell-btn.vue'
import Editor from './cell-editor.vue'

export default {
  data () {
    return {
      data: Data.data,
       //data: '',
      columns: Data.columns,
      // columnsProps 用于定义 columns 公共的属性
      columnsProps: {
        width: 120,
        sortable: true,
        // 定义表格列如何渲染
        component: Editor
      },

      // columnsSchema 可以用来单独定义 columns 的某一列，这里的设置会覆盖 columnsProps 的配置属性
      columnsSchema: {
        '地址': {
          width: 'auto',
          // propsHandler 可用于转换传给自定义组件的 props 这里将 props 变成了 address
          propsHandler ({ col, row }) {
            return { address: row[col.prop] }
          },
          // 这里的 props 是 address
          component: Vue.extend({
            props: ['address'],
            render (h) {
              return h('span', {
                style: { color: '#20A0FF' }
              }, this.address)
            }
          })
        }
      }
    }
  },

  methods: {
    // columnsHandler 可用于在现有的 columns 进行操作，对 columns 进行增删改，这里新增了操作列
    columnsHandler (cols) {
      return cols.concat({
        label: '操作',
        align: 'left',
        component: Btn,
        // listeners 可用于监听自定义组件内部 $emit 出的事件
        listeners: {
          'row-edit' (row) {
            console.log('row-edit', row)
          }
        }
      })
    },

    selectionChange (rows) {
      console.log('selected', rows)
    }
  }
}
</script>