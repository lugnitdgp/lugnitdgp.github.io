<template>
  <div id="home">
    <nav-bar />
    <home-carousel />
    <about-us id="AboutUsSection" />
    <event-section id="EventsSection" :events="events" />
    <team-section id="TeamSection" :profiles="profiles" />
    <blog-section id="BlogSection" />
  </div>
</template>

<script>
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
      profiles: [],
      events: []
    }
  },
  created () {
    let count = 0
    common.getMembers()
      .then(response => {
        const team = response.data
        team.forEach((mem) => {
          this.categorise(mem)
        })
        count++
        if (count === 2) {
          this.$emit('hideloader', true)
        }
      })
      .catch(e => {
        console.log(e)
      })
    common.getEvents()
      .then(response => {
        this.events = response.data
        count++
        if (count === 2) {
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
