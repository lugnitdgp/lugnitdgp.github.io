<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col" v-for="event in events" :key="event.name">
        <div id="image">
          <img src="../assets/logo.png"/>
          <span id="date">{{event.date}}</span>
        </div>
        <div id="info">
          <h4>{{event.name}}</h4>
          <span>{{event.time}}</span>
          <span>{{event.venue}}</span>
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
          name: 'event',
          time: '20:00 AM',
          venue: 'dm sen audi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        },
        {
          date: '12-2-2018',
          name: 'event1',
          time: '20:00 AM',
          venue: 'dm sen audi',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.'
        },
        {
          date: '12-2-2018',
          name: 'event2',
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
  div, span {
    border: 1px solid black;
    position:relative;
  }

  .container {
    width: 33vw;
  }

  #date {
    position: absolute;
    left: 0%;
    bottom: 10%;
  }
</style>
