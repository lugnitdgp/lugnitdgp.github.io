<template>

<section class="team-section text-center my-5">
<br>
  <!-- Section heading -->
  <h2 class="h1-responsive font-weight-bold my-5">Our Amazing Alumnis</h2>
  <!-- Section description -->
  <p class="grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

  <!-- Grid row -->
  <div class="row">

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Anna Williams</h5>
      <p class="text-uppercase blue-text"><strong>Graphic designer</strong></p>
      <p class="grey-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci sed quia non numquam modi tempora eius.</p>
      <ul class="list-unstyled mb-0">
        <!-- Facebook -->
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <!-- Twitter -->
        <a class="p-2 fa-lg tw-ic">
          <i class="fab fa-twitter blue-text"> </i>
        </a>
        <!-- Instagram -->
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
      <p class="text-uppercase blue-text"><strong>Web developer</strong></p>
      <p class="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ipsa accusantium
        doloremque rem laudantium totam aperiam.</p>
      <ul class="list-unstyled mb-0">
        <!-- Facebook -->
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <!-- Instagram -->
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
      </ul>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6 mb-md-0 mb-5">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Maria Smith</h5>
      <p class="text-uppercase blue-text"><strong>Photographer</strong></p>
      <p class="grey-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim est fugiat nulla id eu laborum.</p>
      <ul class="list-unstyled mb-0">
        <!-- Facebook -->
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <!-- Instagram -->
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
        <!-- Dribbble -->
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-dribbble blue-text"> </i>
        </a>
      </ul>
    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-lg-3 col-md-6">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar">
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Tom Adams</h5>
      <p class="text-uppercase blue-text"><strong>Backend developer</strong></p>
      <p class="grey-text">Perspiciatis repellendus ad odit consequuntur, eveniet earum nisi qui consectetur
        totam officia voluptates perferendis voluptatibus aut.</p>
      <ul class="list-unstyled mb-0">
        <!-- Facebook -->
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <!-- Github -->
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

</section>
</template>

<script>
import common from '@/services/common.js'
export default {
  data () {
    return {
      linits: []
    }
  },
  created () {
    common.getLinits()
      .then(response => {
        this.linits = response.data
        this.linits.sort(function (a, b) {
          return parseFloat(b.year_edition) - parseFloat(a.year_edition)
        })
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
      })
  }
}
</script>

<style scoped>
.linit {
  background-size: cover;
  min-height: 100vh;
  padding-top: 5rem;
}
.linit h1{
  font-size:3rem;
}

.highlighted{
  color:#fa631c;
}
.card {
  box-shadow: 0 0 10px #aaa;
}
.card:hover{
  box-shadow: 0 0 20px #aaa;
}
.book-cover{
  border-width:2px !important;
  height: 280px;
  width:100%;
}
.overlay {
  height: 295px;
  top: 0;
  left: 0;
  position: absolute;
  width: inherit;
  opacity: 0;
  transition: all 0.6s;
  -webkit-transition: all 0.6s;
  -moz-transition: all 0.6s;
  -o-transition: all 0.6s;
  -ms-transition: all 0.6s;
  background-color: rgba(5, 20, 41, 0.65);
}
.overlay-content{
  height: 100%;
  width:100%;
}
.card:hover .overlay{
  opacity: 1;
}
.card:hover .overlay-content{
  border:2px solid #fa631c;
}
blockquote {
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
  color:#9c9c9c;
}
a{
  text-decoration:none;
  color:inherit;
}
a:hover{
  color:#fa631c;
  text-decoration:none;
}
</style>
