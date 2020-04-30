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
            <el-button type="primary" size="small" class="button" @click="dialogTableVisible = true">新建报障</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="form-box">
        <el-col :span="24" v-for="item in 10" :key="item">
          <error-cell></error-cell>
        </el-col>
      </el-row>
      <el-dialog title="新建报障" :visible.sync="dialogTableVisible">
        <error-form :house="house" @onSubmit="onSubmit" @canelClick="canelClick"></error-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import ErrorCell from "./ErrorCell";
import ErrorForm from "./ErrorForm";
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
      house: [
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
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit(form) {
      console.log(form)
      this.dialogTableVisible = false
      this.$message(form.house.toString())
    },
    canelClick() {
this.dialogTableVisible = false
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
</style>

<style>

</style>