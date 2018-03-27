<template lang='pug'>
  i(
    class="iconfont icon-tianjia"
    @click='openAddLayer()'
    ) 
</template>

<script>

import { mapActions } from 'vuex'
export default {
    data() {
        return {
            //openwAddLayer: false

        }
    },
  methods: {
      ...mapActions([
          'openAddLayer'
      ]),
    addTable() {
      //this.$emit('add-table')
      this.render()
    }
     
  },


}
</script>

<style>

</style>
