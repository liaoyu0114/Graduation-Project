<template>
  <div class="home-page">
    <el-container class="container">
      <el-header class="home-header home-header-mobile" v-if="!widthWindow">
        <div class="menu-mobile">
          <div class="menu-icon" @click="menuClick">
            <i class="iconfont icon-mune" v-if="!mobileMenu"></i>
            <i class="iconfont icon-close" v-else></i>
          </div>
        </div>
        <div class="logo-menu">RentalHousing</div>
        <div class="ava-box" @click="avatarClick">
          <el-avatar
            :size="45"
            src="http://img1.imgtn.bdimg.com/it/u=3620016507,562397260&fm=11&gp=0.jpg"
          ></el-avatar>
        </div>
      </el-header>
      <el-header class="home-header" v-else>
        <div class="logo-menu">RentalHousing</div>

        <div class="menu-box limit">
          <el-menu
            default-active="1"
            class="el-menu-demo"
            background-color="#b4cdd7"
            text-color="#fff"
            mode="horizontal"
            active-text-color="#006fb2"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/" :class="{active: showActive === '/'}">租房</el-menu-item>
            <el-menu-item index="myhouse" :class="{active: showActive === 'myhouse'}">我的房源</el-menu-item>
            <el-menu-item index="rentalmoneny" :class="{active: showActive === 'rentalmoneny'}">租金缴纳</el-menu-item>
            <el-menu-item index="error" :class="{active: showActive === 'error'}">报障处理</el-menu-item>
          </el-menu>
        </div>
        <div class="header-avatar">
          <el-popover placement="bottom" width="100" trigger="hover">
            <div class="avatar-menu">
              <div class="avatar-menu-item">个人信息</div>
              <div class="avatar-menu-item">修改密码</div>
              <div class="avatar-menu-item">身份认证</div>
              <div class="avatar-menu-item">成为房东</div>
              <div class="avatar-menu-item logout">注销登录</div>
            </div>
            <el-avatar
              :size="45"
              slot="reference"
              src="http://img1.imgtn.bdimg.com/it/u=3620016507,562397260&fm=11&gp=0.jpg"
            ></el-avatar>
          </el-popover>
        </div>
      </el-header>
      <router-view></router-view>
    </el-container>
    <transition name="slide-fade">
      <div class="menu-box-mobile" v-if="mobileMenu">
        <el-menu
          default-active="1"
          class="el-menu-demo"
          mode="vertical"
          background-color="#fff"
          text-color="#999"
          router
          active-text-color="#006fb2"
          @select="handleSelect"
        >
          <el-menu-item index="/" :class="{active: showActive === '/'}">租房</el-menu-item>
          <el-menu-item index="myhouse" :class="{active: showActive === 'myhouse'}">我的房源</el-menu-item>
          <el-menu-item index="rentalmoneny" :class="{active: showActive === 'rentalmoneny'}">租金缴纳</el-menu-item>
          <el-menu-item index="error" :class="{active: showActive === 'error'}">报障处理</el-menu-item>
        </el-menu>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="avatar-box-mobile" v-if="showAvatarMenu">
        <div class="avatar-menu-mobile">
          <div class="avatar-menu-mobile-item">个人信息</div>
          <div class="avatar-menu-mobile-item">修改密码</div>
          <div class="avatar-menu-mobile-item">身份认证</div>
          <div class="avatar-menu-mobile-item">成为房东</div>
          <div class="avatar-menu-mobile-item logout">注销登录</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    if (this.$route.path !== "/") {
      this.showActive = this.$route.path.replace("/", "");
    }
  },
  data() {
    return {
      activeIndex: "1",
      mobileMenu: false,
      showAvatarMenu: false,
      showActive: "/"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.showActive = key;
      this.mobileMenu = false;
    },
    avatarClick() {
      console.log(1);
      this.showAvatarMenu = !this.showAvatarMenu;
      this.mobileMenu = false;
    },
    menuClick() {
      this.mobileMenu = !this.mobileMenu;
      this.showAvatarMenu = false;
    }
  },
  computed: {
    widthWindow() {
      return window.screen.width > 500;
    }
  },
  mounted() {}
};
</script>

<style scoped>
.home-page,
.container {
  background: transparent;
}
.active {
  color: rgb(0, 111, 178) !important;
}

@media screen and (min-width: 500px) {
  .active {
    background-color: rgb(180, 205, 215) !important;
    border-bottom: 2px solid #006fb2 !important;
  }
}
.avatar-box-mobile {
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 9;
  background: #b4cdd7;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
}
.avatar-menu-mobile-item {
  font-size: 15px;
  padding: 4px 20px;
  text-align: right;
}
.avatar-menu-mobile-item:hover {
  background: #006fb2;
}
.menu-icon,
.ava-box {
  width: 60px;
}
.ava-box {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.icon-mune,
.icon-close {
  font-size: 20px;
}
.home-header {
  position: relative;
  background: var(--IGHT-STEEL-BLUE);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-aside {
  height: calc(100vh - 60px);
}
.header-avatar {
  position: relative;
  width: 100px;
}
.avatar-menu {
  width: 100%;
  transition: 0.5s ease;
}
.home-header-mobile {
  position: relative;
  z-index: 12;
}
.el-icon-s-fold,
.el-icon-s-unfold {
  font-size: 30px;
  color: var(--CYAN-AZURE);
}
.limit {
  max-width: 900px;
  padding: 10px !important;
}

.el-menu-demo {
  font-size: 15px;
}
.avatar-menu-item {
  text-align: center;
  padding: 5px;
  font-size: 13px;
  border-radius: 7.5px;
  font-weight: 600;
}
@keyframes changeback {
  0% {
    background: white;
  }
  100% {
    background: #006fb2;
    color: white;
  }
}
.avatar-menu-item:hover {
 animation: changeback 0.5s ease 1;
 background: #006fb2;
 color: white !important;
}
.logout {
  color: #e70018ed !important;
}
.menu-box-mobile {
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  z-index: 9;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}
.logo-menu {
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
}
</style>

<style>
.el-menu {
  height: 100%;
}
.el-menu-item {
  font-size: 16px;
  font-weight: 600;
}
</style>