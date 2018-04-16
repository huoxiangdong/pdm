<template lang="pug">
  el-menu(
    index
    :style="{float: 'right'}" 
    v-popover:popover2="" id="popover")

    i(class="iconfont icon-xiaoxitongzhi" ) 
    // 标记
    el-badge(:value="1" class="item")
    // 弹出框
    el-popover(
    ref="popover2"
    placement="bottom"
    title="欢迎"
    width="200"
    trigger="hover"
    content="感谢使用")
  
</template>

<script>
export default {
  name: "Popover",
/*  mounted() {
   this.$refs['popover'].handleClick = function() { // 阻止默认事件
     return false
     } 
    delete this.$refs['popover'].parentMenu.items.index
   console.log(this.$refs['popover'])
 } */
};
</script>

<style lang="stylus" scoped>
 #popover
   padding-top: 22px
   border-right: solid 0px #e6e6e6; 
</style>
