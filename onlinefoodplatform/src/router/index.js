import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('../views/home/Home');
const Discovery = () => import('../views/discovery/Discovery');
const Order = () => import('../views/order/Order');
const Profile = () => import('../views/profile/Profile');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/discovery',
    component: Discovery
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
