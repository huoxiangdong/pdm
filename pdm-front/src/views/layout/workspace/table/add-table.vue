<template lang='pug'>
  i(
    class="iconfont icon-tianjia"
    @click='addTable'
    ) 
</template>

<script>
import wNavOne from '../wNavMenu/wNavOne.vue'
export default {
  methods: {
    addTable() {
      //this.$emit('add-table')
      this.render()
    },
    render (h) {
              //return h('span',wNavOne )
              console.log(h)
            }
     
  },
  components:{ wNavOne }

}
</script>

<style>

</style>
