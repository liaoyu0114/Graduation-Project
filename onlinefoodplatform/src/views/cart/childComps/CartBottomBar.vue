<template>
  <div class="bottom-menu">
    <CheckButton class="select-all"
                 :is-active="isSelectAll" @click.native="checkClick"></CheckButton>
    <span class="sall">全选</span>
    <span class="total-price">合计: <strong>¥{{totalPrice}}</strong></span>
    <span class="buy-product">去计算({{cartLength}})</span>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters ([
        'cartList'
      ]),
      totalPrice() {
        //选中商品总价格
        return this.cartList.filter(item => {
          return item.checked;
        }).reduce((priValue, item) => {
          return priValue + item.price * item.count;
        }, 0).toFixed(2);
      },
      cartLength() {
        //选中商品数量
        return this.cartList.filter(item => {
          return item.checked;
        }).length;
      },
      isSelectAll() {
        //全选状态
        if (this.cartList.length === 0) return false; //没有数据的情况
        // return !(this.cartList.filter(item => !item.checked).length);
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectAll) {//全部选中变false
          this.cartList.forEach(item => item.checked = false)
        } else {//部分选中/全部未选中变true
          this.cartList.forEach(item => item.checked = true)
        }
      }

    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    /* background-color: #DCDFE6; */
    position: fixed;
    bottom: 58px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(100, 92, 92, 0.2);
    font-size: 14px;
    color: #999;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
    z-index: 200;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #777;
  }

  .bottom-menu .buy-product {
    background-color: #409EFF;
    color: #888;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
  .sall {
    margin-left: 10px;
    line-height: 100%;
  }
  .buy-product {
    color: white !important;
  }
</style>
