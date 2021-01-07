<template>
  <section class="container-fluid blog">
    <h1 class="text-center font-weight-bold pt-3">
      TO <span class="highlighted"> BLOG</span>
    </h1>
    <p class="text-center font-weight-bold">
      To share.To connect.To create.To inspire.
    </p>
    <Tabs>
       <Tab name="DEV" selected="true">
   <div v-for="article in articles" :key="article.index">
   <div class="container">
    
       <div class="card-header p-2 pl-3">
 <div className="item" style=" position: relative;
  flex-shrink: 0;
  width: auto;
  max-width: 500px;
  height: auto;
  border-radius: 5px;
  border: 2px solid #dedede;
  margin-right: auto;
  padding: 20px;
  margin-left: auto;
  box-shadow: 5px 5px 10px #78787888;"
  >

 <h1 className="heading"><strong>{{ article.title }}</strong></h1>
   <img class="card-img-bottom" :src="article.cover_image" />
     
          <div class="row" style="width: 70%; margin: 0 auto; display: flex;
          justify-content: center;
          align-items: center;
          "
          >
                      
      <i class="fa fa-heart" aria-hidden="true" style="margin: 10px auto; font-size: 20px;"> <strong>{{ article.positive_reactions_count }}</strong></i>
  
    <i class="fas fa-comment" aria-hidden="true" style="margin: 10px auto;  font-size: 20px;">  <strong>{{ article.comments_count }}</strong></i>
    <a v-if="article.canonical_url != null" target="_blank" :href="article.canonical_url" style="margin: 10px auto; font-size: 30px;"><i class="fab fa-dev" /></a>
  </div>
</div>
</div>
</div>
</div>

       </Tab>

       <Tab name="BLOGS">
    <v-data-iterator
      content-tag="div"
      content-class="row flex-wrap justify-content-center d-flex p-2"
      :items="blog"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      :search="SearchQuery"
      no-data-text="Blog posts coming soon."
      prev-icon="fas fa-caret-left"
      next-icon="fas fa-caret-right"
    >
      <div slot="item" slot-scope="props" class="col-sm-12 col-md-8 p-2">
        <div v-if="props.item.show_bool" class="card post bg-light" data-aos="fade-up" data-aos-duration="600">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <img class="card-img-bottom" :src="props.item.thumbnail_image" />
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card-block">
                <h4 class="card-title font-weight-bold pl-3 pt-3 pr-3 mb-1">
                  {{ props.item.title }}
                </h4>
                <p class="card-text pl-3 m-0">
                  <i class="fas fa-calendar-alt" /> {{ new Date(props.item.date_to_show).toLocaleDateString() }}<br>
                  <i class="fas fa-pen" /> {{ props.item.author_name }}
                </p>
                <div class="content pl-3">
                  <p class="font-italic" v-html="props.item.content_body" />
                </div>
                <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(props.item.title)} , query: {id : props.item.id}}" class="btn btn-md m-3" color="orange">
                  Read
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-data-iterator>
       </Tab>
      
    </Tabs>
  </section>
</template>

<script>
import common from '@/services/common.js'
import axios from 'axios'
import Tab from './Tab'
import Tabs from './Tabs'
export default {
  components: {
    Tab,
    Tabs
  },
  data () {
    return {
      blog: [],
      rowsPerPageItems: [1],
      articles: [],
      pagination: {
        rowsPerPage: 10
      }
    }
  },
  created () {
    common.getBlogPosts()
      .then(response => {
        this.blog = response.data
        this.blog.sort(function (a, b) { return new Date(b.date_to_show) - new Date(a.date_to_show) })
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
        this.$emit('hideloader', true)
      })
  },
  mounted () {
    axios
      .get('https://dev.to/api/articles?username=nitdgplug')
      .then(response => {
        this.articles = response.data
        console.log(this.articles)
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
.blog{
  background-size: cover;
  min-height: 100vh;
  padding-top: 5rem;
}
.blog .btn{
  background-color: #fa631C;
  color:white;
  cursor: pointer;
}
.highlighted{
  color:#fa631c;
}
.post{
  color: rgb(5,20,41);
  box-shadow:0 0.1875rem 1.5rem rgba(0,0,0,0.2);
  &:hover .card-title {
  transform: transition(color 0.3s ease);
  color: #fa631c ;
  }
  &:hover .card-img-bottom {
  transform:  transition(opacity 0.3s ease);
  opacity: 0.8;
}
}
.content{
  color:#9c9c9c;
  max-height: 3.5rem;
  overflow: hidden;
}
.card-img-bottom {
  color: #fff;
  height: auto;
  width: 100%;
  background-size: cover;
}
</style>
