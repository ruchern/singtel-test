<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered has-text-centered">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="title">Progress Bar Demo</h1>

            <h2 class="subtitle has-text-weight-bold">Limit: {{ items.limit }}%</h2>

            <progress-bar :id="index" :bar="bar" :limit="items.limit" :key="index"
                          v-for="(bar, index) in items.bars"></progress-bar>

            <label for="selectProgressBar">Select Progress Bar</label>

            <select name="selectProgressBar" id="selectProgressBar" @change="onChange">
              <option :value="index" :key="index" v-for="(bar, index) in items.bars">
                Progress Bar {{ index + 1 }}
              </option>
            </select>

            <progress-button :button="button" :key="index" v-for="(button, index) in items.buttons"
                             @setValue="setValue"></progress-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import ProgressBar from '@/components/ProgressBar'
  import ProgressButton from '@/components/ProgressButton'

  export default {
    name: 'Home',
    components: { ProgressBar, ProgressButton },
    data () {
      return {
        items: {},
        selectedProgressBar: 0
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      async getData () {
        const response = await window.axios.get('http://pb-api.herokuapp.com/bars')

        this.items = response.data
      },
      onChange (ev) {
        this.selectedProgressBar = ev.target.value
      },
      setValue (value) {
        const oldValue = this.items.bars[this.selectedProgressBar]
        let newValue = oldValue + value

        if (newValue <= 0) newValue = 0

        this.$set(this.items.bars, this.selectedProgressBar, newValue)
      }
    }
  }
</script>
