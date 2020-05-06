import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/7b13e9176e'


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
/* 路由异常错误处理，尝试解析一个异步组件时发生错误，重新渲染目标页面 */
// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if (isChunkLoadFailed) {
//     router.replace(targetPath);
//   }
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
