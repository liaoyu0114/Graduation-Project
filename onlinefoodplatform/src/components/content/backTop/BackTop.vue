<template>
  <div class="back-top">
    <img src="~assets/img/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 100px;
    z-index: 999;
  }

  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>
