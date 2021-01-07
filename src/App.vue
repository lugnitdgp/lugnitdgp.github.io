<template>
  <div id="app">
    <div v-show="loader" class="loader">
      <pre-loader />
    </div>
    <nav-bar v-show="!loader" />
    <router-view v-show="!loader" @hideloader="hideLoader" />
    <page-footer v-show="!loader" />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import PreLoader from './components/PreLoader'
import PageFooter from './components/PageFooter'
export default {
  name: 'App',
  components: {
    PreLoader,
    NavBar,
    PageFooter
  },
  data () {
    return {
      loader: true,
      loadCount: 0
    }
  },
  watch: {
    $route (to, from) {
      this.loader = true
    }
  },
  methods: {
    hideLoader (val) {
      this.loader = false
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
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
.loader {
  height: 100vh;
  width: 100vw;
  background-color: #051429;
  overflow-y: auto;
}
router-view{
  position: absolute;
}
</style>
