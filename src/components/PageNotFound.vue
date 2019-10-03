<template>
  <div class="container-fluid">
    <nav-bar />
    <div class="row d-inline-flex align-content-center">
      <div class="speech-box">
        <h2>Hmm. Awkward</h2>
        <p>Sorry, but the page you were looking for has gone missing. Perhaps you clicked on an outdated link or someone moved something. I am looking at it.</p>
        <p>Why don't you go to one of the following pages</p>
        <a href="/">Home</a>
        <a href="/events">Events</a>
        <a href="/timelines">Timelines</a>
        <a href="/team">Members</a>
        <a href="/blog">Blog</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'PageNotFound',
  components: {
    NavBar
  },
  created () {
    this.$emit('hideloader', true)
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  height: 100vh;
  padding: 20px;
  background-image: url('/static/images/detective-bg.png');
  background-position: center;
  background-size: cover;

  .row {
    height: 100%;

    img {
      max-width: 45%;
      max-height: 400px;

      @media only screen and (min-width: 768px) {
        max-width: 35%;
      }
    }

    .speech-box {
      position: absolute;
      left: 40%;
      top: 150px;
      width: 450px;
      border-radius: .4em;
      padding: 30px 40px;
      background-image: linear-gradient(to bottom, #f6f6f6 80%, #e0e0e0);
      border: none;
      height: 340px;
      flex: 0 1 auto;
      z-index: 100;

      @media only screen and (min-width: 768px) {
        height: 270px;
      }

      h2 {
        color: #fa631c;
        margin-bottom: 20px;
      }

      p {
        color: #9c9c9c;

        &:nth-child(3) {
          margin-bottom: 25px;
        }
      }

      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 40%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-right-color: #f6f6f6;
        border-left: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-left: -20px;
      }

      a {
        color: #6d6d6d;
        padding: 5px 15px;
        border: 2px dashed #fa931c;
        margin-right: 10px;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
