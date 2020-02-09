<template>
  <div class="tab-bar-item" @click="itemClick" :class="{active:isActive}">
    <div><slot name="item-icon"></slot></div>
    <div class="text"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        default: "#4298e7",
        type:String
      }
    },
    computed: {
      isActive() {
        //判断当前活跃route中是否有和传入的path的相同路径
        // = -1 没有找到 = 1 找到了
        //active时 style动态决定颜色，使用v-bind绑定 在使用item时需要传入颜色
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        //如果处于活跃，添加{color: this.activeColor} 否则不添加
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    flex-direction: column;
    text-align: center;
    height: 44px;
  }
  .active {
    color: #4298e7;
  }
</style>
