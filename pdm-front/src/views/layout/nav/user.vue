<template lang="pug">
  el-menu(
   
    index
    :style="{float: 'right'}")
      //  如果用户不存在，跳到登录
      router-link(v-show="!user.name" to="/auth/login") 登录
      // 个人中心
      el-dropdown(@command="loginOut" placement='bottom-end')
        span(v-show="user.name" v-text="user.name") 
        i(style="float: right; margin:2px 5px;" class="iconfont icon-tianjia1")
        //i(class="el-icon-caret-bottom el-icon--right")
        // 下拉菜单
        el-dropdown-menu(slot="dropdown")
          el-dropdown-item 
            | <i class="iconfont icon-dengluzhanghao"></i>
            |   个人中心
          el-dropdown-item(style="border-bottom:1px solid #eee") 
            i(class="iconfont icon-shezhi" ) 
            |   设置 
          el-dropdown-item(command="out")
            i(class="iconfont icon-tuichu") 
            |   退出登录
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "User",
  data() {
    return {
      user: { name: "" }
    }
  },
  methods: {
    ...mapActions([
      'userLoginOut'
    ]),
    loginOut(command) { // 登出
      //console.log(command)
      if(command=='out') {
      this.userLoginOut();
      this.user.name = null; // name置null
      if (!this.$store.state.token) {
        this.$router.push("/auth/login");
        this.$message.success("登出成功");
      } else { this.$message.success("登出失败"); }
      }
    }
  },
  beforeCreate() {
    // 第二次拦截 当主页刷新时，如果服务端设置的token的时效到了的话，便会提示未登录 
    
    if (this.$rest) {  // this.$rest 只读
      this.$rest.submit
        .token() // 验证 token
        .then(res => { //console.log(this.$rest)
          if (!res.success) {
            this.userLoginOut();
            this.$message.error(res.message); // Cannot set property 'type' of undefined
            this.user.name = null;
          } else {
            let username = localStorage.getItem("username");
            if (username) {
              this.user.name = username;
            }
          }
        })
        .catch(err => { this.$message.error(`${err.message}`, "ERROR!"); }); //console.log(err);
    }
    
  },
  mounted() {
   // console.log(this)
  }
}
</script>

<style lang="stylus" scoped>
.el-menu 
  padding-top: 21px
  padding-left: 15px 
  padding-right: 10px
  border-right: solid 0px #e6e6e6; 
.el-dropdown-menu
  border-radius: 0px
.el-dropdown-menu__item
  font-size: 13px
  color: #000
.iconfont
  font-size: 14px
  color: #000
</style>
