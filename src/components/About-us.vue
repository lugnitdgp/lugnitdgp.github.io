<template lang="html">
  <div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-5" style="padding:0px">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="2000" style="height:100%">
        <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators"  v-for="(item,index) in carousal1" :class="{active:item.active}" :key="index" :data-slide-to="index"></li>
        </ol>
         <div class="carousel-inner" style="height:100%">
              <div class="carousel-item" v-for="(item,index) in carousal1" :class="{active:item.active}"  :key="index" style="height:100%">
                <img class="d-block w-100" :src="item.image" :alt="index" style="height:100%" >
                <div class="carousel-caption d-none d-md-block">
                  <h5>{{item.heading}}</h5>
                  <p>{{item.para}}</p>
                </div>
              </div>
        </div>
         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
         </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      <div class="col-sm-12 col-md-7 row">
        <div class="col-sm-12 about-col">

          <h2>
              WHO
              <span class="highlighted">WE</span>
              ARE
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione dolorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus null
            </p>
            <a  href="#carouselExampleIndicators2" role="button" data-slide="next" style="float:right">
               <button  class=" btn btn-dark btn-sm rounded-circle"><i class="fas fa-chevron-right"></i></button>
            </a>
            <a   href="#carouselExampleIndicators2" role="button" data-slide="prev" style="float:left">
                <button  class=" btn btn-dark btn-sm rounded-circle"><i class="fas fa-chevron-left"></i></button>
           </a>
            <hr>
        </div>

        <div class="col-sm-12" >
          <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel" data-interval="2000">
          <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators2"  v-for="(item,index) in carousal2" :class="{active:item.active}" :key="index" :data-slide-to="index"></li>
          </ol>
           <div class="carousel-inner">
                <div class="carousel-item"  v-for="(item,index) in carousal2" :class="{active:item.active}"  :key="index">

                  <h3>{{displayheading(item.heading).first}}<span class="highlighted">{{displayheading(item.heading).second}}</span>{{displayheading(item.heading).third}}
                    </h3>
                    <p>
                        {{item.text}}
                    </p>

                </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
   <div class="container" id="bottom-section" >
        <div class="d-flex flex-row bd-highlight mb-3">
          <div  v-for="(item,index) in bottom" v-bind:key="index" class="p-2 bd-highlight text-center col" >
          <div class="bottom-div">
            <i class="bottom-icon" :class="item.icon"></i>
            <h3>{{displaynumber(item.number).first}}<span class="highlighted">{{displaynumber(item.number).second}}</span> </h3>
            <strong>{{item.content}}</strong>
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
      carousal1: [{image: 'https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__340.jpg', heading: 'hdwqjvfi', para: 'hdwqjvfi', active: true},
        {image: 'https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__340.jpg', heading: 'hdwqjvfi', para: 'hdwqjvfi', active: false},
        {image: 'https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141__340.jpg', heading: 'hdwqjvfi', para: 'hdwqjvfi', active: false}
      ],
      carousal2: [{heading: 'OUR MOTTO', text: 'lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.', active: true},
        {heading: 'WHAT WE DO', text: 'lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.', active: false},
        {heading: 'OUR VISION', text: 'lorem, reprehenderit laboriosam eius tenetur modi quas, esse nesciunt similique repellendus nulla.', active: false}],
      bottom: [
        {icon: 'fas fa-users ', content: 'Members', number: '12'},
        {icon: 'fas fa-chess', content: 'Events', number: '48'},
        {icon: 'fas fa-project-diagram', content: 'Projects', number: '100'}
      ],
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

<style lang="css">
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
  margin-top: 54px;
  position: relative;
}
.bottom-div h3{
  margin: 0 !important;
}
.about-col h2{
  font-weight: bold;
  margin: 10px;
   color:  #444;
}
.about-col p{
  color: #9c9c9c;
max-width: 578px;
font-size: 1.06667rem;
}

#carouselExampleIndicators2 h3{
  font-weight: bold;
  margin: 10px;
   color:  #444;
}

</style>
