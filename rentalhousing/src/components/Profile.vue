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
        :model="profile"
        :label-width="labelWidth"
        :rules="profileRules"
      >
        <el-form-item :label="label.avatar" prop="avatar">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="profile.avatar" :src="profile.avatar" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item :label="label.name" prop="name">
          <el-input v-model="profile.name" placeholder="输入昵称"></el-input>
        </el-form-item>
        <el-form-item :label="label.mail" prop="mail">
          <el-input v-model="profile.mail" placeholder="输入邮箱"></el-input>
        </el-form-item>
        <el-form-item :label="label.sex" prop="sex">
          <el-radio-group v-model="profile.sex" size="small">
            <el-radio-button label="0">男</el-radio-button>
            <el-radio-button label="1">女</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="label.realName" prop="realName">
          <el-input v-model="profile.realName" placeholder="输入real name"></el-input>
        </el-form-item>
        <el-form-item :label="label.idNum" prop="idNum">
          <el-input v-model="profile.idNum" placeholder="输入身份证"></el-input>
        </el-form-item>
        <el-form-item class="item-button">
          <el-button type="primary">确定</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      <div class="show-profile" v-else>
        <el-row>
          <el-col :span="24">
            <el-avatar></el-avatar>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-name"></div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-mail"></div>
            <svg class="icon-font" width=30>
              <use xlink:href="#icon-boy" />
            </svg>
            <svg class="icon-font" width=30>
              <use xlink:href="#icon-girl" />
            </svg>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-sex"></div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-realname"></div>
          </el-col>
          <el-col :span="24">
            <div class="show-profile-all show-profile-identify"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: {
        avatar: "",
        name: "",
        mail: "",
        realName: "",
        idNum: "",
        sex: ""
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
        avatar: {},
        name: {},
        mail: {},
        realName: {},
        idNum: {},
        sex: {}
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
  }
};
</script>

<style scoped>
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
  border-color: #409eff;
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
</style>