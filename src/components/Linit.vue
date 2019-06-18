<template>
  <section class="container-fluid linit ">
    <h1 class="text-center font-weight-bold pt-3">LI<span class="highlighted">NI</span>T</h1>
    <blockquote class="text-center">
      <p class="font-italic">The read of open source at NITDGP</p>
    </blockquote>
    <div class="row flex-wrap justify-content-center">
      <div v-for="(linit, index) in linits" :key="index" class="col-xs-11 col-sm-6 col-md-4 col-lg-3 mb-3 mb-lg-2" data-aos="fade-up">
        <a :href="(linit.pdf||'#')">
          <div class="card bg-light book p-3" style="width:100%;height:100%">
            <div class="card-img-top book-cover border border-dark">
              <img :src="linit.image" alt="Card image cap" height="100%" width="100%">
              <div class="overlay p-3">
                <div class="overlay-content d-flex align-items-center justify-content-center">
                  <i class="fas fa-2x fa-glasses d-flex align-items-center justify-content-center"></i>
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
