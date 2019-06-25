<template>
  <section class="container-fluid blog">
    <h1 class="text-center font-weight-bold pt-3">TO <span class="highlighted"> BLOG</span></h1>
    <p class="text-center font-weight-bold">To share.To connect.To create.To inspire.</p>
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
              <div class="card-img-bottom" :style="{'background-image':'url('+props.item.thumbnail_image+')'}" style="{background:center no-repeat}" />
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card-block">
                <h4 class="card-title font-weight-bold pl-3 pt-3 pr-3 mb-1">{{ props.item.title }}</h4>
                <p class="card-text pl-3 m-0"><i class="fas fa-calendar-alt" /> {{ new Date(props.item.date_to_show).toLocaleDateString() }}<br>
                  <i class="fas fa-pen" /> {{ props.item.author_name }}
                </p>
                <div class="content pl-3">
                  <p class="font-italic" v-html="props.item.content_body" />
                </div>
                <router-link :to="{ name: 'Post' , params: { post: ConvertToKebabCase(props.item.title)} , query: {id : props.item.id}}" class="btn btn-md m-3" color="orange">Read</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-data-iterator>
  </section>
</template>

<script>
import common from '@/services/common.js'
export default {
  data () {
    return {
      blog: [],
      rowsPerPageItems: [1],
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
  height: 100%;
  min-height: 15rem;
  background-size: cover;
}
</style>
