<template>
  <div class="rantal-cell">
    <el-row  >
      <el-col :span="24"></el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="rental-title">订单id: 15000141881147845</span>
            <el-button style="float: right; padding: 3px 0" type="text">缴纳租金</el-button>
          </div>
          <el-row>
            <el-col :span="24">
              房屋信息
            </el-col>
            <el-col :span="24">
              订单信息，房东信息
            </el-col>
            <el-col :span="24">
              <el-button type="primary" plain size="small">按钮区域</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "RentalCell"
};
</script>

<style scoped>
.rantal-cell {
  padding: 10px;
}
.rental-title {
  color: #0090fa;
  cursor: pointer;
  font-weight: 500;
}
.rental-title:hover {
  color: #fd5f31;
  text-decoration: underline;
}
</style>