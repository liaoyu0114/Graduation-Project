import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import VueParticles from 'vue-particles'
import moment from 'moment'
// import '../public/7b13e9176e'

import axios from "axios"

import postMessage from "./network/request"
import token from "./network/token"

Vue.config.productionTip = false;
Vue.prototype.$post = postMessage
Vue.prototype.$axios = axios
Vue.prototype.$token = token

Vue.filter('formatDate', function (input, fmtstring) {
  return moment(Number(input)).format(fmtstring)
});
Vue.use(ElementUI);
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
