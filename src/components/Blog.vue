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
        <Dev />
      </Tab>

      <Tab name="BLOGS">
        <Blog />  
      </Tab>     
    </Tabs>
  </section>
</template>

<script>
import common from '@/services/common.js'
import Tab from './Tab'
import Tabs from './Tabs'
import Dev from './DevTab'
import Blog from './BlogTab'
export default {
  components: {
    Tab,
    Tabs,
    Dev,
    Blog
  },
  data () {
    return {
      recents: [],
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
        this.recents = [...this.blog.slice(0, 3)]
        this.blog.splice(0, 3)
        console.log(this.blog)
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
</style>
