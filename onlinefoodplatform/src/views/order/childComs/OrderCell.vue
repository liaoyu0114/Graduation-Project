<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="order-list">
    <el-row :gutter="5">
      <el-col :span="3">
        <el-image :src="orderItem.shop.url">

        </el-image>

      </el-col>
      <el-col :span="12">
        <div class="text">
          {{orderItem.shop.name}}<i class="el-icon-arrow-right"></i>
        </div>
      </el-col>
      <el-col :span="9">
          {{getState}}
      </el-col>
    </el-row>
    <el-row :gutter="5">
      <el-col :span="14" :offset="4">
        {{orderItem.good}}
      </el-col>
        <el-col :span="5">
          ￥{{orderItem.moneny}}
        </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "OrderCell",
    props: {
      orderItem: {
        type: Object,
        default: {}
      }
    },
    computed: {
      getState() {
        // switch (orderItem.state) {
        //   case "0":
        //     return "已下单";
        //   case "1":
        //     return "制作中";
        //   case "2":
        //     return "配送中";
        //   case "3":
        //     return "已收货";
        //   default:
        //     return "";
        // }
        return "订单已完成"
      }
    }
  }
</script>

<style scoped>

</style>
