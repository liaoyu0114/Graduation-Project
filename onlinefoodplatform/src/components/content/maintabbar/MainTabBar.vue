<template>
  <tab-bar>
    <tab-bar-item v-for="(item,index) in icons" :key="index" :path="item.path">
      <i slot="item-icon" class="iconfont" :class="item.icon"></i>
      <div slot="item-text">{{item.label}}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {
        icons: [
          { icon: "icon-waimai", label: "首页", path: "/home"},
          { icon: "icon-find", label: "发现", path: "/discovery"},
          { icon: "icon-emaxcitygerenxinxitubiaoji03", label: "订单", path: "/order"},
          { icon: "icon-profile", label: "我的", path: "/profile"}
        ]
      }
    }
  }
</script>
<style>
  .icon-font {
    font-size: 22px;
  }
</style>

<style scoped>

</style>
