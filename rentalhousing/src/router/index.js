import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Home = () => import('../views/home/Home');
const Detail = () => import('../views/detail/Detail');
const Login = () => import('../views/login/Login');
const Error = () => import('../views/error/Error');
const MyHouse = () => import('../views/myhouse/MyHouse');
const RentalMoneny = () => import('../views/rentalmoneny/RentalMoneny');
const Homing = () => import('../views/homing/Homing');

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/",
        name: "Homing",
        component: Homing
      },
      {
        path: '/detail',
        name: 'Detail',
        component: Detail
      },
      {
        path: "/error",
        name: "Error",
        component: Error
      },
      {
        path: "/rentalmoneny",
        name: "RentalMoneny",
        component: RentalMoneny
      },
      {
        path: "/myhouse",
        name: "MyHouse",
        component: MyHouse
      }

    ]
  },
  
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
