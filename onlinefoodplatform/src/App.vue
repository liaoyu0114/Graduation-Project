<template>
  <div id="app" ref="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>

    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/maintabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar
    },
    data() {
      return {
        list: ['/home']
      }
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
  @import url('https://at.alicdn.com/t/font_1631969_9mn028p8lgp.css');
  .main-tab-bar {
    margin: 0 5px;
  }
  @media screen and (min-width: 500px) {
    .view {
      width: 500px;
    }
    #app {
      display: flex;
      justify-content: center;
      position: relative;
      height: 100vh;
      width: 100vw;
      background: #6e6e6e;
    }
  }
</style>
