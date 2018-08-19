<template>
  <div class="container blog-section-container">
    <h2 class="text-center font-weight-bold pt-5 pb-3">Our B<span class="highlighted">lo</span>g</h2>
    <div class="row align-items-center">
      <div
        v-for="(item, index) in blog"
        :key="index"
        class="col-10 offset-1 col-md-6 offset-md-0 col-lg-4"
      >
        <v-card class="card">
          <v-card-media
            :src="item.image_url"
            height="200px"
          />

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-2">{{ item.title }}</h3>
              <p class="card-text">{{ item.description }}</p>
            </div>
          </v-card-title>

          <v-card-actions class="justify-content-between">
            <v-btn flat color="orange">Read More</v-btn>  <!-- Add redirection to blog link -->
            <social-sharing
              url="https://vuejs.org/"
              :title="item.title"
              :description="item.description"
              :hashtags="item.keywords || null"
              inline-template
              class="d-inline-flex justify-content-between social-share-container align-items-center"
            >  <!-- Replace url by the actual blog link -->
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
          </v-card-actions>

        </v-card>
      </div>
    </div>

  </div>
</template>

<script>

export default {

  data () {
    return {
      // Temporary data: will be replace by data from API
      blog: [
        {
          title: 'Kangaroo Valley Safari',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
          image_url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
        },
        {
          title: 'Kangaroo Valley Safari',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
          image_url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
        },
        {
          title: 'Kangaroo Valley Safari',
          description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
          image_url: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg'
        }
      ]
    }
  },

  mounted () {
  },

  methods: {
    // Add logic for api call to fetch blog details
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
</style>
