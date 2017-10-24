// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import '@/assets/css/normalize.css'
import '@/assets/css/common.css'
import '@/assets/css/font-awesome.css'
import 'lib-flexible/flexible.js';
Vue.config.productionTip = false
require('vue-swipe/dist/vue-swipe.css');
// in ES6 modules
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
