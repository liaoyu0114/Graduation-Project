<template>
  <div class="tourist">
    <div class="user-info">
      <div class="user-name">
        IUIYT<br>
        <i class="iconfont icon-tubiao">18382389882</i>
        <div class="user-name-tips">提示语</div>
      </div>
      <div class="user-icon">
        <img src="https://img2.woyaogexing.com/2020/02/01/73588b8939b342efbcae09f708d7c7d9!400x400.png" alt="">
      </div>
    </div>
    <div class="list">
      <list-cell v-for="(item, index) in list" :key="index">
        <i class="iconfont" :class="item.iconName" slot="icon"></i>
        <div class="icontext" slot="text">{{item.text}}</div>
      </list-cell>
    </div>
  </div>
</template>

<script>
  import ListCell from 'components/content/ListCell'
  export default {
    name: "Tourists",
    components: {
      ListCell
    },
    data() {
      return {
        list: [
          {
            iconName: "icon-shoucang",
            text: "我的收藏"
          },
          {
            iconName: "icon-dizhi",
            text: "我的地址"
          },
          {
            iconName: "icon-kefu",
            text: "在线客服"
          },
          {
            iconName: "icon-order-acquired",
            text: "成为商家"
          },
          {
            iconName: "icon-shezhi",
            text: "设置"
          }
        ]
      }
    }
  }
</script>

<style scoped>
 .user-info {
   display: flex;
   padding: 15px;
   background: var(--color-ele-blue);
   justify-content: space-between;
 }
 .user-name {
   font-size: 20px;
   font-weight: 600;
   color: white;
 }
 .user-name-tips {
   font-size: 15px;
   font-weight: 500;
 }
 .icon-tubiao {
   font-size: 15px !important;
   font-weight: 500;
 }
  .user-icon {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: solid 0.1px #999;
    overflow: hidden;
  }
  .user-icon img {
    width: 100%;
    height: 100%;
  }
</style>
