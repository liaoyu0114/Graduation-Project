<template>
  <div class="identify">
    <el-form
      class="form-limit"
      label-position="left"
      :model="identify"
      :label-width="labelWidth"
      :rules="identifyRules"
    >
      <el-form-item :label="label.password" prop="password">
        <el-input v-model="identify.password" placeholder="输入当前密码"></el-input>
      </el-form-item>
      <el-form-item :label="label.idv" prop="idv">
        <el-input v-model="identify.idv" placeholder="输入身份证号码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "IdentifyValite",
  data() {
    return {
      identify: {
        password: "",
        idv: ""
      },
      label: {
        password: "身份验证",
        idv: "身份证号"
      },
      identifyRules: {
        password: {},
        idv: {}
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
  }
};
</script>

<style scoped>
</style>