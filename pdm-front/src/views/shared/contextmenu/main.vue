<template lang="pug">
// @mouseenter="clearTimer"
    @mouseleave="startTimer"
transition(name="el-message-fade")
  div(
    :class="['contextmenu']"
    v-show="visible"
    :style="{left:position.x,top:position.y}")
    el-menu(@select="handleSelect")
     el-menu-item(index="1") 插入行
     el-menu-item(index="2") 删除行
     el-menu-item(index="3") 选项3
</template>

<script>
 /*  const typeMap = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
  }; */

  export default {
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
        timer: null,
        //dangerouslyUseHTMLString: false,
        //center: false
      };
    },

    computed: {
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

    watch: { // 监听closed值
      closed(newVal) {
        if (newVal) { //true
          this.visible = false; // 不可见 v-show="visible"
          this.$el.addEventListener('transitionend', this.destroyElement); // transitionend css完成过渡后触发
        }
      },
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        console.log(this)
        if (!this.closed) {
              this.close();
            }
      },
      destroyElement() { // 销毁
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true); // 销毁实例
        this.$el.parentNode.removeChild(this.$el); // 移除元素
      },

      close() { // 关闭
        this.closed = true;
        // if (typeof this.onClose === 'function') { // 关闭时的回调函数
        //   this.onClose(this);
        // }
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
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close();
          }
        }
      }
    },
    mounted() {
      //this.startTimer();
      document.addEventListener('keydown', this.keydown); // 监听键盘
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown); // 移除事件监听
    }
  };
</script>

<style lang="stylus" scoped>
.contextmenu 
    //min-width: 180px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    //border-radius: 4px;
    //border-width: 1px;
    //border-style: solid;
    //border-color: #ebeef5;
    position: fixed;
    //left: 50%;
    //top: 20px;
  
    //background-color: #edf2fc;  
    overflow: hidden;
    //padding: 15px 15px 15px 20px;
    
    //align-items: center;
    // 消失过渡
    -webkit-transform: translateX(0%);
    ransform: translateX(0%);
    -webkit-transition: opacity 0.3s, -webkit-transform .4s;
    transition: opacity 0.3s, -webkit-transform .4s;
    transition: opacity 0.3s, transform .4s;
    transition: opacity 0.3s, transform .4s, -webkit-transform .4s;
.el-menu-item 
    height: 26px;
    line-height: 26px;
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    list-style: none;
    cursor: pointer;
    //position: relative;
    // -webkit-transition: border-color .3s, background-color .3s, color .3s;
    // transition: border-color .3s, background-color .3s, color .3s;
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
    white-space: nowrap; // 文本不换行
</style>
