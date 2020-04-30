<template>
  <div class="my-house">
    <div class="bg"></div>
    <div class="house-box limit"></div>
  </div>
</template>

<script>
  export default {
    name: "MyHouse"
  }
</script>

<style scoped>
.my-house {
    width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background: transparent;
}
.limit {
  max-width: 1000px;
  padding: 10px !important;
  background: white;
}
.bg {
  position: absolute;
  top: 0;
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 60px);
  background: white;
  z-index: -1;
}
</style>