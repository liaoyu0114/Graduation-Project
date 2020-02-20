<template>
    <div class="slide" @load="swiperLoad">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide",
    methods: {
		  swiperLoad() {
		    this.$parent.startSwiper()
      }
		}
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }
  .slide img {
    width: 100%;
  }
</style>
