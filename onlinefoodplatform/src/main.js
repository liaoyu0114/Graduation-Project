import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import VueAmap from 'vue-amap';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAmap);
Vue.prototype.$bus = new Vue();

// VueAmap.initAMapApiLoader({
//   key: 'd5f3c9b52c6cda4d760ca5df25fcce09',
//   plugin: [
//     'AMap.Autocomplete',
//     'AMap.PlaceSearch',
//     'AMap.Scale',
//     'AMap.OverView',
//     'AMap.ToolBar',
//     'AMap.MapType',
//     'AMap.PolyEditor',
//     'AMap.CircleEditor'
//   ]
// });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
