<template>
  <div id="home">
    <home-carousel id="Carousel" :carousel="carousel" @stoploader="stopLoader" />
    <about-us id="AboutUsSection" />
    <avishkar-section />
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
import AvishkarSection from './AvishkarSection'
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
    AvishkarSection,
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
        this.stopLoader()
      })
      .catch(e => {
        console.log(e)
      })
    common.getBlogPosts()
      .then(response => {
        let tmp = response.data
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
        if (mem.image === null) { console.log(mem); mem.image = 'https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png' }
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
