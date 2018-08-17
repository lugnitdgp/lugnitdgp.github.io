<template>
  <div id="home">
<<<<<<< HEAD
    <nav-bar />
    <home-carousel />
    <about-us id="AboutUsSection" />
    <event-section id="EventsSection" />
    <team-section id="TeamSection" :profiles="profiles" />
    <blog-section id="BlogSection" />
=======
    <about-us/>
    <team-section/>
>>>>>>> team-section name and css changes
  </div>
</template>

<script>
<<<<<<< HEAD
import NavBar from './NavBar'
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
import EventSection from './EventSection'
import common from '@/services/common.js'
export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, TeamSection, BlogSection, EventSection, NavBar },
  data () {
    return {
      profiles: []
    }
  },
  created () {
    let count = 0
    common.getMembers()
      .then(response => {
        const team = response.data
        console.log(team)
        team.forEach((mem) => {
          this.categorise(mem)
        })
        count++
        if (count === 1) {
          this.$emit('hideloader', true)
        }
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    categorise (mem) {
      if (mem.degree_name === 'BTECH' & mem.year_name === 4) {
        this.profiles.push(mem)
      }
    }
  }
=======
import AboutUs from './About-us'
import TeamSection from './TeamSection'
export default {
  name: 'Home',
  components: { AboutUs, TeamSection }
>>>>>>> team-section name and css changes
}
</script>
