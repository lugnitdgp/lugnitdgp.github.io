<template>
  <div class="hello">
    <home-carousal/>
    <about-us/>
  </div>
</template>

<script>
import HomeCarousal from './HomeCarousal'
import AboutUs from './About-us'

export default {
  name: 'Home',
  components: { HomeCarousal, AboutUs }
}
</script>
