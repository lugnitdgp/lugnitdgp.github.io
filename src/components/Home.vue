<template>
<div id="home">
    <br>
    <home-carousel id="Carousel" :carousel="carousel" @stoploader="stopLoader" />
    <about-us id="AboutUsSection" />
    <event-section id="EventsSection" :events="events" />
    <linit-section />
    <team-section id="TeamSection" :profiles="profiles" />
    <blog-section id="BlogSection" :blog="blog" />
    <contact-us id="ContactUs" />
</div>
</template>

<script>
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import LinitSection from './LinitSection'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
import EventSection from './EventSection'
import ContactUs from './ContactUs'
import common from '@/services/common.js'

export default {
  name: 'Home',
  components: {
    HomeCarousel,
    AboutUs,
    LinitSection,
    TeamSection,
    BlogSection,
    EventSection,
    ContactUs
  },
  data () {
    return {
      carousel: [],
      profiles: [],
      events: [],
      blog: [],
      loader_count: 0
    }
  },
  created () {
    common.getCarousel()
      .then(response => {
        this.carousel = response.data
        this.stopLoader()
      })
      .catch(e => {
        console.log(e)
      })
    common.getMembers()
      .then(response => {
        const team = response.data
        team.forEach((mem) => {
          this.categorise(mem)
        })
        this.stopLoader()
      })
      .catch(e => {
        console.log(e)
      })
    common.getEvents()
      .then(response => {
        this.events = response.data
        this.events = this.events.filter(event => event.featured)
        console.log(this.events)
        this.stopLoader()
      })
      .catch(e => {
        console.log(e)
      })
    common.getBlogPosts()
      .then(response => {
        let tmp = response.data
        tmp = tmp.filter(tm => tm.featured)
        for (var i = 0; i < tmp.length; i++) {
          if (tmp[i].show_bool === true) { this.blog.push(tmp[i]) }
        }
        if (this.blog.length > 3) this.blog.splice(0, 3)
        this.stopLoader()
      })
  },
  methods: {
    categorise (mem) {
      if (mem.degree_name === 'BTECH' && mem.year_name === 4) {
        if (mem.image === null) { console.log(mem); mem.image = 'static/images/Linux-Avatar.png' }
        this.profiles.push(mem)
      }
    },
    stopLoader () {
      this.loader_count++
      if (this.loader_count === 4) {
        this.$emit('hideloader', true)
      }
    }
  }
}
</script>
