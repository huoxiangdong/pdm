<template lang="pug">
// @mouseenter="clearTimer"
    @mouseleave="startTimer"
transition(name="el-message-fade")
  div(
    class="contextmenu"
    v-show="visible"
    :style="{left:position.x,top:position.y}"
    tabindex="0"
    v-focus="true"
    @blur="blur"
    @click="close")
    multi-menu(type="cell")
    //el-menu(@select="handleSelect")
     el-menu-item(index="1") 插入行
     el-menu-item(index="2") 删除行
     el-menu-item(index="3") 选项3
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  directives : { // 自定义指令，元素获取焦点
            "focus" : function (el,binding) {
                //console.log(binding)
                if(binding.value){
                    el.focus();
                    //console.log(el)
                }
            }
        },
  data() {
    return {
      position: null, // 位置
      //message: '',
      visible: false, // 可见
      //duration: 3000000, // 延时
      //type: 'error',
      //iconClass: '',
      //customClass: '',
      onClose: null,
      showClose: false,
      closed: false, // 关闭
      timer: null
      //dangerouslyUseHTMLString: false,
      //center: false
    };
  },

  computed: {
    ...mapState(["multiMenuIndex"])
    /*  iconWrapClass() {
        const classes = ['el-message__icon'];
        if (this.type && !this.iconClass) {
          classes.push(`el-message__icon--${ this.type }`);
        }
        return classes;
      }, */

    /*  typeClass() {
        return this.type && !this.iconClass
          ? `el-message__icon el-icon-${ typeMap[this.type] }`
          : '';
      } */
  },

  watch: {
    // 监听closed值
   /*  closed(newVal) {
      if (newVal) {
        //true
        this.visible = false; // 不可见 v-show="visible"
        this.$el.addEventListener("transitionend", this.destroyElement); // transitionend css完成过渡后触发
      }
    }, */
    //  multiMenuIndex(val, oldVal) {
    //   if(val) {
    //    this.visible = false
    //    this.$el.addEventListener("transitionend", this.destroyElement) // 销毁实例
    //    this.getMultiMenuIndex(~~0)
    //   }
      
      
    //   //console.log(val, newVal);
    // }
  },

  methods: {
    ...mapActions(["getMultiMenuState"]),
    destroyElement() {
      // 销毁
      this.$el.removeEventListener("transitionend", this.destroyElement);
      this.$destroy(true); // 销毁实例
      this.$el.parentNode.removeChild(this.$el); // 移除元素
    },

    close() {
      // 关闭
      this.closed = true; // 关闭标志
      // if (typeof this.onClose === 'function') { // 关闭时的回调函数
      //   this.onClose(this);
      // }
      this.visible = false
      this.$el.addEventListener("transitionend", this.destroyElement) // 销毁实例
    },
    blur(event) { // 失去焦点关闭
      if(!this.closed)  this.close() // 不加判断 Cannot read property 'removeChild' of null
        //console.dir(event)
    },
  

    // clearTimer() { // 清楚定时器
    //   clearTimeout(this.timer);
    // },

    // startTimer() { // 定时器
    //   if (this.duration > 0) {
    //     this.timer = setTimeout(() => {
    //       if (!this.closed) {
    //         this.close();
    //       }
    //     }, this.duration);
    //   }
    // },
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted() {
    //this.startTimer();
    document.addEventListener("keydown", this.keydown); // 监听键盘
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown); // 移除事件监听
  }
};
</script>

<style lang="stylus" scoped>
.contextmenu {
  outline: 0 // 清楚焦点虚线
  // min-width: 180px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  // border-radius: 4px;
  // border-width: 1px;
  // border-style: solid;
  // border-color: #ebeef5;
  position: fixed;
  // left: 50%;
  // top: 20px;

  // background-color: #edf2fc;
  overflow: hidden;
  // padding: 15px 15px 15px 20px;
  box-shadow: 0 0 1px 1px rgba(135, 135, 135, 0.4);
  // align-items: center;
  // 消失过渡
  -webkit-transform: translateX(0%);
  ransform: translateX(0%);
  -webkit-transition: opacity 0.3s, -webkit-transform 0.4s;
  transition: opacity 0.3s, -webkit-transform 0.4s;
  transition: opacity 0.3s, transform 0.4s;
  transition: opacity 0.3s, transform 0.4s, -webkit-transform 0.4s;
}

/* .contextmenu >>>
   .el-menu-item
   height: 26px;
   line-height: 26px;
   font-size: 13px;
*/
</style>
