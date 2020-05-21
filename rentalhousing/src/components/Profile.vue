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
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-error="handleAvatarError"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="profile.avatar" :src="profile.avatar" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item :label="label.name" prop="tenant_name">
          <el-input v-model="profile.tenant_name" placeholder="输入昵称"></el-input>
        </el-form-item>
        <el-form-item :label="label.mail" prop="tenant_mail">
          <el-input v-model="profile.tenant_mail" placeholder="输入邮箱"></el-input>
        </el-form-item>
        <el-form-item :label="label.sex" prop="tenant_sex">
          <el-radio-group v-model="profile.tenant_sex" size="small">
            <el-radio-button label="0">男</el-radio-button>
            <el-radio-button label="1">女</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="label.realName" prop="tenant_realname">
          <el-input v-model="profile.tenant_realname" placeholder="输入real name"></el-input>
        </el-form-item>
        <el-form-item :label="label.idNum" prop="tenant_IDnumber">
          <el-input v-model="profile.tenant_IDnumber" placeholder="输入身份证"></el-input>
        </el-form-item>
        <el-form-item class="item-button">
          <el-button type="primary" @click="sureChangeProfile('profile')">确定</el-button>
          <el-button>取消</el-button>
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
              <span>昵称：</span>{{userInfo.tenant_name}}</div>
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
              <span><svg  width=30 height=30 v-if="userInfo.tenant_sex === 0">
                <use xlink:href="#icon-boy"></use>
              </svg>
              <svg width=30 v-else height=30>
                <use xlink:href="#icon-girl"></use>
              </svg>

              </span>

            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-realname">
              <span>真实姓名：</span>{{userInfo.tenant_realname}}
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-identify">
              <span>身份证号：</span>{{userInfo.tenant_IDnumber}}
            </div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-identify">
              <span>联系方式：</span>{{userInfo.tenant_IDnumber}}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
export default {
  name: "Profile",
  data() {
    let valitIDCard = (rule, value, callback) => {
      if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        callback("请输入正确身份证号码")
      }
      callback()
    };
    return {
      profile: {
        "tenant_pic": "",
        "tenant_name": "",
        "tenant_mail": "",
        "tenant_realname": "",
        "tenant_IDnumber": "",
        "tenant_sex": ""
      },
      label: {
        avatar: "头像",
        name: "昵称",
        mail: "邮箱",
        realName: "姓名",
        idNum: "身份证",
        sex: "性别"
      },
      profileRules: {
        "tenant_pic": [
          { required: true, message: '请上传头像', trigger: 'blur' }
        ],
        "tenant_name": [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        "tenant_mail": [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        "tenant_realname": [
          { required: true, message: '请输入真实姓名', trigger: 'blur' },
        ],
        "tenant_IDnumber": [
          { required: true, message: '请输入身份证号码', trigger: 'blur' },
          { validator: valitIDCard, trigger: 'blur' }
        ],
        "tenant_sex": [
          { required: true, message: '请选择性别', trigger: 'change' },
        ]
      },
      labelWidth: "0px",
      editable: false
    };
  },
  created() {
    this.labelWidth = window.screen.width > 500 ? "70px" : "0px";
    if (window.screen.width < 500) {
      for (let item in this.label) {
        this.label[item] = "";
      }
    }
    this.profile = this.userInfo
  },
  computed: {
      ...mapGetters(["userInfo"])
  },
  methods: {
    sureChangeProfile(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message("1")
        }
      })
    },
    handleAvatarSuccess(res, file) {
      this.profile.tenant_pic = URL.createObjectURL(file.raw);
      this.$message.success("头像上传成功")
    },
    handleAvatarError() {
      this.$message.error("头像上传失败")
    },
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