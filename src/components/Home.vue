<template>
  <div id="home">
    <home-carousel />
    <about-us />
    <team-section :profiles="profiles" />
    <blog-section />
  </div>
</template>

<script>
import HomeCarousel from './HomeCarousel'
import AboutUs from './AboutUs'
import TeamSection from './TeamSection'
import BlogSection from './BlogSection'
import common from '@/services/common.js'
export default {
  name: 'Home',
  components: { HomeCarousel, AboutUs, TeamSection, BlogSection },
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
