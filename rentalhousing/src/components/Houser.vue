<template>
  <div class="houser">
    <el-form
      class="form-limit"
      label-position="left"
      ref="houser"
      :model="houser"
      :label-width="labelWidth"
      :rules="houserRules"
    >
      <el-form-item :label="label.name" prop="landlord_nickname">
        <el-input v-model="houser.landlord_nickname" placeholder="填个昵称"></el-input>
      </el-form-item>
      <el-form-item :label="label.avatar" prop="landlord_pic">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-error="handleAvatarError"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="houser.avatar" :src="houser.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item :label="label.phone" prop="landlord_phone">
        <el-input v-model="houser.landlord_phone" placeholder="填个手机号" type="number"></el-input>
      </el-form-item>
      <el-form-item :label="label.mail" prop="landlord_mail">
        <el-input v-model="houser.mail" placeholder="填个邮箱"></el-input>
      </el-form-item>
      <el-form-item :label="label.sex" prop="landlord_sex">
        <el-radio-group v-model="houser.landlord_sex" size="small">
          <el-radio-button label="0">男</el-radio-button>
          <el-radio-button label="1">女</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="label.password" prop="landlord_password">
        <el-input v-model="houser.landlord_password" placeholder="想个密码"></el-input>
      </el-form-item>
      <el-form-item :label="label.repeat" prop="landlord_repeat">
        <el-input v-model="houser.landlord_repeat" placeholder="重复密码"></el-input>
      </el-form-item>
       <el-form-item :label="label.realName" prop="landlord_realname">
        <el-input v-model="houser.realName" placeholder="输入姓名"></el-input>
      </el-form-item>
      <el-form-item :label="label.contact" prop="landlord_contanct">
        <el-input v-model="houser.landlord_contanct" placeholder="输入联系方式" type="number"></el-input>
      </el-form-item>
       <el-form-item :label="label.idCard" prop="landlord_IDnumber">
        <el-input v-model="houser.landlord_IDnumber" placeholder="输入身份证号"></el-input>
      </el-form-item>
      <el-form-item class="item-button">
        <el-button type="primary" @click="registHouser('houser')">确定</el-button>
        <el-button type="danger" plain @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Houser",
  data() {
    let validateName = (rule, value, callback) => {
      if (
          !/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/.test(
              value
          )
      ) {
        callback("输入正确的手机号");
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (!/^.{6,16}$/.test(value)) {
        callback("密码长度必须大于6位或者小于16位");
      }
      callback();
    };
    let validateRepeat = (rule, value, callback) => {
      if (value !== this.houser.landlord_repeat) {
        callback(new Error("两次输入密码不正确"));
      }
      callback();
    };
    let valitIDCard = (rule, value, callback) => {
      if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        callback("请输入正确身份证号码")
      }
      callback()
    };
    return {
      houser: {
        "landlord_nickname": "",
        "landlord_pic": "",
        "landlord_phone": "",
        "landlord_mail": "",
        "landlord_sex": "",
        "landlord_password": "",
        "landlord_repeat": "",
        "landlord_contanct": "",
        "landlord_realname": "",
        "landlord_IDnumber": ""
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
        contact: "联系方式",
        idCard: "身份证号"
      },
      houserRules: {
        "landlord_nickname": [
          { required: true, message: '请输入昵称', trigger: 'blur' },
        ],
        "landlord_pic": [
          { required: true, message: '请上传头像', trigger: 'blur' },
        ],
        "landlord_phone": [
          { required: true, message: '请输入手机号（账号）', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ],
        "landlord_mail": [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        "landlord_sex": [
          { required: true, message: '请选择性别', trigger: 'change' },
        ],
        "landlord_password": [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        "landlord_repeat": [
          { required: true, message: '请重复密码', trigger: 'blur' },
          { validator: validateRepeat, trigger: 'blur' }
        ],
        "landlord_contanct": [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
        ],
        "landlord_realname": [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
        ],
        "landlord_IDnumber": [
          { required: true, message: '请输入身份证号码', trigger: 'blur' },
          { validator: valitIDCard, trigger: 'blur' }
        ]
      },
      labelWidth: "0px"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.houser.landlord_pic = URL.createObjectURL(file.raw);
      this.$message.success("头像上传成功")
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
    },
    handleAvatarError() {
        this.$message.error("头像上传失败")
    },
    registHouser(formName) {
      this.$refs[formName].validate(valit => {
        if (valit) {
          this.$message(1)
        }
      })
    },
    cancel() {
      this.$emit("cancel")
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
    border: 1px dashed #cccccc !important;
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