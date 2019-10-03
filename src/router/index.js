import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Events from '@/components/Events'
import Timelines from '@/components/Timelines'
import Blog from '@/components/Blog'
import Post from '@/components/Post'
import Linit from '@/components/Linit'
import PrivacyPolicy from '@/components/PrivacyPolicy'
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
      path: '/timelines',
      name: 'Timelines',
      component: Timelines
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
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
