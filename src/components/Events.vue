<template>
  <div id="events">
    <div class="container event-section-container">
      <h2 class="text-center font-weight-bold pt-5 pb-5">
        Our <span class="highlighted">Eve</span>nts
      </h2>
      <div :class="[active != null ? 'active' : '', 'row align-items-center']">
        <div
          v-for="(item, index) in events"
          :key="index"
          class="col-12 col-md-6 col-xl-4"
        >
          <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
            <v-img
              :contain="true"
              :src="item.event_image"
              :height="index == active ? '350px' : '250px'"
            >
              <div class="cover">
                <span>
                  <span>{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).first }}</span><span class="highlighted">{{ displayheading(new Date(item.event_timing).toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})).second }}</span>
                  <i class="far fa-calendar-alt" aria-hidden="true" />
                </span>
              </div>
            </v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-2 text-center">
                  {{ item.title }}
                </h3>
                <div class="links">
                  <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
                  <span v-if="item.venue" class="text-right"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
                  <a v-else class="text-right" :href="item.url"><i class="fas fa-map-marker-alt" /> Online </a>
                </div>
                <div class="card-text" v-html="item.description" />
              </div>
            </v-card-title>

            <v-card-actions class="justify-content-between">
              <v-btn v-if="active != index" flat color="orange" @click="active = index">
                Read More
              </v-btn>
              <v-btn v-else flat color="orange" @click="active = null">
                Close
              </v-btn>
              <social-sharing
                url="https://vuejs.org/"
                :title="item.title"
                :hashtags="item.keywords || null"
                inline-template
                class="d-inline-flex justify-content-between social-share-container align-items-center"
              >
                <!-- Replace url by the actual blog link -->
                <div>
                  <network network="facebook">
                    <i class="fab fa-facebook-f d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                  <network network="linkedin">
                    <i class="fab fa-linkedin d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                  <network network="reddit">
                    <i class="fab fa-reddit d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                  <network network="twitter">
                    <i class="fab fa-twitter d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                </div>
              </social-sharing>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@/services/common.js'

export default {
  name: 'Events',
  data () {
    return {
      events: [],
      active: null
    }
  },
  created () {
    common.getEvents()
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
    height: 42px;
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

    @media only screen and (max-width: 514px){
      .card-text{
        height: auto;
        max-height: 300px;
      }
    }

    @media only screen and (min-width: 576px) {
      width: 500px;
      margin: 0 auto;
    }

    @media only screen and (min-width: 766px){
      width: 620px;
      margin: 0 15%;
    }

    @media only screen and (min-width: 960px){
      width: 620px;
      margin: 0 33%;
    }

    @media only screen and (min-width: 1264px) {
      width: 750px;
      margin: 0 60%;
    }

    @media only screen and (min-width: 1200px) and (max-width: 1264px){
      width: 700px;
      margin: 0 40%;
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
    transform: translateX(-400px);
    margin: 0 58%;
  }
  .col-xl-4:nth-child(3n + 1) .active {
    float: left;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1264px)
{
  .col-xl-4:nth-child(3n + 2) .active {
    float: left;
    transform: translateX(-400px);
    margin: 0 70%;
  }
}

.row.active {
  background: rgba(255, 255, 255, 0.8);
}
.row > div.active {
  margin: 0 auto;
}
</style>
