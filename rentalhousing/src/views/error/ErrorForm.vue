<template>
  <div class="error-form">
    <el-form ref="form" :rules="formRules" :model="form" label-width="80px" label-position="left">
      <el-form-item label="选择房源" prop="house">
        <el-select v-model="form.house" placeholder="请选择" clearable class="error-form-select">
          <el-option v-for="(item, index) in house" :key="index" :label="item.housingresources_name" :value="item.housingresources_id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详情描述" prop="detail">
        <el-input v-model="form.detail" placeholder="请输入一些描述" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" prop="pic">
        <el-upload
          ref="upload"
          :action="domin"
          class="home-upload"
          :http-request="qiniuUp"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          multiple
          :limit="3"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="form.pic"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" size="small">立即创建</el-button>
        <el-button @click="canelClick" size="small" type="danger">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
export default {
  name: "ErrorForm",
  props: {
    house: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      domin: "https://upload-z2.qiniup.com",
      qiniuaddr: "https://assets.hhh233.xyz",
      form: {
        house: "",
        detail: "",
        pic: []
      },
      formRules: {
        house: [
          { required: true, message: "必须选择一个房源", trigger: ["change", "blur"] }
        ],
        detail: [
          { required: true, message: "请输入详情描述", trigger: "change" }
        ],
        pic: [
          { required: true, message: "请至少上传一张图片", trigger:  ["change", "blur"] }
          ]
      }
    };
  },
  computed: {
      ...mapGetters(["userInfo"])
  },
  methods: {
    onSubmit(fromName) {
      this.$refs[fromName].validate(valid => {
        if (valid) {
          let form = this.form;
          let url = form.pic.map(item => {
            return item.url
          });
          this.$post("/AddObstacle", {
            tenant_id: this.userInfo.tenant_id,
            housingresources_id: form.house,
            obstacle_detail: this.preText(form.detail),
            obstacle_pic: JSON.stringify(url)
          }).then(res => {
            console.log(res);
            if (res.code === "000") {
              // this.$emit("canelClick");
              this.$message.success("创建成功");
              this.$refs[fromName].resetFields();
              this.$emit("onSubmit")
            } else {
              this.$message.warning(res.msg);
            }
          }).catch(err => {
            console.log(err);
            this.$message.error("网络错误");
          });
        }
      });
    },
    preText (pretext) {
      return pretext.replace(/\r\n/g, "<br/>").replace(/\n/g, "<br/>").replace(/\s/g, "&nbsp;")
    },
    canelClick() {
      this.$emit("canelClick");
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 10;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG /PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 10MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file)
      console.log(fileList)
      let index = this.form.pic.findIndex(item => {
        item.url === file.url
      })
      this.form.pic.splice(index, 1)
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt10M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt10M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return isJPG && isLt10M;
    },
    uploadSuccess() {
      this.$message.success("上传成功");
    },
    uploadError() {
      this.$message.error("上传失败");
    },
    qiniuUp(req) {
      const keyname =
        btoa(req.file.name.split(".")[0]) + "." + req.file.name.split(".")[1];

      const config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      this.$token().then(res => {
        let formdata = new FormData();
        formdata.append("file", req.file);
        formdata.append("token", res.uploadToken);
        formdata.append("key", keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        this.$axios
          .post(this.domin, formdata, config)
          .then(res => {
            console.log(res);
            let urlN =
              this.qiniuaddr +
              "/" +
              res.data.key +
              "?imageView2/1/w/200/h/200/format/webp/q/75";
            this.form.pic.push({
              name: req.file.name,
              url: urlN
            });
            req.onSuccess(req.file);
          })
          .catch(err => {
            console.log(err);
            req.onError(req.file);
          });
      });
    }
  }
};
</script>

<style scoped>
.error-form {
  width: 100%;
  height: 100%;
}
.error-form-select {
  width: 100%;
}
</style>