<template lang="pug">
  div(class="app-footer px-2")
   div(class="links text-center")
      a(v-for="(link,index) in links" :key="index" class="text-secondary" :class="{'mr-4': index!==links.length-1}" :href="link.href||link.link") {{link.text}}
   div(class="copyright mt-1 text-secondary text-center") Copyright 2018 &copy; huoxiangdong@aliyun.com

</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => {
        return [
          { text: '#', href: '/' },
          { text: '#', href: '/' },
          { text: '#', href: '/' }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" >
.app-footer
  position relative
  bottom 0
  left 0
  width 100%
  margin 20px auto 24px
</style>

