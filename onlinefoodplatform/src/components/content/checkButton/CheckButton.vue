<template>
  <div @click="checkClick">
    <div class="icon-selector" :class="{selector: active}">
      <i class="fa fa-check" aria-hidden="true"></i> 
    </div>
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },
    
    data () {
      return {
        actived: this.active
      }
    },
    methods: {
      checkClick() {
        this.actived = !this.actived
        this.$emit("checkClick")
      }
    }

  }
</script>

<style scoped>
  .icon-selector {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid red;
    cursor: pointer;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
  }

  .selector {
    background-color: #409EFF;
    border-color: #409EFF;
  }
  .fa-check {
    color: white;;
  }
</style>
