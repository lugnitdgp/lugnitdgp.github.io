<template>
  <div id="home">
    <home-carousel />
    <about-us />
    <blog-section />
  </div>
</template>

<script>
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import BlogSection from './BlogSection'

export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, BlogSection }
}
</script>
