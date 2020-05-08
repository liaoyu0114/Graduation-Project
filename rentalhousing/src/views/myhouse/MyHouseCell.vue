<template>
  <div class="house-cell">
    <el-row>
      <el-col :span="24">
        <div class="house-header">
          <el-button type="primary" size="small">发布新房源</el-button>
        </div>
      </el-col>
      <el-col :span="24">
         <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="house-title">衣冠庙地铁口 西南民大旁200米 出行便利 家具家电齐全</span>
            <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">{{'展示订单 ' + o }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyHouseCell"
}
</script>

<style scoped>
.house-cell {
  padding: 10px;
}
.house-header {
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>