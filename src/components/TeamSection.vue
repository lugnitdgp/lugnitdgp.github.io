<template>
  <section class="team-section">
    <h2 class="text-center font-weight-bold pt-5 pb-3">{{ displayheading("OUR TEAM").first }}<span class="highlighted">{{ displayheading("OUR TEAM").second }}</span>{{ displayheading("OUR TEAM").third }}</h2>
    <carousel :navigationEnabled="true" :loop="true" :autoplay="true" :paginationEnabled="false" :perPageCustom="[[280,1],[768, 3]]" :autoplayHoverPause="true" class="container p-0">
      <slide v-for="(item,index) in profiles" :key="index" class="col-md-4 col-sm-12 p-1">
        <div class="card  rounded-0">

          <img class="card-img-top rounded-0" src="https://www.gettyimages.co.jp/gi-resources/images/CreativeLandingPage/CHP_Mar_7_2018/03_621199382.jpg" alt="Card image cap">
          <div class="overlay-image"></div>
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{{ displayheading(item.name).first }}<span class="highlighted">{{ displayheading(item.name).second }}</span>{{ displayheading(item.name).third }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{item.post}}</h6>
            <div class="icon-block text-center">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-github"></i></a>
              <a href="#"><i class="fab fa-google-plus-g"></i></a>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
    <p class="highlighted text-right m-0 mt-2 mr-2"><u> Meet all the members »</u></p>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  data () {
    return {
      profiles: [{name: 'ARchana choudhary', post: 'head', github: '', facebook: '', gmail: ''},
        {name: 'Arnav', post: 'ex-presi', github: '', facebook: '', gmail: ''},
        {name: 'Vrushali', post: 'worker', github: '', facebook: '', gmail: ''},
        {name: 'Purnima', post: 'assistant', github: '', facebook: '', gmail: ''}]
    }
  },
  components: {
    Carousel,
    Slide
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

<style>
.team-section{
    background-color: #f7f7f7;
    min-height: 100vh;
}
.card img{
  height:20rem;
}
.card .overlay-image{
    background-color: #fa631c;
    width:100%;
    height:20rem;
    position: absolute;
    opacity:0.5;
    visibility: hidden;
    transform: scale3d(1,0.5,1);
}
@keyframes displayOverlay {
    0%{visibility:hidden;}
    100%{visibility:visible;}
}
.card:hover .overlay-image{
  animation-name:displayOverlay;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  transform: scale3d(1,1,1);
  transition-duration: 0.15s;
  transition-timing-function: ease-in;
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
  color:white !important;
  border-radius: 100% !important;
  background-color: #fa631c !important;
}
</style>
