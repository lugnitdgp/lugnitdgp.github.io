<template>
  <section class="container fest-logo-container mb-5">
    <h2 class="text-center font-weight-bold pt-5 pb-3">
      Our F<span class="highlighted">es</span>ts
    </h2>
      <div class="row align-middle d-flex flex-wrap">
        <div class="col-md-12 col-lg-4">
          <div>
            <img src="static/images/Mukti-17-logo.png" class="logo">
          </div>
          <div class="mukti"></div>
        </div>

        <div class="col-md-12 col-lg-4">
          <div class="avatar">
            <img src="static/images/aavishkar-logo.png" class="logo">
          </div>
          <div class="aavishkar"></div>
        </div>

        <div class="col-md-12 col-lg-4">
          <div>
            <img src="static/images/aarhn.png" class="aarhn-logo">
          </div>
          <div class="aarohan"></div>
        </div>
      </div>

  </section>
</template>

<script>
import '../assets/css/global.css'

export default {

}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 32px;
  text-transform: uppercase;

  .highlighted {
    color: #fa631c;
  }
}

.logo {
  width: 320px;
  height: 320px;
  border-radius: 50%;
}

.aarhn-logo {
  width: 320px;
  height: 320px;
  margin-top: -20px;
}

.col-lg-4 {
  text-align: center;
}

.col-md-12{ 
  text-align: center;
}

@keyframes changeLetter {
  0% {
    content: "AAVISHKAR";
  }
  50% {
    color: white;
  }
  100% {
    content: "2017 - 18";
  }
}

.aavishkar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
  font-weight: 600;
  color: #fa631c;
  &:after {
    animation: changeLetter 4s linear infinite alternate;
    display: block;
    content: "A";
    font-size: 25px;
  }
}

@keyframes muktiCaption {
  0% {
    content: "MUKTI";
  }
  50% {
    color: white;
  }
  100% {
    content: "2005 - 17";
  }
}

.mukti {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-top: -50px;
  color: #fa631c;
  &:after {
    animation: muktiCaption 4s linear infinite alternate;
    display: block;
    content: "A";
    font-size: 25px;
  }
}

@keyframes aarhn-caption {
  0% {
    content: "AAROHAN";
  }
  50% {
    color: white;
  }
  100% {
    content: "2020 - Present";
  }
}

.aarohan {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-top: -30px;
  color: #fa631c;
  &:after {
    animation: aarhn-caption 4s linear infinite alternate;
    display: block;
    content: "A";
    font-size: 25px;
  }
}

@media only screen and (max-width: 576px) {
  .logo {
    width: 300px;
    height: 300px;
  }

  .aarhn-logo {
    width: 270px;
    height: 270px;
  }

  .aarohan, .mukti, .aavishkar {
    &:after {
      font-size: 20px;
    }
  }
}

@media only screen and (max-width: 992px) and (min-width: 764px) {
  .logo, .aarhn-logo {
    width: 350px;
    height: 350px;
  }
}

@media only screen and (max-width: 1264px) and (min-width: 992px) {
  .logo {
    width: 270px;
    width: 270px;
  }

  .aarhn-logo {
    width: 270px;
    height: 270px;
    margin-top: 20px;
  }

  .aarohan {
    margin-top: -23px;
  }
}

</style>
