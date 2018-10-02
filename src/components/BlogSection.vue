<template>
  <div class="container blog-section-container">
    <h2 class="text-center font-weight-bold pt-5 pb-3">Our B<span class="highlighted">lo</span>g</h2>
    <div class="row align-middle d-flex flex-wrap">
      <div v-for="(item, index) in blog"
           :key="index"
           class="col-12 col-md-6 col-lg-4 mb-2"
      >
        <div class="card" style="width:100%;height:100%">
          <img class="card-img-top" :src="item.thumbnail_image" alt="Card image cap" height="200px">
          <div class="card-body">
            <h4 class="card-title font-weight-bold">{{ item.title }}</h4>
            <div class="card-text" v-html="item.content_body" />
          </div>
          <div class="card-footer">
            <div class="row">
              <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(item.title)} , query: {id : item.id}}"><v-btn flat color="orange" class="m-0">Read More</v-btn></router-link>
              <v-spacer />
              <social-sharing
                url="https://vuejs.org/"
                :title="item.title"
                :description="item.description"
                :hashtags="item.keywords || null"
                inline-template
                class="d-inline-flex justify-content-between social-share-container align-items-center"
              >
                <div>
                  <network network="facebook">
                    <i class="fab fa-facebook-f d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                  <network network="linkedin">
                    <i class="fab fa-linkedin d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                  <network network="reddit">
                    <i class="fab fa-reddit d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                  <network network="twitter">
                    <i class="fab fa-twitter d-inline-flex social-share-icons justify-content-center align-items-center" />
                  </network>
                </div>
              </social-sharing>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/global.css'

export default {
  props: {
    'blog': {
      type: Array,
      default: null
    }
  },
  methods: {
    ConvertToKebabCase (string) {
      return string.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase()
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 32px;
  text-transform: uppercase;
}
.highlighted {
  color: #fa631c;
}
.card {
  margin-bottom: 15px;
}
.headline {
  font-size: 20px;
}
.card-text {
  color: #9c9c9c;
}
.v-btn {
  padding: 0 10px;
}
.card-text {
  height: auto;
  max-height: 60px;
  overflow: hidden;
}
</style>
