<template lang="pug">   
  // tabindex="0"
  el-carousel(
    height='720px!important'
    indicator-position="outside" 
    arrow="never" 
    :autoplay="false"
    ref='carousel'
    )
    el-carousel-item
       router-view
      
    //el-carousel-item
      table
    //el-carousel-item
      wMainBomTable
      
    //el-carousel-item(name='draw')
      wBomTable
    //el-carousel-item
      wBom
      
    //el-carousel-item
      wFrom
    //el-carousel-item
      wNavMenu
      wActiveArea
    //el-carousel-item
      wNavMenu
      wDraw
    //el-carousel-item
      //wNavMenu
      wDrawControl
    
</template>

<script>
/* import egridUse from '../workspace/wTable/w-egridUse.vue'
import wAddLayer from '../workspace/wBom/w-addLayer.vue' */

export default {
  data() {
    return {}
  },
methods: {
    /* setActiveItem(index) {
        console.log(this.$refs)
        this.$refs.carousel.setActiveItem(index);
        //this.$refs.carousel.next()
      } */
 }, 
  /* components: {
    egridUse: egridUse,
    wAddLayer: wAddLayer
  } */
}
</script>

<style lang="stylus">
 // 走马灯 
  /*  .el-carousel__item h3 
     color: #475669
     font-size: 18px
     opacity: 0.75
     line-height: 300px
     margin: 0 */
// 卡片背景颜色
.el-carousel__item:nth-child(2n) 
    background-color: #fff
    
.el-carousel__item:nth-child(2n+1) 
    background-color:#fff 


// 工作去卡片多的话使其滚动
.el-carousel__item.is-active 
  overflow-y: auto
  overflow-x: hidden
</style>
