<template>
  <div class="sign">
    <div class="hero">
      <div class="hero-bg">
        <div class="form-box">
          <div class="button-box">
            <div id="btn" ref="btn"></div>
            <button class="toggle-btn" type="button" @click="login()">Log In</button>
            <button class="toggle-btn" type="button" @click="regster()">Register</button>
          </div>
          <div class="social-icons">
            <i class="fa fa-qq" aria-hidden="true"></i>
            <i class="fa fa-weixin" aria-hidden="true"></i>
            <i class="fa fa-weibo" aria-hidden="true"></i>
          </div>
          <form action="" class="input-group" id="login" ref="login">
            <input type="text" class="input-field" placeholder="用户名">
            <input type="password" class="input-field" placeholder="密码">
            <input type="checkbox" class="check-box">
            <span>记住密码</span>
            <button class="submit-btn">Log In</button>
          </form>
          <form action="" class="input-group" id="register" ref="regster">
            <input type="text" class="input-field" placeholder="手机号">
            <input type="password" class="input-field" placeholder="密码">
            <input type="password" class="input-field" placeholder="重复密码">
            <input type="checkbox" class="check-box">
            <span>记住密码</span>
            <button class="submit-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sign",
    methods: {
      login() {
        let width = document.documentElement.clientWidth;
        // if (width <= 375) {
        //   this.$refs.btn.style.left = "0";
        //   this.$refs.login.style.left = "10px";
        //   this.$refs.regster.style.left = "410px"
        // }  else {
          this.$refs.btn.style.left = "0";
          this.$refs.login.style.left = "10%";
          this.$refs.regster.style.left = "100%"
        // }

      },
      regster() {
        let width = document.documentElement.clientWidth;
        console.log(width);
        // if (width <= 375) {
        //   this.$refs.btn.style.left = "0";
        //   this.$refs.login.style.left = "10px";
        //   this.$refs.regster.style.left = "410px"
        // }  else {
          this.$refs.btn.style.left = "110px";
          this.$refs.login.style.left = "-100%";
          this.$refs.regster.style.left = "10%"
        // }

      }
    }
  }
</script>

<style scoped>
 .hero {
   height: 100%;
   width: 100%;
   background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url("https://s2.ax1x.com/2020/03/01/3gyxbt.jpg");
   background-position: center;
   background-size: cover;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: flex-start;
 }
 .hero-bg {
   height: calc(100% - 53px);
   width: 100%;
   background: transparent;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
 }

 @media screen and (min-width: 500px) {
   .hero {
     width: 500px;
   }
 }

 @media screen and (max-width: 320px){
   .form-box {
     margin-top: 10px;
   }
 }
  .form-box {
    width: 90%;
    max-width: 380px;
    height: 480px;
    position: relative;
    margin: auto;
    background: #fff;
    padding: 5px;
    overflow: hidden;
  }
  .button-box {
    width: 220px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 30px;
    font-size: 14px;
  }
  .toggle-btn {
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
  }
  #btn {
    top: 0;
    left: 0;
    position: absolute;
    width: 110px;
    height: 100%;
    background: linear-gradient(to right, #ff105f, #ffad06);
    border-radius: 30px;
    transition: .5s ;
  }
  .social-icons {
    margin: 30px auto;
    text-align: center;
  }
  .social-icons i {
    color: white;
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin: 0 12px;
    font-size: 16px;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 #7f7f7f3d;
    cursor: pointer;
    background: linear-gradient(to right, rgb(255, 50, 90), rgb(255, 162, 5));
  }
  .input-group {
    top: 180px;
    position: absolute;
    width: 80%;
    transition: .5s;
  }
  .input-field {
    width: 100%;
    padding: 5px 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid #999;
    outline: none;
    height: 30px;
    background: transparent;
  }
  .submit-btn {
    width: 85%;
    padding: 10px 30px;
    cursor: pointer;
    display: block;
    margin: auto;
    background: linear-gradient(to right, #ff105f, #ffad06);
    border: 0;
    outline: none;
    border-radius: 30px;
  }
  .check-box {
    margin: 30px 10px 30px 0;
  }
  label {
    color: #777;
    font-size: 12px;
    bottom: 68px;
    position: absolute;
  }
  #login {
    left: 10%;
  }
  #register {
    left: 100%;
  }
</style>
