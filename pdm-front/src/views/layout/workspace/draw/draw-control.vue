<template>
<el-row>
  <el-col :span="3" >
    <el-card class="box-card" id='c-card'>
      <div slot="header" class="clearfix" >
        <span>绘图参数</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div v-for="(para,index) in paras" :key="index" class="text item">
        <el-checkbox :label=para ara> &nbsp {{ para }}</el-checkbox>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      paras: [
        "护套",
        "铠装层",
        "绕包垫层",
        "电线包布",
        "扭绞",
        "绝缘",
        "单线",
        "拉丝模",
        "显示所有层",
        "成品"
      ]
    };
  }
};
</script>

<style lang='stylus' scoped>
/* header */
#c-card .el-card__header 
    padding: 8px 20px!important

.clearfix 
  font-size: 15px;
  font-weight: bolder

.text 
  font-size: 14px


.item 
  margin-bottom: 10px


.clearfix:before,
.clearfix:after 
  display: table
  content: ""

.clearfix:after 
  clear: both


/* .box-card {
  width: 300px;
} */
</style>
