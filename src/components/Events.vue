<template><div>
  <div class="wrapper">
    <h1 class="text-center font-weight-bold pt-3"> OUR <span class="highlighted">EVENTS</span></h1>
  </div>
  <div id="events">

    <div id="eventCarousel" class="carousel slide bg-light p-5 mt-5" data-ride="carousel" data-interval="2000">

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
            <div class="col-12 col-lg-6 col-md-6 col-sm-12">
              <v-card class="card-container">
                <img :src="item.event_image" class="responsive">
              </v-card>
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-12">
              <v-card class="caption-container">
                <div class="date">
                  <span>
                    <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                  </span>
                </div>
                <div class="link">
                  <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
                  <span v-if="item.venue" class="text-right"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
                  <a v-else class="text-right online" :href="item.url"><i class="fas fa-map-marker-alt" /> Online </a>
                </div>
                <div class="responsive-text" v-html="item.description" />
              </v-card>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="mobileEventCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">

      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          v-for="(item, index) in featuredEvents"
          :key="index"
          data-target="#mobileEventCarousel"
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
            <div class="col-12 col-lg-6 col-md-6 col-sm-12">
              <v-card class="card-container">
                <img :src="item.event_image" class="responsive" data-toggle="modal" :data-target="'#eventModal'+item.id">
              </v-card>
            </div>
            <div class="col-12 col-lg-6 col-md-6 col-sm-12">
              <v-card class="caption-container">
                <div class="date">
                  <span>
                    <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                  </span>
                </div>
                <div class="link">
                  <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
                  <span v-if="item.venue" class="text-right"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
                  <a v-else class="text-right online" :href="item.url"><i class="fas fa-map-marker-alt" /> Online </a>
                </div>
              </v-card>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div
      v-for="(item, index) in featuredEvents"
      :key="index"
      class="event-modal"
    >
      <div :id="'eventModal'+item.id" ref="vueModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-body">
            <v-card>
              <button type="button" class="close closeModal" data-dismiss="modal" aria-hidden="true">X</button>
              <img
                :src="item.event_image"
                class="modal-image"
              >
              <v-card-title>
                <div>
                  <h3 class="text-center">
                    {{ item.title }}
                  </h3>
                  <div class="date">
                    <span>
                      <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                    </span>
                  </div>
                  <div class="link">
                    <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
                    <span v-if="item.venue" class="text-right online"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
                    <a v-else class="text-right online" :href="item.url"><i class="fas fa-map-marker-alt" /><span class="highlighted"><strong>ONLINE</strong></span> </a>
                  </div>
                  <div class="card-text" v-html="item.description" />
                </div>
              </v-card-title>
            </v-card>
          </div>
        </div>
      </div>
    </div>

    <div class="event-section-container bg-light p-5 pt-1">
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
              :height="index == active ? '300px' : '150px'"
              class="card-image"
            >
              <div class="cover">
                <span>
                  <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                  <i class="far fa-calendar-alt" aria-hidden="true" />
                </span>
              </div>
            </v-img>

            <v-card-title>
              <div>
                <h5 class="text-center">
                  {{ item.title }}
                </h5>
                <div class="links">
                  <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
                  <span v-if="item.venue" class="text-right"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
                  <a v-else class="text-right" :href="item.url"><i class="fas fa-map-marker-alt" /><span class="highlighted"><strong>ONLINE</strong></span> </a>
                </div>
                <div class="card-text" v-html="item.description" />
              </div>
            </v-card-title>
            <v-card-actions class="cardControl justify-content-centre">
              <v-btn v-if="active != index" flat color="orange" class="readMore" @click="active = index">
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
.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #000;
  opacity: 0.6;
}
.wrapper {
  position: fixed;
  margin-top: -75px;
}
.wrapper h1{
  float: left;
  letter-spacing: 3px;
  margin-left: -100px;
  margin-top: 320px;
  margin-right: -400px;
  transform: rotate(270deg);
}
.carousel-indicators {
  bottom: -5px!important;
}
.carousel-indicators .active {
  opacity: 1.0;
}
#eventCarousel {
  margin-left: 15%;
  margin-right: 15%;
}
.carousel {
  position: relative;
}
.carousel-item {
  height: 50vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.centrf{
  display: flex !important;
  justify-content: center;
  align-items:center;
}
.link {
  line-height: 35px;
  height: 35px;
  width: 100%;
  text-align: center;
  span:first-child {
      margin-right: 30px;
  }
}
.online {
  color: red !important;
}
.card .cover>span{
  border-radius: 7px;
}
.card .cover>span i[data-v-27b652c9]{
    background: none;
}
.card i{
  color: #fa631c;
}
.caption-container {
  display: flex !important;
  justify-content: center;
  align-items:center;
  flex-direction:column;
  background-color: #DCDCDC !important;
  box-shadow: none;
  height: 100%;
}
.card-container {
  background-color: #DCDCDC !important;
}
.v-card>:last-child:not(.v-btn):not(.v-chip){
  justify-content: center;
}
.responsive {
  padding: 10px !important;
  width: 100%;
  height: 50vh;
  object-fit: contain;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center;
}
.date {
  padding-top: 7%;
  font-size: 2em;
  text-align: center;
  min-width:100%;
  text-transform: uppercase;
}
.responsive-text {
  padding: 1% 12%;
  font-size: 0.9em;
  min-width: 100%;
  height: 35vh;
  text-align: left;
  overflow-y: scroll;
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
h2 {
  margin-top: 40px;
  text-transform: uppercase;
}
span.highlighted {
  color: #fa631c;
}
.card {
  margin-bottom: 30px;
  transition: all 0.4s ease;
  .cover {
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    & > span {
      position: absolute;
      background: rgba(255, 255, 255, 0.75);
      bottom: 11px;
      height: 20px;
      line-height: 40px;
      padding: 0 0 38px 10px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      letter-spacing: 0.7px;
      color: #9c9c9c;
      i {
        line-height: 40px;
        padding: 0 10px 0 10px;
        background: rgba(255, 255, 255, 0.9);
        margin-right: 0;
        margin-left: 10px;
        color: #fa631c;
      }
    }
  }
  //
  .card-text {
    font-size: 0.95rem;
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
    color: #f08035;
  }
  .links {
    font-size: 0.95rem;
    line-height: 15px;
    height: 25px;
    width: 100%;
    text-align: center;
    span:first-child {
       margin-right: 20px;
    }
  }
  .cardControl {
    height: 40px;
  }
  .readMore {
    font-size: 0.9em;
  }
}
.card-image {
  margin: 2% 2%;
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
  ////
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
@media only screen and (max-width: 767px) {
  .wrapper {
    display: none;
  }
  #eventCarousel {
    display: none;
  }
  #mobileEventCarousel {
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
    background-color: rgb(245, 245, 238)!important;
  }
  .carousel-item {
    height: 55vh;
  }
  .card-container {
    background-color: rgb(245, 245, 238)!important;
  }
  .caption-container {
    background-color: rgb(245, 245, 238) !important;
  }
  .responsive {
    height: 40vh;
    padding-top: 20% !important;
  }
  .date {
    margin-top: 0;
    padding-top: 0;
    font-size: 1.5em;
  }
  .modal {
    height: 90vh;
    z-index: 20000;
    font-size: 1.05rem;
  }
  .closeModal {
    margin-top: 4%;
    padding-right: 4%;
    border-radius: 10px;
  }
  .modal-image {
    margin: 2% 6%;
    height: 40vh;
    width: 90%;
    object-fit: contain;
  }
  h3 {
    margin-top: 0;
    text-transform: uppercase;
    color: #989898;
  }
  .event-section-container {
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 5%;
  }
}
@media only screen and (min-width: 767px) and (max-width: 992px) {
  #mobileEventCarousel {
    display: none;
  }
  #eventCarousel {
    margin-left: 16%;
    margin-right: 16%;
    padding-top: 11%;
  }
  .date{
    padding-top: 5%;
    font-size: 1.7em;
  }
  .responsive-text {
    padding: 2% 10%;
    font-size: 1em;
    text-align: left;
    height: 35vh;
  }
  .evnet-modal {
    display: none;
  }
  .event-section-container {
    margin-left: 16%;
    margin-right: 16%;
    padding-top: 2%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  #mobileEventCarousel {
    display: none;
  }
  #eventCarousel {
    margin-left: 18%;
    margin-right: 18%;
    padding-top: 9%;
  }
  .date{
    padding-top: 5%;
  }
  .responsive-text {
    padding: 2% 12%;
    font-size: 1em;
    height: 35vh;
  }
  .event-modal {
    display: none;
  }
  .event-section-container {
    margin-left: 18%;
    margin-right: 18%;
    padding-top: 2%;
  }
}
@media only screen and (min-width: 1200px) {
  #mobileEventCarousel {
    display: none;
  }
  .event-section-container {
    margin-left: 15%;
    margin-right: 15%;
    padding-top: 2%;
  }
}
</style>
