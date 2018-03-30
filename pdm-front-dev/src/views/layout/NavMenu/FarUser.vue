<template lang="pug">
  el-menu(
    id="user"
    index
    :style="{float: 'right'}")
      //  如果用户不存在，跳到登录
      router-link(v-show="!user.name" to="/auth/login") 登录
      // 个人中心
      el-dropdown(@command="loginOut" placement='bottom-end')
        span(v-show="user.name" v-text="user.name") 
        img(src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png")
        //i(class="el-icon-caret-bottom el-icon--right")
        // 下拉菜单
        el-dropdown-menu(slot="dropdown")
          el-dropdown-item 
            | <i class="iconfont icon-dengluzhanghao"></i>
            | 个人中心
          el-dropdown-item 
            i(class="iconfont icon-shezhi") 
            span &nbsp&nbsp设置 
          el-dropdown-item(command)
            i(class="iconfont icon-tuichu") 
            span &nbsp&nbsp退出登录
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      user: { name: "" }
    }
  },
  methods: {
    ...mapActions([
      'userLoginOut'
    ]),
    loginOut() { // 登出
      this.userLoginOut();
      this.user.name = null; // name置null
      if (!this.$store.state.token) {
        this.$router.push("/auth/login");
        this.$message.success("登出成功");
      } else { this.$message.success("登出失败"); }
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
#user 
  padding-top: 21px
  padding-left: 15px 
  padding-right: 10px
  border-right: solid 0px #e6e6e6; 
// 用户头像
.el-dropdown > span 
  position: fixed
.el-dropdown > img 
  width: 20px
  height: 20px
  margin-left: 50px
  margin-bottom: 6px;
/* .el-dropdown-menu__item
  color: #000
  font-size:10px */
</style>
