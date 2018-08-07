<template >
  <div class="container" style="min-height:100vh !important;padding:0">
    <div class="row">

    <div class="col-md-4 border-right border-bottom ">
      <div class="row">
        <div class="col-md-12" >
          <div class="card text-right border-0 pb-1 pt-1">
            <transition name="fade">
              <div class="card-body" v-show="show">
                  <h2 class="card-title">{{displayheading(data1.heading).first}}<span class="highlighted">{{displayheading(data1.heading).second}}</span>{{displayheading(data1.heading).third}}</h2>
                  <p class="card-text p-spec "> {{data1.content}}</p>
                <!--  <a href="#" class="card-link highlighted" style="text-decoration:underline">{{data1.link}}</a>-->
              </div>
            </transition>

          </div>
        </div>
      </div>
    </div>

    <div class="col-md-8">
      <div class="row">
        <div class="col-md-12 border-bottom " >
          <div class="card text-right border-0 text-md-left pb-1 pt-1">
            <transition name="slide-fade">
              <div class="card-body" v-show="show">
                  <h2 class="card-title">{{displayheading(data2.heading).first}}<span class="highlighted">{{displayheading(data2.heading).second}}</span>{{displayheading(data2.heading).third}}</h2>
                  <p class="card-text" style="display:table-row"> {{data2.content}}</p>
                <!--  <a href="#" class="card-link highlighted" style="text-decoration:underline">{{data2.link}}</a>-->
              </div>
            </transition>

          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card text-right border-0 text-md-left pb-1 pt-1" >
            <transition name="slide-fade">
              <div class="card-body" v-show="show">
                  <h2 class="card-title">{{displayheading(data3.heading).first}}<span class="highlighted">{{displayheading(data3.heading).second}}</span>{{displayheading(data3.heading).third}}</h2>
                  <p class="card-text" style="display:table-row"> {{data3.content}}</p>
                <!--  <a href="#" class="card-link highlighted" style="text-decoration:underline">{{data3.link}}</a>-->
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>

   </div>
   <div class="row">
     <div class="col-sm-12" style="padding:0">
       <div id="bottom-section">
         <div class="row justify-content-center">
           <blockquote class="blockquote text-center">
             <p class="mb-0 mt-4 text-light ">Software is like information, it's better when it's free!.</p>
             <footer class="blockquote-footer font-italic">Someone not so famous</footer>
           </blockquote>
         </div>
         <div class="d-flex flex-row bd-highlight ">
           <div  v-for="(item,index) in bottom" v-bind:key="index" class="p-2 bd-highlight text-center col" >
             <div class="bottom-div mb-3">
               <i class="bottom-icon" :class="item.icon"></i>
               <animate-number :number="item.number"/>
               <strong>{{item.content}}</strong>
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
export default {

  data () {
    return {
      bottom: [
        {icon: 'fas fa-users ', content: 'Members', number: 120},
        {icon: 'fas fa-chess', content: 'Events', number: 48},
        {icon: 'fas fa-project-diagram', content: 'Projects', number: 100}
      ],
      data1: {heading: 'WHO WE ARE', content: 'The GNU/Linux User’s Group, NIT Durgapur is a community of GNU/Linux Users that promote the use of Free and Open Source Software. The Group was established in 2003 by a bunch of FOSS enthusiasts with the idea of popularising and contributing to Open Source. We are a plethora of designers, contributors and developers that believe in learning and sharing through opening up your mind to Open Source.', link: 'Meet the members»'},
      data2: {heading: 'WHAT WE DO', content: 'We provide budding enthusiasts like ourselves a forum to contribute and learn about FOSS. Through varied workshops on revolutionary Open Technologies throughout the year, we spread the idea of Open Source to beginners and veterans alike. We bring people together to ideate and contribute to the leading Open technologies. We provide help and resources to everyone who wants to make the web world a better place.', link: 'Look at our activities »'},
      data3: {heading: 'OUR VISION', content: 'Being a bunch of FOSS enthusiasts, we preach the idea of “free things are the best things” and firmly believe in sharing knowledge. We strive to elevate the tech culture in our college and believe that this can only be done through giving people digital resources and knowledge in all realms from hardware to software and data to design. We promote FOSS through various endeavours because we believe in the freedom of expression for everyone.', link: ' See how to join us»'},
      show: false

    }
  },
  mounted () {
    setTimeout(function () {
      this.show = true
    }.bind(this), 0)

    setTimeout(function () {
      var i
      for (i = 0; i < 3; i++) {
        var start = 0
        var temp = +this.bottom[i].number
        this.bottom[i].number = 0
        while (start++ !== temp) {
          this.bottom[i].number = start.toString()
        }
      }
    }.bind(this), 0)
  },
  methods: {
    displayheading (text) {
      var str = text.length
      var strd = str / 2
      return {
        first: text.substr(0, strd),
        second: text.substr(strd, 2),
        third: text.substr(2 + strd, str)
      }
    }

  },
  created () {
  },
  components: {AnimateNumber}

}
</script>

<style scoped>
#bottom-section{

  background-color: #444 ;
  color:white;
}
.bottom-icon{
  background-color: white;
  color:#fa631c ;
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
.highlighted{
  color:#fa631c ;
}
.bottom-div{
  margin-top:2vh;
  position: relative;
}
h1,h2,h3{
  font-weight: bold;
  margin: 10px;
   color:  #444;
}
p{
  color: #9c9c9c;
max-width: 578px;
font-size: 0.9rem;
line-height: 1.4rem !important;
}
@keyframes translateLtoR{
  from{ transform: translateX(-100);}
  to{transform: translateX(0);}
}
@keyframes transitionRtoL{
  from{ transform: translateX(100);}
  to{transform: translateX(0);}
}

.fade-enter-active{

       transition: all 0.8s ;
       transition-timing-function: ease-in;
  }
.fade-enter{transform: translateX(-50%);
            opacity:0;}
.slide-fade-enter-active{

         transition: all 0.8s ;
         transition-timing-function: ease-in;
    }
.slide-fade-enter{transform: translateX(50%);opacity:0}
.p-spec{
  font-size: 0.9rem;
}
</style>
