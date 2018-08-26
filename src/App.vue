<template>
  <div id="app">
    <div v-show="loader" class="loader">
      <pre-loader />
    </div>
    <router-view v-show="!loader" @hideloader="hideLoader" />
  </div>
</template>

<script>
import PreLoader from './components/PreLoader'
export default {
  name: 'App',
  components: {
    PreLoader
  },
  data () {
    return {
      loader: true
    }
  },
  methods: {
    hideLoader (val) {
      if (typeof val === 'boolean') { this.loader = !val } else { this.loader = false }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.loader{
    height: 100vh;
    width: 100vw;
    background-color: #051429;
}
</style>
