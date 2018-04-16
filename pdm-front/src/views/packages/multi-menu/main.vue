<template lang="pug">
   el-menu(
      v-bind="menuAttrs"
       :mode="menuAttrs.mode || type==='cell'?'vertical':'horizontal'" 
       :default-active="activeIndex"  
       @select="selectHandler")
    el-menu-item(
        :type = "type"
        :index="index+1+''" 
        v-for="(value,index) in Data[type]"
        :key="value.id"
        :style="type==='cell'?'height: 26px;line-height: 25px;font-size: 13px;':''"
        :class="type==='icon'?'icon':''|| type==='table'?'table':''") 
        span(v-if="type!=='icon' && type!=='table'" v-text="value") 
        i(v-else :class="value")       
</template>

<script>
import { mapState,mapActions } from 'vuex';
import Data from './data'
const BOOLEAN_KEYS = [
  'collapse',
  'unique-opened',
  'border',
  'router',
  'collapse-transition'
]
export default {
  name:"multiMenu",
  props: {
     type: {
       type: String,
       default: 'icons'
     }
  },
  data() {
    return {
      
      activeIndex: "1", // 菜单默认激活状态
      Data: Data
    }
    
  },
  computed: {
      ...mapState(['multiMenuIndex']),
    menuAttrs () {
      // 处理 $attrs 里面 Boolean 类型的 prop 和统一 prop 命名 
      const { $attrs } = this
      const attrs = {}
      Object.keys($attrs).forEach(key => {
        const val = $attrs[key]
        const uniformKey = key.replace(/([A-Z])/, '-$1').toLowerCase() 
        attrs[key] = ~BOOLEAN_KEYS.indexOf(uniformKey) && val === '' ? true : val
      })
      return attrs
    },
  },
  methods: {
    ...mapActions(['getMultiMenuIndex']),
    selectHandler(index, keyPath) {
      this.getMultiMenuIndex(~~index)
      //console.log(this.multiMenuIndex)
    },
  }
};
</script>
 
<style lang="stylus" scoped>
.el-menu-item 
    height: 38px;
    line-height: 38px;
    color: #303133;
.icon
    border-bottom-color: transparent!important
.table
    border-bottom-color: transparent!important
    height: 26px;
    line-height: 26px;
    color: #303133;
.table > .iconfont
    font-size: 13px
</style>
