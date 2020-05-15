<template>
  <div class="error-form">
    <el-form ref="form" :rules="formRules" :model="form" label-width="80px" label-position="left">
      <el-form-item label="选择活动" prop="house">
        <el-select v-model="form.house" placeholder="请选择" clearable class="error-form-select">
          <el-option v-for="item in house" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详情描述" prop="detail">
        <el-input v-model="form.detail" placeholder="请输入一些描述" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" prop="pic">
        <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :limit="3"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="form.pic"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess"
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
      let validateHouse = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请选择房源"));
        }
        callback();
      };
      // let validatePic = (rule, value, callback) => {
      //
      //   if (this.form.pic.length === 0) {
      //     callback(new Error("至少上传一张图片"));
      //   }
      //   callback();
      // };
      return {
        form: {
          house: "",
          detail: "",
          pic: []
        },
        formRules:{
          house: [{ validator: validateHouse, trigger: "change" }],
          detail: [{ required: true, message: '请输入详情描述', trigger: 'change' }],
          // pic: [{ validator: validatePic, trigger: "change" }]
        }
      };
    },
    methods: {
      onSubmit(fromName) {
        this.$refs[fromName].validate(valid => {
          if (valid) {
            this.$emit("onSubmit", this.form);
          }
        });

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
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleAvatarSuccess(res, file, fileList) {
        console.log(res, file, fileList);
        this.form.pic.push(1)
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