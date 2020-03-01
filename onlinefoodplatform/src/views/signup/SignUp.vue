<template>
  <div class="signup">
    <scroll class="content" ref="scroll">
      <div class="panel">
        <h1 class="signup-title">
          Welcome to SignUp
        </h1>
        <div class="border"></div>
        <div class="login-box">
          <el-form :model="ruleForm" :rules="rules" label-width="80px" label-position="left">
            <el-form-item prop="userName" label="用户名">
              <el-input v-model="ruleForm.username" placeholder="Your Name"></el-input>
            </el-form-item>
            <el-form-item prop="userPass" label="密码">
              <el-input v-model="ruleForm.userpass" placeholder="PassWord" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass" label="确认密码">
              <el-input v-model="ruleForm.checkPass" placeholder="Repeat Password" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="email" label="邮箱">
              <el-input v-model="ruleForm.email" placeholder="Your Email"></el-input>
            </el-form-item>
            <el-form-item prop="phone" label="电话号码">
              <el-input v-model="ruleForm.phone" placeholder="Phone Number"></el-input>
            </el-form-item>
            <el-form-item prop="birthday" label="出生日期">
              <el-date-picker v-model="ruleForm.birthday"
                              type="date"
                              class="birthday"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="timestamp"></el-date-picker>
            </el-form-item>
            <el-form-item prop="sex" label="性别">
              <el-radio v-model="ruleForm.sex" label="0">男</el-radio>
              <el-radio v-model="ruleForm.sex" label="1">女</el-radio>
            </el-form-item>
            <!--<div class="veri-code">-->
              <!--<el-form-item prop="veriCode" class="veri-code-input" label="验证码">-->
                <!--<el-input v-model="ruleForm.veriCode" placeholder="Captcha"></el-input>-->
              <!--</el-form-item>-->
              <!--<el-image class="veri-code-img" fit="cover " :src="'data:image/png;base64,'+ captcha.captcha_img" alt="点击刷新"></el-image>-->
            <!--</div>-->
            <div class="btn">
              <el-button type="primary" class="signup-btn" @click="signClick">注册/登录</el-button>
              <el-button type="text" class="signup-btn" @click="backSignIn">返回登录页面</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import { SignUps } from "network/sign";
  import Scroll from 'components/common/Scroll'
  export default {
    name: "SignUp",
    components: {
      Scroll
    },
    data() {
      let validateName = (rule, value, callback) => {
        if (value === '') {
          console.log('name');
          callback(new Error('请输入账号'))
        } else if (!/^[A-Za-z0-9]+$/.test(value)) {
          callback('只允许英文和数字')
        }
        callback()
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (!/^.{6,16}$/.test(value)) {
          callback(new Error('密码长度必须大于6位或者小于16位'))
        }
        callback()
      };
      let validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else if (value !== this.ruleForm.userpass) {
          callback(new Error('两次密码输入不一致'))
        } else {
          callback()
        }
      };
      let validateEmail = (rule, value, callback) => {
        let email_reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
        if (value === '') {
          callback(new Error('请输入邮箱'))
        } else if (!email_reg.test(value)) {
          callback(new Error('邮箱格式不正确，重新输入'))
        } else {
          callback()
        }
      };
      let validatePhone = (rule, value, callback) => {
        let regex = /^1[3|4|5|7|8]\d{9}$/;
        if (value === '') {
          callback(new Error('请输入电话号码'))
        } else if (!regex.test(value)) {
          callback(new Error('电话号码格式不正确，重新输入'))
        } else {
          callback()
        }
      };
      let validateCode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入验证码'))
        }
        callback()
      };
      return {
        ruleForm: {
          username: '',
          userpass: '',
          checkPass: '',
          email: '',
          phone: '',
          birthday: '',
          sex: '0',
          // veriCode: ''
        },
        rules: {
          userName: [ { validator: validateName, trigger: 'blur' } ],
          userPass: [ { validator: validatePass, trigger: 'blur' } ],
          checkPass: [ { validator: validateCheckPass, trigger: 'blur' } ],
          email: [ { validator: validateEmail, trigger: 'blur' } ],
          phone: [ { validator: validatePhone, trigger: 'blur' } ],
          // veriCode: [ { validator: validateCode, trigger: ['blur','change'] } ]
        }
      }
    },
    mounted() {
      //解决进入页面时，默认显示页面中间的问题
      this.$refs.scroll.uscrollTo(0,100,0)
    },
    methods: {
      signClick() {
        SignUps(this.ruleForm).then(res => {
          console.log(res);
          if (res.success) {
            this.$store.commit('setCookies', res);
            this.$router.push('/home')
          }
        })
      },
      backSignIn() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center; background: url("~assets/img/bg.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .panel {
    padding:3rem 5%;
    width: 90%;
    max-width: 450px;
    margin-bottom: 3rem;
  }
  .signup-title {
    color: white;
    margin-top: 3rem;
    text-align: center;
  }
  .border {
    width: 100%;
    max-width: 436px;
    height: 2px;
    background: #82ccdd;
    margin: 20px auto 35px;
  }
  .birthday {
    width: 100%;
  }
  .btn {

  }
  .signup-btn {
    letter-spacing: .8rem;
    width: 100%;
  }
</style>
