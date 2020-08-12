<template>
  <div class="container event-section-container">
    <h2 class="text-center font-weight-bold pt-5 pb-5">
      Our Fe<span class="highlighted">atu</span>red E<span class="highlighted">ven</span>ts
    </h2>
    <div :class="[active != null ? 'active' : '', 'row align-items-center']" class="d-flex justify-content-center">
      <div
        v-for="(item, index) in events"
        :key="index"
        class="col-11 col-md-6 col-xl-4 p-md-3"
      >
        <v-card :class="[index == active ? 'active' : '', active != null && index != active ? 'inactive' : '', 'card']">
          <v-img
            :contain="true"
            :src="item.event_image"
            :height="index == active ? '350px' : '200px'"
          >
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
          </v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-2">
                {{ item.title }}
              </h3>
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

  h2 {
    font-size: 32px;
    text-transform: uppercase;

    .highlighted {
      color: #fa631c;
    }
  }

  .card {
    margin-bottom: 15px;
    transition: all 0.4s ease-in-out;

    .card-text {
      font-size: 1rem;
      height: 63px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(156, 156, 156);
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

    .v-image:hover .cover {
      opacity: 1;
    }
  }

  .card.active {
    z-index: 100;
    margin: 0 auto;
    transition: all 0.4s ease-in-out;
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
