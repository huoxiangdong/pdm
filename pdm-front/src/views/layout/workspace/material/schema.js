import Vue from 'vue'
export default {
  data() {
    return {
      // 自定义input
      inputSchema: {
        'MatNumber': {
          key:"MatNumber",
          isInput: true,
          component: Vue.extend({
            //props: ['address'],
            render(h) {
              return h('span', {
                style: {
                  color: '#20A0FF'
                }
              }, "this.address")
            }
          })
        }
      },

    }
  }
}
