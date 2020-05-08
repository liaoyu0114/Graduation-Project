<template>
  <div class="rentail-moneny">
    <div class="bg"></div>
    <div class="rental-body">
      <rental-cell></rental-cell>
    </div>
  </div>
</template>

<script>
import RentalCell from "./RentalCell"
  export default {
    name: "RentalMoneny",
    components: {
      RentalCell
    }
  }
</script>

<style scoped>
.rentail-moneny {
  display: flex;
  position: relative;
  justify-content: center;
}

.rental-body {
  max-width: 1000px;
  width: 100%;
  background: white;
}
.bg {
  position: absolute;
  top: 0;
  left: calc((100vw - 1000px) / 2);
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 60px);
  background: white;
  z-index: -1;
}
</style>