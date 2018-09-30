import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Events from '@/components/Events'

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
    }
  ]
})
