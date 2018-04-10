<template lang="pug">
  el-form(ref="form" :model="sizeForm" label-width="80px" size="mini" id="el-from")
   el-form-item(label="单号" )
     el-input(v-model="sizeForm.name") hah
   el-form-item(label="活动时间" )
     el-col(:span="11")
       el-date-picker(type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 10%;")
       
   el-form-item(label="活动名称")
     el-input(v-model="sizeForm.name")
   el-form-item(label="活动区域")
     el-select(v-model="sizeForm.region" placeholder="请选择活动区域")
       el-option(label="区域一" value="shanghai")
       el-option(label="区域二" value="beijing")
  
   el-form-item(label="活动时间")
     el-col(:span="11")
       el-date-picker(type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;")
   
     el-col(class="line" :span="2") -
     el-col(:span="11")
       el-time-picker(type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;")

   el-form-item(label="活动性质")
     el-checkbox-group(v-model="sizeForm.type")
       el-checkbox-button(label="美食/餐厅线上活动" name="type")
       el-checkbox-button(label="地推活动" name="type")
       el-checkbox-button(label="线下主题活动" name="type")
    
   el-form-item(label="特殊资源")
     el-radio-group(v-model="sizeForm.resource" size="medium")
       el-radio(border label="线上品牌商赞助")
       el-radio(border label="线下场地免费")

   el-form-item(size="large")
     el-button(type="primary" @click="onSubmit") 立即创建
     el-button 取消
  
</template>

<script>
  export default {
    data() {
      return {
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
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>

<style lang="stylus">
#el-from 
  margin-top: 15px
 #el-from .el-input
   width:10%

</style>
