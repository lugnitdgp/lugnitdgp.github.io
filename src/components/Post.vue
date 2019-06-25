<template>
  <div class="post container-fluid bg-light">
    <h6 class="highlighted text-right mt-2 prev-page" @click="$router.push({ name : 'Blog'})"><u>Go back to previous page</u></h6>
    <div class="card m-0 m-lg-5 mt-2 mb-2 post-card">
      <div class="card-body">
        <h1 class="card-title font-weight-bold mb-0"><u>{{ displayheading(post.title).first }}<span class="highlighted">{{ displayheading(post.title).second }}</span>{{ displayheading(post.title).third }}</u></h1>
        <span class="card-title font-italic sub mb-0">{{ post.author_name }}</span>
        <span class="card-title font-italic sub">&#8226; {{ new Date(post.date_to_show).toLocaleDateString() }}</span>
        <div class="row flex-wrap justify-content-center mt-2 mb-2">
          <div class="card-img col-md-8 col-sm-10" :style="{'background-image':'url('+post.thumbnail_image+')'}" style="{background:center no-repeat}" />
        </div>
        <p class="card-text" v-html="post.content_body" />
      </div>
    </div>
    <vue-disqus shortname="glug-nitdgp" :identifier="this.$route.params.post" :url="geturl()"></vue-disqus>
  </div>

</template>
<script>
import common from '@/services/common.js'
export default {
  data () {
    return {
      post: null
    }
  },
  created () {
    common.getPost(this.$route.query.id)
      .then(response => {
        this.post = response.data
        console.log(this.post)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
      })
      .catch(e => {
        console.log(e)
      })
  },

  methods: {
    displayheading (text) {
      var length = text.length
      var middle = length / 2
      var highlighted = 7
      return {
        first: text.substr(0, middle),
        second: text.substr(middle, highlighted),
        third: text.substr(highlighted + middle, length)
      }
    },
    geturl () {
      var response = window.location.href
      // eslint-disable-next-line
      if (response.indexOf('#') == -1) {
        return response
        // eslint-disable-next-line
      }
      else {
        return this.removehash(response)
      }
    },
    removehash (string) {
      const a = string.indexOf('#')
      var resp
      if (a > -1) {
        resp = string.substr(0, a - 1) + string.substr(a + 1)
        return resp
      }
    }
  }
}
</script>

<style scoped>
.post{
  background-size: cover;
  min-height: 100vh;
  padding-top: 5rem;
  border-bottom: 1px dashed #fa631c;
}
.highlighted{
  color:#fa631c;
}
.post-card .sub{
  color:#9c9c9c;
  font-size: 1rem;
  font-weight: lighter;
}
.card-img {
  color: #fff;
  height: 100%;
  width:100%;
  min-height: 25rem;
  background-size: cover;
  -moz-box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 55px inset;
  -webkit-box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 55px inset;
  box-shadow: rgba(0, 0, 0, 0.8) 5px 5px 55px inset;
}
.prev-page{
  cursor: pointer;
}
</style>
