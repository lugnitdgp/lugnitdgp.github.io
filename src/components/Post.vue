<template>
  <div class="post container-fluid pl-0 pr-0 pb-0 pl-md-5 pr-md-5">
    <h6 class="highlighted text-right mt-2 prev-page" @click="$router.push({ name : 'Blog'})"><u>Go back to previous page</u></h6>
    <div class="container p-0 pl-md-5 pr-md-5">
      <div class="card m-0 m-lg-5 mt-2 post-card">
        <div class="card-body">
          <h1 class="card-title font-weight-bold m-0 mb-0 ml-md-5">{{ post.title }}</h1>
          <span class="card-title font-italic sub m-0 mb-0 ml-md-5">{{ post.author_name }}</span>
          <span class="card-title font-italic sub">&#8226; {{ new Date(post.date_to_show).toLocaleDateString() }}</span>
          <div class="row flex-wrap justify-content-center mt-2 mb-2">
            <div class="card-img" :style="{'background-image':'url('+post.thumbnail_image+')'}" style="{background:center no-repeat}" />
          </div>
          <p class="card-text m-0 ml-md-5 mr-md-5 " v-html="post.content_body" />
        </div>
        <div class="card-footer">
          <vue-disqus shortname="nitdgplug" :identifier="this.$route.params.post" :url="geturl()"></vue-disqus>
        </div>
      </div>
    </div>
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
  background-color: white !important;
}
.highlighted{
  color: #fa631c;
}
.post-card{
  border-radius: 0;
  border: none;
  font-family: "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif;
}
.post-card .card-title{
  font-family: Georgia,Cambria,"Times New Roman",Times,serif;
}
.post-card .card-footer{
  border: 1px solid rgba(0,0,0,.125);
}
.post-card .sub{
  color: #9c9c9c;
  font-size: 1rem;
  font-weight: lighter;
}
.card-text img{
  width: 100% !important;
  height: 100% !important;
}
.card-img {
  color: #fff;
  width: 100vw;
  height: 100%;
  min-height: 40rem;
  background-size: cover;
}
.prev-page{
  cursor: pointer;
}
</style>
