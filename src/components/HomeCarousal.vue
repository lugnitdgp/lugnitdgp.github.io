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
           <div class="container">
             <div class="carousel-caption d-none d-sm-block text-center mb-5">
               <h1 class="display-3">Heading One</h1>
               <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique quaerat odio accusamus quisquam laborum optio, amet sapiente quae hic.</p>
             </div>
           </div>
         </div>

         <div class="carousel-item carousel-image-2">
           <div class="container">
             <div class="carousel-caption d-none d-sm-block mb-5">
               <h1 class="display-3">Heading Two</h1>
               <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur similique quaerat odio accusamus quisquam laborum optio, amet sapiente quae hic.</p>
             </div>
           </div>
         </div>

         <div class="carousel-item carousel-image-3">
           <div class="container">
             <div class="carousel-caption d-none d-sm-block text-center mb-5">
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
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.carousel-item{
  height:100vh;
}

.carousel-image-1{
  background: url('@/assets/images/image1.jpg');
  background-size: cover;
}

.carousel-image-2{
  background: url('@/assets/images/image2.jpg');
  background-size: cover;
}

.carousel-image-3{
  background: url('@/assets/images/image3.jpg');
  background-size: cover;
}

</style>
