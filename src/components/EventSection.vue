<template>
  <div class="container event-section-container">
    <h2 class="text-center font-weight-bold pt-5 pb-5">Our Fe<span class="highlighted">atu</span>red E<span class="highlighted">ven</span>ts</h2>
    <div :class="[active != null ? 'active' : '', 'row align-items-center']">
      <div
        v-for="(item, index) in events"
        :key="index"
        class="col-12 col-md-6 col-xl-4"
      >
        <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
          <v-card-media
            :src="item.event_image"
            :height="index == active ? '300px' : '200px'"
          />

          <div class="cover d-flex">
            <div class="d-inline-flex">
              <span><i class="far fa-calendar" aria-hidden="true" /> {{ new Date(item.event_timing).toLocaleDateString() }}</span>
              <span><i class="fas fa-clock" />{{ new Date(item.event_timing).toLocaleTimeString() }}</span>
            </div>
            <div>
              <span v-if="item.venue"><i class="fas fa-map-marker-alt" /> {{ item.venue }}</span>
              <a v-else href="item.url"><i class="fas fa-map-marker-alt" /> {{ item.url }}</a>
            </div>
          </div>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-2">{{ item.title }}</h3>
              <div class="card-text" v-html="item.description" />
            </div>
          </v-card-title>

          <v-card-actions class="justify-content-between">
            <v-btn v-if="active != index" flat color="orange" @click="active = index">Read More</v-btn>
            <v-btn v-else flat color="orange" @click="active = null">Close</v-btn>
            <social-sharing
              url="https://vuejs.org/"
              :title="item.title"
              :hashtags="item.keywords || null"
              inline-template
              class="d-inline-flex justify-content-between social-share-container align-items-center"
            >  <!-- Replace url by the actual blog link -->
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
</template>

<script>
import '../assets/css/global.css'

export default {
  props: {
    'events': {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      active: null
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/mixins';

.container {
  padding: 0;
  // backgrouond:

  h2 {
    font-size: 32px;
    text-transform: uppercase;

    .highlighted {
      color: #fa631c;
    }
  }

  .card {
    margin-bottom: 15px;

    .card-text {
      display: none;
      font-size: 1rem;
    }

    .v-card__title--primary {
      padding: 16px 20px 0 20px;
    }

    .cover {
      position: absolute;
      top: 0;
      height: 200px;
      width: 100%;
      background: rgba(255, 255, 255, 0.75);
      opacity: 0;
      transition: opacity 0.7s ease-in-out;
      font-size: 15px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > div {
        flex: 0 0 auto !important;
        padding-bottom: 12px;
        color: #444;

        &:first-child > span:first-child {
          margin-right: 15px;
        }
      }

      i {
        font-size: 21px;
        margin-right: 3px;
      }
      i.fa-calendar {
        color: #0067BB;
      }
      i.fa-clock {
        color: #C62828;
      }
      i.fa-map-marker-alt {
        color: #062657;
      }
    }

    &:hover .cover {
      opacity: 1;
    }
  }

  .card.active {
    z-index: 100;
    margin: 0 auto;

    .cover {
      height: 300px;
    }

    .card-text {
      display: block;
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
}

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
