<template>
    <section class="dev">
      <div class="container recent">
        <div class="row">
          <div class="col-7">
            <a target="_blank" :href="recents[0].canonical_url" class="dev_link">
              <v-card
                  class="mx-auto my-12 latest"
              >
                <v-img
                  class="main_img white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.9)"
                  :src="recents[0].cover_image"
                >
                  <v-card-title class="heading mt-4">{{ recents[0].title }}</v-card-title>
                </v-img>
              </v-card>
            </a>
          </div>
          <div class="ml-5 col-4">
            <div class="row">
              <a target="_blank" :href="recents[1].canonical_url" class="dev_link">
                <v-card
                  class="mx-auto my-12 latest_2"
                >
                  <v-img
                    class="main_img white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.9)"
                    :src="recents[1].cover_image"
                  >
                    <v-card-title class="heading font-weight-bold">{{ recents[1].title }}</v-card-title>
                  </v-img>
                </v-card>
              </a>
            </div>
            
            <div class="row pt-3">
              <a target="_blank" :href="recents[2].canonical_url" class="dev_link">
                <v-card
                    class="mx-auto my-12 latest_2"
                >
                  <v-img
                    class="main_img white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.9)"
                    :src="recents[2].cover_image"
                  >
                    <v-card-title class="heading font-weight-bold">{{ recents[2].title }}</v-card-title>
                  </v-img>
                </v-card>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container all_desktop">
        <div class="row align-items-center">
          <div v-for="article in articles" :key="article.index" class="col-12 col-md-6 col-xl-4">
            <a v-if="article.canonical_url != null" target="_blank" :href="article.canonical_url" class="dev_link">
              <v-card
                class="mx-auto my-12 mt-5 all_card"
              >
                <v-img
                  class="main_img white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.9)"
                  :src="article.cover_image"
                >
                  <v-card-title class="font-weight-bold heading" style="font-size: 1.2rem">{{ article.title }}</v-card-title>
                </v-img>
              </v-card>
            </a>
          </div>
        </div>
      </div>

      <div class="container all_mobile">
        <div class="row align-items-center">
          <div v-for="article in allArticles" :key="article.index" class="col-12 col-md-6 col-xl-4">
            <a v-if="article.canonical_url != null" target="_blank" :href="article.canonical_url" class="dev_link">
              <v-card
                class="mx-auto my-12 mt-5 all_card1"
              >
                <v-img
                  class="main_img white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.9)"
                  :src="article.cover_image"
                >
                  <v-card-title class="font-weight-bold heading" style="font-size: 1.3rem">{{ article.title }}</v-card-title>
                </v-img> 
              </v-card>
            </a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      articles: [],
      recents: [],
      allArticles: []
    }
  },
  created () {
    axios
      .get('https://dev.to/api/articles?username=nitdgplug')
      .then(response => {
        this.articles = response.data
        this.allArticles = [...this.articles]
        this.recents = [...this.articles.slice(0, 3)]
        this.articles.splice(0, 3)
      })
  } 
}
</script>

<style scoped lang="scss">
.v-card {
  box-shadow: rgba(120, 120, 120, 0.533) 0px 2px 3px;
  &:hover .heading {
    transform: transition(color 0.3s ease);
    color: #fa631c !important;
    opacity: 1 !important;
  }
}
.container{
  padding: 15px !important;
}
.latest {
  .heading {
    font-size: 2.2rem;
    font-weight: 900;
  }
  .main_img {
    height: 315px;
    object-fit: contain;
    background-size: contain !important;
  }
}
.latest_2 {
  .heading {
    font-size: 1.1rem;
  }
  .main_img {
    height: 150px;
    object-fit: contain;
  }
}
.all_card {
  .main_img {
    height: auto;
    object-fit: contain;
  }
}
.dev_link {
  text-decoration: none;
  color: black;
}
.all_mobile {
  display: none;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .latest {
    .heading {
      font-size: 1.8rem;
    }
    .main_img {
      height: 280px;
    }
  }
  .latest_2 {
    .heading {
      font-size: 0.9rem;
    }
    .main_img {
      height: 132px;
    }
  }
}
@media only screen and (min-width: 767px) and (max-width: 992px) {
  .latest {
    .heading {
      font-size: 1.6rem;
    }
    .main_img {
      height: 235px;
    }
  }
  .latest_2 {
    .heading {
      font-size: 0.95rem;
    }
    .main_img {
      height: 110px;
    }
  }
  .all_card {
    font-size: 0.9rem !important;
  }
}
@media only screen and (max-width: 767px) {
  .recent, .all_desktop {
    display: none;
  }
  .all_mobile {
    display: block;
    .main_img {
      object-fit: contain;
    }
  }
  .all_card1 {
    height: auto;
    .main_img {
      height: auto;
    }
  }
}
@media only screen and (max-width: 576px) {
  .all_card1 {
    .main_img {
      height: 150px;
    }
    .heading {
      font-size: 1rem !important;
    }
  }
}
</style>
