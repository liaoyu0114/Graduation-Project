<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 2px;
    border: solid 1px rgba(100,100,100,.2);
    transition:.3s;
  }
</style>
