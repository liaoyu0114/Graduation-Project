<template>
  <div class="to-login">
    <div class="text">还没有登陆哦</div>
    <div class="button">
      <el-button round type="primary" @click="loginClick">前往登录/注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tologin",
  methods: {
    loginClick() {
      this.$router.push("/sign");
    }
  }
};
</script>

<style scoped>
.to-login {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: calc(25vh - 40px) 0 45vh;
  height: 30vh;
  flex-wrap: wrap;
}
.text {
  text-align: center;
  width: 100vw;
  color: #777777;
  font-size: 14px;
  margin: 30px;
}
</style>
