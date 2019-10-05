<template>
  <div id="events">
    <nav-bar />
    <div class="container event-section-container">

      <h2 class="text-center font-weight-bold pt-5 pb-5">Our <span class="highlighted">Time</span>line</h2>
      <div :class="[active != null ? 'active' : '', 'row align-items-center']">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="hello col-12 mx-auto"
        >

          <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
            <v-card-title primary-title class="time-card">
              <div>
                <h3 class="headline mb-2 text-center">
                  <strong>  {{ item.event_name }} </strong>
                </h3>
                <div class="links">
                  <span><div id="eveTime">{{ format_date(item.event_time) }}</div><i class="fas fa-clock" /></span>
                </div>
                <div class="card-text" v-html="item.detail" />
              </div>
            </v-card-title>

            <v-card-actions class="justify-content-between">
              <v-btn v-if="active != index" flat color="orange" @click="active = index">Read More</v-btn>
              <v-btn v-else flat color="orange" @click="active = null">Close</v-btn>
            </v-card-actions>

          </v-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from './NavBar'
import common from '@/services/common.js'
import moment from 'moment'

export default {
  name: 'Timeline',
  components: {
    NavBar
  },
  data () {
    return {
      events: [],
      active: null
    }
  },
  created () {
    common.getTimeline()
      .then(response => {
        this.events = response.data
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
    format_date (value) {
      /* eslint-disable */
      var MonVal
      var YearVal
      var Str
      var mon
      if (value) {
        var val = moment(String(value)).format('MM/YYYY')
        MonVal = val[0] + val[1]
        YearVal = val[3] + val[4] + val[5] + val[6]
        if (MonVal == 0) {
          mon = 'January'
        }
        if (MonVal == 1) {
          mon = 'February'
        }
        if (MonVal == 2) {
          mon = 'March'
        }
        if (MonVal == 3) {
          mon = 'April'
        }
        if (MonVal == 4) {
          mon = 'May'
        }
        if (MonVal == 5) {
          mon = 'June'
        }
        if (MonVal == 6) {
          mon = 'July'
        }
        if (MonVal == 7) {
          mon = 'August'
        }
        if (MonVal == 8) {
          mon = 'September'
        }
        if (MonVal == 9) {
          mon = 'October'
        }
        if (MonVal == 10) {
          mon = 'November'
        }
        if (MonVal == 11) {
          mon = 'December'
        }
        Str = mon + ',' + YearVal
        return Str
      }
    }                 // Sorting Done in the BACKEND itself :)
  }
}
</script>

<style scoped lang="scss">
#events {
  background: rgba(247, 247, 247, 0.76);
}

h2 {
  margin-top: 40px;
  text-transform: uppercase;
}

h3{
  float:left;
}

span.highlighted {
  color: #fa631c;
}

.card {
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;

  @media only screen and (min-width: 1025px)  {
  .time-card {
    float: left;
    width: 60%;
    border-left: 6px solid;
    border-right: 100px solid;
    border-right-color:  #45ABCD;
  }
  }

    & > span {
      float: right;
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
  float: right;
  font-size: 1rem;
  height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}

  i {
    font-size: 18px;
    margin-right: 3px;
  }
  #eveTime {
    float: right;
  }
  
  i.fa-clock {
    float: right;
    white-space: pre-line;
    color: #C62828;
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

.card.active {
  z-index: 100;
  margin: 0 auto;

  .cover {
    height: 350px;
  }

  .card-text {
    height: auto;
  }

  @media only screen and (min-width: 576px) {
    width: 500px;
  }

  @media only screen and (min-width: 768px) {
    width: 620px;
  }

  @media only screen and (min-width: 1200px) {
    width: 700px;
  }
}

.card.inactive {
  z-index: -1;
}

// Alignment of active cards
@media only screen and (min-width: 576px) {
  .card:nth-child(even) .active {
    float: center;
  }
  .card:nth-child(odd) .active {
    float: center;
  }
}
@media only screen and (min-width: 1200px) {
  .hello:nth-child(even) .active {
    float: right;
  }
  .hello:nth-child(odd) .active {
    float: left;
  }
}

.row.active {
  background: rgba(255, 255, 255, 0.8);
}
.row > div.active {
  margin: 0 auto;
}


</style>