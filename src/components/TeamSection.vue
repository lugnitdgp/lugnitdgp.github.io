<template>
  <section class="team-section">
    <div class="container">
      <h2 class="text-center font-weight-bold pt-5 pb-3">{{ displayheading("OUR TEAM").first }}<span class="highlighted">{{ displayheading("OUR TEAM").second }}</span>{{ displayheading("OUR TEAM").third }}</h2>
      <carousel autoplay-timeout="5000" :navigation-enabled="true" :loop="true" :autoplay="true" :pagination-enabled="false" :per-page-custom="[[280,1],[768, 3]]" :navigation-next-label="`<i class=&quot;fas fa-chevron-circle-right fa-2x d-none d-md-block&quot; aria-hidden=&quot;true&quot;></i>`" :navigation-prev-label="`<i class=&quot;fas fa-chevron-circle-left fa-2x d-none d-md-block&quot; aria-hidden=&quot;true&quot; />`" :autoplay-hover-pause="true" class="container p-0">
        <slide v-for="(item,index) in profiles" :key="index" class="col-md-4 col-sm-12 p-2">
          <div class="card  rounded-0">
            <img class="card-img-top rounded-0" :src="item.image" alt="Card image cap">
            <div class="overlay-image" />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">{{ displayheading(item.first_name+" "+item.last_name).first }}<span class="highlighted">{{ displayheading(item.first_name+" "+item.last_name).second }}</span>{{ displayheading(item.first_name+" "+item.last_name).third }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ item.alias }}</h6>
              <div class="icon-block text-center">
                <a :href="item.facebook_link"><i class="fab fa-facebook-f" /></a>
                <a :href="item.git_link"><i class="fab fa-github" /></a>
                <a :href="item.email"><i class="fab fa-google-plus-g" /></a>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
      <p class="highlighted text-right m-0 mt-2 mr-2"><u><a> Meet all the members »</a></u></p>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import Members from '@/services/members.js'

export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      profiles: []
    }
  },

  async created () {
    try {
      const team = (await Members.getMembers()).data
      console.log(team)
      team.forEach((mem) => {
        this.categorise(mem)
      })
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    categorise (mem) {
      if (mem.degree_name === 'BTECH' & mem.year_name === 4) {
        this.profiles.push(mem)
      }
    },
    displayheading (text) {
      var length = text.length
      var middle = length / 2
      var highlighted = 3
      return {
        first: text.substr(0, middle),
        second: text.substr(middle, highlighted),
        third: text.substr(highlighted + middle, length)
      }
    }
  }
}
</script>

<style>
  .team-section{
    background-color: #f7f7f7;
    min-height: 100vh;
  }
  .card img{
  height:18rem;
  }
  .card .overlay-image{
    background-color: #fa631c;
    width:100%;
    height:18rem;
    position: absolute;
    opacity:0.5;
    transform: scale3d(1,0.5,1);
    visibility: hidden;
  }
  @keyframes displayOverlay {
    0%{visibility:hidden}
    100%{visibility:visible}
  }
  .card:hover .overlay-image{
  animation-name:displayOverlay;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  transform: scale3d(1,1,1);
  transition-duration: 0.15s;
  transition-timing-function: ease-in;
  visibility: visible;
  }
  .card i {
    display: inline-block;
    font-size: 16px;
    color: #232323;
    text-align: center;
    border: 1px solid #232323;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin:0 5px;
    cursor: pointer;
  }
  .card .icon-block{
    float:left;
    width:100%;
    margin-top:15px;
  }
  .card .icon-block a{
    text-decoration:none;
  }
  .card i:hover {
  background-color:#232323;
  color:#fff;
  text-decoration:none;
  }
  .highlighted {
  color: #fa631c;
  }
  .VueCarousel-navigation-button{
  color: #fa631c !important;
  padding:0px 5px 0px 5px !important;
  }
  .VueCarousel-navigation-button:hover
  {
     text-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
  h2 {
    font-size: 32px;
    text-transform: uppercase;
  }
</style>
