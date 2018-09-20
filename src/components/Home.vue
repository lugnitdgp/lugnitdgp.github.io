<template>
  <div id="home">
    <nav-bar />
    <home-carousel id="Carousel" />
    <about-us id="AboutUsSection" />
    <avishkar-section />
    <event-section id="EventsSection" :events="events" />
    <linit-section />
    <team-section id="TeamSection" :profiles="profiles" />
    <blog-section id="BlogSection" :blog="blog" />
    <contact-us id="ContactUs" />
    <page-footer />
  </div>
</template>

<script>
import NavBar from './NavBar'
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import AvishkarSection from './AvishkarSection'
import LinitSection from './LinitSection'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
import EventSection from './EventSection'
import ContactUs from './ContactUs'
import PageFooter from './PageFooter'
import common from '@/services/common.js'

export default {
  name: 'Home',
  components: {
    HomeCarousel,
    AboutUs,
    AvishkarSection,
    LinitSection,
    TeamSection,
    BlogSection,
    EventSection,
    NavBar,
    ContactUs,
    PageFooter
  },
  data () {
    return {
      profiles: [],
      events: [],
      blog: []
    }
  },
  created () {
    common.getMembers()
      .then(response => {
        const team = response.data
        team.forEach((mem) => {
          this.categorise(mem)
        })
        this.$emit('hideloader', true)
      })
      .catch(e => {
        console.log(e)
      })
    common.getEvents()
      .then(response => {
        this.events = response.data
        this.$emit('hideloader', true)
      })
      .catch(e => {
        console.log(e)
      })
    common.getBlogPosts()
      .then(response => {
        this.blog = response.data
        this.$emit('hideloader', true)
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
