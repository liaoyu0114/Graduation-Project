<template>
  <div class="tourist">
    <el-row class="user-info" @click.native="infoClick">
      <el-col :span="18">
        <div class="user-name">
          IUIYT<br>
          <i class="iconfont icon-tubiao">18382389882</i>
          <div class="user-name-tips">提示语</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="profile-avatar">
          <el-avatar :size="75" :src="src"></el-avatar>
        </div>

      </el-col>
    </el-row>
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
        src: "https://assets.hhh233.xyz/003%20%284%29.jpg?imageView2/1/w/200/h/200/format/webp/q/75",
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
    },
    methods: {
      infoClick() {
        this.$router.push('/sign')
      }
    }
  }
</script>

<style scoped>
 .user-info {
   /*display: flex;*/
   padding: 15px;
   background: var(--color-ele-blue);
   /*justify-content: space-between;*/
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
