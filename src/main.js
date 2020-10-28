// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import aos from 'aos'
import 'aos/dist/aos.css'
import SocialSharing from 'vue-social-sharing'
import VueDisqus from 'vue-disqus'
import Vuetify from 'vuetify'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'
import('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(SocialSharing)
Vue.use(VueDisqus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  created () {
    aos.init()
  },
  template: '<App/>'
})
