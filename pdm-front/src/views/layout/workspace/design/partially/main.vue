<template lang="pug">
  div(style="margin:30px 160px")
   x-card(
     :cardStyle="{ margin: '10px auto' }"
     :inputGrid="inputGrid"
     :baseData="baseData")
   x-table(:tableData="tableData")
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
import { mapState,mapActions } from 'vuex'
//import cardStyle from '@/views/packages/mixins/card-style.js'
//import table from '@/views/packages/mixins/table.js'
import Data from './data'

export default {
  //mixins: [cardStyle,table],
  data() {
    return {
      inputGrid: {
        display: "grid",
        "grid-template-columns": "1fr 1fr",
        "grid-row-gap": "10px",
        "grid-column-gap": "30px"
      },
      tableData: Data.data,
      //columns: Data.columns,
      baseData:Data.base
    }
  },
  computed: {
     ...mapState(['multiMenuIndex'])
  },
  methods: {
     ...mapActions(['getMultiMenuState']),
     row_click(row, event, column) {
      //  console.dir(this.data)
      //   console.dir(event.target.parentNode.parentNode.parentNode.parentNode.rowIndex)
     }
  },
  watch: {
    multiMenuIndex(val,newVal) {
      switch(val) {
        case 'work1':
       // console.log(this.$style)
       // this.getMultiMenuState(0);
      }
    // console.log(val)
    }
  }
}
</script>

<style module>
.red {
  color: red;
}
</style>
