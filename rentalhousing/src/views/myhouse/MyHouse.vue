<template>
  <div class="my-house">
    <div class="bg"></div>
    <div class="house-box limit">
      <my-house-cell></my-house-cell>
    </div>
  </div>
</template>

<script>
import MyHouseCell from "./MyHouseCell"
  export default {
    name: "MyHouse",
    components: {
MyHouseCell
    }
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
  width: 100%;
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