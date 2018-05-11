import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import BodyScrollPage from '@/pages/BodyScrollPage'
import ListScrollPage from '@/pages/ListScrollPage'
import ListScrollPage2 from '@/pages/ListScrollPage2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/BodyScrollPage',
      name: 'BodyScrollPage',
      component: BodyScrollPage
    },
    {
      path: '/ListScrollPage',
      name: 'ListScrollPage',
      component: ListScrollPage
    },
    {
      path: '/ListScrollPage2',
      name: 'ListScrollPage2',
      component: ListScrollPage2
    }
  ]
})
