<template>
  <div id="home">
    <about-us />
    <team-section />
    <blog-section />
  </div>
</template>

<script>
import AboutUs from './AboutUs'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
export default {
  name: 'Home',
  components: { AboutUs, TeamSection, BlogSection }
}
</script>
