<template>
  <progress :id="`progress-${id}`" :value="bar" max="100">{{ bar }}%</progress>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: {
      id: Number,
      bar: Number
    }
  }
</script>

<style scoped>

</style>
