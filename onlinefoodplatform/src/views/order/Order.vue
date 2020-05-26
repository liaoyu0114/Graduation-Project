<template>
  <div class="order">
    <order-nav-bar class="order-nav-bar">
      <div class="order-title" slot="center">
        订单
      </div>
    </order-nav-bar>
    <tologin v-if="!userInfo.id"></tologin>
    <div v-else class="scroll-box">
      <scroll class="scroll">
        <order-cell v-for="(item, index) in orders"
                    @showDig="showDig"
                    :order-item="item"
                    :key="index"></order-cell>
      </scroll>
    </div>
    <el-dialog title="订单详情" :visible.sync="visible" width="90%" v-if="detail">
      <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>订单号：{{detail.order.order_id}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" v-if="detail.order.state === 0">已下单</el-button>
        <el-button style="float: right; padding: 3px 0" type="text" v-if="detail.order.state === 1">制作中</el-button>
        <el-button style="float: right; padding: 3px 0" type="text" v-if="detail.order.state === 2">配送中</el-button>
        <el-button style="float: right; padding: 3px 0" type="text" v-if="detail.order.state === 3">已收货</el-button>
      </div>
        <div>备注：{{detail.order.remark}}</div>
        <div>配送地址：{{detail.order.consignee_address}}</div>
        <div>联系电话： {{detail.order.consignee_phone}}</div>
        <div>餐具份数： {{detail.order.tableware_number}}</div>
      </el-card>
      <el-card>
        <div class="clearfix" slot="header">
          <span>店铺： {{detail.shop.shop_name}}</span>
        </div>
        <div v-for="(item, index) in detail.dishesList" :key="index">
          <el-col :span="16" >
            <div class="order-item">{{item.dishname}} <span style="color:#ff8344;">x{{detail.orderDisheslist[index].orderdishes_number}}</span>  </div>
          </el-col>
          <el-col :span="8">
            <el-rate disabled :value="item.score"></el-rate>

          </el-col>
          <div class="bttom">
            <div class="order-money"><span>价格：</span> <span style="color:#cc0001; font-weight: 600">￥{{item.dishes_price}}</span></div>
          </div>
        </div>
      </el-card>

    </el-dialog>
  </div>
</template>

<script>
  import OrderCell from './childComs/OrderCell'
  import Scroll from 'components/common/scroll/Scroll'
  import OrderNavBar from 'components/common/navbar/NavBar'
  import Tologin from 'components/content/tologin/Tologin'
 import {selectOrderByState} from "network/user"
  export default {
    name: "Order",
    components: {
      OrderCell,
      Scroll,
      OrderNavBar,
      Tologin
    },
    data() {
      return {
        userInfo: {},
        orders: [],
        visible: false,
        detail: null
      }
    },
    created() {
      this.userInfo = this.$store.state.userInfo
      if(this.userInfo.id) {
        selectOrderByState({"user_id": this.userInfo.id}).then(res => {
          if (res.code === "000") {
            this.orders = res.orderDTO
          }
        })
      }
    },
    methods: {
      showDig(detail) {
        this.detail = detail

        this.visible = true;

      }
    }
  }
</script>

<style scoped>
  .order {
    background: white;
  }
  .scroll {
    background: white;
    position: absolute;
    top: 50px;
    height: calc(100vh - 108px);
    overflow: hidden;
  }
  .order-nav-bar {
    background: var(--color-ele-blue);
    color: white;
  }
    @media screen and (min-width: 500px){
    .scroll {
      width: 500px !important;
    }
  }
  .bttom {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: steelblue solid 1px;
  }
</style>
