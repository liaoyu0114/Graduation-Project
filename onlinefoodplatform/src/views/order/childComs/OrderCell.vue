<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="order-list">
    <el-row :gutter="5">
      <el-col :span="3">
        <el-image :src="shop.shop_pic"></el-image>
      </el-col>
      <el-col :span="16">
        <div class="order-text">
          {{shop.shop_name}}
          <i class="el-icon-arrow-right icon-order"></i>
        </div>
        <div class="order-time">
          <el-rate :value="shop.shop_score" disabled></el-rate>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="order-state">{{state}}</div>
      </el-col>
    </el-row>
    <el-row :gutter="5" class="order-item-money" v-for="(item, index) in dishesList">
      <el-col :span="14" :offset="4">
        <div class="order-item">{{item.dishname}} <span>x{{orderDisheslist[index].orderdishes_number}}</span>  </div>
      </el-col>
      <el-col :span="5">
        <div class="order-money">￥{{item.dishes_price}}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" :offset="12">
        <div class="button">
          <el-button type="primary" plain size="small" v-if="orderItem.state === 3">再来一单</el-button>
          <el-button type="primary" plain size="small" v-else @click="showDetail">查看详情</el-button>
          <el-button type="warning" plain size="small" @click="rating = true">评价此单</el-button>
        </div>
      </el-col>
      <el-col v-if="rating">
        <div class="block">
          <el-rate
            v-model="value2"
            @change="rated"
            :colors="colors">
          </el-rate>
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
      state: "",
      order: {},
      shop: {},
      orderDisheslist: [],
      dishesList: [],
      visible2: false,
      rating: false,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  created() {
    this.$post("/selectOrderById", {"order_id": this.orderItem.order_id}).then(res => {
      if (res.code === "000") {
        this.order = res.order;
        this.orderDisheslist = res.orderDisheslist;
        this.shop = res.shop;
        this.dishesList = res.dishesList;
      }
    }).catch(err => {
      console.log(err);
    })
  },
  mounted () {
      switch (this.orderItem.state) {
        case 0:
          this.state = "已下单";
          break;
        case 1:
          this.state = "制作中";
          break;
        case 2:
          this.state = "配送中";
          break;
        case 3:
          this.state = "已收货";
          break;
        default:
          this.state = "";
          break;
      }
  },
   methods: {
     showDetail() {
       let data = {
         order: this.order,
         dishesList: this.dishesList,
         shop: this.shop,
         orderDisheslist: this.orderDisheslist
       }
       this.$emit("showDig", data)
     },
     rated() {
       this.$post("/updateshopinfo", {
         "business_id": this.shop.business_id,
         "shop_score": this.value2
       }).then(res => {
         this.$message.success("成功评分")
         this.rating = false;
         console.log(res);
       }).catch(err => {
         this.rating = false;
         console.log(err);
       })
     }
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
  justify-content: center;

}
</style>
