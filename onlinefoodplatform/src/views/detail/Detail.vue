<template>
  <div class="detail">
    <nav-bar class="detail-navbar">
      <div slot="left" @click="backClick">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div slot="center">
        <div class="title-box-title">{{shopInfo.shop_name}}</div>
      </div>
    </nav-bar>

    <scroll class="detail-scroll" ref="scroll">
      <head-info :shop-info="shopInfo"></head-info>
      <el-menu
        default-active="goods"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="goods">点餐</el-menu-item>
        <el-menu-item index="comment">评价</el-menu-item>
        <el-menu-item index="shopinfo">商家</el-menu-item>
      </el-menu>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import HeadInfo from "./childComs/headinfo";
import NavBar from "components/common/navbar/NavBar";
import { selectDishesList } from "network/user";

export default {
  name: "Detail",
  components: {
    Scroll,
    HeadInfo,
    NavBar
  },
  data() {
    return {
      shopInfo: {},
      dishes: [],
      activeIndex: "goods"
    };
  },
  activated() {
    setTimeout(() => {
      console.log(this.$refs.scroll.scroll.scrollerHeight);
      this.$refs.scroll.urefresh();
    }, 2000);

    selectDishesList({ shop_id: this.$route.params.id })
      .then(res => {
        if (res.code === "000") {
          console.log(res);
          this.shopInfo = res.shop;
          this.dishes = res.disheslist;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    backClick() {
      this.$router.push("/home");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: center;
}
</style>
<style scoped>
.detail {
  background: white;
}
.detail-navbar {
  width: 100%;
  background: var(--color-ele-blue);
  color: white;
}
/* .scroll {
  position: relative;
  height: calc(100vh - 40px);
  z-index: 99;
} */
.detail-scroll {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 40px - 55px);
}
</style>
