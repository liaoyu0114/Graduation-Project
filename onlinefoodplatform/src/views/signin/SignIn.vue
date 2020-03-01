<template>
  <div class="signup">
    <scroll class="content" ref="scroll">
      <div class="panel">
        <h1 class="signin-title">
          Welcome to SignIn
        </h1>
        <div class="border"></div>
        <div class="signin-box">
          <el-form :model="ruleForm" :rules="rules" class="from-panel">
            <el-form-item prop="userName">
              <el-input v-model="ruleForm.username"
                        placeholder="UserName"
                        clearable></el-input>
            </el-form-item>
            <el-form-item prop="userPass">
              <el-input v-model="ruleForm.userpass"
                        placeholder="PassWord"
                        type="password"
                        show-password></el-input>
            </el-form-item>
            <!--<div class="veri-code">-->
            <!--<el-form-item prop="veriCode" class="veri-code-input">-->
            <!--<el-input v-model="ruleForm.veriCode" placeholder="Captcha"></el-input>-->
            <!--</el-form-item>-->
            <!--<img :src="'data:image/png;base64,'+ captcha.captcha_img" alt="点击刷新">-->
            <!--</div>-->
            <div class="reset">
              <el-button type="text" class="reset-btn">忘记密码?</el-button>
              <el-button type="text" class="signup-btn" @click="signupClick">注册账号</el-button>
            </div>
            <div class="btn">
              <el-button type="primary" class="signin-btn" @click="signinClick">登录</el-button>
            </div>
          </el-form>
        </div>

      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/Scroll'
  import {SignIn} from "network/sign";

  export default {
    name: "SignIn",
    components: {
      Scroll
    },
    data() {
      let validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'))
        } else {
          callback()
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      };
      let validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        } else {
          callback()
        }
      };
      return {
        ruleForm: {
          username: '',
          userpass: '',
          // veriCode: ''
        },
        rules: {
          userName: [{validator: validateName, trigger: 'blur'}],
          userPass: [{validator: validatePass, trigger: 'blur'}],
          // veriCode: [{validator: validateCode, trigger: ['blur', 'change']}]
        }
      }
    },
    mounted() {
      this.$refs.scroll.uscrollTo(0, 200, 0)
    },
    methods: {
      signinClick() {
        for (let key in this.ruleForm) {
          if (this.ruleForm[key] === '') {
            this.$message('请填写用户名或密码');
            return
          }
        }
        /**
         * 发送网络请求
         */
        SignIn(this.ruleForm).then(res => {
          console.log(res);
          if (res.success === true) {
            this.$store.commit('setCookies',res);
            this.$message('成功');
            this.$router.push('/home');

          } else {
            this.$message('检查账号密码是否正确');
          }
        }).catch(err => {
          console.log(err);
          this.$message('网络错误, 稍后再试')
        })
      },
      signupClick() {
        this.$router.push('/signup')
      }
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden; background: url("~assets/img/bg.jpg") no-repeat;
    background-size: cover;
  }
  .panel {
    /*padding:3rem 5%;*/
    padding: 5%;
    width: 90%;
    max-width: 450px;
    margin-bottom: 3rem;
    /*background: linear-gradient(45deg, rgba(31, 25, 42, .5), rgba(101, 131, 173, .5));*/
  }
  .border {
    width: 100%;
    max-width: 436px;
    height: 2px;
    background: #82ccdd;
    margin: 20px auto 35px;
  }
  .signin-title {
    color: #fff;
    text-align: center;
  }
  .from-panel {
    width: 100%;
    margin-top: 3rem;
  }
  .panel .reset {
    display: flex;
    padding: 0 2rem;
    justify-content: center;
  }
  .panel .btn {
    margin-top: 1.2rem;
    margin-bottom: 2.5rem;
  }
  .panel .signin-btn {
    margin: 0 20%;
    width: 60%;
    letter-spacing: .5rem;
    transition: .7s;
  }
  .reset-btn,
  .signup-btn {
    /*margin: 0 3rem;*/
  }
  .btn:hover .signin-btn {
    background-color: #274474;
  }
</style>
