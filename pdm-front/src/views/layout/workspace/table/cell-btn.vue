<template>
  <button @click="todo">{{ row._edit ? 'Done' : 'Edit' }}</button>
</template>

<script>
export default {
  props: ['row', 'col'],

  methods: {
    todo () {
      this.$emit('row-editor', this.row)
      this.$set(this.row, '_edit', !this.row._edit)
    }
  }
}
</script>