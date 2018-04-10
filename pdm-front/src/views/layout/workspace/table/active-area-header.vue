<template lang="pug">
    el-menu(:default-active="activeIndex"  mode="horizontal" @select="handleSelect" background-color="#d3d7de"
    text-color="#fff")
        el-menu-item(index="1") 
            i(class="iconfont icon-shangyiye")
        el-menu-item(index="2" id="search") 
        el-menu-item(index="3") 
            i(class="iconfont icon-xiayiye") 
        el-menu-item(index="4") 
            i(class="iconfont icon-tihuantupian")
            i  替换数据
        el-menu-item(index="6" style="float: right") 
            i(class="iconfont icon-gantanhao")

</template>

<script>
export default {
    data() {
        return {
           activeIndex: '1',
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>

<style>

</style>
