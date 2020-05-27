<template>
  <div class="error">
    <div class="bg"></div>
    <div class="error-body">
      <el-row>
        <el-col :span="24" class="error-header">
          <el-input placeholder="请输入内容" size="small" v-model="search" class="header-input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <div class="header-button">
            <el-button type="primary" size="small" class="button">搜索</el-button>
            <el-button
              type="primary"
              size="small"
              class="button"
              @click="dialogTableVisible = true"
            >新建报障</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="form-box" v-if="userInfo.tenant_id">
        <el-col :span="24" v-for="(item,index) in errores" :key="index">
          <error-cell :error="item"></error-cell>
        </el-col>
      </el-row>
      <el-row v-else>
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
      isCollapse: true,
      dialogTableVisible: false,
      search: "",
      houseT: [
        {
          id: 111,
          name: "① 高升桥地铁站 应届生免押 无中介 可月付 可短租 衣冠庙"
        },
        {
          id: 222,
          name: "② 高升桥地铁站 应届生免押 无中介 可月付 可短租 衣冠庙"
        },
        {
          id: 333,
          name: "③ 高升桥地铁站 应届生免押 无中介 可月付 可短租 衣冠庙"
        }
      ],
      errores: [
        {
          obstacle_id: 191111,
          obstacle_time: new Date().getTime() - 24 * 3600 * 10,
          obstacle_state: 0, // 状态（0未处理、1正在处理、2已完成）
          obstacle_detail: "备注信息",
          obstacle_completiontime: new Date().getTime(), //完成时间
          obstacle_pic: [
            "https://assets.hhh233.xyz/markus-spiske-ypNLP0-ZB6E-unsplash.jpg"
          ],
          landlord: {},
          // house: this.house[0],
          tenant: {}
        },
        {
          obstacle_id: 192222,
          obstacle_time: new Date().getTime() - 24 * 3600 * 10,
          obstacle_state: 1, // 状态（0未处理、1正在处理、2已完成）
          obstacle_detail: "备注信息",
          obstacle_completiontime: new Date().getTime(), //完成时间
          obstacle_pic: [
            "https://assets.hhh233.xyz/nathan-dumlao-a3ra9eXUjvo-unsplash.jpg"
          ],
          landlord: {},
          // house: this.house[0],
          tenant: {}
        },{
          obstacle_id: 193333,
          obstacle_time: new Date().getTime() - 24 * 3600 * 10,
          obstacle_state: 2, // 状态（0未处理、1正在处理、2已完成）
          obstacle_detail: "备注信息",
          obstacle_completiontime: new Date().getTime(), //完成时间
          obstacle_pic: [
             "https://assets.hhh233.xyz/markus-spiske-ypNLP0-ZB6E-unsplash.jpg"
          ],
          landlord: {},
          // house: this.house[0],
          tenant: {},

        }
      ],
      query: {
        "tenant_id": "",
        "currIndex": 1,
        "pageSize": 10
      }

    };
  },
  activated() {
    // if (this.errores.length === 0) {
      this.loadError()
    // }

  },
  computed: {
    ...mapGetters(["userInfo", "landlord", "house"])
  },
  methods: {
    loadError() {
      this.$post("/selectObstacleListByTenantId", this.query).then(res => {
        console.log(res);
        if (res.code === "000") {
          console.log(res);
        }
      }).catch(err => {
        console.log(err);
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit(form) {
      console.log(form);
      this.dialogTableVisible = false;
      this.$message.success("创建成功");
      this.errores =  [
          {
        obstacle_id: 194444,
        obstacle_time: new Date().getTime() - 24 * 3600 * 10,
        obstacle_state:0, // 状态（0未处理、1正在处理、2已完成）
        obstacle_detail: form.detail,
        obstacle_completiontime: new Date().getTime(), //完成时间
        obstacle_pic: [
          "https://assets.hhh233.xyz/markus-spiske-ypNLP0-ZB6E-unsplash.jpg"
        ],
        landlord: this.landlord,
        tenant: this.userInfo,
        house: this.house[0]
      }
      ].concat(this.errores)
    },
    canelClick() {
      this.dialogTableVisible = false;
    }
  },
  created () {
    this.errores.map( item => { 
      item.house = this.house[0]
      item.landlord = this.landlord
      item.tenant = this.userInfo
    })
    this.query.tenant_id = this.userInfo.tenant_id
    this.loadError()
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
