<template lang="pug">
  div(class="app-auth flex flex-column flex-ai-center")
    //Nest()
    far-logo
    router-view
    app-footer(:links="links")
</template>

<script>
  import farLogo from './far-logo'

  export default {
    data() {
      return {
        links: [{
            text: '帮助',
            href: '/'
          },
          {
            text: '隐私',
            href: '/'
          },
          {
            text: '条款',
            href: '/'
          }
        ]
      }
    },
    components: { farLogo },
    // 在实例创建完成后被立即调用
    created() {
      const script = document.createElement('script')
      script.src = '//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'
      script.type = 'text/javascript'
      // 添加属性 z-index:0 的会创建一个新的层叠上下文 
      //script.setAttribute('zIndex', 0)
      script.setAttribute('color','255,80,0')
      script.setAttribute('opacity','0.5')
      //script.setAttribute('count','90')
      document.body.appendChild(script)
      this.script = script
    },
    // 实例销毁之前调用。在这一步，实例仍然完全可用
    beforeDestroy() {
      const l = document.getElementsByTagName('script')
      const canvasNest = document.getElementById('c_n' + l.length)
      if (canvasNest) {
        canvasNest.remove()
      }
      if (this.script) {
        this.script.remove()
      }
    }
  }

</script>

<style lang="stylus">
.app-auth
  position relative
  width 100%
  min-height 100%
  padding 10px 0
  z-index 2
  h1
    img
      width 42px
      height auto
</style>