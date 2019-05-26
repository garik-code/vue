import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/'

require('@/assets/style.css')
require('@/assets/css/main.css')
import '@/assets/js/jquery.min.js'
import '@/assets/js/util.js'
import '@/assets/js/main.js'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
