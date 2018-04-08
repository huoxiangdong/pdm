<template lang="pug">
  el-menu(
      id="man-nav"
      :default-active="activeIndex" 
      mode="horizontal" 
      @select="handleSelect" 
      background-color="#282C35"
      text-color="#fff"
      active-text-color="#ffd04b")
   el-menu-item(index="1") 供应商
   el-menu-item(index="2") 编辑
   el-menu-item(index="3") 转到
   el-menu-item(index="4") 附加
   el-menu-item(index="5") 环境
   el-menu-item(index="6") 系统
   el-menu-item(index="7") 帮助
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus">
#man-nav .el-menu-item {
    height: 35px;
    line-height: 35px;
}
</style>
