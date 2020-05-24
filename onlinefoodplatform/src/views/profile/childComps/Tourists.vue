<template>
  <div class="tourist">
    <el-row class="user-info" @click="infoClick">
      <el-col :span="18">
        <div class="user-name">
          {{userInfo.nickName}}
          <br />
          <i class="iconfont icon-tubiao">{{userInfo.phone}}</i>
          <div class="user-name-tips">Nice to meet you</div>
        </div>
        <el-button type="text"
                   style="color: white"
                   size="mini"
                   @click="showFormUser = true">编辑</el-button>
      </el-col>
      <el-col :span="6">
        <div class="profile-avatar">
          <el-avatar :size="75" :src="userInfo.avatar"></el-avatar>
        </div>
      </el-col>
    </el-row>
    <div class="list">
      <list-cell v-for="(item, index) in list" :key="index" @click.native="showDialog(index)">
        <i class="iconfont" :class="item.iconName" slot="icon"></i>
        <div class="icontext" slot="text">{{item.text}}</div>
      </list-cell>
    </div>
    <el-dialog :title="title"
               :visible.sync="dialogTableVisible">
      <collection :collection="getCollection" v-if="showCollection"></collection>
      <my-address :user-id="userInfo.id" v-if="showAddress"></my-address>
      <el-form v-if="business"
               ref="form"
               :model="form"
               :rules="formRules"
               label-width="80px"
               label-position="left">
        <el-form-item label="用户名" prop="business_phone">
          <el-input v-model="form.business_phone" placeholder="输入账号（手机号）"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="business_password">
          <el-input v-model="form.business_password" type="password" placeholder="输入密码"></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="business_nickname">
          <el-input v-model="form.business_nickname" placeholder="输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="上传头像" prop="business_pic">
          <el-upload
            ref="upload"
            :action="domin"
            class="home-upload"
            :show-file-list="false"
            :http-request = 'qiniuUp'
            :before-upload="beforeUpload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :multiple="false">
            <div>
              <el-button size="small" type="primary">选取图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            </div>
            <div v-if="form.business_pic !== ''">
              <el-avatar :src="form.business_pic" :size="75"></el-avatar>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact_number">
          <el-input v-model="form.contact_number" placeholder="输入联系方式"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 45%" type="primary" @click="checkForm('form')">确定</el-button>
          <el-button style="width: 45%" type="danger" @click="closeAll">取消</el-button>

        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="编辑个人信息"
               :visible.sync="showFormUser">
      <el-form :model="userInfo"
               ref="formUser"
               label-width="80px"
               label-position="left"
               :rules="infoRules">
        <el-form-item label="账号" prop="phone">
          <el-input disabled v-model="userInfo.phone"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <el-upload
            ref="upload"
            :action="domin"
            class="home-upload"
            :show-file-list="false"
            :http-request = 'qiniuUpUser'
            :before-upload="beforeUpload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :multiple="false">
            <div style="display: flex;justify-content: space-between; width: 100%">
              <div>
                <el-button size="small" type="primary">选取图片</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
              </div>
              <div v-if="userInfo.avatar !== ''">
                <el-avatar :src="userInfo.avatar" :size="75"></el-avatar>
              </div>
            </div>

          </el-upload>
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="userInfo.nickName" placeholder="输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="userInfo.sex" size="small">
            <el-radio-button label="0">男</el-radio-button>
            <el-radio-button label="1">女</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="updateuser('formUser')"
                     style="width: 45%">确定</el-button>
          <el-button type="danger"
                     @click="showFormUser = false"
                     style="width: 45%">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import ListCell from "components/content/ListCell";
import Collection from "./Collection";
import MyAddress from "./Address"
import getToken from "network/token"
import axios from "axios"

