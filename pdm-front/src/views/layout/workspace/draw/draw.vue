<template lang="pug">
el-card(id="el-card" class="box-card")
  div(slot="header" class="clearfix")
   // wActiveAreaHeader
   //wDrawSpace
    
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus">

</style>
