import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$bus = new Vue();

/**
 * 重写路由的push方法
 */
// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if (isChunkLoadFailed) {
//     router.replace(targetPath);
//     console.log(targetPath)
//   }
//   console.log(targetPath)
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
