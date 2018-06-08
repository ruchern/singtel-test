<template>
  <button @click="setValue(button)">{{ button }}</button>
</template>

<script>
  export default {
    name: 'ProgressButton',
    props: {
      button: Number
    },
    methods: {
      setValue (value) {
        this.$emit('setValue', value)
      }
    }
  }
</script>

<style scoped>

</style>
