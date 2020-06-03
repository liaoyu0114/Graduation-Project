
<template>
  <div class="change-password">
    <el-form
      label-position="left"
      :model="password"
      :label-width="labelWidth"
      :rules="passwordRules"
      class="form-limit"
    >
      <el-form-item :label="label.old" prop="old">
        <el-input v-model="password.old" placeholder="输入旧密码"></el-input>
      </el-form-item>
      <el-form-item :label="label.new" prop="new">
        <el-input v-model="password.new" placeholder="输入新密码"></el-input>
      </el-form-item>
      <el-form-item :label="label.repeat" prop="repeat">
        <el-input v-model="password.repeat" placeholder="再次输入新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 45%" @click="changePass">确定</el-button>
        <el-button type="danger" style="width: 45%" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {mapGetters } from "vuex"
export default {
  name: "ChangePassword",
  data() {
    return {
      password: {
        old: "",
        new: "",
        repeat: ""
      },
      label: {
        old: "当前密码",
        new: "新密码",
        repeat: "重复一次"
      },
      passwordRules: {
        old: {},
        new: {},
        repeat: {}
      },
      labelWidth: "0px"
    };
  },
  created() {
    this.labelWidth = window.screen.width > 500 ? "70px" : "0px";
    if (window.screen.width < 500) {
      for (let item in this.label) {
        this.label[item] = "";
      }
    }
  },
  computed: {
      ...mapGetters(["userInfo"])
  },
  methods: {
    cancel() {
      this.$emit("cancelChangePass")
    },
    changePass() {
      this.$post("/updateTenant", {
        "tenant_id": this.userInfo.tenant_id,
        "tenant_password": this.password.new
      }).then(res => {
        console.log(res);
        if (res.code === "000") {
          this.$message.success("修改成功, 请重新登录")
          this.$store.commit("setUserInfo", {})
          localStorage.removeItem("phone")
          localStorage.removeItem("password")
          this.$router.push("/login")
        } else {
          this.$message.warning(res.msg)
        }
      }).catch(err => {
        console.log(err);
        this.$message.error("未知错误")
      })
    }
  }
};
</script>

<style scoped>
</style>