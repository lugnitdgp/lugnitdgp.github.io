<template>
  <section class="blogs">
    <div class="container recent">
        <div class="row">
            <div class="col-7">
              <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(recents[1].title)} , query: {id : recents[0].id}}" class="blog_link">
                <v-card
                  class="mx-auto my-12 latest"
                  style="background-color: #000;"
                >
                  <v-img
                    class="main_img white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                    :src="recents[0].thumbnail_image"
                  >
                    <v-card-title class="card-title font-weight-bold">{{ recents[0].title }}</v-card-title>
                  </v-img>
                </v-card>
              </router-link>
            </div>
            <div class="ml-5 col-4">
              <div class="row">
                <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(recents[1].title)} , query: {id : recents[0].id}}" class="blog_link">
                  <v-card
                    class="mx-auto my-12 latest_2"
                  >
                    <v-img
                      class="main_img white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                      :src="recents[1].thumbnail_image"
                    >
                      <v-card-title class="card-title font-weight-bold">{{ recents[1].title }}</v-card-title>
                    </v-img> 
                  </v-card>
                </router-link>
              </div>
                
                <div class="row pt-3">
                  <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(recents[2].title)} , query: {id : recents[2].id}}" class="blog_link">
                    <v-card
                        class="mx-auto my-12 latest_2"
                    >
                      <v-img
                        class="main_img white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                        :src="recents[2].thumbnail_image"
                      >
                        <v-card-title class="card-title font-weight-bold">{{ recents[2].title }}</v-card-title>
                      </v-img>
                    </v-card>
                  </router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="container all_desktop">
        <div class="row align-items-center">
            <div v-for="b in blog" :key="b.id" class="col-12 col-md-6 col-xl-4">
              <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(b.title)} , query: {id : b.id}}" class="blog_link">
                <v-card
                class="mx-auto my-12 mt-5 all_card"
                >
                  <v-img
                    class="main_img white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                    :src="b.thumbnail_image"
                  >
                    <v-card-title class="card-title font-weight-bold">{{ b.title }}</v-card-title>
                  </v-img>
                </v-card>
              </router-link>
            </div>
        </div>
    </div>

    <div class="container all_mobile">
        <div class="row align-items-center">
            <div v-for="blogs in allBlogs" :key="blogs.id" class="col-12 col-md-6">
              <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(blogs.title)} , query: {id : blogs.id}}" class="blog_link">
                <v-card
                class="mx-auto my-12 mt-5 all_card"
                >
                  <v-img
                    class="main_img white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.6)"
                    height="auto"
                    :src="blogs.thumbnail_image"
                  >
                    <v-card-title class="card-title font-weight-bold">{{ blogs.title }}</v-card-title>
                  </v-img> 
                </v-card>
              </router-link>
            </div>
        </div>
    </div>     
  </section>
</template>

<script>
import common from '@/services/common.js'
export default {
  data () {
    return {
      recents: [],
      allBlogs: [],
      blog: []
    }
  },
  created () {
    common.getBlogPosts()
      .then(response => {
        this.blog = response.data
        this.blog.sort(function (a, b) { return new Date(b.date_to_show) - new Date(a.date_to_show) })
        this.allBlogs = [...this.blog]
        this.recents = [...this.blog.slice(0, 3)]
        this.blog.splice(0, 3)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
      })
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

<style scoped lang="scss">
.v-card {
  box-shadow: rgba(120, 120, 120, 0.533) 0px 2px 3px;
  &:hover .card-title {
    transform: transition(color 0.3s ease);
    color: #fa631c !important;
    opacity: 1;
  }
}
.blog_link {
  text-decoration: none;
  color: black;
}.main_img{
  background-color: #000;
}
.latest {
  .card-title {
    font-size: 2rem;
    font-weight: 900;
  }
  .main_img {
    height: 340px;
  }
}
.latest_2 {
  .main_img {
    height: 162px;
    object-fit: contain;
  }
  .card-title {
    font-size: 1rem;
  }
}
.all_mobile {
  display: none;
}
.all_card {
  .main_img {
    height: 200px;
    object-fit: contain;
  }
  .card-title {
    font-size: 1.2rem;
  }
}
@media only screen and (max-width: 1264px) and (min-width: 992px) {
  .latest {
    .main_img {
      height: 295px;
      object-fit: contain;
    }
    .card-title {
      font-size: 2rem;
    }
  }
  .latest_2 {
    .card-title {
      font-size: 0.9rem;
    }
    .main_img {
      height: 140px;
    }
  }
  .all_card {
    .main_img {
      height: 180px;
      object-fit: contain;
    }
    .card-title {
      font-size: 1.3rem;
    }
  }  
}
@media only screen and (max-width: 992px) and (min-width: 767px) {
  .latest {
    .main_img {
      height: 268px;
      object-fit: contain;
    }
    .card-title {
      font-size: 1.6rem;
    }
  }
  .latest_2 {
    .card-title {
      font-size: 0.8rem;
    }
    .main_img {
      height: 126px;
    }
  }
  .all_card {
    .main_img {
      height: 200px;
      object-fit: contain;
    }
    .card-title {
      font-size: 1.1rem;
    }
  }  
}

@media only screen and (max-width: 767px) {
  .recent, .all_desktop {
    display: none;
  }
  .all_mobile {
    display: block;
  }
}
</style>
