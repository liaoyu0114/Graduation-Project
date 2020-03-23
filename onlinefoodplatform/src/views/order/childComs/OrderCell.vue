<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="order-list">
    <el-row :gutter="5">
      <el-col :span="3">
        <el-image :src="orderItem.shop.url">
        </el-image>
      </el-col>
      <el-col :span="12">
        <div class="order-text">
          {{orderItem.shop.name}}<i class="el-icon-arrow-right icon-order"></i>
        </div>
        <div class="order-time">{{orderItem.time}}</div>
      </el-col>
      <el-col :span="9">
        <div class="order-state">
          {{getState}}
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="5" class="order-item-money">
      <el-col :span="14" :offset="4">
        <div class="order-item">
          {{orderItem.good}}
        </div>
      </el-col>
        <el-col :span="5">
          <div class="order-money">
            ￥{{orderItem.moneny}}
          </div>
        </el-col>
    </el-row>
    <div class="bottom-line"></div>
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
  .order-list {
    padding: 5px;
  }
  .bottom-line {
    width: 100%;
    height: 1px;
    background: #d3d4d6;
    margin: 10px 0;
  }
  .order-text {
    font-size: 20px;
    font-weight: 600;
  }
  .order-time {
    margin-top: 5px;
    font-size: 14px;
    color: #666666;
  }
  .order-state {
    text-align: right;
    padding-right: 10px;
    font-size: 14px;
    line-height: 16px;
    color: #6e6e6e;
  }
  .order-item {
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .order-money {
    color: #333333;
    font-weight: 600;
  }
  .order-item-money {
    margin-top: 5px;
  }
  .icon-order {
    font-weight: 600;
  }
</style>
