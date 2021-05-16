<template>
  <button class="button is-medium" @click="setValue(button)">{{ button | formatSign }}</button>
</template>

<script>
  export default {
    name: 'ProgressButton',
    props: {
      button: Number
    },
    filters: {
      formatSign (value) {
        return value > 0 ? `+${value}` : value
      }
    },
    methods: {
      setValue (value) {
        this.$emit('setValue', value)
      }
    }
  }
</script>
