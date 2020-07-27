<template>
  <div class="container about-us-container">
    <div class="row">
      <div class="col-md-4 border-right border-md-none">
        <div class="row">
          <div class="col-md-12">
            <div class="card text-right border-0 pb-1 pt-1">
              <transition name="fade">
                <div v-show="show" class="card-body">
                  <h2 class="card-title">
                    {{ displayheading(section1.heading).first }}<span class="highlighted">{{ displayheading(section1.heading).second }}</span>{{ displayheading(section1.heading).third }}
                  </h2>
                  <p class="card-text p-spec">
                    {{ section1.content }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <div v-scroll="AnimateSecNow" class="col-md-8">
        <div class="row">
          <div class="col-md-12 border-bottom border-md-none">
            <div class="card text-right border-0 text-md-left pb-1 pt-1">
              <transition name="slide-fade">
                <div v-show="show" class="card-body">
                  <h2 class="card-title">
                    {{ displayheading(section2.heading).first }}<span class="highlighted">{{ displayheading(section2.heading).second }}</span>{{ displayheading(section2.heading).third }}
                  </h2>
                  <p class="card-text">
                    {{ section2.content }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card text-right border-0 text-md-left pb-1 pt-1">
              <transition name="slide-fade">
                <div v-show="show" class="card-body">
                  <h2 class="card-title">
                    {{ displayheading(section3.heading).first }}<span class="highlighted">{{ displayheading(section3.heading).second }}</span>{{ displayheading(section3.heading).third }}
                  </h2>
                  <p class="card-text">
                    {{ section3.content }}
                  </p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div id="bottom-section">
          <div class="row justify-content-center">
            <blockquote class="blockquote text-center">
              <p class="mb-0 mt-4 text-light ">
                Software is like information, it's better when it's free!.
              </p>
              <footer class="blockquote-footer font-italic">
                Someone not so famous
              </footer>
            </blockquote>
          </div>
          <div class="d-flex flex-row bd-highlight ">
            <div v-for="(item, index) in section4" :key="index" class="p-2 bd-highlight text-center col">
              <div class="bottom-div mb-3">
                <i class="bottom-icon" :class="'fas ' + item.icon" />
                <animate-number :number="item.number" />
                <strong>{{ item.content }}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AnimateNumber from './AnimateNumber'
import common from '@/services/common.js'
export default {

  components: {
    AnimateNumber
  },

  data () {
    return {
      section1: {
        heading: 'Who We Are',
        content: 'The GNU/Linux User’s Group, NIT Durgapur is a community of GNU/Linux Users that promote the use of Free and Open Source Software. The Group was established in 2003 by a bunch of FOSS enthusiasts with the idea of popularising and contributing to Open Source. We are a plethora of designers, contributors and developers that believe in learning and sharing through opening up your mind to Open Source.',
        link: 'Meet the members»'
      },
      section2: {
        heading: 'What We Do',
        content: 'We provide budding enthusiasts like ourselves a forum to contribute and learn about FOSS. Through varied workshops on revolutionary Open Technologies throughout the year, we spread the idea of Open Source to beginners and veterans alike. We bring people together to ideate and contribute to the leading Open technologies. We provide help and resources to everyone who wants to make the web world a better place.',
        link: 'Look at our activities »'
      },
      section3: {
        heading: 'Our Vision',
        content: 'Being a bunch of FOSS enthusiasts, we preach the idea of “free things are the best things” and firmly believe in sharing knowledge. We strive to elevate the tech culture in our college and believe that this can only be done through giving people digital resources and knowledge in all realms from hardware to software and data to design. We promote FOSS through various endeavours because we believe in the freedom of expression for everyone.',
        link: ' See how to join us»'
      },
      section4: [
        { icon: 'fa-users ', content: 'Members', number: 52 },
        { icon: 'fa-chess', content: 'Events', number: 32 },
        { icon: 'fa-project-diagram', content: 'Projects', number: 10 }
      ],
      show: false
    }
  },

  created () {
    common.getCount().then(
      response => {
        this.section4[0].number = response.data.members
        this.section4[1].number = response.data.events
        this.section4[2].number = response.data.projects
      }
    ).catch(e => {
      console.log(e)
    })
  },

  mounted () {
    setTimeout(function () {
      var i
      for (i = 0; i < 3; i++) {
        var start = 0
        var temp = this.section4[i].number
        this.section4[i].number = 0
        while (start++ < temp) {
          this.section4[i].number = start.toString()
        }
      }
    }.bind(this), 0)
  },

  methods: {
    displayheading (text) {
      var length = text.length
      var middle = length / 2
      var highlighted = 3
      return {
        first: text.substr(0, middle),
        second: text.substr(middle, highlighted),
        third: text.substr(highlighted + middle, length)
      }
    },
    AnimateSecNow (e) {
      var count = window.pageYOffset || document.documentElement.scrollTop
      if (count > 42) { this.show = true } else this.show = false
    }
  }

}
</script>

<style scoped>

.about-us-container {
  padding: 0;
  padding-top: 40px;
}
.about-us-container > .row {
  margin-bottom: 20px;
}
.about-us-container > .row:nth-child(2) > .col-sm-12 {
  padding: 0;
}
#bottom-section {
  background-color: #444;
  color: #fff;
}
.bottom-icon {
  background-color: #fff;
  color: #fa631c;
  box-shadow: 0px 0px 2px #888;
  border-radius: 50%;
  display: inline-block;
  font-size: 34px;
  height: 64px;
  line-height: 64px;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  width: 64px;
}
.highlighted {
  color: #fa631c;
}
.bottom-div {
  margin-top: 2vh;
  position: relative;
}
h1, h2, h3 {
  font-weight: bold;
  color:  #444;
}
h2.card-title {
  text-transform: uppercase;
  margin-bottom: 12px;
}
p.card-text {
  color: #9c9c9c;
  max-width: 578px;
  font-size: 0.95rem;
  line-height: 1.6rem;
  display: table-row;
}
.fade-enter-active, .slide-fade-enter-active {
  transition: all 0.7s ;
  transition-timing-function: cubic-bezier(.26,.88,.94,.72);
}
.fade-enter {
  transform: translateX(-40%);
  opacity: 0.5;
}
.slide-fade-enter {
  transform: translateX(40%);
  opacity: 0.5;
}
.p-spec {
  font-size: 0.9rem;
}
.border-bottom, .border-right {
  border-color: rgba(222, 226, 230, 0.45) !important;
}

 blockquote{
   font-size:0.95rem;
 }

@media(max-width: 768px) {
  .border-md-none {
    border: none !important;
  }
}
</style>
