<template>
  <div id="events">
    <nav-bar />
    <div class="container timeline">

      <h2 class="text-center font-weight-bold pt-5 pb-5">Our <span class="highlighted">Time</span>line</h2>
      <div :class="[active != null ? 'active' : '', 'row align-items-center']">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="col-12 mx-auto timeline-container"
        >
          <img id="mobilogo" src="static/images/glug-logo.png">
          <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
            <v-card-title primary-title class="timeline-card">
              <div>
                <h3 class="headline mb-2 text-center">
                  <strong>  {{ item.event_name }} </strong>
                </h3>
                <div class="card-text" v-html="item.detail" />
              </div>
            </v-card-title>
            <v-card-actions class="justify-content-between overflow-content">
              <div id="mobiDate">
                <span><div id="DateMobi">{{ format_date(item.event_time) }}</div><i class="fas fa-clock" /></span>
              </div>
            </v-card-actions>
          </v-card>
          <img id="non-mobilogo" src="static/images/glug-logo.png">
          <div id="non-mobiDate">
            <i class="fas fa-clock" />
          </div>
          <div id="non-mobiDate">
            <span><div id="DateNonMobi">{{ format_date(item.event_time) }}</div></span>
          </div>
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
  background: rgba(24, 21, 21, 0.76);
}
h2 {
  margin-top: 40px;
  text-transform: uppercase;
}
span.highlighted {
  color: #fa631c;
}

@media only screen and (max-width: 955px)  {
  h3 {
    width: 100%;
    color: rgba(231, 208, 208, 0.76);
    float:left;
  }
  .timeline-container:before {
    position: absolute;
    content: "";
    float:left;
    margin-top: -2%;
    height: 105%;
    width: 4px;
    left: 30px;
    background: rgb(56, 54, 54);
  }
  .timeline-container {
    display: flex;
    width: 100%;
    margin-bottom: 0%;
  }
  img {
    width: 40px;
    height: 40px;
    z-index: 2;
    margin-left: 0px;
  }
  #non-mobilogo {
    display: none;
  }
  #non-mobiDate {
    display: none;
  }
  .card {
    margin-left: 25px;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    background-color: rgba(24, 21, 21, 0.76);
    color: white;
  }
  .timeline-card {
    width: 100%;
    border-left: 6px solid;
    border-right: 6px solid;
    border-right-color:  #45ABCD;
  }
  #DateMobi {
    float: right;
    color: rgba(18, 215, 230, 0.76);
  }

.card-text {
  float: left;
  font-size: 15px;
  height: auto;
  color: white;
  text-overflow: ellipsis;
  }
}

@media only screen and (min-width: 956px) {
  .timeline-container:before {
    position: absolute;
    content: "";
    margin-top: -2%;
    margin-bottom: 10%;
    height: 105%;
    width: 4px;
    left: 50%;
    background: rgb(56, 54, 54);
  }
  .timeline-container {
    display: flex;
    width: 100%;
    margin-bottom: 0%;
  }
  .card { /*Don't change its bg-color cause it's just the space-card . To change the color of the card, change bg-color of timeline-card*/
    border-radius: 25px;
    width: 45%;
    color: white;
  }
  .timeline-card {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.904);
    color: white;
    border-radius: 25px;
    font-family: "Roboto", sans-serif;
  }

  .timeline-container:nth-child(odd) {
    h3 {
      width: 100%;
      color: rgba(231, 208, 208, 0.76);
      float:left;
    }
    .timeline-card {
      transform: translate(0%, 0%);
      float: left;
    }
    .timeline-card:before {
      content: "";
      position: absolute;
      left: 100%;
      margin-left: 0%;
      border-width: 10px;
      top: 25px;
      border-style: solid;
      border-color: transparent transparent transparent rgba(0, 0, 0, 0.904);
    }
    #DateNonMobi {
      font-size: 16px;
      color: rgba(18, 215, 230, 0.76);
    }
    img {
      float: right;
      width: 50px;
      height: 50px;
      z-index: 2;
      margin-left: 3%;
      margin-top: 20px;
    }
    #mobilogo {
      display: none;
    }
    #mobiDate {
      display: none;
    }
    #non-mobiDate {
      margin-top: 30px;
    }
    i.fa-clock {
      margin-left: 10px;
    }
  }

  .timeline-container:nth-child(even) {
    flex-direction: row-reverse;
    h3 {
      width: 100%;
      color: rgba(231, 208, 208, 0.76);
      float: left;
    }
    .timeline-card {
      transform: translate(0%, 0%);
      float: right;
    }
    .timeline-card:before {
      content: "";
      position: absolute;
      left: 0%;
      margin-left: -20px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent rgba(0, 0, 0, 0.904) transparent transparent;
      top: 25px;
    }
    #DateNonMobi {
      float: left;
      font-size: 16px;
      color: rgba(18, 215, 230, 0.76);
    }
    img {
      width: 50px;
      height: 50px;
      z-index: 2;
      margin-right: 2.2%;
      margin-top: 20px;
    }
    #mobilogo {
      display: none;
    }
    #mobiDate {
      display: none;
    }
    #non-mobiDate {
      margin-top: 30px;
    }
    i.fa-clock {
      float: left;
      margin-right: 15px;
      white-space: pre-line;
      color: #C62828;
    }
  }

  .card-text {
    font-size: 16px;
    text-align: left;
  }
  .overflow-content {
    display: none;
  }

}

  i {
    font-size: 18px;
    margin-right: 3px;
  }
  i.fa-clock {
    float: right;
    white-space: pre-line;
    color: #C62828;
  }

.timeline-container:nth-child(odd) .card {
  animation: left-to-right 3s ease-out;
}

.timeline-container:nth-child(even) .card {
  animation: right-to-left 3s ease-out;
}

@keyframes left-to-right {
  0% {
    left: -10%;
  }
  50% {
    left: 0%;
  }
}

@keyframes right-to-left {
  0% {
    right: -10%;
  }
  50% {
    right: 0%;
  }
}

</style>
