<template>
  <div class="error">
    <div class="bg"></div>
    <div class="error-body">
      <el-row>
        <el-col :span="24" class="error-header">
          <el-input placeholder="请输入内容"  size="small" v-model="search" class="header-input">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <div class="header-button">
<el-button type="primary" size="small" class="button">搜索</el-button>
<el-button type="primary" size="small" class="button">新建报障</el-button>
          </div>
          
        </el-col>
      </el-row>
      <el-row class="form-box">
        <el-col :span="24" v-for="item in 10" :key="item">
          <error-cell></error-cell>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ErrorCell from "./ErrorCell";
export default {
  name: "Error",
  components: {
    ErrorCell
  },
  data() {
    return {
      isCollapse: true,
      search: ""
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.error {
  display: flex;
  position: relative;
  justify-content: center;

}
.bg {
  position: absolute;
  top: 0;
  left: calc((100vw - 1000px) / 2 );
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 60px);
  background: white;
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
</style>