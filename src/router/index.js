import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
<<<<<<< HEAD
=======
import Events from '@/components/Events'
>>>>>>> cefa8175d7bb64a99dbc0de961c7feef9c7e57b0

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
<<<<<<< HEAD
=======
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
>>>>>>> cefa8175d7bb64a99dbc0de961c7feef9c7e57b0
    }
  ]
})
