import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('../views/home/Home');
const Discovery = () => import('../views/discovery/Discovery');
const Order = () => import('../views/order/Order');
const Profile = () => import('../views/profile/Profile');
const Sign = () => import('../views/sign/Sign');
const Detail = () => import('../views/detail/Detail');
const SearchLocal = () => import('components/content/search/SearchLocal');
const Cart = () => import('../views/cart/Cart');
const goods = () => import('../views/detail/childComs/goods.vue');
const comment = () => import('../views/detail/childComs/coment.vue');
const shopinfo = () => import('../views/detail/childComs/shopinfo.vue');

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
  },
  {
    path: '/sign',
    component: Sign
  },
  {
    path: '/detail',
    component: Detail,
    // redirect: "/detail/goods",
    children: [
      {
        name: "goods",
        path: 'goods',
        component: goods
      },
      {
        name: "comment",
        path: 'comment',
        component: comment
      },
      {
        name: "shopinfo",
        path: 'shopinfo',
        component: shopinfo
      },
      {
        path: "/",
        component: goods
      }
    ]
  },
  {
    path: '/search-local',
    component: SearchLocal
  },
  {
    path: '/cart',
    component: Cart
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
