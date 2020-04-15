<template>
  <div class="error-cell">
    <el-card class="error-card">
      <div slot="header" class="card-title">
        <span>高升桥地铁站 应届生免押 无中介 可月付 可短租 衣冠庙</span>
      </div>
      <el-row class="card-body">
        <el-col :span="24" class="card-body-line">
          详情有啥。。。。要不你给设计一下？？？详情、状态、报障时间、处理完成时间都怎么放
        </el-col>
        <el-col :span="24"></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ErrorCell"
};
</script>

<style scoped>
.card-title {
  font-size: 1rem;
  color: #0090fa;
  font-weight: 500;
}
.error-cell {
  margin-bottom: 20px;
  padding: 0 10px;
}
.card-title:hover span {
  color: #f45f21;
  text-decoration: underline;
}
</style>