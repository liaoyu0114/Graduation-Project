<template>
  <div class="to-login">
      <div class="text">还没有登陆哦</div>
      <el-button
        round
        type="primary"
        @click="loginClick">前往登录/注册</el-button>
  </div>
</template>

<script>
  export default {
    name: "Tologin",
    methods: {
      loginClick() {
        this.$router.push('/sign')
      }
    }
  }
</script>

<style scoped>
 .to-login {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   padding: 50% 0;
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
