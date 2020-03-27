<template>
  <div>
    <div class="icon-selector" :class="{'selector-active': isActive}">
      <i class="fa fa-check" aria-hidden="true"></i> 
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }

  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
  }

  .selector-active {
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .fa-check {
    color: white;;
  }
</style>
