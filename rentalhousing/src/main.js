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



Vue.config.productionTip = false;
Vue.prototype.$post = postMessage
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
