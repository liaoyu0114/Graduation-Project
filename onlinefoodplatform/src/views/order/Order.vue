<template>
  <div class="order"  v-infinite-scroll="load" style="overflow:hidden">
   <order-cell v-for="(item, index) in orders" :order-item="item" :key="index"></order-cell>
  </div>
</template>

<script>
  import OrderCell from './childComs/OrderCell'

  export default {
    name: "Order",
    components: {
      OrderCell
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
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          },
          {
            shop: {
              name: "张姐脆皮鸡饭",
              url: "https://s1.ax1x.com/2020/03/15/88WU2t.png"
            },
            state: '0',
            time: new Date(),
            good: "双拼 - 蜜汁烤肉+脆皮鸡+饮料+烤肠",
            moneny: "15.99"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .order {
    background: white;
    height: calc(100vh - 58px);
  }
</style>
