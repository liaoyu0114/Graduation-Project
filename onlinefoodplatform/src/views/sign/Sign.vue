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
          <div id="login" class="input-group" ref="login">
            <el-form
              :model="ruleFormLogin"
              status-icon
              v-loading="loading"
              :rules="rulesLogin"
              ref="ruleFormLogin"
            >
              <el-form-item prop="phone">
                <el-input v-model="ruleFormLogin.phone" placeholder="输入账号/手机号"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="ruleFormLogin.password" placeholder="密码" type="password"></el-input>
              </el-form-item>
              <el-form-item prop="isSave" label="记住密码">
                <el-switch v-model="ruleFormLogin.isSave"></el-switch>
              </el-form-item>
            </el-form>
            <div class="button-box">
              <el-button type="primary" class="button" @click="loginClick('ruleFormLogin')">登 录</el-button>
            </div>
            <a href="http://frp.hhh233.xyz/admin">
              <el-button type="text">商家登录</el-button>
            </a>
          </div>

          <div class="input-group" id="register" ref="register">
            <el-form
              :model="ruleFormRegist"
              status-icon
              v-loading="loading"
              :rules="rulesRegist"
              ref="ruleFormRegist"
            >
              <el-form-item prop="rePhone">
                <el-input v-model="ruleFormRegist.rePhone" placeholder="输入账号/手机号"></el-input>
              </el-form-item>
              <el-form-item prop="rePassword">
                <el-input
                  v-model="ruleFormRegist.rePassword"
                  placeholder="输入6-16位密码"
                  type="password"
                ></el-input>
              </el-form-item>
              <el-form-item prop="repeat">
                <el-input v-model="ruleFormRegist.repeat" placeholder="再次输入密码" type="password"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="ruleFormRegist.email" placeholder="输入邮箱" type="text"></el-input>
              </el-form-item>
              <el-form-item prop="captcha">
                <div class="captcha">
                  <div>
                    <el-input v-model="ruleFormRegist.captcha" placeholder="输入验证码" type="text"></el-input>
                  </div>
                  <div>
                    <el-button type="primary" style="float: right" @click="getCaptcha">获取验证码</el-button>
                  </div>
                </div>
              </el-form-item>
              <div class="button-box">
                <el-button
                  type="primary"
                  class="button"
                  :disabled="!valifited"
                  @click="registClick('ruleFormRegist')"
                >注 册</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <el-drawer
      title="完善个人信息"
      class="reg-drawer"
      size="100%"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <my-form @success="submit"></my-form>
    </el-drawer>
  </div>
</template>

<script>
import MyForm from "components/content/form/Form";
import { sign, regist, updateuser } from "network/user";
import { sendEmail, verifyEmail } from "network/yesapi";

