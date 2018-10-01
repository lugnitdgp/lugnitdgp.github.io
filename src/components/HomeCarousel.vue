<template>
  <section id="showcase">
    <div id="homeCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">

      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          v-for="(item, index) in carousel"
          :key="index"
          data-target="#homeCarousel"
          :data-slide-to="index"
          :class="[index == 0 ? 'active' : '']"
        />
      </ol>

      <!-- Carousel items -->
      <div class="carousel-inner">
        <div
          v-for="(item, index) in carousel"
          :key="index"
          :class="[index == 0 ? 'active' : '', 'carousel-item']"
          :style="{ background: 'url(' + item.image + ')' }"
        >
          <div class="cover" />
          <div class="container">
            <div class="carousel-caption text-left mb-5">
              <h1 class="carousel-heading">{{ item.heading }}</h1>
              <p class="lead carousel-subtitle d-none d-md-block">{{ item.sub_heading }}</p>
              <a href="#" class="btn btn-custom text-uppercase d-none d-md-inline-block">Explore</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Control buttons -->
      <a href="#homeCarousel" data-slide="prev" class="carousel-control-prev">
        <span class="carousel-control-prev-icon" />
      </a>
      <a href="#homeCarousel" data-slide="next" class="carousel-control-next">
        <span class="carousel-control-next-icon" />
      </a>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    'carousel': {
      type: Array,
      default: null
    }
  },
  created () {
    var carouselItems = document.getElementsByClassName('carousel-item')
    var len = carouselItems.length
    for (var i = 0; i < len; i++) {
      const style = getComputedStyle(carouselItems[i])
      var background = style.backgroundImage
      var backgroundImageUrl = background.match(/\((.*?)\)/)[1].replace(/('|")/g, '')

      var img = new Image()
      img.src = backgroundImageUrl
      img.onload = () => this.$emit('stoploader')
    }
  }
}

</script>

<style lang="scss" scoped>
.carousel-item {
  height: 100vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;

  .cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .carousel-caption {

    .carousel-heading {
      font-size: 48px;
      transform: translateX(-15px);
      opacity: 0;

      @media(max-width: 768px) {
        font-size: 42px;
        text-align: center !important;
      }
    }

    .carousel-subtitle {
      transform: translateX(15px);
      opacity: 0;
      font-size: 18px;
    }

    .btn-custom {
      background-color: #fff;
      color: #fa631c;
      font-weight: 600;
      padding: 14px 18px;
      border-radius: 50px;
      font-size: 14px;
      font-family: "Roboto", sans-serif;
      opacity: 0;

      &:hover {
        color: #fff;
        background-color: #051429;
      }
    }
  }
}

.active {
  .carousel-heading {
    animation: slideInLeft 1.2s linear forwards;
  }
 .lead {
    animation: slideInRight 1.2s cubic-bezier(.24, 1, .72, 1) forwards;
  }
  .btn-custom {
    animation: slideInBottom 1s linear forwards;
  }
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

@keyframes slideInBottom {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  98% {
    opacity: 0.9;
    transform: translateY(0px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
