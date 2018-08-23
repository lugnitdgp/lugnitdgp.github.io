<template>
  <div id="home">
    <home-carousel />
    <about-us />
    <team-section />
    <blog-section />
  </div>
</template>

<script>
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, TeamSection, BlogSection }
}
</script>
