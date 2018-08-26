<template>
  <div id="app">
    <div v-show="loader" class="loader">
      <pre-loader />
    </div>
<<<<<<< HEAD
    <router-view @hideloader="hideLoader" />
=======
    <router-view v-show="!loader" @hideloader="hideLoader" />
>>>>>>> Add preloader
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
<<<<<<< HEAD
      loader: true,
      loadCount: 0
=======
      loader: true
>>>>>>> Add preloader
    }
  },
  methods: {
    hideLoader (val) {
<<<<<<< HEAD
      console.log(this.loadCount)
      if (val === true) {
        this.loadCount++
      }
      // Increase this value whenever you add $emit to any component
      if (this.loadCount === 1) {
        this.loader = false
      }
=======
      if (typeof val === 'boolean') { this.loader = !val } else { this.loader = false }
>>>>>>> Add preloader
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
