<template>
  <div class="container-fluid Contact-us">
    <div class="row p-0">
      <div class="col-md-12 col-lg-6 p-0 m-0">

        <h2 class="text-center font-weight-bold pt-5 pb-3">G<span class="highlighted">E</span>T IN T<span class="highlighted">UC</span>H</h2>
        <div class="row d-flex justify-content-center">
          <div class="col-11 font-weight-bold ">
            <div class="contact-card">
              Devansh Goenka(President) <br>
              <i class="fas fa-phone" /> +91 96748 25450 <br>
              <i class="fas fa-envelope" /> devanshgoenka97@gmail.com <br>
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-11 font-weight-bold ">
            <div class="contact-card">
              Deeksha Chandwani (Convener) <br>
              <i class="fas fa-phone" /> +91 90835 83214 <br>
              <i class="fas fa-envelope" /> deekshachandvani@gmail.com <br>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-1 links d-flex align-center">
        <div class="row">
          <div class="col col-lg-12">
            <i class="fab fa-lg fa-facebook-f" />
          </div>
          <div class="col col-lg-12">
            <i class="fab fa-lg fa-gitter" />
          </div>
          <div class="col col-lg-12">
            <i class="fab fa-md fa-youtube" />
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-5 p-0">
        <div class="Contact-footer--right" style="background-image: url('static/images/image4.jpeg')">
          <div class="Contact-footer--right-content">
            <div class="row mt-2">
              <div class="col-1 p-0 mr-2">
                <i class="fas fa-map-marker-alt fa-2x" />
              </div>
              <div class="col-10">
                <p> <strong>GNU Linux user's group<br>  NIT Durgapur</strong></p><p> Mahatma Gandhi Rd, A-Zone, Durgapur<br>West Bengal 713209</p>
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
}
</script>

<style scoped>
.Contact-us{
  background-color: #f5f5f5;
}
.contact-card{
  background-color: white;
  margin: 2vh 2vw;
  min-width: 50%;
  padding: 2vw;
  border-left: 0.8vw solid #444;
}
.Contact-footer--right{
  background-size: cover;
  color: white;
  line-height: normal;
  width: 100%;
  height:100%;
  font-size: 0.8rem;
}
.Contact-footer--right-content {margin: 0;
  padding: 3vh 1vw 3vh;
  width: 100%;
  float:left;
  box-sizing: border-box;
}
.Contact-footer--right .Contact-footer--right-content > div {
  position: relative;
  max-width: 70%;
  padding: 36px 36px 36px 36px;
  margin: auto;
  background: #444;
  box-sizing: border-box;
}
.Contact-footer--right .Contact-footer--right-content > div::after {
  position: absolute;
  top: 100%;
  left: 50%;
  width: 0;
  height: 0;
  margin-left: -12px;
  content: " ";
  pointer-events: none;
  border: solid transparent;
  border-width: 12px;
  border-color: rgba(218,77,60,0);
  border-top-color: #444;
}
.links i{
  border:2px solid #444;
  padding: 0.8rem;
  margin: 1rem;
}
.links i:hover{
  border:2px solid #fff;
  background-color: #ff9800;
  color:white;
}
</style>
