<template>
  <div class="houser">
    <el-form
      class="form-limit"
      label-position="left"
      :model="houser"
      :label-width="labelWidth"
      :rules="houserRules"
    >
      <el-form-item :label="label.name" prop="name">
        <el-input v-model="houser.name" placeholder="填个昵称"></el-input>
      </el-form-item>
      <el-form-item :label="label.avatar" prop="avatar">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="houser.avatar" :src="houser.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item :label="label.phone" prop="phone">
        <el-input v-model="houser.phone" placeholder="填个手机号"></el-input>
      </el-form-item>
      <el-form-item :label="label.mail" prop="mail">
        <el-input v-model="houser.mail" placeholder="填个邮箱"></el-input>
      </el-form-item>
      <el-form-item :label="label.sex" prop="sex">
        <el-radio-group v-model="houser.sex" size="small">
          <el-radio-button label="0">男</el-radio-button>
          <el-radio-button label="1">女</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="label.password" prop="password">
        <el-input v-model="houser.password" placeholder="想个密码"></el-input>
      </el-form-item>
      <el-form-item :label="label.repeat" prop="repeat">
        <el-input v-model="houser.repeat" placeholder="重复密码"></el-input>
      </el-form-item>
       <el-form-item :label="label.realName" prop="realName">
        <el-input v-model="houser.realName" placeholder="输入姓名"></el-input>
      </el-form-item>
       <el-form-item :label="label.idCard" prop="idCard">
        <el-input v-model="houser.idCard" placeholder="输入身份证号"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Houser",
  data() {
    return {
      houser: {
        name: "",
        avatar: "",
        phone: "",
        mail: "",
        sex: "",
        password: "",
        repeat: "",
        realName: "",
        idCard: ""
      },
      label: {
        name: "姓名",
        avatar: "头像",
        phone: "手机号",
        mail: "邮箱",
        sex: "性别",
        password: "密码",
        repeat: "重复密码",
        realName: "真实姓名",
        idCard: "身份证号"
      },
      houserRules: {
        name: {},
        avatar: {},
        phone: {},
        mail: {},
        sex: {},
        password: {},
        repeat: {},
        realName: {},
        idCard: {}
      },
      labelWidth: "0px"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG/PNG 格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return isJPG && isLt5M;
    }
  },
  created() {
    this.labelWidth = window.screen.width > 500 ? "80px" : "0px";
    if (window.screen.width < 500) {
      for (let item in this.label) {
        this.label[item] = "";
      }
    }
  }
};
</script>

<style scoped>
.avatar-uploader {
      display: flex;
    justify-content: center;
    width: 100%;
    border: 1px dashed #000 !important;
}
 .avatar-uploader .el-upload {
    height: 100%;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    line-height: 40px;
    text-align: center;
    line-height: 100%;
    display: block;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  /* .el-form-item__label {
    text-align: justify !important;
    text-justify: inter-ideograph !important;
  } */
</style>