export default {
  name: "Tourists",
  props: {
    userInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    ListCell,
    Collection,
    MyAddress
  },
  created() {
    Object.assign(this.userInfo, this.$store.state.userInfo)
  },
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
    return {
      showFormUser: false,
      domin: 'https://upload-z2.qiniup.com',
      qiniuaddr: 'https://assets.hhh233.xyz',
      form: {
        "business_phone": "",
        "business_password": "",
        "business_nickname": "",
        "business_pic": "",
        "contact_number": ""
      },
      formRules: {
        business_phone: [
          {required: true, message: "输入一个手机号", trigger: 'blur'},
          { validator: validateName, trigger: "blur"}
        ],
        business_password: [
          {required: true, message: "输入密码", trigger: 'blur'}
        ],
        business_nickname: [
          {required: true, message: "输入昵称", trigger: 'blur'}
        ],
        business_pic: [
          {required: true, message: "上传头像", trigger: 'blur'}
        ],
        contact_number:[
          {required: true, message: "输入联系方式", trigger: 'blur'},
          { validator: validateName, trigger: "blur"}
        ]
      },
      infoRules: {
        email: [
          {required: true, message: "输入邮箱", trigger: 'blur'},
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        phone: [
          {required: true, message: "输入手机", trigger: 'blur'}
        ],
        nickName: [
          {required: true, message: "输入昵称", trigger: 'blur'}
        ],
        avatar: [
          {required: true, message: "上传头像", trigger: 'blur'}
        ],
        sex:[
          {required: true, message: "选择性别", trigger: 'change'},
        ]
      },
      list: [
        {
          iconName: "icon-shoucang",
          text: "我的收藏"
        },
        {
          iconName: "icon-dizhi",
          text: "我的地址"
        },
        {
          iconName: "icon-kefu",
          text: "在线客服"
        },
        {
          iconName: "icon-order-acquired",
          text: "成为商家"
        },
        {
          iconName: "icon-shezhi",
          text: "设置"
        }
      ],
      title: "",
      dialogTableVisible: false,
      showCollection: false,
      showAddress: false,
      business: false
    };
  },
  methods: {
    closeAll() {
      this.dialogTableVisible = false;
      this.showCollection = false;
      this.showAddress = false;
      this.business = false;
    },
    updateuser(formName) {
      this.$refs[formName].validate( valit => {
        if (valit) {
          let data = {
            "user_id": this.userInfo.id,
            "user_nickname": this.userInfo.nickName,
            "user_sex": this.userInfo.sex,
            "user_mail": this.userInfo.email,
            "collection": this.userInfo.collection,
            "user_pic": this.userInfo.avatar
          }
          this.$post("/updateUser", data).then(res => {
            if (res.code === "000") {
              this.$store.commit("setUserInfo", res.user);
              this.$message.success("修改成功");
              this.showFormUser = false
            } else {
              this.$message.warning(res.msg)
            }
          }).catch(err => {
            console.log(err);
            this.$message.error("网络错误")
          })
        }
      })
    },
    checkForm(formName) {
      this.$refs[formName].validate( valit => {
        if (valit) {
          this.$post("/addbusiness", this.form).then(res => {
            if (res.code === "000") {
              this.$message.success("注册成功！");
              this.dialogTableVisible = false;
              this.$refs[formName].resetFields()
            }  else {
              this.$message.warning(res.msg)
            }
          }).catch(() => {
            this.$message.error("网络错误")
          })
        }
      })
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt10M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
      }
      if (!isLt10M) {
        this.$message.error('上传头像图片大小不能超过 5MB!');
      }
      return isJPG && isLt10M;
    },
    uploadSuccess() {
      this.$message.success("上传成功")
    },
    uploadError() {
      this.$message.error("上传失败")
    },
    qiniuUp(req) {
      const keyname = btoa(req.file.name.split(".")[0]) + "." + req.file.name.split(".")[1];

      const config = {
        headers: {'Content-Type': 'multipart/form-data'},
      };
      getToken().then(res => {
        let formdata = new FormData();
        formdata.append('file', req.file);
        formdata.append('token', res.uploadToken);
        formdata.append('key', keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        axios.post(this.domin, formdata, config).then(res => {
          console.log(res);
          let urlN = this.qiniuaddr + '/' + res.data.key + "?imageView2/1/w/200/h/200/format/webp/q/75";
          this.form.business_pic = urlN;
          req.onSuccess(req.file);
        }).catch(err => {
          console.log(err);
          req.onError(req.file);
        })
      })
    },
    qiniuUpUser(req) {
      // 重命名要上传的文件
      // const keyname = this.getUserInfo.username + new Date() + Math.floor(Math.random() * 100) + '.' + filetype;
      const keyname = btoa(req.file.name.split(".")[0]) + "." + req.file.name.split(".")[1];

      //axio配置
      const config = {
        headers: {'Content-Type': 'multipart/form-data'},
      };
      //获取七牛云token
      getToken().then(res => {
        let formdata = new FormData();
        formdata.append('file', req.file);
        formdata.append('token', res.uploadToken);
        formdata.append('key', keyname);
        // 获取到凭证之后再将文件上传到七牛云空间
        axios.post(this.domin, formdata, config).then(res => {
          console.log(res);
          let url = this.qiniuaddr + '/' + res.data.key + "?imageView2/1/w/200/h/200/format/webp/q/75";
          this.userInfo.avatar = url;
          req.onSuccess(req.file);
        }).catch(err => {
          console.log(err);
          //上传失败事件
          req.onError(req.file);
        })
      })
    },
    infoClick() {
      this.$router.push("/sign");
    },
    showDialog(index) {
      switch (index) {
        case 0:
          this.dialogTableVisible = true;
          this.showCollection = true;
          this.showAddress = false;
          this.business = false;
          this.title = this.list[index].text;
          break;
        case 1: 
        this.dialogTableVisible = true;
          this.showCollection = false;
          this.showAddress = true;
          this.business = false;
          this.title = this.list[index].text;
          break;
        case 3:
          this.dialogTableVisible = true;
          this.showCollection = false;
          this.showAddress = false;
          this.business = true;
          break;
        default:
          this.$notify({
          title: 'Feature',
          message: '这是一个feature',
          type: 'success'
        });
          break;
      }
    }
  },
  computed: {
    getCollection() {
      console.log(this.userInfo.collection.length)
      if (this.userInfo.collection.length === 0) {
        return [];
      } else {
        return this.userInfo.collection.split(",");
      }
    }
  }
};
</script>

<style scoped>
.user-info {
  /*display: flex;*/
  padding: 15px;
  background: var(--color-ele-blue);
  /*justify-content: space-between;*/
}
.user-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
}
.user-name-tips {
  font-size: 15px;
  font-weight: 500;
}
.icon-tubiao {
  font-size: 15px !important;
  font-weight: 500;
}
.user-icon {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: solid 0.1px #999;
  overflow: hidden;
}
.user-icon img {
  width: 100%;
  height: 100%;
}

</style>

<style>
.el-dialog {
  width: 90% !important;
  /* max-height: 90% !important; */
}
</style>
