<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-lg-4" v-for="event in events" :key="event.name">
        <div id="image">
          <img src="../assets/logo.png"/>
          <div id="date">{{event.date}}&nbsp;<img src="../assets/calendar.png" id="calendar"/></div>
        </div>
        <div id="info">
          <h4 class="info-head">{{event.name}}</h4>
          <span class="info-head"><img src="../assets/clock.png" class="icons"/>&nbsp;&nbsp;{{event.time}}&nbsp;<img src="../assets/location.png" class="icons"/>&nbsp;&nbsp;{{event.venue}}</span>
          <div id="text">{{event.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Events',

  data () {
    return {
      events: [
        {
          date: '12-2-2018',
          name: 'Some Event',
          time: '20:00 AM',
          venue: 'dm sen audi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        },
        {
          date: '12-2-2018',
          name: 'Some Event1',
          time: '20:00 AM',
          venue: 'dm sen audi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        },
        {
          date: '12-2-2018',
          name: 'Some Event2',
          time: '20:00 AM',
          venue: 'dm sen audi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        }
      ]
    }
  }
}
</script>

<style lang="css">
  #image {
    border: 1px solid black;
    position:relative;
  }

  #date {
    position: absolute;
    left: 0%;
    bottom: 10%;
    border: 1px solid black;
    border-left: none;
    height:3.6vh;
  }

  #calendar{
    height: 3vh;
    border-left: 1px solid grey;
    padding: .3vh;
  }

  .icons {
    height: 2vh;
    border-left: 1px solid grey;
     padding: .3vh;
  }

  .container {
  }

  .info-head {
    display: block;
    text-align: left;
  }

  #text {
    text-align: left;
  }
</style>
