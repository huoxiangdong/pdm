<template lang="pug">
   el-menu(
       class="el-menu-demo"
       mode="horizontal" 
       :default-active="activeIndex"  
       @select="selectHandle"
       )
    el-menu-item(
        :index="index+1+''" 
        v-for="(icon,index) in icons"
        :key="icon.id") 
        i(:class="icon")
    //-el-menu-item(index="2" id="search") 
        IuputSearch
    //- el-menu-item(index="2") 
    //-     i(class="iconfont icon-xinzeng") 
    //- el-menu-item(index="3") 
    //-     i(class="iconfont icon-baocun-tianchong")
    //- el-menu-item(index="4") 
    //-     i(class="iconfont icon-sousuo-tianchong")   
    //- el-menu-item(index="5") 
    //-     i(class="iconfont icon-update")  
    //- el-menu-item(index="6") 
    //-     i(class="iconfont icon-shanchu")
    //- el-menu-item(index="7") 
    //-     i(class="iconfont icon-zuo")
    //- el-menu-item(index="8") 
    //-     i(class="iconfont icon-you")
    //- el-menu-item(index="9") 
    //-     i(class="iconfont icon-msnui-info")
</template>

<script>
import { mapState,mapActions } from 'vuex';
export default {
  data() {
    return {
      // 菜单默认激活状态
      activeIndex: "1",
      icons: ['iconfont icon-icok',
      'iconfont icon-xinzeng',
      'iconfont icon-baocun-tianchong',
      'iconfont icon-sousuo-tianchong',
      'iconfont icon-update',
      'iconfont icon-shanchu',
      'iconfont icon-zuo',
      'iconfont icon-you',
      'iconfont icon-msnui-info']
    }
    
  },
  computed: {
      ...mapState(['navTwoIndex']),
     /*  key: function() {
          return Array.from({length:10}).map(function(item,index){return index})
      } */
  },
  methods: {
    ...mapActions(['getNavTwoIndex']),
    selectHandle(key, keyPath) {
      this.getNavTwoIndex(~~key)
      console.log(this.navTwoIndex);
    }
  }
};
</script>
 
<style lang="stylus" scoped>
/* #search {
  padding: 0px;
} */
.el-menu--horizontal > .el-menu-item 
    float: left;
    height: 38px;
    line-height: 38px;
    margin: 0;
    border-bottom: 2px solid transparent;
    color: #909399;

</style>
