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
            :src="userInfo.tenant_pic"
            v-if="userInfo.tenant_id"
          ></el-avatar>
          <el-button type="primary" plain v-else size="mini" @click="goLogin">去登陆</el-button>
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
        <div class="header-avatar" >
          <el-popover placement="bottom" width="100" trigger="hover" v-if="userInfo.tenant_id">
            <div class="avatar-menu">
              <div class="avatar-menu-item" @click="showProfile">个人信息</div>
              <div class="avatar-menu-item" @click="changePassword">修改密码</div>
              <div class="avatar-menu-item" @click="identifyValite">身份认证</div>
              <div class="avatar-menu-item" @click="becomeHouser">成为房东</div>
              <div class="avatar-menu-item" @click="gohouse">房东后台</div>
              <div class="avatar-menu-item logout" @click="logout">注销登录</div>
            </div>
            <el-avatar
              :size="45"
              slot="reference"
              :src="userInfo.tenant_pic"
              
            ></el-avatar>
           
          </el-popover>
           <el-button type="primary" plain v-else size="mini" @click="goLogin">去登陆</el-button>
        </div>
      </el-header>
      <router-view></router-view>
    </el-container>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :width="dialogWidth"
      :before-close="handleClose"
    >
      <profile v-if="profileVisible" @cancelProfile="clearForm"></profile>
      <change-password v-if="passwordVisible" @cancelChangePass="clearForm"></change-password>
      <identify-valite v-if="identifyVisible" @cancel="clearForm"></identify-valite>
      <houser v-if="houserVisible" @cancel="clearForm"></houser>
    </el-dialog>

    <transition name="slide-fade">
      <div class="menu-box-mobile" v-if="mobileMenu">
        <el-menu
          default-active="/"
          class="el-menu-demo"
          mode="vertical"
          background-color="#fff"
          text-color="#999"
          router
          active-text-color="#006fb2"
          @select="handleSelect"
        >
          <el-menu-item index="/" :class="{active: showActive === '/'}">租房</el-menu-item>
          <el-menu-item index="myhouse" :class="{active: showActive === 'myhouse'}">我的租房</el-menu-item>
          <el-menu-item index="rentalmoneny" :class="{active: showActive === 'rentalmoneny'}">租金缴纳</el-menu-item>
          <el-menu-item index="error" :class="{active: showActive === 'error'}">报障处理</el-menu-item>
        </el-menu>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="avatar-box-mobile" v-if="showAvatarMenu && userInfo.tenant_id">
        <div class="avatar-menu-mobile">
          <div class="avatar-menu-mobile-item" @click="showProfile">个人信息</div>
          <div class="avatar-menu-mobile-item" @click="changePassword">修改密码</div>
          <div class="avatar-menu-mobile-item" @click="identifyValite">身份认证</div>
          <div class="avatar-menu-mobile-item" @click="becomeHouser">成为房东</div>
          <div class="avatar-menu-item" @click="gohouse">房东后台</div>
          <div class="avatar-menu-mobile-item logout" @click="logout">注销登录</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Profile from "../../components/Profile";
import ChangePassword from "../../components/ChangePassword";
import IdentifyValite from "../../components/IdentifyValite";
import Houser from "../../components/Houser";

import {mapGetters} from 'vuex'

export default {
  name: "Home",
  components: {
    Profile,
    ChangePassword,
    IdentifyValite,
    Houser
  },
  created() {
    if (this.$route.path !== "/") {
      this.showActive = this.$route.path.replace("/", "");
    }
    this.dialogWidth = window.screen.width > 500 ? "50%" : "90%";
  },
  data() {
    return {
      avatar: "https://s1.ax1x.com/2020/04/17/JVI740.jpg",
      activeIndex: "1",
      mobileMenu: false,
      showAvatarMenu: false,
      showActive: "/",
      dialogVisible: false,
      profileVisible: false,
      passwordVisible: false,
      identifyVisible: false,
      houserVisible: false,
      title: ""
    };
  },
  methods: {
    gohouse() {
      window.open("https://radmin.hhh233.xyz")
    },
    clearForm() {
       this.dialogVisible = false
      this.profileVisible = false
      this.passwordVisible = false
      this.identifyVisible = false
      this.houserVisible = false
    },
    goLogin() {
      this.$router.push("/login")
    },
    closeMune() {
      this.mobileMenu = false;
      this.showAvatarMenu = false;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(done) {
      // this.$confirm("确认关闭？")
      //   .then(() => {
          done();
          this.profileVisible = false;
          this.passwordVisible = false;
          this.identifyVisible = false;
          this.houserVisible = false;
        // })
        // .catch(() => {});
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
    },
    showProfile() {
      this.dialogVisible = true;
      this.profileVisible = true;
      this.title = "个人信息"
    },
    changePassword() {
      this.dialogVisible = true;
      this.passwordVisible = true;
      this.title = "修改密码"
    },
    identifyValite() {
      this.dialogVisible = true;
      this.identifyVisible = true;
      this.title = "身份验证"

    },
    becomeHouser() {
      this.dialogVisible = true;
      this.houserVisible = true;
      this.title = "注册房东"
    },
    logout() {
      localStorage.phone = "";
      localStorage.password = "";
      this.$store.state.userInfo = {};
    }
  },
  computed: {
    ...mapGetters(["userInfo"]),
    widthWindow() {
      return window.screen.width > 500;
    }
  },
  mounted() {}
};
</script>

<style>
.el-dialog {
  border-radius: 10px !important;
  min-width: 452px;
}
  .el-message-box {
    min-width: 452px;
    transform: translateY(-25vh);
  }
</style>
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
@media screen and (max-width: 500px) {
  .el-message-box {
    width: 90% !important;
    min-width: 0;
  }
  .el-dialog {
    width: 90% !important;
    min-width: 0;
  }
}
</style>