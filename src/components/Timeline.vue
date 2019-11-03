<template>
  <div id="timeline">
    <nav-bar />
    <div class="container-fluid timeline">

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
                <span><div id="DateMobi"><strong>{{ format_date(item.event_time) }}</strong></div><i class="fas fa-clock MobiClock" /></span>
              </div>
            </v-card-actions>
          </v-card>
          <img id="non-mobilogo" src="static/images/glug-logo.png">
          <div id="CombinedDayClock">
            <div id="non-mobiClock">
              <i class="fas fa-clock" />
            </div>
            <div id="non-mobiDate">
              <span><div id="DateNonMobi"><strong>{{ format_date(item.event_time) }}</strong></div></span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-env jquery */
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
    $(function () {
      $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () {
          $(this).remove()
        })
      })
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
        if (MonVal == 1) {
          mon = 'January'
        }
        if (MonVal == 2) {
          mon = 'February'
        }
        if (MonVal == 3) {
          mon = 'March'
        }
        if (MonVal == 4) {
          mon = 'April'
        }
        if (MonVal == 5) {
          mon = 'May'
        }
        if (MonVal == 6) {
          mon = 'June'
        }
        if (MonVal == 7) {
          mon = 'July'
        }
        if (MonVal == 8) {
          mon = 'August'
        }
        if (MonVal == 9) {
          mon = 'September'
        }
        if (MonVal == 10) {
          mon = 'October'
        }
        if (MonVal == 11) {
          mon = 'November'
        }
        if (MonVal == 12) {
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
#timeline {
  background: #E9F0F5;
  position: relative;
  padding: 2em 0;
  margin-bottom: 2em;
}
h2 {
  margin-top: 40px;
  text-transform: uppercase;
}
span.highlighted {
  color: #fa631c;
}

@media only screen and (max-width: 1150px)  {
  h3 {
    width: 100%;
    color: black;
    float:left;
    text-overflow: ellipsis;
    font-size: 21px!important;
  }
  .timeline-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 28px;
    height: 100%;
    width: 4px;
    background: #d7e4ed;
  }
  .timeline-container {
    display: flex;
    width: 90%;
    margin-bottom: 0%;
  }
  img {
    // position: absolute;
    // top: 15px;
    // left: 10px;
    // width: 40px;
    // height: 40px;
    // border-radius: 50%;
      position: fixed;
      left: 8px;
      width: 45px;
      height: 45px;
      z-index: 100;
  }
  #non-mobilogo {
    display: none;
  }
  #CombinedDayClock{
      display: none;
  }
  .card {
    margin-left: 60px;
    width: 100%;
    position: relative;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 10px;
    color: black;
  }
  .timeline-card {
    width: 100%;
  }
  .timeline-card:before {
  flex-direction: row-reverse;
    content: "";
    position: absolute;
    left: 0%;
    margin-left: -20px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent white transparent transparent;
    top: 25px;
  }
  #DateMobi {
    float: right;
    color: #7F8C97;
  }

.card-text {
  float: left;
  font-size: 15px;
  height: auto;
  color: #7F8C97;
  margin: 1em 0;
  text-overflow: ellipsis;
  font-family:'Roboto', sans-serif;
  font-weight: 400;
  }
}
@media only screen and (max-width: 230px) {
  h3 {
    font-size: 15px!important;
  }
  .MobiClock {
    display: none;
  }
  .card-text, #DateMobi {
    font-size: 12px;
  }
}
@media only screen and (min-width: 1151px) {
  .timeline-card:hover {
    background-color:rgb(233, 246, 248);
  }
  .timeline-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -2px;
    height: 100%;
    width: 4px;
    background: #d7e4ed;
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

  .card:hover {
    .timeline-card {
    height: 107%!important;
    }
  }
  .timeline-card {
    width: 100%;
    background-color: white;
    color: rgba(8, 8, 8, 0.521);
    border-radius: 25px;
    font-family: "Roboto", sans-serif;
  }

  .timeline-container:nth-child(odd) {
    h3 {
      width: 100%;
      color: black;
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
      top: 28px;
      border-style: solid;
      border-color: transparent transparent transparent white;
    }
    #DateNonMobi {
      font-size: 16px;
      color: #7F8C97;
    }
    img {
      // position: absolute;
      // top: 15px;
      // width: 60px;
      // height: 60px;
      // left: 50%;
      // margin-left: -30px;
      position: fixed;
      left: 50%;
      width: 60px;
      height: 60px;
      margin-left: -30px;
      z-index: 100;
    }
    #mobilogo {
      display: none;
    }
    #mobiDate {
      display: none;
    }
    #non-mobiDate {
      position: absolute;
      left: 25px;
      padding: .8em 0;
      opacity: 0.7;
    }
    #CombinedDayClock {
      position: relative;
      float: left;
      left: 8%;
      top: 20px;
    }
    i.fa-clock {
      position: absolute;
      top: 12px;
    }
    .card:hover {
      .timeline-card:before {
        border-color: transparent transparent transparent rgb(231, 246, 247)!important;
      }
    }
  }

  .timeline-container:nth-child(even) {
    flex-direction: row-reverse;
    h3 {
      width: 100%;
      color: black;
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
      border-color: transparent white transparent transparent;
      top: 25px;
    }
    #DateNonMobi {
      float: left;
      font-size: 16px;
      color: #7F8C97;
    }
    img {
      // position: absolute;
      // top: 15px;
      // width: 60px;
      // height: 60px;
      // left: 50%;
      // margin-left: -30px;
      display: none;
    }
    #mobilogo {
      display: none;
    }
    #mobiDate {
      display: none;
    }
    #non-mobiDate {
      position: relative;
      left: -10px;
      top: -5px;
      padding: .8em 0;
      opacity: 0.7;
    }
    #CombinedDayClock {
      position: absolute;
      float: right;
      right: 54%;
      top: 20px;
    }
    i.fa-clock {
      position: relative;
      float: right;
      top: 12px;
      right: -16px;
    }
    .card:hover {
      .timeline-card:before {
        border-color: transparent rgb(231, 246, 247) transparent transparent!important;
      }
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
    color: rgb(92, 171, 218);
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
