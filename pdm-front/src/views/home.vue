<template lang="pug">
  // 布局:
                                          -----  el-header
                                          -- --  el-aside  el-main
                                          -----  el-footer
 
  el-container
    el-header
      NavMenu(菜单)
    // 中
    el-container
      el-aside(style="width:auto;transition: width 0s;")
        side-bar
        //side-bar(v-on:setActiveItem="setActiveItem")
      el-main
        multi-menu(type="icon" )
        //el-tag(type="success" size="small" closable) 中等标签
        router-view
        
        //WorkSpace(ref="carousel")
    // 底
    //el-footer
      AppFooter
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      }
      //user: { name: "" }
    };
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
   /*  setActiveItem(index) {
     // console.log(index)
      switch(parseInt(index)) {
        case 0:
            this.$refs.carousel.$refs.carousel.setActiveItem(index)
            break;
        case 1: 
           //console.log(this.$refs.carousel.$refs.carousel)
          this.$refs.carousel.$refs.carousel.setActiveItem(index)
          break;
        default: 
          break
      }
      //console.log(this.$refs.carousel.$refs.carousel.setActiveItem);
      
      //this.$refs.carousel.next()
    } */
  },
  mounted() {},
  watch: {
  /*   isCollapse: function() {
      let el_main = document.getElementsByClassName("el-main");
      let el_aside = document.getElementsByClassName("el-aside");
      //let el_main_w = el_main.width
      if (this.isCollapse == true) {
        el_aside[0].style.width = "70px";
      } else {
        el_aside[0].style.width = "200px";
      }
    } */
  }

  /*   directives: {
    focus: {
        inserted: function (el, {value}) {
            if (value) {
              console.log(value)
                el.focus();
            }
        }
    }
}, */
  /*  methods: {
    ...mapActions(["userLoginOut"]),
    loginOut() { // 登出
      this.userLoginOut();
      this.user.name = null; // name置null
      if (!this.$store.state.token) {
        this.$router.push("/auth/login");
        this.$message.success("登出成功");
      } else { this.$message.success("登出失败"); }
    }
  }, */
  /*  beforeCreate() {
    // 第二次拦截 当主页刷新时，如果服务端设置的token的时效到了的话，便会提示未登录
    if (this.$rest) {  // this.$rest 只读
      this.$rest.user
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
  } */
};
</script>
<style lang="stylus" scoped>
// .el-header
//   position: fixed
//   width: 100%
//   left: 0
//   top: 0
//   z-index: 1500
// .el-menu-item 
//     height: 26px;
//     line-height: 26px;
//     font-size: 14px;
//     color: #303133;
//     padding: 0 20px;
//     list-style: none;
//     cursor: pointer;
//     //position: relative;
//     // -webkit-transition: border-color .3s, background-color .3s, color .3s;
//     // transition: border-color .3s, background-color .3s, color .3s;
//     // -webkit-box-sizing: border-box;
//     // box-sizing: border-box;
//     white-space: nowrap; // 文本不换行
</style>

