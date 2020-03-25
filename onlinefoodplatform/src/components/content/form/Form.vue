<template>
  <div class="form">

    <div class="form-box">
      <div class="title">上传头像（默认截取中间正方形区域）</div>
      <div class="upload">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="avatar" :src="avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>

        </el-upload>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2Mb</div>
      </div>

      <el-progress :text-inside="true" :stroke-width="3" :percentage="percent" v-if="showPercent"></el-progress>
      <el-form :model="ruleForm"
               :rules="rules"
               label-width="80px"
               label-position="left">
        <el-form-item prop="username" label="称呼">
          <el-input v-model="ruleForm.username" placeholder="取个名字吧"></el-input>
        </el-form-item>
        <el-form-item prop="sex" label="性别">
          <el-radio-group v-model="ruleForm.sex" size="medium">
            <el-radio border label="0">男</el-radio>
            <el-radio border label="1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="email" label="Email">
          <el-input v-model="ruleForm.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <div class="button-box">
          <el-button type="primary"
                     @click="submit"
                     class="button">确 定</el-button>
        </div>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Form",
    data() {
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
      return {
        ruleForm: {
          username: "",
          sex: "-1",
          email: ""
        },
        rules: {
          username:[
            { required: false, message: "取个名字吧", trigger: "blur" },
            { min: 3, max: 10, message: "长度在3到5个字符", trigger: "blur"}
            ],
          sex: [
          ],
          email: [
            { required: true, message: "邮箱必须哦", trigger: "blur" },
            { validator: validateEmail, trigger: 'blur' }
            ]
        },
        avatar: "",
        percent: 0,
      }
    },
    computed: {
      showPercent() {
        return this.percent > 0 && this.percent < 100
      }
    },
    methods: {
      submit() {
        this.$emit("success")
      },
      handleAvatarSuccess(res, file) {
        this.avatar = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = (file.type === 'image/jpeg') || (file.type === 'image/png');
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style scoped>
  .form {
    background: white;
  }
  .form-box {
    margin: 0 20px;
    background: white;
  }
  .upload {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 0;
  }
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload__tip {
    width: 100%;
    text-align: center;
  }
  .button-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .button {
    margin: auto;
    width: 150px;
  }
  .title {
    width: 100%;
    text-align: center;
    color: rgb(155, 158, 161);
  }
</style>
