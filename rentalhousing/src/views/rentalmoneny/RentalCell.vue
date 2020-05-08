<template>
  <div class="rantal-cell">
    <el-row  >
      <el-col :span="24"></el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="rental-title">衣冠庙地铁口 西南民大旁200米 出行便利 家具家电齐全</span>
            <el-button style="float: right; padding: 3px 0" type="text">缴纳租金</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">{{'展示订单 ' + o }}</div>
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