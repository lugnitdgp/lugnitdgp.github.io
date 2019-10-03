<template>
  <div id="events">
    <nav-bar />
    <div class="container event-section-container">

      <h2 class="text-center font-weight-bold pt-5 pb-5">Our <span class="highlighted">Time</span>line</h2>
      <div :class="[active != null ? 'active' : '', 'row align-items-center']">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="col-12 col-md-6 col-xl-4"
        >
          <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-2 text-center">{{ item.event_name }}</h3>
                <div class="links">
                  <span><i class="fas fa-clock" />{{ new Date(item.event_time).toLocaleTimeString() }}</span>
                </div>
                <div class="card-text" v-html="item.detail" />
              </div>
            </v-card-title>
          </v-card>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import common from '@/services/common.js'

export default {
  name: 'Timelines',
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
    common.getTimelines()
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
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  margin-top: 40px;
  text-transform: uppercase;
}

span.highlighted {
  color: #fa631c;
}

.card {
  margin-bottom: 20px;

  .cover {
    background: rgba(255, 255, 255, 0.2);
    width: 100%;

    & > span {
      position: absolute;
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
    font-size: 1rem;
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
    color: #062657;
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
    transform: translateX(-200px);
  }
  .col-xl-4:nth-child(3n + 1) .active {
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
