<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
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
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
  .main-tab-bar {
    margin: 0 5px;
  }
</style>
