<template lang="pug">
  el-card(style="margin: 10px 160px" :body-style="cardBodyStyle" )
   div(slot="header")
     span 半成品
   mat-card(
     cardStyle="margin:10px 2px"
     :inputGrid="inputGrid"
    :baseData="headerData")
   
   x-table
   //egrid(border
         ref="egrid"
         column-type="index"
         :data="data"
         :columns="columns"
         :columns-props="columnsProps"
         @cell-dblclick="cell_dblclick"
         @row-contextmenu="row_contextmenu"
         @row-click="row_click"
         style="border-radius: 4px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);"
         :header-cell-style="headerStyle"
         :cell-style="cellStyle")
</template>

<script>
import cardStyle from '@/views/packages/mixins/card-style.js'
import table from '@/views/packages/mixins/table.js'
import Data from './data'

export default {
  mixins: [cardStyle,table],
  data() {
    return {
      inputGrid: {
        display: "grid",
        "grid-template-columns": "1fr 1fr",
        "grid-row-gap": "10px",
        "grid-column-gap": "30px"
      },
      data: Data.data,
      columns: Data.columns,
      headerData:Data.header
    }
  },
  computed: {
  
  },
  methods: {
     row_click(row, event, column) {
      //  console.dir(this.data)
      //   console.dir(event.target.parentNode.parentNode.parentNode.parentNode.rowIndex)
     }
  },
  watch: {
    /* cellMenuIndex(val,newVal) {
      
      if(val === 1) {
         this.data.push(val++)
         console.log(val)
      }

    } */
  }
}
</script>

<style lang="stylus">

</style>
