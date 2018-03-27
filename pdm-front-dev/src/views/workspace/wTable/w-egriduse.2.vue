<template>
  <div id="app">
    <button @click="add('a-component', 'test')">Add A</button>
    <button @click="add('b-component', 'test')">Add B</button>
    <ul>
      <li :is="item.component" :text="item.text" v-for="item in items"></li>
    </ul>
  </div>
</template>

<script>
import wBom from '../wBom.vue'
export default {
    data(){
        return {
             items: []
        }
    },
components: {
    'a-component': wBom,
    'b-component': wBom,
  },
 
  methods: {
    add(component, text) {
      this.items.push({
        'component': component,
        'text': text,
      })
    }
  }
}
</script>

<style>

</style>
