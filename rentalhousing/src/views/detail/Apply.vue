<template>
  <div class="apply">
    <div class="apply-content">
      <el-form :model="form" label-width="80px" label-position="left">
        <el-form-item label="备注">
          <el-input v-model="form.apply_remake" placeholder="请输入备注（可选）"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="form.apply_liaison" placeholder="请输入联系人（可选）"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.apply_contact" placeholder="请输入联系电话（可选）"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" @click="sendApply">发送申请</el-button>
          <el-button size="small" type="danger" @click="cancel">取消申请</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Apply",
  props: {
    scope: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    //  let validateName = (rule, value, callback) => {
    //   if (
    //     !/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/.test(
    //       value
    //     )
    //   ) {
    //     callback("输入正确的手机号");
    //   }
    //   callback();
    // };
    return {
      form: {
        tenant_id: "",
        housingresources_id: "",
        apply_type: 1,
        apply_remake: "",
        apply_liaison: "", //people,
        apply_contact: ""
      }
    };
  },
  created() {
    this.form.tenant_id = this.scope.tenant_id;
    this.form.housingresources_id = this.scope.housingresources_id;
  },
  methods: {
    sendApply() {
      this.form.tenant_id = this.scope.tenant_id;
      this.form.housingresources_id = this.scope.housingresources_id;
      this.$post("/AddApply", this.form)
        .then(res => {
          console.log(res);
          if (res.code === "000") {
            this.$message.success("成功发送");
            this.$emit("cancel");
          } else {
            this.$message.warning(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.success("网络错误");
        });
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.apply {
  width: 100%;
  display: flex;
  justify-content: center;
}
.apply-content {
  width: 100%;
  max-width: 300px;
}
</style>