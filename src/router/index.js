import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Test from '@/components/Test'
import Generic from '@/components/Generic'
import Elements from '@/components/Elements'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainHome',
      component: Home
    },
    {
      path: '/test/:id',
      name: 'Test',
      component: Test
    },
    {
      path: '/generic',
      name: 'Generic',
      component: Generic
    },
    {
      path: '/elements',
      name: 'Elements',
      component: Elements
    }
  ]
})
