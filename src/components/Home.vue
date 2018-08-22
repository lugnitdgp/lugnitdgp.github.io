<template>
  <div id="home">
    <about-us />
    <home-carousal/>
    <blog-section />
  </div>
</template>

<script>
import HomeCarousal from './HomeCarousal'
import AboutUs from './About-us'
import BlogSection from './BlogSection'

export default {
  name: 'Home',
  components: { HomeCarousal, AboutUs, BlogSection }
}
</script>
