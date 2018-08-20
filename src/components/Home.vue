<template>
  <div id="home">
    <events />
    <about-us />
    <blog-section />
  </div>
</template>

<script>
import Events from './Events'
import AboutUs from './AboutUs'
import BlogSection from './BlogSection'

export default {
  name: 'Home',
  components: { AboutUs, BlogSection, Events }
}
</script>
