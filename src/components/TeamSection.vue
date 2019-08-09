<template>
  <section class="team-section">
    <div class="container">
      <h2 class="text-center font-weight-bold pt-3 pb-3">Our <span class="highlighted">Tea</span>m</h2>
      <div class="row justify-content-center">
        <carousel :navigation-enabled="true" :loop="true" :autoplay="true" :pagination-enabled="false" :per-page-custom="[[260,1],[576,2],[800, 3],[1264, 4]]" :navigation-next-label="`<i class=&quot;fas fa-chevron-circle-right fa-2x ; aria-hidden=&quot;true&quot;></i>`" :navigation-prev-label="`<i class=&quot;fas fa-chevron-circle-left fa-2x ; aria-hidden=&quot;true&quot; />`" :autoplay-hover-pause="true" class="col-9 col-sm-11 col-lg-12 p-0">
          <slide v-for="(item,index) in profiles" :key="index" class="p-1">
            <div class="card rounded-0">
              <img class="card-img-top rounded-0" :src="item.image" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">{{ displayheading(item.first_name+" "+item.last_name).first }}<span class="highlighted">{{ displayheading(item.first_name+" "+item.last_name).second }}</span>{{ displayheading(item.first_name+" "+item.last_name).third }}</h5>
                <h6 class="card-subtitle mb-2 text-muted align-text-bottom">{{ item.position||item.alias }}</h6>
              </div>
              <div class="card-footer border-0">
                <div class="icon-block text-center">
                  <a :href="item.facebook_link"><i class="fab fa-facebook-f" /></a>
                  <a :href="item.git_link"><i class="fab fa-github" /></a>
                  <a :href="item.email"><i class="fab fa-google-plus-g" /></a>
                </div>
              </div>

            </div>
          </slide>
        </carousel>
      </div>
      <div class="row justify-content-center">
        <p class="text-right m-0 mt-4 pb-1 col-9 col-sm-11 col-lg-12"><router-link :to="{ name: 'Team'}" class="highlighted"><u> Meet all the members »</u></router-link></p>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    'profiles': {
      type: Array,
      default: null
    }
  },
  created () {
    console.log(this.profiles[0])
  },
  methods: {
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

<style lang="scss" scoped>
.card img {
  height: 18rem;
}
.card .overlay-image {
  background-color: #fa631c;
  width: 100%;
  height: 18rem;
  position: absolute;
  opacity: 0.5;
  transform: scale3d(1, 0.5, 1);
  visibility: hidden;
}
@keyframes displayOverlay {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
.card i {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 28px;
  font-size: 16px;
  border-radius: 50%;
  border: 2px solid #d3d3d3;
  color: #232323;
  margin: 0 5px;
}
.card i:hover {
  color: #fa631c;
  cursor: pointer;
}
.card .icon-block {
  float: left;
  width: 100%;
  margin-top: 5px;
}
.card .icon-block a {
  text-decoration: none;
}
.highlighted {
  color: #fa631c;
}
h2 {
  font-size: 32px;
  text-transform: uppercase;
}
.card {
  height: 100%;
}
.card-footer {
  background-color: inherit;
}
</style>
