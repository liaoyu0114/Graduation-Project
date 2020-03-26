<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="order-list">
    <el-row :gutter="5">
      <el-col :span="3">
        <el-image :src="orderItem.shop.url"></el-image>
      </el-col>
      <el-col :span="12">
        <div class="order-text">
          {{orderItem.shop.name}}
          <i class="el-icon-arrow-right icon-order"></i>
        </div>
        <div class="order-time">{{orderItem.time}}</div>
      </el-col>
      <el-col :span="9">
        <div class="order-state">{{state}}</div>
      </el-col>
    </el-row>
    <el-row :gutter="5" class="order-item-money">
      <el-col :span="14" :offset="4">
        <div class="order-item">{{orderItem.good}}</div>
      </el-col>
      <el-col :span="5">
        <div class="order-money">￥{{orderItem.moneny}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" offset="14">
        <div class="button">
          <el-button type="primary" plain size="small">再来一单</el-button>
          <el-button type="warning" plain size="small">评价此单</el-button>
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
  data () {
    return {
      state: ""
    }
  },
  mounted () {
    
      switch (this.orderItem.state) {
        case 1:
          this.state = "已下单";
          break;
        case 2:
          this.state = "制作中";
          break;
        case 3:
          this.state = "配送中";
          break;
        case 4:
          this.state = "已收货";
          break;
        default:
          this.state = "";
          break;
      }
      console.log(this.state)
  }
};
</script>

<style scoped>
.order-list {
  width: 100%;
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
  padding-right: 20px;
  font-size: 15px;
  line-height: 24px;
  color: #67C23A;
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
.button {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;

}
</style>
