<template>
  <div class="login-page">
    <div class="content" :class="{'s--signup': loginType}">
      <div class="form sign-in">
        <h2>欢迎回来</h2>
        <label>
          <el-form ref="ruleFormLogin" :model="ruleFormLogin" size="small" :rules="rulesLogin">
            <el-form-item prop="phone">
              <el-input placeholder="请输入账号" v-model="ruleFormLogin.phone">
                <i slot="suffix" class="el-input__icon el-icon-user-solid"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" v-model="ruleFormLogin.password" type="password">
                <i slot="suffix" class="el-input__icon el-icon-edit"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="isSave">
              <div class="tttt">
                <el-switch v-model="ruleFormLogin.isSave" active-text="记住我"></el-switch>
                <p class="forgot-pass">
                  <a href="javascript:">忘记密码？</a>
                </p>
              </div>
            </el-form-item>
          </el-form>
        </label>

        <button type="button" class="submit" @click="loginClick('ruleFormLogin')">登 录</button>
        <button type="button" class="fb-btn">
          使用
          <span>
            <i class="fa fa-qq" aria-hidden="true"></i>
            <i class="fa fa-weibo" aria-hidden="true"></i>
            <i class="fa fa-weixin" aria-hidden="true"></i>
          </span> 帐号登录
        </button>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>还未注册？</h2>
            <p>立即注册，发现大量房源！</p>
          </div>
          <div class="img__text m--in">
            <h2>已有帐号？</h2>
            <p>有帐号就登录吧，好久不见了！</p>
          </div>
          <div class="img__btn" @click="changeType">
            <span class="m--up">注 册</span>
            <span class="m--in">登 录</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>立即注册</h2>
          <label>
            <el-form ref="ruleFormRegist" :model="ruleFormRegist" size="small" :rules="rulesRegist">
              <el-form-item prop="rePhone">
                <el-input placeholder="请输入账号" v-model="ruleFormRegist.rePhone">
                  <i slot="suffix" class="el-input__icon el-icon-user-solid"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="rePassword">
                <el-input placeholder="请输入密码" v-model="ruleFormRegist.rePassword" type="password">
                  <i slot="suffix" class="el-input__icon el-icon-edit"></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="repeat">
                <el-input placeholder="请重复输入" v-model="ruleFormRegist.repeat" type="password">
                  <i slot="suffix" class="el-input__icon el-icon-key"></i>
                </el-input>
              </el-form-item>
               <el-form-item prop="mail">
                <el-input placeholder="请输入邮箱" v-model="ruleFormRegist.mail" type="text">
                  <i slot="suffix" class="el-input__icon el-icon-bank-card"></i>
                </el-input>
              </el-form-item>
            </el-form>
          </label>
          <button type="button" class="submit" @click="loginClick('ruleFormRegist')">注 册</button>
          <button type="button" class="fb-btn">
            使用
            <span>
              <i class="fa fa-qq" aria-hidden="true"></i>
              <i class="fa fa-weibo" aria-hidden="true"></i>
              <i class="fa fa-weixin" aria-hidden="true"></i>
            </span> 帐号注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    let validateName = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if (
        !/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/.test(
          value
        )
      ) {
        callback("输入正确的手机号");
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!/^.{6,16}$/.test(value)) {
        callback("密码长度必须大于6位或者小于16位");
      }
      callback();
    };
    let validateRepeat = (rule, value, callback) => {
      if (value !== this.ruleFormRegist.rePassword) {
        callback(new Error("两次输入密码不正确"));
      } else if (value === "") {
        callback(new Error("请再次输入密码"));
      }
      callback();
    };
    // let 
    return {
      loginType: false,
      ruleFormLogin: {
        phone: "",
        password: "",
        isSave: false
      },
      ruleFormRegist: {
        rePhone: "",
        rePassword: "",
        repeat: "",
        mail: ""
      },
      rulesLogin: {
        phone: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      rulesRegist: {
        rePhone: [{ validator: validateName, trigger: "blur" }],
        rePassword: [{ validator: validatePass, trigger: "blur" }],
        repeat: [{ validator: validateRepeat, trigger: "blur" }],
        mail: []
      }
    };
  },
  methods: {
    changeType() {
      this.loginType = !this.loginType;
    },
    loginClick(fromName) {
      this.saveClick();
      this.$refs[fromName].validate(valid => {
        if (valid) {
          this.loading = true;
          let data = {
            "landlord_phone": this.ruleFormLogin.phone,
            "landlord_password": this.ruleFormLogin.password
          };
          this.$post("/loginLandlord", data).then(res => {
            console.log(res)
          })
        }
      });
    },
    registClick(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
            let data = {
              "landlord_phone": this.ruleFormRegist.rePhone,
              "landlord_password": this.ruleFormRegist.rePassword,
              "landlord_mail": this.ruleFormRegist.mail
            };
            this.$post("/registLandlord", data).then(res => {
              console.log(res)
            })
        }
      });
    },
    saveClick() {
      localStorage.phone = this.ruleFormLogin.isSave
        ? this.ruleFormLogin.phone
        : "";
      localStorage.password = this.ruleFormLogin.isSave
        ? this.ruleFormLogin.password
        : "";
    }
  }
};
</script>

<style scoped>
.fa-qq,
.fa-weibo,
.fa-weixin {
  padding: 0 5px;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.tttt {
  display: flex;
  justify-content: space-evenly;
  line-height: 20px;
}

.login-page {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  background: transparent;
}

input,
button {
  border: none;
  outline: none;
  background: none;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.content {
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 900px;
  height: 550px;
  margin: -300px 0 0 -450px;
  background: #fff;
}

.form {
  position: relative;
  width: 640px;
  height: 100%;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.content.s--signup .sub-cont {
  -webkit-transform: translate3d(-640px, 0, 0);
  transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}

.img:before {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url(../../assets/img/bg.jpg);
  background-size: cover;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content.s--signup .img:before {
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
  color: inherit;
}

.img__text p {
  font-size: 14px;
  line-height: 1.5;
}

.content.s--signup .img__text.m--up {
  -webkit-transform: translateX(520px);
  transform: translateX(520px);
}
.img__text.m--in {
  -webkit-transform: translateX(-520px);
  transform: translateX(-520px);
}

.content.s--signup .img__text.m--in {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
}
.img__btn:after {
  content: "";
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}

.img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
}

.img__btn span.m--in {
  -webkit-transform: translateY(-72px);
  transform: translateY(-72px);
}

.content.s--signup .img__btn span.m--in {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.content.s--signup .img__btn span.m--up {
  -webkit-transform: translateY(72px);
  transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 12px;
  color: #909399;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  line-height: inherit;
  font-size: 12px;
  color: #cfcfcf;
}

.forgot-pass a {
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}
.fb-btn span {
  font-weight: bold;
  color: #455a81;
}

.sign-in {
  transition-timing-function: ease-out;
}
.content.s--signup .sign-in {
  transition-timing-function: ease-in-out;
  transition-duration: 0.6s;
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.sign-up {
  -webkit-transform: translate3d(-900px, 0, 0);
  transform: translate3d(-900px, 0, 0);
}
.content.s--signup .sign-up {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>