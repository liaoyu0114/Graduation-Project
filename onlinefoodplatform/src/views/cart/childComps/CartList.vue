<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
     <!--<cart-list-item v-for="(item, index) in cartList"-->
                     <!--:product="item"-->
                     <!--:key="index" -->
                     <!--@createOrder="createOrder(index)"-->
                     <!--@deleteClick="deleteClick(payload)"/>-->
      <el-row>
        <el-col v-for="(item, index) in cartList" :key="index">
          <el-row>
            <el-col class="shop-name">{{item.shop_name}}</el-col>
            <el-col :span="24" >
              <el-col v-for="(dish, dishIndex) in item.dishes" class="dishes" :key="dishIndex">
                <div>
                  <el-image :src="dish.dishes_pic" fit="contain" class="dishes-pic"></el-image>
                </div>
                <div class="dishes-info">
                  <span class="dishes-name">{{dish.dishname}}</span><br>
                  <span class="dishes-me">{{dish.material}}</span><br>
                  <span class="dishes-count">数量 x {{dish.count}}</span><br>
                  <span class="dishes-price">￥{{dish.dishes_price}}</span>
                  <span style="margin-left: 10px">
                    <el-button @click="deleteClick(index, dishIndex)" type="text">
                <i class="fa fa-trash-o" style="font-size: 14px" aria-hidden="true"></i>
              </el-button>
                  </span>
                  <!--<el-input-number v-model="dish.count" :step="1" size="mini" :min="1"></el-input-number>-->
                </div>
              </el-col>

            </el-col>
            <el-col style="display: flex; justify-content: space-between">
              <div style="padding: 0 10px;">总计：<span class="dishes-price">￥{{price[index]}}</span></div>
              <div style="float: right; padding: 0 10px">
                <el-button type="warning" size="mini" @click="createOrder(index)">去结算</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </scroll>
    <el-dialog title="生成订单" :visible.sync="dialogVisible" v-loading="loading" width="90%">
      <create-order :order-item="orderItem"
                    @deleteCart="deleteCart"
                    @closeDia="dialogVisible = false" />
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Scroll from  'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import CreateOrder from './CreateOrder'
  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem,
      CreateOrder
    },
    data() {
      return{
        scrollHeight: 0,
        dialogVisible: false,
        loading: false,
        orderItem: {},
        price: []
      }
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    created() {

    },
    activated() {
      this.$refs.scroll.urefresh();
      this.cartList.forEach(item => {
        let total = item.dishes.reduce((total, val) => {
          return total + val.count * val.dishes_price;
        }, 0);
        this.price.push(total)
      })
    },
    methods: {
      // deleteClick(payload) {
      //   console.log(payload);
      //   this.cartList.find(item => {return item.shop_id === payload[0].id}).dishes.splice(payload[0].index, 1)
      // },
      createOrder(index) {
        this.orderItem = this.cartList[index];
        this.dialogVisible = true
      },
      deleteCart(shopId) {
        this.$store.commit("deleCartByShop", {shop_id: shopId})
        this.dialogVisible = false
      },
      deleteClick(index, dishIndex) {
        this.$store.commit("deletById", {
          index,
          dishIndex
        })
      }
    }
  }
</script>

<style scoped>

 .content {
   position: absolute;
   top: 40px;
   right: 0;
   left: 0;
   bottom: 58px;
   overflow: hidden;
 }
 .shop-name {
   font-size: 24px;
   font-weight: 600;
   padding: 10px 10px 0;
   color: var(--color-ele-blue);
 }
 .dishes {
   display: flex;
   margin: 10px 0 0;
   padding: 10px 10px 0;
 }
 .dishes-pic {
   width: 100px;
   height: 100px;
 }
  .dishes-info {
    margin-left: 10px;
  }
  .dishes-name {
    padding: 5px 0;
    font-size: 18px;
    font-weight: 600;
    color: #0b97c4;
  }
  .dishes-me {
    padding: 5px 0;
    font-size: 16px;
    font-weight: 400;
    color: #777777;
  }
  .dishes-count {
    font-size: 16px;
    font-weight: 600;
    color: #ee3131;
  }
  .dishes-price {
    color: orangered;
    font-size: 17px;
  }
</style>
