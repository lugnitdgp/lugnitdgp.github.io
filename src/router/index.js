import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
<<<<<<< HEAD
import Events from '@/components/Events'
=======
>>>>>>> 9c9027cff8ac92367591573a648b99f8908809a5

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
<<<<<<< HEAD
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
=======
>>>>>>> 9c9027cff8ac92367591573a648b99f8908809a5
    }
  ]
})
