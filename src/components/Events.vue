<template>
  <div id="events">
    <div id="eventCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
      <h1 class="text-center font-weight-bold pt-5 pb-50 featured">
        OUR <span class="highlighted">FEATURED</span>  EVENTS
      </h1>
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          v-for="(item, index) in featuredEvents"
          :key="index"
          data-target="#eventCarousel"
          :data-slide-to="index"
          :class="[index == 0 ? 'active' : '']"
        />
      </ol>
      
      <!-- Carousel items -->
      <div class="carousel-inner">
        <div
          v-for="(item, index) in featuredEvents"
          :key="index"
          :class="[index == 0 ? 'active' : '', 'carousel-item']"
        >
          <div class="row">
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <v-card class="card-container centrf">
                <img :src="item.event_image" class="responsive">    
              </v-card>
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-6">
              <v-card class="caption-container">
                <div class="date">
                  <span>
                    <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                    <i class="far fa-calendar-alt" aria-hidden="true" />
                  </span>
                </div>
                <div class="responsive-text" v-html="item.description" />
              </v-card>
            </div>
          </div>    
        </div>
      </div>

      <!-- Control buttons -->
      <a href="#eventCarousel" data-slide="prev" class="carousel-control-prev">
        <span class="carousel-control-prev-icon icon" />
      </a>
      <a href="#eventCarousel" data-slide="next" class="carousel-control-next">
        <span class="carousel-control-next-icon icon" />
      </a>
    </div>

    <div class="container event-section-container">
      <h2 class="text-center font-weight-bold pt-5 pb-50">
        Our E<span class="highlighted">ven</span>ts
      </h2>
      <div :class="[active != null ? 'active' : '', 'row align-items-center']">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="col-12 col-md-6 col-xl-4"
        >
          <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
            <v-img
              :contain="true"
              :src="item.event_image"
              :height="index == active ? '350px' : '250px'"
            >
              <div class="cover">
                <span>
                  <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                  <i class="far fa-calendar-alt" aria-hidden="true" />
                </span>
              </div>
            </v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-2 text-center">
                  {{ item.title }}
                </h3>
                <div class="links">
                  <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
                  <span v-if="item.venue" class="text-right"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
                  <a v-else class="text-right" :href="item.url"><i class="fas fa-map-marker-alt" /> Online </a>
                </div>
                <div class="card-text" v-html="item.description" />
              </div>
            </v-card-title>
            <v-card-actions class="justify-content-between">
              <v-btn v-if="active != index" flat color="orange" @click="active = index">
                Read More
              </v-btn>
              <v-btn v-else flat color="orange" @click="active = null">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/services/common.js'
export default {
  name: 'Events',
  data () {
    return {
      events: [],
      featuredEvents: [],
      active: null
    }
  },
  created () {
    common.getEvents()
      .then(response => {
        this.events = response.data
        this.categorise(this.events)
        this.$emit('hideloader', true)
      })
      .catch(e => {
        console.log(e)
      })
  },
  methods: {
    displayheading (text) {
      var length = text.length
      return {
        first: text.substr(0, 3),
        second: text.substr(3, length)
      }
    },
    categorise (events) {
      events.forEach(event => {
        if (event.featured) {
          this.featuredEvents.push(event)
        } 
      })
      console.log(this.featuredEvents)
    }
  }
}
</script>

