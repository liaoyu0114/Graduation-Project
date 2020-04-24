<template>
  <div class="profile">
    <profile-nav-bar class="profile-nav-bar">
      <div class="order-title" slot="center">我的</div>
    </profile-nav-bar>

    <tologin v-if="!userInfo.id" ></tologin>
    <div class v-else>
      <tourists :user-info="userInfo"></tourists>
      <el-button @click="logoutClick">退出</el-button>
    </div>
  </div>
</template>

<script>
import Tourists from "./childComps/Tourists";
import Tologin from "components/content/tologin/Tologin";
import ProfileNavBar from "components/common/navbar/NavBar";
import { sign } from "network/user";


export default {
  name: "Profile",
  data() {
    return {
      userInfo: {}
    };
  },
  components: {
    Tourists,
    Tologin,
    ProfileNavBar
  },
  created() {
    this.userInfo = this.$store.state.userInfo;
  },
  methods: {
    signClick() {
      let info = {
        user_phone: "1234567890",
        user_password: "123456"
      };
      sign(info).then(res => {
        console.log(res);
      });
    },
    logoutClick() {
      localStorage.phone = "";
      localStorage.password = "";
      this.$store.state.userInfo = {};
      this.$router.go(0);
    }
  }
};
</script>

<style scoped>
.profile {
  background: white;
}
.profile-nav-bar {
  background: var(--color-ele-blue);
  color: white;
}
</style>
