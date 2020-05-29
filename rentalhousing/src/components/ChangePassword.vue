
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
        <el-input v-model="password.old" placeholder="输入"></el-input>
      </el-form-item>
      <el-form-item :label="label.new" prop="new">
        <el-input v-model="password.new" placeholder="输入"></el-input>
      </el-form-item>
      <el-form-item :label="label.repeat" prop="repeat">
        <el-input v-model="password.repeat" placeholder="输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 45%" @click="changePass">确定</el-button>
        <el-button type="danger" style="width: 45%" @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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
  methods: {
    cancel() {
      this.$emit("cancelChangePass")
    },
    changePass() {
      this.$message.success("修改成功")
    }
  }
};
</script>

<style scoped>
</style>