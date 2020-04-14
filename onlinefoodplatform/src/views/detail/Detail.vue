<template>
  <div class="detail">
    <nav-bar class="detail-navbar">
      <div slot="left" @click="backClick">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div slot="center">
        <div class="title-box-title">烧鸡公菌汤羊肉汤</div>
      </div>
    </nav-bar>
    <div class="shop-info">
      <div class="backgroud" @click="backClick">
        <div class="avatar">
          <img :src="avatarUrl" alt />
        </div>

        <div class="bg-white"></div>
      </div>
      <div class="shop-title">烧鸡公菌汤羊肉汤</div>

      <div class="shop-info-box">
        <div class="sorce">评价4.3</div>
        <div class="saled">月销125单</div>
        <div class="toout">商家配送约40分钟</div>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/">点餐</el-menu-item>
      <el-menu-item index="comment">评价</el-menu-item>
      <el-menu-item index="shopinfo">商家</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import Goods from "./childComs/goods";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Detail",
  props: {
    shop: {
      type: Object
    },
    path: {
      type: String,
      default: "/home"
    }
  },
  components: {
    Scroll,
    Goods,
    NavBar
  },
  data() {
    return {
      avatarUrl: "https://s2.ax1x.com/2020/03/07/3jYXZT.th.jpg",
      activeIndex: "/"
    };
  },
  methods: {
    backClick() {
      this.$router.push(this.path);
    },
    handleSelect(key, keyPath) {
      this.$router.push("/detail/shopinfo");
      // switch (key) {
      //   case 1:
      //     this.$router.push("/detail/goods");
      //     break;
      //   case 2:
      //     this.$router.push("/detail/comment");
      //     break;
      //   case 3:
      //     this.$router.push("/detail/shopinfo");
      //     break;
      //   default:
      //     break;
      // }
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
.scroll {
  position: relative;
  height: calc(100vh - 40px);
  z-index: 99;
}
.left {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  font-size: 18px;
  padding: 13px;
}
.title-box-title {
  width: calc(100% - 60px);
  padding: 0 30px;
  text-align: center;
}
.backgroud {
  width: 100%;
  height: 200px;
  background-image: url("https://s2.ax1x.com/2020/03/07/3jGf6P.jpg");
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
}
.bg-white {
  width: 100%;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: white;
}
.avatar {
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  border-radius: 50px;
  overflow: hidden;
  z-index: 1;
}
.avatar img {
  width: 100%;
  height: 100%;
}
.shop-info-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #777777;
}
.shop-title {
  width: 100%;
  font-size: 23px;
  line-height: 46px;
  text-align: center;
}
.saled {
  border-right: solid 2px #999;
  border-left: solid 2px #999;
  margin: 0 5px;
  padding: 0 5px;
}
.goods-box {
  float: left;
  width: 100px;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
