<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
     <cart-list-item v-for="(item, index) in cartList"
                     :product="item"
                     :key="index" 
                     @createOrder="createOrder(index)"
                     @deleteClick="deleteClick(index)"/>
    </scroll>
    <el-dialog title="生成订单" :visible.sync="dialogVisible" v-loading="loading" width="90%">
      <create-order :order-item="orderItem" />
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
        orderItem: {}
      }
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    activated() {
      this.$refs.scroll.urefresh();
    },
    methods: {
      deleteClick(index) {
        this.cartList.splice(index,1);
      },
      createOrder(index) {
        this.orderItem = this.cartList[index]
        this.dialogVisible = true
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
</style>
