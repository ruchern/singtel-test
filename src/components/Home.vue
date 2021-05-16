<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered has-text-centered">
          <div class="column is-half is-offset-one-quarter">
            <h1 class="title">Progress Bar Demo</h1>

            <h2 class="subtitle has-text-weight-bold">Limit: {{ items.limit }}%</h2>

            <ProgressBar :id="index" :bar="bar" :limit="items.limit" :key="index"
                         v-for="(bar, index) in items.bars"></ProgressBar>

            <div class="select is-medium is-rounded">
              <select name="selectProgressBar" id="selectProgressBar" @change="onChange">
                <option :value="index" :key="index" v-for="(bar, index) in items.bars">
                  Progress Bar {{ index + 1 }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="buttons is-centered">
          <ProgressButton :button="button" :key="index" v-for="(button, index) in items.buttons"
                          @setValue="setValue"></ProgressButton>
        </div>
      </div>
    </div>

    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <LoadingScreen v-if="showLoader"></LoadingScreen>
    </transition>
  </section>
</template>

<script>
import axios from 'axios'
import LoadingScreen from '@/components/LoadingScreen'
import ProgressBar from '@/components/ProgressBar'
import ProgressButton from '@/components/ProgressButton'

export default {
  name: 'Home',
  components: { LoadingScreen, ProgressBar, ProgressButton },
  data () {
    return {
      showLoader: true,
      items: {},
      selectedProgressBar: 0
    }
  },
  mounted () {
    this.getData().then(() => {
      this.showLoader = false
    })
  },
  methods: {
    getData () {
      return axios.get('http://pb-api.herokuapp.com/bars').then(response => {
        this.items = response.data
      })
    },
    onChange (ev) {
      this.selectedProgressBar = parseInt(ev.target.value)
    },
    setValue (value) {
      let newValue = this.items.bars[this.selectedProgressBar] + value

      if (newValue <= 0) newValue = 0

      this.$set(this.items.bars, this.selectedProgressBar, newValue)
    }
  }
}
</script>
