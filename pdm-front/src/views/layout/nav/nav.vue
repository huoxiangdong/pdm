<template lang="pug">
  el-menu(
    :default-active="$route.path" 
    router
    class="el-menu-demo" 
    mode="horizontal"
    @select="handleSelect")
    // 1 @click.native="isCollapse=!isCollapse" 点击事件，控制sidebar
    el-menu-item(
      :id="index"
      :index="item.index"
      v-for="(item,index) in items" 
      :key="index")
      template(slot="title") {{ item.title }}
    User
    Popover
      
</template>


<script>
import { mapState, mapActions } from "vuex";
import Data from './data'
export default {
   name: "NavMenu",
  data() {
    return {
      //activeIndex: "index" // 菜单默认活动状态
      /* items: {
         index:['index','/workspace/design','/workspace/material'],
         title:['处理中心','产品管理','物料管理']
      } */
      items: Data.items
    };
  },
  computed: {
    ...mapState(["navIndex"])
  },
  methods: {
    ...mapActions([
      "isCollapse", // sidebar激活状态
      "getNavIndex"
    ]),
    handleSelect(key, keyPath,event) {
      let id = event.$attrs['id']
      this.getNavIndex(id)
      console.log(id)
      if(id === 0) {
           this.isCollapse()
      }/* else if(id == "popover") {
        console.log(event)
        event.handleClick = function() {
          return false
        }
         //return false
      } */
    }
  }
};
</script>

<style lang="stylus" scoped>

  
</style>


