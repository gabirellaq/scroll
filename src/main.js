// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible'
import './assets/scss/reset.scss'
import 'swiper/dist/css/swiper.css'
import 'mescroll.js/mescroll.min.css'
import './components/global'
import './util/filter'
import './assets/scss/list.scss'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
