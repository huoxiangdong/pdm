<template lang="pug">
  div
    // 给定两个元素,布尔值判断显示
    // this.$set(this.row, '_edit', !this.row._edit)
    input(
      type="text"
      v-show="row._edit" 
      v-model="row[column.property]")
    span(
      v-show="!row._edit") {{ text }}
</template>

<script>
export default {
  props: ['row', 'column'], // 获取行,列的数据

  computed: {
    text () {
      return this.row[this.column.property]
    }
  }
}
</script>