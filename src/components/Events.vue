<template lang="html">
  <div class="container-fluid">
    <flickity v-if="events.length > 0" ref="flickity" :options="flickityOptions">
      <div v-for="event in events" :key="event.id" class="carousel-cell">
        <div id="image">
          <img class="event-image" :src="event.event_image" width="100%">
          <div id="date">{{ (event.event_timing).slice(0,-1).split('T')[0] }}&nbsp;<img id="calendar" src="../assets/calendar.png"></div>
        </div>
        <div id="info">
          <h4 class="info-head">{{ event.title }}</h4>
          <span class="info-head"><img src="../assets/clock.png" class="icons">&nbsp;&nbsp;{{ (event.event_timing).slice(0,-1).split('T')[1] }}&nbsp;<img src="../assets/location.png" class="icons">&nbsp;&nbsp;{{ event.venue }}</span>
          <div id="text">{{ event.description }}</div><br>
          <a class="event-action">Read More</a>
          <a class="event-action">Join Us</a>
        </div>
      </div>
    </flickity>
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
        groupCells: 1
      }
    }
  },

  beforeCreate () {
    axios
      .get('https://sdxblog.ml/api/events/?format=json')
      .then(response => (this.events = response.data))
  },

  methods: {
    next () {
      this.$refs.flickity.next()
    },

    prev () {
      this.$refs.flickity.prev()
    }
  }
}
</script>

<style scoped>
  .container {
    width: 100vw;
    height: 95vh;
  }

  .carousel-cell {
    width:330px;
    margin:2%;
    height: 55vh;
    border: .5px solid #bbb;
    overflow: hidden;
    border-radius: 1%;
  }

  #info {
    padding: 2%;
    padding-bottom:5%;
    border-top: .5px solid #bbb;
    text-align: left;
    color: #9c9c9c;
    height: 25vh;
    width: 329px;
  }

  #image {
    height: 30vh;
    width: 329px;
    position: relative;
  }

  .event-image {
    height: inherit;
  }

  #date {
    position: absolute;
    left: 0%;
    bottom: 10%;
    height: 3.8vh;
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

  #text {
    display: -webkit-box;
    height: 8vh;
    width: 310px;
    overflow: hidden;
    -webkit-line-clamp : 3;
    -webkit-box-orient: vertical;
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
