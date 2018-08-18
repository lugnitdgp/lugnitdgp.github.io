<template>
  <div id="home">
    <about-us />
    <team-section />
  </div>
</template>

<script>
import AboutUs from './About-us'
import TeamSection from './TeamSection'
export default {
  name: 'Home',
  components: { AboutUs, TeamSection }
}
</script>
