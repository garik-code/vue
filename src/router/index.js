import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Reg from '@/components/Reg'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    // {
    //   path: '/test/:id',
    //   name: 'Test',
    //   component: Test
    // }
  ]
})
