<template>
  <div class="header-info">
    <el-row>
      <el-col :span="24">
        <div class="header-bg">
          <el-image style="height: 150px" fit="cover" :src="bgUrl"></el-image>
          <div class="avatar">
            <div>
              <el-avatar :src="shopInfo.shop_pic" :size="100" class="e-avatar"></el-avatar>
            </div>

            <!-- <div>{{shopInfo.shop_name}}</div> -->
          </div>
        </div>
      </el-col>
      <el-col :span="24" class="d-flex margin-avatar">
        <el-rate
          v-model="shopInfo.shop_score"
          class="stars"
          disabled
          show-score
          text-color="#ff9900"
        ></el-rate>
      </el-col>
      <el-col :span="24" class="d-flex">
        <div class="shop-address">{{shopInfo.shop_address}}</div>
        <div class="shop-notice">{{shopInfo.shop_notice}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "headinfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      bgUrl: "https://assets.hhh233.xyz/brooke-lark-08bOYnH_r_E-unsplash.jpg"
    };
  }
};
</script>

<style scoped>
.header-bg {
  position: relative;
}
.avatar {
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.e-avatar {
  display: block;
}
.d-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
}
.margin-avatar {
  margin-top: 40px;
}
.shop-address {
  width: 80%;
  padding: 0 10%;
}
.shop-notice {
  width: 90%;
  padding: 0 5%;
}
</style>
