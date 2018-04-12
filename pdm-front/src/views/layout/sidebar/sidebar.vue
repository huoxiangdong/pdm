<template lang="pug">
  // collapse="!isCollapse" 控制展开收起
      default-active="1-4-1" 
  transition(name="el-zoom-in-center")    
   el-menu(
     style="margin-top: 20px; margin-left:20px"
     :default-active="$route.path" 
     router
     id="sidebar"
     :collapse="collapse" 
     @select="handleSelect") 
     el-menu-item(
      :id="index"
      :index="item.index"
      v-for="(item,index) in items" 
      :key="item.id")
        i(class="el-icon-menu")
        span(slot="title" v-text="item.title") 
</template>

<script>
import { mapState,mapActions } from 'vuex'
import Data from './titles'
export default {
  name: "SideBar",
  data() {
     return { // 静态数据
       //titles: Data.Titles
     }
  },
  computed: { // 动态的数据要放在computed内
    ...mapState(['navIndex','sideBarIndex','isCollapse']),
    collapse(){ 
      let  { isCollapse } = this
      let _isCollapse = localStorage.getItem("isCollapse") 
      return  !_isCollapse || isCollapse 
      // || this.$store.state.isCollapse 
      },
    items:function(){
      // state localStrage都要获取
      let  { navIndex:index } = this
      let navIndex = localStorage.getItem('navIndex')
      let barState = localStorage.getItem('barState')
      if (navIndex == 0) {
         if(barState == 1) { 
           return Data.design
           }else {
             return  Data.material
           }   
      }else if(navIndex == 1) {
        localStorage.setItem('barState', navIndex)
        return Data.design
      }else if(navIndex == 2) {
        localStorage.setItem('barState', navIndex)
        return  Data.material
      }
    }
  },
  methods: {
    ...mapActions(['getSideBarIndex']),
      handleSelect(index,indexPath,event) {
          let id = event.$attrs['id']
          this.getSideBarIndex(id)
          console.log(id)
          //this.$emit('setActiveItem',index)
      }
    },
    /* beforeCreate() {
       let navIndex = localStorage.getItem("navIndex")
        if(navIndex == 2) {
         this.index = Data.materialTitle
       } 
        switch (navIndex) {
        case 0:
         console.log(navIndex)
         this.items = Data.default
          break;
        case 1: 
          this.items = Data.designTitle
          break;
        case 2: 
         this.items = Data.materialTitle
          break;
      } 
    } */
}
</script>

<style lang="stylus" scoped>
// 侧边菜单
 //.el-aside
   //width:200px!important
  // margin-top: 20px
  // margin-left:20px
</style>
