<template>
  <div class="order">
    <order-nav-bar class="order-nav-bar">
      <div class="order-title" slot="center">
        订单
      </div>
    </order-nav-bar>
    <scroll class="scroll">
      <order-cell v-for="(item, index) in orders" :order-item="item" :key="index"></order-cell>
    </scroll>
    </div>
</template>

<script>
  import OrderCell from './childComs/OrderCell'
  import Scroll from 'components/common/scroll/Scroll'
  import OrderNavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Order",
    components: {
      OrderCell,
      Scroll,
      OrderNavBar
    },
    data() {
      return {
        orders: [
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date().toLocaleString(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .scroll {
    background: white;
    position: absolute;
    top: 40px;
    height: calc(100vh - 98px);
    overflow: hidden;
  }
  .order-nav-bar {
    background: var(--color-ele-blue);
    color: white;
  }
</style>
