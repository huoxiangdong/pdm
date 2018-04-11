<template lang='pug'>
el-card(:style="card_style" :body-style="bodyStyle")
  div(slot="header")
    span 产品名称: APEX-XXX
    el-button(type="text" style="float: right; padding: 1px 0;" @click="dialogVisible = true")
      i(class="iconfont icon-tianjia1")
</template>

<script>
export default {
  data() {
    return {
      bodyStyle: {
        margin: "0px auto",
        background: "#f2f2f2",
        "min-height": "600px"
      },

    };
  },
  computed: {
    card_style() {
      return {
        margin: "10px auto",
        width: this.main_t_width + 41 + "px" // card padding + table width
      };
    },
  }
};
</script>
<style lang="stylus" scoped>
.el-card >>> 
  .el-card__header 
    background-color: #999999
    padding: 10px 20px
</style>
  