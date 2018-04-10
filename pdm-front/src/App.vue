<template lang="pug">
  // class="flex flex-column over-hide" 固定
  div(id="app"   ) 
    router-view(子路由插入)
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style lang="stylus">
//@import './assets/stylus'
@import './assets/base.styl'

</style>
