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
         <div>
   <div v-for="article in articles" :key="article.index">
       <div className="container-fluid blog" style="
     display: flex;
     flex-direction: row;
     flex-wrap: no-wrap;
     overflow-x: auto;
     padding: 20px;">
            <div class="item" style=" position: relative;
      flex-shrink: 0;
      width: 500px;
      height: 400px;
       border-radius: 5px;
       border: 2px solid #dedede;
      margin-right: 15px;
      padding: 10px;
      box-shadow: 5px 5px 10px #78787888;">
             <h1 className="heading"><strong>{{ article.title }}</strong></h1>
              
                   <img class="card-img-bottom" :src="article.cover_image" />
               <div className="icons" style="width: 100%;
      position: absolute;
      bottom: 10px;
       display: flex;
         flex-direction: row;
      align-items: center;
     justify-content: space-around;">
                  <svg width="80px" fill="red">
           <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
        </svg>
                  <p><strong>{{article.positive_reactions_count}}</strong></p>
                  <svg width="80px" fill="red">
           <path d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"></path>
         </svg>
                  <p><strong>{{article.comments_count}}</strong></p>

            
             <a v-if="article.canonical_url != null" target="_blank" :href="article.canonical_url">READ MORE</a>
            
                </div>
            </div>
              </div>
            </div>
          </div>



      </Tab>
       <Tab name="BLOGS" >
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
  },
  
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
