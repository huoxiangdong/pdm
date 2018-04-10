<template lang="pug">
  el-form(:inline="true" :model="formInline" size="mini" label-width="80px" id="el-from")
    el-row
      el-col(:span="6")
         el-form-item(label="单号")
          el-input(v-model="formInline.user" placeholder="单号" )
      el-col(:span="18")
         el-form-item(label="日期")
           el-date-picker(type="date" placeholder="选择日期" v-model="sizeForm.date1")
    el-row
      el-col(:span="6")
         el-form-item(label="申购人")
          el-input(v-model="formInline.user" placeholder="申购人" )
      el-col(:span="18")
         el-form-item(label="申购部门")
          el-input(v-model="formInline.user" placeholder="申购部门" )
    el-row
      el-col(:span="24")
         el-form-item(label="备注")
          el-input(v-model="formInline.user" placeholder="备注" )
  
 
    //-  el-col(class="line" :span="2") -
    //-  el-col(:span="11")
    //-  el-time-picker(type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;")


  
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="stylus">
#el-from 
  margin-top: 25px
  margin-left: 25px
 #el-from .el-input
  // width:30%

</style>
