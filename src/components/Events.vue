<template lang="html">
  <div class="container-fluid">
    <div id="test" class="col-xl-4">
      <flickity  v-if="events.length > 0" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell" v-for="event in events" :key="event.id">
          <div id="image">
            <img :src="event.event_image" width="100%"/>
            <div id="date">{{(event.event_timing).slice(0,-1).split('T')[0]}}&nbsp;<img src="../assets/calendar.png" id="calendar"/></div>
          </div>
          <div id="info">
            <h4 class="info-head">{{event.title}}</h4>
            <span class="info-head"><img src="../assets/clock.png" class="icons"/>&nbsp;&nbsp;{{(event.event_timing).slice(0,-1).split('T')[1]}}&nbsp;<img src="../assets/location.png" class="icons"/>&nbsp;&nbsp;{{event.venue}}</span>
            <div id="text" v-html="event.description"></div><br/>
            <a class="event-action">Read More</a>
            <a class="event-action">Join Us</a>
          </div>
        </div>
      </flickity>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Flickity from 'vue-flickity'

export default {
  name: 'Events',

  components: { Flickity },

  data () {
    return {
      events: [],

      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5000,
        cellAlign: 'center',
        adaptiveHeight: false
      }
    }
  },

  methods: {
    next () {
      this.$refs.flickity.next()
    },

    prev () {
      this.$refs.flickity.prev()
    }
  },

  beforeCreate () {
    axios
      .get('https://sdxblog.ml/api/events/?format=json')
      .then(response => (this.events = response.data))
  }
}
</script>

<style scoped>
  .carousel-cell {
    width:100%;
    margin:2%;
  }

  #info {
    padding: 2%;
    padding-bottom:5%;
    border: .5px solid #bbb;
    border-top: none;
    text-align: left;
    color: #777;
  }

  #image {
    border: 1px solid #bbb;
    position:relative;
  }

  #date {
    position: absolute;
    left: 0%;
    bottom: 10%;
    height:3.8vh;
    color: #777;
    background: #fff;
    font-weight: bold;
    border: .5px solid #bbb;
  }

  #calendar{
    height: 3vh;
    border-left: 1px solid #bbb;
    padding: .4vh;
  }

  .icons {
    height: 2vh;
    border-left: 1px solid #bbb;
    padding: .3vh;
    margin: 1%;
  }

  .info-head {
    display: block;
    text-align: left;
    margin:2%;
    margin-left:0%;
  }

  h4 {
    color: #000;
  }

  #text {
    text-align: left;
  }

  .event-action {
    all: unset;
    padding: 2%;
    margin-right: 2%;
    border: .5px solid #bbb;
    border-radius: 5%;
    color: #fa631c;
    background: #f7f7f7;
  }
</style>
