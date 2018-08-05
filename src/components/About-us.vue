<template>
  <div class="container">
    <div class="row">
    <div class="col-md-5 border-right">
      <div class="row">
        <div class="col-md-12">
          <div class="card text-right border-0">
            <div class="card-body">
                <h3 class="card-title">{{displayheading(data1.heading).first}}<span class="highlighted">{{displayheading(data1.heading).second}}</span>{{displayheading(data1.heading).third}}</h3>
                <p class="card-text"> {{data1.content}}</p>
                <a href="#" class="card-link highlighted" style="text-decoration:underline">{{data1.link}}</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="col-md-7">
      <div class="row">
        <div class="col-md-12 border-bottom">
          <div class="card text-right border-0 text-md-left">
            <div class="card-body">
                <h3 class="card-title">{{displayheading(data2.heading).first}}<span class="highlighted">{{displayheading(data2.heading).second}}</span>{{displayheading(data2.heading).third}}</h3>
                <p class="card-text"> {{data2.content}}</p>
                <a href="#" class="card-link highlighted" style="text-decoration:underline">{{data2.link}}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card text-right border-0 text-md-left " >
          <div class="card-body">
              <h3 class="card-title">{{displayheading(data3.heading).first}}<span class="highlighted">{{displayheading(data3.heading).second}}</span>{{displayheading(data3.heading).third}}</h3>
              <p class="card-text"> {{data3.content}}</p>
              <a href="#" class="card-link highlighted" style="text-decoration:underline">{{data3.link}}</a>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="row">
   <div class="col-sm-12" style="padding:0">
    <div id="bottom-section">
      <div class="d-flex flex-row bd-highlight ">
        <div  v-for="(item,index) in bottom" v-bind:key="index" class="p-2 bd-highlight text-center col" >
        <div class="bottom-div mb-2">
          <i class="bottom-icon" :class="item.icon"></i>
          <h3>{{displaynumber(item.number).first}}<span class="highlighted">{{displaynumber(item.number).second}}</span> </h3>
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
export default {

  data () {
    return {
      bottom: [
        {icon: 'fas fa-users ', content: 'Members', number: '12'},
        {icon: 'fas fa-chess', content: 'Events', number: '48'},
        {icon: 'fas fa-project-diagram', content: 'Projects', number: '100'}
      ],
      data1: {heading: 'OUR MOTTO', content: 'lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla', link: 'view more'},
      data2: {heading: 'WHAT WE DO', content: 'lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla', link: 'view more'},
      data3: {heading: 'OUR VISION', content: 'lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla', link: 'view more'},
      interval: false,
      offset: 0

    }
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
    },
    displaynumber (num) {
      return {
        first: num.substr(0, 1),
        second: num.substr(1, num.length)
      }
    }
  /*  ChangeNumbers () {
      var start = 0
      var i
      for (i = 0; i < this.bottom.length; i++) {
        start = 0
        var num = Number(this.bottom[i].number)
        while (start++ !== num) {
          this.bottom[i].number = start
        }
      }
    } */

  },
  created () {
  //  window.addEventListener('scroll', this.ChangeNumbers)
  }

}
</script>

<style scoped>
#bottom-section{

  background-color: #444 !important;
  color:white;
}
.bottom-icon{
  background-color: white;
  color:#fa631c !important;
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
  color:#fa631c !important;
}
.bottom-div{
  margin-top: 45px;
  position: relative;
}
.bottom-div h3{
  color:white;
  margin: 0 !important;
}
h2,h3{
  font-weight: bold;
  margin: 10px;
   color:  #444;
}
p{
  color: #9c9c9c;
max-width: 578px;
font-size: 0.8rem;

}

</style>
