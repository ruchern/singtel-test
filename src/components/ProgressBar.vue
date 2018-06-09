<template>
  <div class="columns">
      <div class="column">
        <p class="content has-text-weight-bold">Progress Bar {{ id + 1 }}</p>
      </div>

      <div class="column is-two-thirds">
        <progress :id="`progress-${id}`" class="progress is-medium"
                  :class="[ hasExceedLimit ? 'is-danger' : 'is-info' ]"
                  :value="bar" max="100"></progress>
      </div>

      <div class="column is-1">
        <p class="content has-text-weight-bold" :class="{ 'has-text-danger': hasExceedLimit }">{{ bar }}%</p>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: {
      id: Number,
      bar: Number,
      limit: Number
    },
    computed: {
      hasExceedLimit () {
        return this.bar >= this.limit
      }
    }
  }
</script>
