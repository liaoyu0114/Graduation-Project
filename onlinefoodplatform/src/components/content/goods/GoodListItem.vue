<template>
  <div class="goodsitem" @click="goodClick">
     <div class="good-title">
       <div class="good-image">
         <img :src="goodsItem.image" alt="">
       </div>
      <div class="title-box">
        <div class="good-title-text">{{goodsItem.title}}</div>
        <div class="good-stars">stars</div>
      </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {

    },
    methods: {
      goodClick() {
        //路由跳转
        // 1.使用query detail？xxx形式
        this.$router.push({
          path: '/detail',
          query: {
            iid: this.goodsItem.iid
          }
        });
      }
    }
  }
</script>

<style scoped>
  .goodsitem {
    margin: 10px 0;
  }
 .good-title {
   display: flex;
 }
  .good-image {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: solid 1px #999;
    overflow: hidden;
  }
  .good-image img {
    width: 100%;
    height: 100%;
  }
  .title-box {
    margin-left: 10px;
    width: calc(100% - 100px);
  }
  .good-title-text {
    color: black;
    font-weight: 600;
    font-size: 20px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }

</style>
