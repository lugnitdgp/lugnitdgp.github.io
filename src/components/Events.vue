<template lang="html">
  <div class="container-fluid">
    <div id="test" class="col-xl-4">
      <flickity ref="flickity" :options="flickityOptions">
        <div class="carousel-cell" v-for="event in events" :key="event.name">
          <div id="image">
            <img :src="event.image" width="100%"/>
            <div id="date">{{event.date}}&nbsp;<img src="../assets/calendar.png" id="calendar"/></div>
          </div>
          <div id="info">
            <h4 class="info-head">{{event.name}}</h4>
            <span class="info-head"><img src="../assets/clock.png" class="icons"/>&nbsp;&nbsp;{{event.time}}&nbsp;<img src="../assets/location.png" class="icons"/>&nbsp;&nbsp;{{event.venue}}</span>
            <div id="text">{{event.text}}</div><br/>
            <a class="event-action">Read More</a>
            <a class="event-action">Join Us</a>
          </div>
        </div>
      </flickity>
    </div>
  </div>
</template>

<script>

import Flickity from 'vue-flickity'

export default {
  name: 'Events',

  components: { Flickity },

  data () {
    return {
      events: [
        {
          date: '12th December 2018',
          image: 'https://cdn.pixabay.com/photo/2016/09/30/03/39/pineapple-1704341__480.jpg',
          name: 'Some Event',
          time: '20:00 AM',
          venue: 'Some Venue',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        },
        {
          date: '12th December 2018',
          image: 'https://cdn.pixabay.com/photo/2016/09/30/03/39/pineapple-1704341__480.jpg',
          name: 'Some Event1',
          time: '20:00 AM',
          venue: 'Some Venue',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        },
        {
          date: '12th December 2018',
          image: 'https://cdn.pixabay.com/photo/2016/09/30/03/39/pineapple-1704341__480.jpg',
          name: 'Some Event2',
          time: '20:00 AM',
          venue: 'Some Venue',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        }
      ],

      flickityOptions: {
        initialIndex: 1,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        autoPlay: 5000,
        cellAlign: 'center'
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
