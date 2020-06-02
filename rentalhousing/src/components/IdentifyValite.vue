<template>
  <div class="identify">
    <el-form
      class="form-limit"
      label-position="left"
      ref="IDnum"
      :model="identify"
      :label-width="labelWidth"
      :rules="identifyRules"
    >
      <el-form-item :label="label.password" prop="password">
        <el-input v-model="identify.password" placeholder="输入当前密码" type="password"></el-input>
      </el-form-item>
      <el-form-item :label="label.name" prop="tenant_realname">
        <el-input v-model="identify.tenant_realname" placeholder="输入姓名"></el-input>
      </el-form-item>
      <el-form-item :label="label.idv" prop="tenant_IDnumber">
        <el-input v-model="identify.tenant_IDnumber" placeholder="输入身份证号码"></el-input>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" style="width: 45%" @click="changeID">确定</el-button>
      <el-button type="danger" style="width: 45%" @click="cancel">取消</el-button>
    </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import {mapGetters} from "vuex"
export default {
  name: "IdentifyValite",
  data() {
    let valitIDCard = (rule, value, callback) => {
      if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        callback("请输入正确身份证号码")
      }
      callback()
    };
    
    return {
      identify: {
        password: "",
        tenant_realname: "",
        tenant_IDnumber: ""
      },
      label: {
        password: "身份验证",
        name: "姓名",
        idv: "身份证号"
      },
      identifyRules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        tenant_realname: [
          { required: true, message: "请输入真实姓名", trigger: "blur" }
        ],
        tenant_IDnumber: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { validator: valitIDCard, trigger: 'blur' }
        ]
      },
      labelWidth: "0px"
    };
  },
  created() {
    this.labelWidth = window.screen.width > 500 ? "100px" : "0px";
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
    changeID() {
      this.$refs.IDnum.validate(valid => {
        if (valid) {
          let data = {
            "tenant_id": this.userInfo.tenant_id,
            "tenant_realname": this.identify.tenant_realname,
            "tenant_IDnumber":this.identify.tenant_IDnumber
          }
          this.$post("/updateTenant", data)
              .then(res => {
                console.log(res);
                if (res.code === "000") {
                  this.$store.commit("setUserInfo", res.Tenant);
                  this.$message.success("修改成功");
                  this.$emit("cancel");
                } else {
                  this.$message.warning(res.msg);
                }
              })
              .catch(err => {
                console.log(err);
                this.$message.error("未知错误");
              });
        }
      });
    },
    cancel() {
      this.$emit("cancel")
    }
  }
};
</script>

<style scoped>
</style>