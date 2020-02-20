<template>
  <div class="listcell">
    <div class="icon-info">
      <div class="icon"><slot name="icon"></slot></div>
      <div class="text"><slot name="text"></slot></div>
    </div>
    <div class="next-image"><i class="iconfont icon-next"></i></div>
  </div>
</template>

<script>
  export default {
    name: "ListCell"
  }
</script>

<style scoped>
  .listcell {
    display: flex;
    color: var(--color-ele-blue);
    padding: 10px 20px;
    justify-content: space-between;
    height: 20px;
    line-height: 20px;
  }
  .icon-info {
    display: flex
  }
  .text {
    margin-left: 10px;
    font-size: 17px;
  }
  .text, .icon-next {
    color: var(--color-light-text);
  }
  .icon-next {
    font-size: 14px !important;
  }
</style>
