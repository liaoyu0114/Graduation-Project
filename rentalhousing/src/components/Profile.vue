<template>
  <div class="profile">
    <!-- <el-row> -->
    <!-- <el-col :span="24"> -->
    <el-button
      type="text"
      size="mini"
      class="profile-edit"
      @click="editable = !editable"
      v-if="!editable"
    >编辑</el-button>
    <el-button type="text" size="mini" class="profile-edit" @click="editable = !editable" v-else>返回</el-button>
    <!-- </el-col> -->
    <!-- </el-row> -->
    <div class="profile-box">
      <el-form
        v-if="editable"
        class="form-limit"
        label-position="left"
        ref="profile"
        :model="profile"
        :label-width="labelWidth"
        :rules="profileRules"
      >
        <el-form-item :label="label.avatar" prop="tenant_pic">
          <el-upload
            ref="upload"
            :action="domin"
            class="home-upload"
            :show-file-list="false"
            :http-request="qiniuUp"
            :before-upload="beforeUpload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :multiple="false"
          >
            <el-avatar v-if="profile.tenant_pic !== null" :src="profile.tenant_pic" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item :label="label.name" prop="tenant_nickname">
          <el-input v-model="profile.tenant_nickname" placeholder="输入昵称"></el-input>
        </el-form-item>
        <el-form-item :label="label.mail" prop="tenant_mail">
          <el-input v-model="profile.tenant_mail" placeholder="输入邮箱"></el-input>
        </el-form-item>
        <el-form-item :label="label.contact" prop="tenant_contact">
          <el-input v-model="profile.tenant_contact" placeholder="输入联系方式"></el-input>
        </el-form-item>
        <el-form-item :label="label.sex" prop="tenant_sex">
          <el-radio-group v-model="profile.tenant_sex" size="small">
            <el-radio-button label="0">男</el-radio-button>
            <el-radio-button label="1">女</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <!--<el-form-item :label="label.realName" prop="tenant_realname">-->
          <!--<el-input v-model="profile.tenant_realname" placeholder="输入real name"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item :label="label.idNum" prop="tenant_IDnumber">-->
          <!--<el-input v-model="profile.tenant_IDnumber" placeholder="输入身份证"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item class="item-button">
          <el-button type="primary" @click="sureChangeProfile('profile')">确定</el-button>
          <el-button @click="cancelProfile">取消</el-button>
        </el-form-item>
      </el-form>
      <div class="show-profile" v-else>
        <el-row>
          <el-col :span="24">
            <div class="show-profile-all" style="height: 75px;">
              <el-avatar :src="userInfo.tenant_pic" :size="75"></el-avatar>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-name">
              <span>昵称：</span>
              {{userInfo.tenant_nickname}}
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-mail">
              <span>邮箱：</span>
              {{userInfo.tenant_mail}}
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-sex">
              <span>性别：</span>
              <span>
                <svg width="30" height="30" v-if="userInfo.tenant_sex === 0">
                  <use xlink:href="#icon-boy" />
                </svg>
                <svg width="30" v-else height="30">
                  <use xlink:href="#icon-girl" />
                </svg>
              </span>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-realname">
              <span>真实姓名：</span>
              {{userInfo.tenant_realname}}
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-identify">
              <span>身份证号：</span>
              {{userInfo.tenant_IDnumber}}
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-identify">
              <span>联系方式：</span>
              {{userInfo.tenant_contact}}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
  name: "Profile",
  data() {
    // let valitIDCard = (rule, value, callback) => {
    //   if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
    //     callback("请输入正确身份证号码");
    //   }
    //   callback();
    // };
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
    return {
      domin: "https://upload-z2.qiniup.com",
      qiniuaddr: "https://assets.hhh233.xyz",

      profile: {
        tenant_id: "",
        tenant_pic: "",
        tenant_nickname: "",
        tenant_mail: "",
        // tenant_realname: "",
        // tenant_IDnumber: "",
        tenant_sex: "",
        tenant_contact: ""
      },
      label: {
        avatar: "头像",
        name: "昵称",
        mail: "邮箱",
        sex: "性别",
        contact: "联系方式"
      },
      profileRules: {
        // "tenant_pic": [
        //   { required: true, message: '请上传头像', trigger: 'blur' }
        // ],
        tenant_nickname: [
          { required: true, message: "请输入昵称", trigger: "blur" }
        ],
        tenant_mail: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        // tenant_realname: [
        //   { required: true, message: "请输入真实姓名", trigger: "blur" }
        // ],
        // tenant_IDnumber: [
        //   { required: true, message: "请输入身份证号码", trigger: "blur" },
        //   { validator: valitIDCard, trigger: "blur" }
        // ],
        tenant_sex: [
          { required: true, message: "请选择性别", trigger: "change" }
        ],
        tenant_contact: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
          { validator: validateName, trigger: "blur" }
        ]
      },
      labelWidth: "0px",
      editable: false
    };
  },
  created() {
    this.labelWidth = window.screen.width > 500 ? "80px" : "0px";
    if (window.screen.width < 500) {
      for (let item in this.label) {
        this.label[item] = "";
      }
    }
    this.profile.tenant_id = this.userInfo.tenant_id;
    this.profile.tenant_nickname = this.userInfo.tenant_nickname;
    this.profile.tenant_sex = this.userInfo.tenant_sex;
    this.profile.tenant_mail = this.userInfo.tenant_mail;
    this.profile.tenant_realname = this.userInfo.tenant_realname;
    this.profile.tenant_IDnumber = this.userInfo.tenant_IDnumber;
    this.profile.tenant_contact = this.userInfo.tenant_contact;
    this.profile.tenant_pic = this.userInfo.tenant_pic;
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    cancelProfile() {
      this.$emit("cancelProfile");
    },
    sureChangeProfile(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$post("/updateTenant", this.profile)
            .then(res => {
              console.log(res);
              if (res.code === "000") {
                this.$store.commit("setUserInfo", res.Tenant);
                this.$message.success("修改成功");
                this.$emit("cancelProfile");
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
            this.profile.tenant_pic = this.qiniuaddr +
                "/" +
                res.data.key +
                "?imageView2/1/w/200/h/200/format/webp/q/75";
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
.show-profile-all {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
}
.profile {
  position: relative;
}
.profile-edit {
  position: absolute;
  top: -40px;
  right: 10px;
}
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
  border-color: #409eff;
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
</style>