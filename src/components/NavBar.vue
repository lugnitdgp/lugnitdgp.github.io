<template lang="html">
  <div class="container-fluid navbar-sec">
    <nav class="navbar navbar-inverse navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <span class="part1"><span class="highlighted">GNU</span>LINUX<br></span>
        <span class="part2">USERSGROUP</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbar-links" class="collapse navbar-collapse ">
        <ul class="navbar-nav  ml-md-auto d-md-flex">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$vuetify.goTo('#AboutUsSection', {duration: 1000,offset: 50,easing: 'easeInOutCubic'})">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$vuetify.goTo('#EventsSection', options)">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$vuetify.goTo('#TeamSection', options)">Members</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="$vuetify.goTo('#BlogSection', options)">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        duration: 1000,
        offset: 350,
        easing: 'easeInOutCubic'
      }
    }
  }
}
</script>

<style lang="css">
.navbar-sec{
padding: 0px;
position: absolute;
left: 0px;
top: 0px;
z-index: 10;
}
#navbar-links .nav-link{
  color:#333;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px 20px;

}
#navbar-links .nav-link:hover{
  color:#fa631c
}
.highlighted{
  color:#fa631c
}
.navbar-brand{
  line-height: 1rem;
  padding:10px 0px 10px 20px;
}
.part1{
  font-weight: 900;
  font-size: 2rem;
}
.part2{
  font-size:0.8rem;
  font-weight: 700;
  color: #9c9c9c;
  letter-spacing: 0.5rem;
}

</style>
