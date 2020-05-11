<template>
  <div class="rantal-cell">
    <el-row  >
      <el-col :span="24"></el-col>
      <el-col :span="24" v-if="userInfo.landlord_id">
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
      <el-col>
        <div class="no-more">
          <el-image style="width: 50%" src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
export default {
  name: "RentalCell",
  computed: {
      ...mapGetters(["userInfo"])
  }
};
</script>

<style scoped>
  .no-more {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
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