<style scoped lang="scss">
#eventCarousel {
  z-index: 1000;
}
.centrf{
  display: flex !important;
  justify-content: center;
  align-items:center;
}
.caption-container {
  display: flex !important;
  justify-content: center;
  align-items:center;
  flex-direction:column;
}
.featured {
  position: absolute;
  z-index: 1000;
  margin-left: 40%;
  margin-top: 2%;
}
.carousel-item {
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.card-container {
  background-color: #f7f1e3 !important;
}
.responsive {
  padding-top: 150px;
  padding-bottom:150px;
  max-width: 90%;
  height:100vh;
  margin:0 auto;
  text-align:center;
  object-fit: contain;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
}
.date {
  padding-top: 25%;
  font-size: 2em;
  text-align: center;
  min-width:100%;
}
.responsive-text {
  padding: 8% 16%;
  font-size: 1.6em;
  min-width: 100%;
  height: 65vh;
  text-align: left;
  overflow: scroll;
}
.caption-container {
  background-color: #f7f1e3 !important;
  box-shadow: none;
  height: 100%;
}
.col-lg-6 {
  padding: 0 0;
  margin: 0 0;
}
.image-container {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: 0.4;
}
.carousel-control-prev {
  left: -4%;
}
.carousel-control-next {
  right: -4%;
}
.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}
@media only screen and (max-width: 576px) {
  .featured {
    margin-top: 0;
    margin-left: 5%;
    display: none;
  }
  
  .responsive {
    height: 50vh;
    padding-top:70px !important;
    padding-bottom:0px !important;
  }
  .date {
    padding-top: 2%;
    font-size: 1.5em;
  }
  .responsive-text {
    height: 45vh;
    padding: 2% 16%;
    font-size: 1.2em;
    text-align: center;
  }
  .carousel-control-prev-icon {
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
  }
}
@media only screen and (min-width: 576px) and (max-width: 768px) {
  .featured {
    margin-top: 7%;
    margin-left: 20%;
  }
  .date{
    padding-top: 45%;
  }
  .responsive {
    padding-bottom:0px !important;
    padding-top:80px;
  }
  .responsive-text {
    padding: 8% 16%;
    font-size: 1.1em;
    text-align: left;
    height: 60vh;
  }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .featured {
    margin-top: 6%;
    margin-left: 25%;
  }
  .date{
    padding-top: 38%;
  }
  .responsive-text {
    padding: 8% 16%;
    font-size: 1.2em;
    text-align: left;
    height: 60vh;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .featured {
    margin-top: 3%;
    margin-left: 30%;
  }
  .date{
    padding-top: 39%;
  }
  .responsive-text {
    padding: 5% 16%;
    font-size: 1.4em;
    text-align: left;
    height: 60vh;
  }
}
h2 {
  margin-top: 40px;
  text-transform: uppercase;
}
span.highlighted {
  color: #fa631c;
}
.card {
  margin-bottom: 20px;
  transition: all 0.4s ease-in-out;
  .cover {
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    & > span {
      position: absolute;
      background: rgba(255, 255, 255, 0.75);
      bottom: 11px;
      height: 40px;
      line-height: 40px;
      padding: 0 0 0 10px;
      font-family: "Roboto", sans-serif;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0.7px;
      color: #9c9c9c;
      i {
        font-size: 21px;
        line-height: 40px;
        padding: 0 10px 0 10px;
        background: rgba(255, 255, 255, 0.9);
        margin-right: 0;
        margin-left: 10px;
        color: #fa631c;
      }
    }
  }
  .card-text {
    font-size: 1rem;
    height: 42px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(156, 156, 156);
  }
  i {
    font-size: 18px;
    margin-right: 3px;
  }
  i.fa-clock {
    color: #C62828;
  }
  i.fa-map-marker-alt {
    color: #062657;
  }
  .links {
    line-height: 35px;
    height: 35px;
    width: 100%;
    text-align: center;
    span:first-child {
       margin-right: 20px;
    }
  }
}
.card.active {
  z-index: 100;
  margin: 0 auto;
  .cover {
    height: 350px;
  }
  .card-text {
    height: auto;
    max-height: 200px;
  }
    @media only screen and (max-width: 514px){
      .card-text{
        height: auto;
        max-height: 300px;
      }
    }
    @media only screen and (min-width: 576px) {
      width: 500px;
      margin: 0 auto;
    }
    @media only screen and (min-width: 766px){
      width: 620px;
      margin: 0 15%;
    }
    @media only screen and (min-width: 960px){
      width: 620px;
      margin: 0 33%;
    }
    @media only screen and (min-width: 1264px) {
      width: 750px;
      margin: 0 60%;
    }
    @media only screen and (min-width: 1200px) and (max-width: 1264px){
      width: 700px;
      margin: 0 50%;
    }
}
.card.inactive {
  z-index: -1;
}
// Alignment of active cards
@media only screen and (min-width: 576px) {
  .col-md-6:nth-child(2n) .active {
    float: right;
  }
  .col-md-6:nth-child(2n + 1) .active {
    float: left;
  }
}
@media only screen and (min-width: 1200px) {
  .col-xl-4:nth-child(3n) .active {
    float: right;
  }
  .col-xl-4:nth-child(3n + 2) .active {
    float: left;
    transform: translateX(-400px);
    margin: 0 58%;
  }
  .col-xl-4:nth-child(3n + 1) .active {
    float: left;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1264px)
{
  .col-xl-4:nth-child(3n + 2) .active {
    float: left;
    transform: translateX(-400px);
    margin: 0 70%;
  }
}
.row.active {
  background: rgba(255, 255, 255, 0.8);
}
.row > div.active {
  margin: 0 auto;
}
</style>
