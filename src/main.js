// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "./stylesheets/main.scss"
import "./javascripts/rem.js"

import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import { InfiniteScroll,Toast } from 'mint-ui';

Vue.use(InfiniteScroll);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
