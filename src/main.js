import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/normalize.css'
import '@/assets/css/common.css'
import '@/assets/css/font-awesome.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
