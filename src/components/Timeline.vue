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
          <img id="mobi" src="static/images/glug-logo.png">
          <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
            <v-card-title primary-title class="timeline-card">
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
            <v-card-actions class="justify-content-between overflow-content">
              <v-btn v-if="active != index" flat color="orange" @click="active = index">Read More</v-btn>
              <v-btn v-else flat color="orange" @click="active = null">Close</v-btn>
            </v-card-actions>
          </v-card>
          <img id="non-mobi" src="static/images/glug-logo.png">
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

@media only screen and (max-width: 767px)  {
  h3 {
    color: rgba(231, 208, 208, 0.76);
    float:left;
  }
  .timeline-container:before {
    position: absolute;
    content: "";
    margin-top: -10%;
    height: 115%;
    width: 4px;
    left: 6%;
    background: rgb(56, 54, 54);
  }
  
  .timeline-container {
    display: flex;
    width: 100%;
    margin-bottom: 3%;
  }
  img {
    width: 12%;
    height: 12%;
    z-index: 2;
    margin-left: -3%;
  }
  #non-mobi {
    display: none;
  }

  .card {
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
    background-color: rgba(24, 21, 21, 0.76);
    color: white;

  .timeline-card {
    float: left;
    border-left: 6px solid;
    border-right: 6px solid;
    border-right-color:  #45ABCD;
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

.card-text {
  float: right;
  font-size: 14px;
  height: 42px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
    }
  }
}

@media only screen and (min-width: 768px) {
  .timeline-container:before {
    position: absolute;
    content: "";
    margin-top: -5%;
    margin-bottom: 10%;
    height: 116%;
    width: 4px;
    left: 50%;
    background: rgb(56, 54, 54);
  }
  
  .timeline-container {
    display: flex;
    width: 100%;
    margin-bottom: 2%;
  }

  .card {
    border-radius: 25px;
    width: 45%;
    background-color: rgba(78, 73, 73, 0.76);
    color: white;
  }

  .timeline-card {
    text-align: center;
    width: 100%;
    background-color: rgba(24, 21, 21, 0.76);
    color: white;
    border-radius: 25px;
    font-family: "Roboto", sans-serif;
  }

  .timeline-container:nth-child(odd) {
    h3 {
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
      margin-left: 0px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent transparent rgba(24, 21, 21, 0.76);
    }
    #eveTime {
      color: rgba(18, 215, 230, 0.76);
    }
    img {
      float: right;
      width: 5%;
      height: 5%;
      z-index: 2;
      margin-left: 3%;
    }
    #mobi {
      display: none;
    }
  }

  .timeline-container:nth-child(even) {
    flex-direction: row-reverse;
    h3 {
      color: rgba(231, 208, 208, 0.76);
      float:right;
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
      border-color: transparent rgba(24, 21, 21, 0.76) transparent transparent;
    }

    #eveTime {
      float: left;
      color: rgba(18, 215, 230, 0.76);
    }
    img {
      width: 5%;
      height: 5%;
      z-index: 2;
      margin-right: 2%;
    }
    #mobi {
      display: none;
    }    
    
    i.fa-clock {
      float: left;
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
  background-color: rgba(7, 6, 6, 0.76);

  .cover {
    height: 350px;
  }

  .card-text {
    height: auto;
    font-size: 16px;
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
