import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Events from '@/components/Events'
import Blog from '@/components/Blog'
import Post from '@/components/Post'
import Linit from '@/components/Linit'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:post',
      name: 'Post',
      component: Post
    },
    {
      path: '/linit',
      name: 'Linit',
      component: Linit
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
