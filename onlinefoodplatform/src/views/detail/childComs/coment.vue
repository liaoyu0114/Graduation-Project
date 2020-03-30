<template>
  <div class="comment">
    <el-row  type="flex" justify="center" >
      <el-col>
        <div class="box">
  <div class="score">{{value}}</div>
        <div>
          <div class="text">商家评分</div>
          <el-rate v-model="value" disabled></el-rate>
        </div>
        </div>
      
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "coment",
  data() {
    return {
      value: 4.8
    };
  }
};
</script>

<style scoped>
.box {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
}
.score {
  line-height: 40px;
  font-size: 30px;
  color:#F56C6C ;
  margin-right: 15px;
}
.text {
color: #909399;
font-size: 16px;
}
</style>