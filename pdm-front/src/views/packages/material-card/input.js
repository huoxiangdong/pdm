export default {
  functional: true, // 无状态，无上下文
  //props: ['row', 'col', 'column'],
  render (h, context) {

    
   return h('button',null,'haha')
  }
}
/* <template lang="pug">
  el-form-item()
         el-input()
            template(slot="prepend") kk
</template>
<script>
  export default {
    props: []

  }
</script> */
/* export default {
  functional: true, // 无状态，无上下文
  //props: ['row', 'col', 'column'],
  render (h,context) {
    //return context
  }
} */