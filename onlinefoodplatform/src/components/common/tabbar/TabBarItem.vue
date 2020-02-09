<template>
  <div class="tab-bar-item" @click="itemClick" :class="{active:isActive}">

      <div class="content">
        <div><slot name="item-icon"></slot></div>
        <transition name="fade">
          <div class="text" v-if="isActive"><slot name="item-text"></slot></div>
        </transition>

      </div>
    <transition name="fade">
      <div class="overlay" v-if="isActive"></div>
    </transition>
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
        return this.$route.path.indexOf(this.path) !== -1
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
    position: relative;
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 44px;
    cursor: pointer;
  }
  .active {
    color: #4298e7;
  }
  .content {
    z-index: 2;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e4f2ff;
    border-radius: 20px;
    transition: .5s;
  }
  .text {
    font-size: 12px;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fade-leave, .fade-enter-to {
    opacity: 1
  }
  .fade-enter-active{
    transition: all .5s
  }
  .fade-leave-active {
    transition: all .1s;
  }
</style>
