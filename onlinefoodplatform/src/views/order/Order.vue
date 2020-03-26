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
        <order-cell v-for="(item, index) in orders" :order-item="item" :key="index"></order-cell>
      </scroll>
    </div>

  </div>
</template>

<script>
  import OrderCell from './childComs/OrderCell'
  import Scroll from 'components/common/scroll/Scroll'
  import OrderNavBar from 'components/common/navbar/NavBar'
  import Tologin from 'components/content/tologin/Tologin'

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
        orders: [
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 1,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 2,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 3,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 2,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: 4,
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          }
        ]
      }
    },
    created() {
      this.userInfo = this.$store.state.userInfo
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
</style>
