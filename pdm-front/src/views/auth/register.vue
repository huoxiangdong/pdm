<template lang="pug">
  div
    el-card.box-card
      // model 验证需要
      el-form(
        :model="formRegister" 
        :rules="rules" 
        ref="formRegister")
        // prop 传入 Form 组件的 model 中的字段
        el-form-item(label="请输入账号" prop="name")
          el-input(
            size="medium"
            v-model="formRegister.name" 
            )
        
        el-form-item(label="请输入密码" prop="password" size="medium")
          el-input(
            type="password" 
            v-model="formRegister.password")
      
        el-form-item(label="请确认密码" prop="checkPassword")
          el-input(
            type="password" 
            v-model="formRegister.checkPassword")
       
        el-form-item
        el-form-item
          el-button(type="success" size="medium" @click="addUser") 立即注册
</template>



<script type="text/javascript">
  //import farLogo from './far-logo'
  export default {
    data() {
      // 验证规则
      let checkUserName = (rule, value, cb) => {
        // 禁止账号为空格 value.match(/^\s+$/gi)
        if (!value || value.match(/^\s+$/gi)) {
          return cb(new Error("账号不能为空"))
        } else {
          cb() // 将判断传递给后面
        }
      }
      let checkPassword = (rule, value, cb) => {
        if (!value) {
          return cb(new Error('密码不能为空!'))
        } else {
          cb()
        }
      }
      let checkPasswordAgain = (rule, value, cb) => {
        if (!value) {
          return cb(new Error('再次输入密码不能为空!'))
        } else if (value !== this.formRegister.password) {
          return cb(new Error('两次输入密码不一致!'))
        } else {
          cb()
        }
      }

      return {
        formRegister: {
          name: '',
          password: '',
          checkPassword: ''
        },
        // 触发规则
        rules: {
          name: [{
            validator: checkUserName,
            trigger: 'blur'
          }],
          password: [{
            validator: checkPassword,
            trigger: 'blur'
          }],
          checkPassword: [{
            validator: checkPasswordAgain,
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      // 提交
      addUser() {
        console.log(this.formRegister)
        let user = this.formRegister
        let formData = {
          name: user.name,
          password: user.password
        }
        // 表单验证
        this.$refs['formRegister'].validate((valid) => { //this.$refs['formRegister'] 获取对象属性
          if (valid) {
            this.$rest.submit.register(formData) // 提交
              .then(res => {
                if (!res.success) {
                  this.$message.error(res.message)
                } else {
                  this.$message.success(res.message)
                  this.$router.push('/auth/login')
                }
              })
              .catch(err => {
                this.$message.error(`${err.message}`)
              })
          } else {
            this.$message.error('请输入账号、密码后再注册!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
.el-card 
  margin: 0 auto
  /* margin-top: 3%; */
  width: 300px

/* 登录字体 */
.el-form-item__label 
  font-size: 16px
  font-weight: bold
  color: #000

/* 登录按钮 */
.el-button--medium,
.el-button--medium.is-round 
  width: 100%

</style>

