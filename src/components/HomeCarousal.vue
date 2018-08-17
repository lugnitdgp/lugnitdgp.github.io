<template>
  <div>

    <section id="showcase">
     <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
       <ol class="carousel-indicators">
         <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
         <li data-target="#myCarousel" data-slide-to="1"></li>
         <li data-target="#myCarousel" data-slide-to="2"></li>
       </ol>

       <div class="carousel-inner">

         <div class="carousel-item carousel-image-1 active">
          <div class="cover"></div>
           <div class="container">
             <div class="carousel-caption d-none d-sm-block text-left mb-5">
               <h1 class="display-3">Heading One</h1>
               <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique quaerat odio accusamus quisquam laborum optio, amet sapiente quae hic.</p>
             </div>
           </div>
         </div>

         <div class="carousel-item carousel-image-2">
          <div class="cover"></div>
           <div class="container">
             <div class="carousel-caption d-none d-sm-block text-left mb-5">
               <h1 class="display-3">Heading Two</h1>
               <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique quaerat odio accusamus quisquam laborum optio, amet sapiente quae hic.</p>
             </div>
           </div>
         </div>

         <div class="carousel-item carousel-image-3">
          <div class="cover"></div>
           <div class="container">
             <div class="carousel-caption d-none d-sm-block text-left mb-5">
               <h1 class="display-3">Heading Three</h1>
               <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique quaerat odio accusamus quisquam laborum optio, amet sapiente quae hic.</p>
             </div>
           </div>
         </div>

       </div>

       <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
         <span class="carousel-control-prev-icon"></span>
       </a>
       <a href="#myCarousel" data-slide="next" class="carousel-control-next">
         <span class="carousel-control-next-icon"></span>
       </a>
     </div>
   </section>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.carousel-item{
  height:100vh;
}

.carousel-image-1{
  background: url('../assets/images/image1.jpg');
  background-size: cover;
}

.carousel-image-2{
  background: url('../assets/images/image2.jpg');
  background-size: cover;
}

.carousel-image-3{
  background: url('../assets/images/image3.jpg');
  background-size: cover;
}

.carousel-caption{
  padding-bottom: 26vh;
}

.display-3{
  transform: translateX(-1000px);
  opacity: 0;
}

.lead{
  transform: translateX(1000px);
  opacity: 0;
}

.active {
.display-3 {
    animation: {
        name: slideInLeft;
        duration: 1s;
        timing-function: cubic-bezier(.24,1,.72,1);
        fill-mode: forwards;
    }
  }

 .lead{
    animation: {
        name: slideInRight;
        duration: 1s;
        timing-function: cubic-bezier(.24,1,.72,1);
        fill-mode: forwards;
    }
  }
}

.carousel-control-next.carousel-control-prev {
            width: 10%;
            opacity: 0;
            transition: opacity 0.6s;
}

.cover{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);

}

@keyframes slideInLeft {
    0% {
        opacity: 0;
        transform: translateX(-15px);
    }
    98% {
        opacity: 0.9;
        transform: translateX(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    0% {
        opacity: 0;
        transform: translateX(15px);
    }
    98% {
        opacity: 0.9;
        transform: translateX(0px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
