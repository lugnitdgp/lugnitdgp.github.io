<template>
  <div class="hello">
    <h1>Welcome to the homepage!</h1>
    <about-us/>
  </div>
</template>

<script>
import aboutUs from './About-us'
export default {
  name: 'Home',
  components: {aboutUs}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
