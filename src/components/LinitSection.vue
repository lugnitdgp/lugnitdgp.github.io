<template>
  <section class="linit parallax-container">
    <div class="container">
      <div class="row d-flex justify-content-center align-middle">
        <div class="col-md-6 pt-5 pb-5">
          <div class="linit-box">
            <router-link to="/linit">
              <a class="text-dark"><i class="fas fa-2x fa-book" /></a>
            </router-link>
            <h2 class="highlighted font-weight-bold text-uppercase">
              Linit
            </h2>
            <h6 class="font-weight-bold">
              "The world is moving and a company that contents itself with present accomplishment soon falls behind."
            </h6>
            <p class="caption">
              To keep you thus, updated, GLUG publishes LINIT, the annual open source magazine of NIT Durgapur.A perfect specimen of a geek's creativity, this magazine gives us trending technologies at its best.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.highlighted {
  color: #fa631c;
}
.parallax-container {
  height: auto;
  position: relative;
  z-index: 1;
  background-image: url('/static/images/linit.jpeg');
  background-attachment: fixed;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    background-color: rgba(255, 255, 255, 0.7);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
}
.linit-box {
  background-color: #fff;
  box-shadow: 0 10px 18px 0 rgba(152, 152, 152, 0.15);
  border: 1px solid #eee;
  padding: 28px 38px;
  text-align: center;
  max-height: inherit;

  h6 {
    margin-top: 15px;
    margin-bottom: 20px;
  }

  i {
    background-color: #f7f7f7;
    border: 1px solid #eee;
    display: inline-block;
    font-size: 25px;
    height: 60px;
    line-height: 60px;
    margin-bottom: 12px;
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 60px;

    &::after {
      background-color: #ddd;
      content: "";
      height: 46px;
      position: absolute;
      right: 0;
      top: -7px;
      transform: rotate(-31deg);
      width: 8px;
    }
  }

  .caption {
    color:#9c9c9c;
    font-weight: 600;
    font-size: 0.92rem !important;
  }
}
</style>
