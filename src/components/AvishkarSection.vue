<template lang="html">
  <section class="avishkar container-fluid mt-5 mb-4">
    <div class="row">
      <div class="col-lg-6 justify-content-center">
        <h3 class="sub-1 text-center pt-5">WE BELIEVE IN</h3>
        <h1 class="sub-2 font-weight-bold text-center highlighted p-0">AAVISHKAR</h1>
        <p class="sub-3">A tech fest that is not just an arena to exhibit but also an environment to learn.<br>
          Our motto is to unveil in this college a fantasy world of technology. From organising prestigious events like Hackathon, to creating an entire tournament for the cricket and football fans and a series of online, mind throbbing and addictive events, this fest is known for its diverse nature. This fest is a witness to some of the most inspiring speeches delivered by  men of eminence in this field. It is an escape from the daily mundane of college life and opens a door to three days of complete insanity.</p>
        <div class="row ">
          <div class="col-12 d-flex align-right ">
            <v-btn flat color="orange" class="">Take a tour!</v-btn>
          </div>
        </div>

      </div>
      <div class="col-lg-6 parallex-container" style="background-image: url('static/images/image6.jpg')" />
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.avishkar{
  background-color: #f5f5f5;
  min-height: 60vh;
}
.parallex-container {
    min-height: 60vh;
    background-attachment: fixed;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
}
.parallex-container::after {
  background-color: rgba(255, 255, 255, 0.9);
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
.parallex-container::before {
  background-color: rgba(5, 20, 41, 0.76);
  content: "";
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
.sub-1{
  font-weight: 700;
  color: #000;
  letter-spacing: 0.4rem;
}
.sub-3{
  color:#9c9c9c;
  font-size: 0.9rem;
}
.highlighted{
  color:#fa631c
}
</style>
