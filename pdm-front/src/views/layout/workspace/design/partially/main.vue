<template lang="pug">
  el-card(style="margin: 10px 160px" :body-style="cardBodyStyle" )
   div(slot="header")
     span 半成品
   mat-card(
    :style={ margin: '0px -155px' }
    :inputGrid="inputGrid"
    :baseData="headerData")
   egrid( border
          :slot-append="true"
          column-type="index"
         :data="data"
         :columns="columns"
         :columns-props="columnsProps"
         @cell-dblclick="cell_dblclick"
         :header-cell-style="headerStyle"
         :cell-style="cellStyle")
</template>

<script>
import cardStyle from '@/views/shared/mixins/card-style.js'
import table from '@/views/shared/mixins/table.js'
import Data from './data'
export default {
  mixins: [cardStyle,table],
  data() {
    return {
     /*  inputGrid: {
        display: "grid",
        "grid-template-columns": "1fr 1fr",
        "grid-row-gap": "10px",
        "grid-column-gap": "10px"
      }, */
      data: Data.data,
      columns: Data.columns,
      headerData:Data.header
    }

  }
}
</script>

<style lang="stylus">

</style>
