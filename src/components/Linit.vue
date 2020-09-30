<template>
  <section class="container-fluid linit">
    <h1 class="text-center font-weight-bold pt-3">
      LI<span class="highlighted">NI</span>T
    </h1>
    <blockquote class="text-center">
      <p class="font-italic">The read of open source at NITDGP</p>
    </blockquote>
    <div class="row flex-wrap justify-content-center">
      <div
        v-for="(linit, index) in linits"
        :key="index"
        class="col-xs-11 col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-2"
      >
        <a href="#" @click="onSelectYear(linit.year_edition)">
          <div
            class="card bg-light book p-3"
            style="width: 100%; height: 100%"
            data-aos="fade-up"
            data-toggle="modal"
            :data-target="'#linitModal' + linit.year_edition"
          >
            <div class="card-img-top book-cover">
              <img
                :src="linit.image"
                alt="Card image cap"
                height="100%"
                width="100%"
                class="responsive"
              />
              <div class="overlay p-3">
                <div
                  class="overlay-content d-flex align-items-center justify-content-center"
                >
                  <i
                    class="fas fa-2x fa-glasses d-flex align-items-center justify-content-center"
                  ></i>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h4 class="card-title font-weight-bold">{{ linit.title }}</h4>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div v-for="(linit, index) in linits" :key="index" class="linit-modal">
      <div
        :id="'linitModal' + linit.year_edition"
        ref="linit-modal"
        class="modal fade hide in"
        data-backdrop="static"
        data-keyboard="false"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
        style="padding: 0px !important"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                X
              </button>
            </div>
            <div class="modal-body" style="padding: 0rem">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  height: 90%;
                  overflow-y: scroll;
                "
              >
                <img
                  v-for="image in images"
                  :key="image"
                  :src="image"
                  style="width: 100%; padding: 20px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import common from "@/services/common.js";
export default {
  data() {
    return {
      selectedYear: "",
      linits: [],
      images: [],
    };
  },
  created() {
    common.getLinits().then((response) => {
      this.linits = response.data;

      this.linits.sort(function (a, b) {
        return parseFloat(b.year_edition) - parseFloat(a.year_edition);
      });
      this.$emit("hideloader", true);
      this.$emit("hideloader", true);
      this.$emit("hideloader", true);
    });
  },
  mounted() {
    // var myIframe = document.getElementsByTagName("iframe").getContent;
    // console.log(myIframe);
    
  },
  methods: {
    onSelectYear: function (year) {
      this.selectedYear = year;
      let self = this;
      common.getLinitImages(year)
        .then((response) => {
          self.images = response.data.links;
        });
    },
  },
};
</script>

<style scoped>
.linit {
  background-size: cover;
  min-height: 100vh;
  padding-top: 5rem;
}
.linit h1 {
  font-size: 3rem;
}
img {
    pointer-events: none;
}

.highlighted {
  color: #fa631c;
}
.card {
  box-shadow: 0 0 10px #aaa;
}
.card:hover {
  box-shadow: 0 0 20px #aaa;
}
.book-cover {
  border-width: 2px !important;
  height: 280px;
  width: 100%;
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
.overlay-content {
  height: 100%;
  width: 100%;
}
.card:hover .overlay {
  opacity: 1;
}
.card:hover .overlay-content {
  border: 2px solid #fa631c;
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
.responsive {
  background-size: contain;
}
blockquote p {
  display: inline;
  color: #9c9c9c;
}
a {
  text-decoration: none;
  color: inherit;
}
a:hover {
  color: #fa631c;
  text-decoration: none;
}
.modal {
  height: 100vh;
  z-index: 20000;
  font-size: 1.05rem;
  overflow: scroll;
}
.modal-lg {
  max-width: 80%;
}
.modal-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
}
iframe {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
@media only screen and (max-width: 576px) {
  .modal {
    padding-top: 10%;
  }
  .modal-lg {
    max-width: 100vw;
  }
  .modal-body {
    height: 85vh;
  }
}
@media only screen and (min-width: 1550px) {
  .responsive {
    width: 90%;
    padding-left: 10%;
  }
}
</style>
