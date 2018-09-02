<template>
  <div id="home">

    <nav-bar />
    <home-carousel />
<<<<<<< HEAD
    <about-us id="AboutUsSection" />
    <event-section id="EventsSection" />
    <team-section id="TeamSection" :profiles="profiles" />
    <blog-section id="BlogSection" />

=======
    <about-us />
    <team-section :profiles="profiles" />
    <event-section />
    <blog-section />
>>>>>>> Add preloader
  </div>
</template>

<script>
import NavBar from './NavBar'
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
<<<<<<< HEAD
<<<<<<< HEAD
import EventSection from './EventSection'
import common from '@/services/common.js'
export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, TeamSection, BlogSection, EventSection, NavBar },
=======
import common from '@/services/common.js'
export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, TeamSection, BlogSection },
>>>>>>> Add preloader
=======
import EventSection from './EventSection'
import common from '@/services/common.js'
export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, TeamSection, BlogSection, EventSection },
>>>>>>> Add event section
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
}
</script>
