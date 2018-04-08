<template lang="pug">
// 给定两个元素,布尔值判断显示
// this.$set(this.row, '_edit', !this.row._edit)
el-input(
      type="text"
      readonly
      @blur="isReadOnly"
      @keyup.enter.native="isBlur"
      v-model="row[column.property]")
//span(
      v-show="!row._edit") {{ text }}
</template>

<script>
import { mapState } from 'vuex'
export default {
   props:{
       row: Object,
       column: Object,
       //readonly: Boolean
   },
 // props: ['row', 'column'], // 获取行,列的数据
  data() {
      return {
          //readonly: true
      }
  },
  computed: {
    //...mapState(['readonly']),
    /* text () {
      return this.row[this.column.prop]
    } */
  },
  methods: {
      isBlur(event) { // 回车失去焦点
        event.target.blur()
        console.log(event)
      },
      isReadOnly(event) { // 失去焦点后只读
          event.target.readOnly = true
          console.log(event.target.readOnly)
      }
 

  },
  mounted() {
    //console.log(this)
  }
}
</script>

<style lang="stylus">
.el-input__inner 
    height: 25px
    line-height: 25px
    border-radius: 0px
    //text-align:center
    padding: 0px 3px
    border: 1px solid #fff // 和cell统一颜色
</style>
