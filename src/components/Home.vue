<template>
  <div id="home">
    <about-us />
    <blog-section />
  </div>
</template>

<script>
import AboutUs from './AboutUs'
import BlogSection from './BlogSection'

export default {
  name: 'Home',
  components: { AboutUs, BlogSection }
}
</script>
