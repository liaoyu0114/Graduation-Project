<template>
  <div class="error">
    <div class="bg"></div>
    <div class="error-body">
      <el-row>
        <el-col :span="24" class="error-header">
          <div class="header-button">
            <el-button type="danger" plain size="small" class="button" @click="showForm">新建报障</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="form-box" v-if="errorOrder.length !== 0">
        <el-col :span="24" v-for="(item,index) in errorOrder" :key="index">
          <error-cell :scope="item"></error-cell>
        </el-col>
      </el-row>
      <el-row v-if="errorOrder.length === 0 || userInfo.tenant_id">
        <el-col :span="24">
          <div class="no-more">
            <el-image
                    style="width: 50%"
                    src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"
            ></el-image>
          </div>
        </el-col>
      </el-row>
      <el-dialog title="新建报障" :visible.sync="dialogTableVisible">
        <error-form :house="houseT" @onSubmit="onSubmit" @canelClick="canelClick"></error-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import ErrorCell from "./ErrorCell";
  import ErrorForm from "./ErrorForm";
  import { mapGetters } from "vuex";
  export default {
    name: "Error",
    components: {
      ErrorCell,
      ErrorForm
    },
    data() {
      return {
        dialogTableVisible: false,
        houseT: [],
        query: {
          tenant_id: "",
          currIndex: 1,
          pageSize: 10
        },
        errorOrder: []
      };
    },
    created() {
      this.query.tenant_id = this.userInfo.tenant_id;
      if (this.userInfo.tenant_id) {
        this.loadError();
        this.loadHouse()
      }
    },
    activated() {
      if (this.userInfo.tenant_id) {
        this.loadError();
        this.loadHouse()
      }
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    methods: {
      showForm() {
        if (!this.userInfo.tenant_id) {
          this.$confirm("登录后才可以申请哦, 是否前往登录?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }).then(() => {
            this.$router.push("/login");
          })
        } else {
          if (this.errorOrder.length === 0) {
            this.$message.warning("还没有租过房，不能建立报障");
          } else {
            this.dialogTableVisible = true;
          }
        }
      },
      loadHouse() {
        this.$post("/selectHousingresourcesByTenantId", {
          "tenant_id": this.userInfo.tenant_id
        }).then(res => {
          console.log(res);
          if (res.code === "000") {
            this.houseT = res.housingresourceslist
          } else {
            this.$message.warning(res.msg)
          }
        }).catch(err => {
          console.log(err);
          this.$message.error("未知错误")
        })
      },
      loadError() {
        this.$post("/selectObstacleListByTenantId", this.query)
            .then(res => {
              console.log(res);
              if (res.code === "000") {
                this.errorOrder = res.obstacleInfoList.reverse();
                this.errorOrder = this.errorOrder.map(item => {
                  item.obstacle.obstacle_pic = JSON.parse(item.obstacle.obstacle_pic);
                  return item
                })
              } else {
                this.$message.warning(res.msg);
              }
            })
            .catch(err => {
              console.log(err);
              this.$message.error("网络错误");
            });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      onSubmit(form) {
        console.log(form);
        let url = form.pic.map(item => {
          return item.url
        });
        this.$post("/AddObstacle", {
          tenant_id: this.userInfo.tenant_id,
          housingresources_id: form.house,
          obstacle_detail: form.detail,
          obstacle_pic: JSON.stringify(url)
        }).then(res => {
          console.log(res);
          if (res.code === "000") {
            this.dialogTableVisible = false;
            this.$message.success("创建成功");
            this.loadError()
          } else {
            this.$message.warning(res.msg);
          }
        })
            .catch(err => {
              console.log(err);
              this.$message.error("网络错误");
            });
      },
      canelClick() {
        this.dialogTableVisible = false;
      }
    }
  };
</script>

<style scoped>
  .error {
    display: flex;
    position: relative;
    justify-content: center;
    background: transparent;
  }

  .error-body {
    max-width: 1000px;
    width: 100%;
    background: white;
  }
  .error-header,
  .header-button {
    display: flex;
    justify-content: center;
  }
  .error-header-box {
    padding: 10px;
  }
  .error-header {
    padding: 20px;
  }
  .header-input {
    width: 300px;
    margin: 0 10px;
  }
  .button {
    margin: 0 10px;
  }
  .bg {
    position: absolute;
    top: 0;
    max-width: 1000px;
    width: 100%;
    height: calc(100vh - 60px);
    background: white;
  }
  .no-more {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
</style>
