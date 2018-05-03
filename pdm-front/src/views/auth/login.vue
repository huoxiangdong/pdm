<template lang="pug">
  div  
    el-card(class="box-card") 
      // 登录                           
      el-form(:model="formLogin" :rules="rules" ref="formLogin")
        // $refs 只在组件渲染完成后才填充，并且它是非响应式的。它仅仅作为一个直接访问子组件的应急方案——应当避免在模版或计算属性中使用 $refs 。
        el-form-item(label="账号" prop="name")
          el-input(v-model="formLogin.name" placeholder="请输入用户名" prefix-icon="iconfont icon-dengluzhanghao" size="medium")
      
        el-form-item(label="密码" prop="password" )
          el-input(type="password"  v-model="formLogin.password" placeholder="请输入密码" prefix-icon="iconfont icon-mima" size="medium" @keyup.enter.native="login")
        // 站位
        el-form-item  
        el-form-item
          el-button(type="success" size="medium" @click="login") 登录
        // 站位
        el-form-item  
        // 路由跳转到注册页 
        el-form-item  
          router-link(to="/auth/register") 
            el-button(plain size="small" class="register") 没有账号，立即注册
              i(class="el-icon-arrow-right el-icon--right")
</template>

<script type="text/javascript">
  //import farLogo from './far-logo'
  // 引入vuex /src/helper.js中的辅助函数，
  // 将actions中的方法直接转为组件中的方法
  import { mapActions } from 'vuex'

  export default {
    data() {
      let checkUserName = (rule, value, cb) => {
        if (!value) {
          return cb(new Error('账户不能为空!'))
        } else {
          cb() // 将判断传递给后面
        }
      } // 判断账号
      let checkPassword = (rule, value, cb) => {
        if (!value) {
          return cb(new Error('密码不能为空!'))
        } else {
          cb()
        }
      } // 判断密码
      /* let checkPasswordAgain = (rule, value, cb) => {
        if (!value) {
          return cb(new Error('再次输入密码不能为空!'))
        } else if (value !== this.formLogin.password) {
          return cb(new Error('两次输入密码不一致!'))
        } else {
          cb()
        }
      } */
      return {
        /* 表单数据初始化 */
        formLogin: {
          name: '',
          password: '',
          //checkPassword: ''
        },
        rules: {
          name: [{
            validator: checkUserName, // 验证方式
            trigger: 'blur' // 失去焦点触发
          }],
          password: [{
            validator: checkPassword,
            trigger: 'blur'
          }]
          /* checkPassword: [{
            validator: checkPasswordAgain,
            trigger: 'blur'
          }] */
        }
      }
    },
    methods: {
      ...mapActions(['userLogin']),
      // 向登录接口发起请求
      login() {
        let user = this.formLogin
        let formData = {
          name: user.name,
          password: user.password
        }
        // 表单验证
        this.$refs['formLogin'].validate((valid) => {
          if (valid) {
            // 通过验证之后才请求登录接口
            // 表单验证通过--> config:user.login --> /api/login
            this.$rest.submit.login(formData).then(res => {
                if (res.success) {
                  //console.log(res.data)
                  this.userLogin(res.data) // store 本地存储token
                  this.$message.success(res.message)
                  // 登录成功 跳转至首页
                  this.$router.push('/')
                } else {
                  this.$message.error(res.message)
                  return false
                }
              })
              .catch(err => {
                console.log(err)
                this.$message.error(`本地没有token!`, 'ERROR!')
              })
          } else {
            this.$message.error('请输入账号、密码!')
            return false
          }
        })

      },

      // 表单重置
      resetForm() {
        this.$refs['formLogin'].resetFields()
      }
    },
   /*  components: {
      farLogo
    } */
  }
  
</script>

/* 必须设置scoped，负责设置的样式污染全局 */
<style lang="stylus" scoped>
.el-card 
  margin: 0 auto
  /* margin-top: 3%; */
  width: 300px

/* 登录按钮 */
.el-button--medium, .el-button--medium.is-round 
  width:100%

.register
   display: block
   margin: 0 auto

</style>