export default {
  name: "Sign",
  components: {
    MyForm
  },
  data() {
    let validateName = (rule, value, callback) => {
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
      }
      callback();
    };
    let validateEmail = (rule, value, callback) => {
      let email_reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
      if (!email_reg.test(value)) {
        callback(new Error("邮箱格式不正确，重新输入"));
      } else {
        callback();
      }
    };
    return {
      ruleFormLogin: {
        phone: "",
        password: "",
        isSave: false
      },
      ruleFormRegist: {
        rePhone: "",
        rePassword: "",
        repeat: "",
        email: "",
        captcha: ""
      },
      rulesLogin: {
        phone: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      rulesRegist: {
        rePhone: [{ validator: validateName, trigger: "blur" }],
        rePassword: [{ validator: validatePass, trigger: "blur" }],
        repeat: [{ validator: validateRepeat, trigger: "blur" }],
        email: [
          { required: true, message: "邮箱不能为空" },
          { validator: validateEmail, trigger: "blur" }
        ],
        captcha: [{ required: true, message: "验证码不能为空" }]
      },
      loading: false,
      drawer: false,
      direction: "btt",
      emailSendDate: "",
      valifited: false
    };
  },
  watch: {
    "ruleFormRegist.captcha": function(val, oldVal) {
      if (val.length === 6) {
        let data = {
          mail: this.ruleFormRegist.email,
          captcha: this.ruleFormRegist.captcha
        };
        verifyEmail(data).then(res => {
          if (res.data.err_code === 0) {
            this.$notify.success({
              title: "邮箱验证成功",
              message: "可以继续操作"
            });
            this.valifited = true;
          }
        });
      }
    }
  },
  methods: {
    getCaptcha() {
      let time = (new Date().getTime() - this.emailSendDate) / 1000;
      if (time < 60) {
        this.$notify.warning({
          title: "验证码发送必须间隔60s",
          message: "剩余时间" + (60 - time).toFixed(0) + "s"
        });
        return;
      } else {
        this.emailSendDate = "";
      }

      sendEmail(this.ruleFormRegist.email)
        .then(res => {
          console.log(res);
          if (res.data.err_code === 0) {
            this.$message("发送成功，下次发送请在60s之后");
            this.emailSendDate = new Date().getTime();
          } else {
            this.$notify.error({
              title: "邮箱验证错误",
              message: "请检查邮箱是否正确，网络是否正常"
            });
          }
        })
        .catch(() => {
          this.$message("网络错误");
        });
    },
    submit() {
      this.drawer = false;
      this.$router.push("/home");
    },
    handleClose(done) {
      this.$confirm("邮箱必填！！！", {
        confirmButtonText: "确定",
        type: "warning"
      });
    },
    login() {
      this.$refs.btn.style.left = "0";
      this.$refs.login.style.left = "10%";
      this.$refs.register.style.left = "100%";
    },
    regster() {
      this.$refs.btn.style.left = "110px";
      this.$refs.login.style.left = "-100%";
      this.$refs.register.style.left = "10%";
    },
    loginClick(fromName) {
      this.saveClick();
      this.$refs[fromName].validate(valid => {
        if (valid) {
          this.$message("通过验证");
          this.loading = true;
          let data = {
            user_phone: this.ruleFormLogin.phone,
            user_password: this.ruleFormLogin.password
          };
          loginNetwork(data);
        } else {
          return false;
        }
      });
    },
    loginNetwork(data) {
      console.log(data);
      sign(data)
        .then(res => {
          this.$confirm(res.msg, "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "info"
          }).then(() => {
            if (res.code === "000") {
              this.$store.commit("setUserInfo", res.user);
              if (!this.checkInfo()) {
                this.updateUser(res.user);
                // this.drawer = true;
              } else {
                this.loading = false;
                this.$router.push("/home");
              }
            }
          });
        })
        .catch(() => {
          this.$message("网络错误");
        });
    },
    registClick(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message("通过验证");
          this.loading = true;
          let data = {
            user_phone: this.ruleFormRegist.rePhone,
            user_password: this.ruleFormRegist.rePassword,
            user_mail: this.ruleFormRegist.email
          };
          regist(data)
            .then(res => {
              this.$confirm(res.msg, "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "info"
              }).then(() => {
                if (res.code === "000") {
                  let data = {
                    user_phone: this.ruleFormRegist.rePhone,
                    user_password: this.ruleFormRegist.rePassword
                  };
                  this.loginNetwork(data);
                  // this.$store.commit("setUserInfo", res.user);
                  // if (!this.checkInfo()) {
                  //   this.drawer = true;
                  // } else {
                  //   this.$router.push("/home");
                  // }
                } else {
                  this.loading = false
                  this.$notify.warning({
                    title: "注册失败",
                    message: "请检查信息是否正确，网络是否正常"
                  });
                }
              });
            })
            .catch(err => {
              this.$message("网络错误");
            });
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
    },
    checkInfo() {
      let flag = true;
      for (let key in this.$store.state.userInfo) {
        if (this.$store.state.userInfo[key] === null) {
          flag = false;
        }
      }
      return flag;
    },
    updateUser(info) {
      console.log(info)
      let data = {
        "user_id": info.user_id,
        "user_nickname": "默认名称",
        "user_sex": 0,
        "user_pic": "https://s1.ax1x.com/2020/04/22/JtKAbV.png",
        "user_mail": info.user_mail,
        "collection": ""
      };
      updateuser(data).then(res => {
        console.log(res)
        this.loading = false;
        if (res.code === "000") {
          this.$store.commit("setUserInfo", res.user);
        } else {
          this.$notify.warning({
            title: "更新用户信息失败",
            message: "可继续使用，请及时更新"
          });
        }
        this.$router.push("/home");
      });
    }
  }
};
</script>

<style scoped>
.captcha {
  display: flex;
  justify-content: space-between;
}
.hero {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("https://s2.ax1x.com/2020/03/01/3gyxbt.jpg");
  background-position: center;
  background-size: cover;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
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
  .sign-form {
    width: 500px !important;
  }
}

@media screen and (max-width: 320px) {
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
  overflow-y: scroll;
  overflow-x: hidden;
}
.button-box {
  width: 220px;
  margin: 35px auto;
  position: relative;
  box-shadow: 0 0 20px 9px #ff61241f;
  border-radius: 30px;
  font-size: 14px;
  overflow: hidden;
}
.toggle-btn {
  padding: 10px 30px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
}
.mail-input {
  display: flex;
}
#btn {
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  background: linear-gradient(to right, #ff105f, #ffad06);
  border-radius: 30px;
  transition: 0.5s;
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
  transition: 0.5s;
}
#login {
  left: 10%;
}
#register {
  left: 100%;
}
.input-group span {
  font-size: 14px;
}
.button {
  margin: auto;
  width: 100%;
}
.sign-form {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: 1s;
  z-index: 10;
}
.show-form-enter-active {
  transition: all 0.3s ease;
}
.show-forme-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.show-form-enter, .show-form-leave-to
   /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(100vh);
  opacity: 0;
}
.drawer {
  height: 100vh;
}
</style>

<style>
.el-message-box {
  width: 100% !important;
}
</style>
