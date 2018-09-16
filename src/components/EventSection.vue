<template>
  <div class="container-fluid events-section">
    <h2 class="text-center font-weight-bold pt-5 pb-3">Fea<span class="highlighted">tur</span>ed <span class="highlighted">Eve</span>nts</h2>
    <div class="cards" :class="{&quot;showing&quot;:isShowing}">
      <div v-for="(item,index) in events" :key="index" :ref="index" class="grid-card" @click="ShowCard(index)">
        <img :src="item.event_image" style="height:12rem;width:20rem">
        <div class="card-title">
          <a class="toggle-info btn">
            <span class="left" />
            <span class="right" />
          </a>
          <h5 class="font-weight-bold">{{ item.title }}</h5>
          <div class="details">
            <i class="fas fa-calendar-alt" /> {{ new Date(item.event_timing).toLocaleDateString() }}<br>
            <i class="far fa-clock" /> {{ new Date(item.event_timing).toLocaleTimeString() }}<br>
            <i class="fas fa-map-marker-alt" /> {{ item.venue||item.url }}<br>
          </div>
        </div>
        <div class="card-flap flap1">
          <!--  <div class="card-description" v-html="item.description" />-->
          <div class="card-description">{{ item.description }} </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'events': {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      isShowing: false,
      Showing: null
    }
  },
  methods: {
    ShowCard (id) {
      if (this.$refs[id][0].classList.contains('show')) {
        this.$refs[id][0].classList.remove('show')
        this.isShowing = false
        this.Showing = null
      } else {
        if (this.Showing !== null) {
          this.$refs[this.Showing][0].classList.remove('show')
          this.isShowing = false
          this.Showing = null
        }

        this.$refs[id][0].classList.add('show')
        this.isShowing = true
        this.Showing = id
      }
      console.log(this.$refs[id][0])
    }

  }
}

</script>

<style scoped>
h2 {
  font-size: 32px;
  text-transform: uppercase;
}
.highlighted {
  color: #fa631c;
}
.events-section{
  background-color: #f7f7f7 ;
}
/* Grid item */
a.btn {
  background: #fa631c;
  border-radius: 4px;
  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.25);
  color: #ffffff;
  display: inline-block;
  padding: 6px 30px 8px;
  position: relative;
  text-decoration: none;
  transition: all 0.1s 0s ease-out;
}

a.btn:hover {
  box-shadow: 0px 8px 2px 0 rgba(0,0,0,0.075);
  transform: translateY(-2px);
  transition: all 0.25s 0s ease-out;
}

a.btn:active {
  box-shadow: 0 1px 0px 0 rgba(255,255,255,0.25);
  transform: translate3d(0,1px,0);
  transition: all 0.025s 0s ease-out;
}

div.cards {
  margin: auto;
  max-width: 100%;
  text-align: center;
}

div.grid-card {
  background: #ffffff;
  display: inline-block;
  margin: 2vh 2vw;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  z-index: 1;
  cursor: pointer;
}

div.grid-card img {
  width: 100%;
}

div.grid-card div.card-title {
  padding: 6px 15px 10px;
  position: relative;
  z-index: 0;
  margin: 0;
}

div.grid-card div.card-title a.toggle-info {
  border-radius: 32px;
  height: 32px;
  padding: 0;
  position: absolute;
  right: 15px;
  width: 34px;
}

div.grid-card div.card-title a.toggle-info span {
  background: #ffffff;
  height: 2px;
  position: absolute;
  top: 16px;
  transition: all 0.15s 0s ease-out;
  width: 12px;
}

div.grid-card div.card-title a.toggle-info span.left {
  right: 14px;
  transform: rotate(45deg);
}

div.grid-card div.card-title a.toggle-info span.right {
  left: 14px;
  transform: rotate(-45deg);
}

div.grid-card div.details {
  font-size: 0.8rem;
}

div.grid-card div.card-description {
  padding: 0px 15px 10px;
  position: relative;
  display: none;
  font-size: 0.8rem;
}
div.grid-card div.details{
  color:#444;
}
div.grid-card div.details i{
  font-weight: bold;
}
div.grid-card div.card-actions {
  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.075);
  padding: 10px 15px 20px;
  text-align: center;
}
div.grid-card div.card-flap {
  position: absolute;
  width: 100%;
  transform-origin: top;
  transform: rotateX(-90deg);
}
div.grid-card div.flap1 {
  transition: all 0.3s 0.3s ease-out;
  z-index: -1;
}

div.cards.showing div.grid-card {
  cursor: pointer;
  opacity: 0.6;
  transform: scale(0.88);
}
div.cards.showing div.grid-card:hover {
  opacity: 0.94;
  transform: scale(0.92);
}
div.grid-card.show {
  opacity: 1 !important;
  transform: scale(1) !important;
  z-index: 10
}
div.grid-card.show div.card-title a.toggle-info {
  background: #ff6666 !important;
}
div.grid-card.show div.card-title a.toggle-info span {
  top: 15px;
}
div.grid-card.show div.card-title a.toggle-info span.left {
  right: 10px;
}
div.grid-card.show div.card-title a.toggle-info span.right {
  left: 10px;
}
div.grid-card.show div.card-flap {
  background: #ffffff;
  transform: rotateX(0deg);
}
div.grid-card.show div.flap1 {
  transition: all 0.3s 0s ease-out;
}

div.grid-card.show div.card-description {
  display: block;
}
</style>
