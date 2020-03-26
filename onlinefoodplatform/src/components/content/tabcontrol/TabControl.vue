<template>
  <div class="tabcontrol" >
    <div v-for="(item, index) in titles" class="tabcontrol-item" :key="index"
         :class="{active: index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        //记录选择状态
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index);
      }
    }
  }
</script>

<style scoped>
 .tabcontrol {
   display: flex;
   text-align: center;
   height: 30px;
   line-height: 30px;
   font-size: 18px;
   /*font-weight: 600;*/
  padding: 10px 0;
   margin-bottom: 0.5vh;
   background-color: white;
   color: #777;
 }
  .tabcontrol-item {
    flex: 1;
    cursor: pointer;
  }
  .active span{
    border-bottom: 3px solid #4294f7;
    padding: 3px;
    color: #4294f7;
  }
  @media screen and (max-device-width: 370px) {

  }
</style>
