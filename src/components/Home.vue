<template>
  <div id="home">
    <about-us/>
    <profile-slider/>
  </div>
</template>

<script>
import AboutUs from './About-us'
import ProfileSlider from './ProfileSlider'
export default {
  name: 'Home',
  components: { AboutUs, ProfileSlider }
}
</script>
