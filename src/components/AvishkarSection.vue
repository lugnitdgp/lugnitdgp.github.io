<template lang="html">
  <section class="aavishkar container-fluid mt-5 mb-4">
    <div class="row">
      <div class="col-lg-6 justify-content-center">
        <h3 class="sub-1 text-center pt-5">
          We believe in
        </h3>
        <h1 class="sub-2 font-weight-bold text-center highlighted p-0">
          Aavishkar
        </h1>
        <p class="sub-3 text-justify">
          A tech fest that is not just an arena to exhibit but also an environment to learn. Our motto is to unveil in this college a fantasy world of technology. From organising prestigious events like Hackathon, to creating an entire tournament for the cricket and football fans and a series of online, mind throbbing and addictive events, this fest is known for its diverse nature. This fest is a witness to some of the most inspiring speeches delivered by  men of eminence in this field. It is an escape from the daily mundane of college life and opens a door to three days of complete insanity.
        </p>
        <div class="row ">
          <div class="col-12 d-flex align-right ">
            <v-btn flat color="orange" @click="redirectTo('https://avskr.in/')">
              Take a tour!
            </v-btn>
          </div>
        </div>
      </div>

      <div class="col-lg-6 parallax-container">
        <img class="img-responsive" src="static/images/aavishkar-logo.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    redirectTo (url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
.aavishkar {
  background-color: #f5f5f5;
  min-height: 60vh;

  .col-lg-6:first-child {
    padding-left: 30px;
    padding-right: 30px;

    @media only screen and (max-width: 992px) {
      margin-bottom: 30px;
    }
  }

  .sub-1 {
    font-weight: 700;
    color: #000;
    letter-spacing: 0.4rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .sub-2 {
    margin-bottom: 30px;
    font-size: 2.6rem;
    text-transform: uppercase;
  }
  .highlighted {
    color: #fa631c
  }
  .sub-3 {
    color: #9c9c9c;
    font-size: 0.94rem;
  }
  .v-btn {
    margin-top: 30px;
    font-size: 1.5rem;
  }

  .parallax-container {
    min-height: 60vh;
    background-attachment: fixed;
    background-image: url('/static/images/logo-bg.jpeg');
    background-position: right center;
    background-size: cover;
    overflow: hidden;

    img {
      height: 60vh;
      margin: 0 auto;
      display: block;
    }

    &::before {
      background-color: rgba(5, 20, 41, 0.5);
      content: "";
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }

    &::after {
      background-color: rgba(255, 255, 255, 0.9);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }
  }
}
</style>
