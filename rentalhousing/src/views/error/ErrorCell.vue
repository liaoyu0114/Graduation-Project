<template>
  <div class="error-cell">
    <el-card class="error-card">
      <div slot="header" class="card-title">
        <span>报障ID: {{error.obstacle_id}}</span>
        <span
          style="padding-left: 10px"
        >创建时间： {{error.obstacle_time | formatDate("YYYY-MM-DD HH:mm")}}</span>
        <span
          style="padding-left: 10px"
          v-if="error.obstacle_state === 2"
        >完成时间： {{error.obstacle_completiontime | formatDate("YYYY-MM-DD HH:mm")}}</span>
        <div class="error-status">
          <span v-if="error.obstacle_state === 0">未处理</span>
          <span v-else-if="error.obstacle_state === 1">正在处理</span>
          <span v-else>已完成</span>
        </div>
      </div>
      <el-row class="card-body" :gutter="10">
        <el-col :span="12" class="card-body-line">
          <!-- <el-col :span="24" style="display:flex; justify-content: flex-start"> -->
          <!-- <div> -->
          <el-image
            fit="contain"
            style="width: 412px; height: 128px"
            :src="error.house.housingresources_pic[0]"
            :preview-src-list="error.house.housingresources_pic"
          ></el-image>
          <!-- </div> -->
          <div class="info-box">
            <div>房源: {{error.house.housingresources_name}}</div>
            <div>地址: {{error.house.housingresources_address}}</div>
            <div>
              <span>
                <el-avatar :size="45" :src="error.landlord.landlord_pic"></el-avatar>
              </span>
              <span style="padding: 10px">{{error.landlord.landlord_nickname}}</span>
            </div>
          </div>
          <!-- </el-col> -->
          <!-- <el-col :span="4"></el-col> -->
        </el-col>
        <el-col :span="12">
          <!-- <el-col :span="24" style="display:flex; justify-content: flex-start"> -->
       
            <el-image
              fit="contain"
              style="width: 412px; height: 128px"
              :src="error.obstacle_pic[0]"
              :preview-src-list="error.obstacle_pic"
            ></el-image>
            <div>报障图片</div>

          <!-- </el-col> -->
          <!-- <el-col :span="4"></el-col> -->
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ErrorCell",
  props: {
    error: {}
  }
};
</script>

<style scoped>
.card-title {
  font-size: 14px;
  color: #0090fa;
  font-weight: 500;
}
.error-cell {
  margin-bottom: 20px;
  padding: 0 10px;
}
.info-box {
  padding: 10px;
}
.error-status {
  height: 100%;
  line-height: 100%;
  text-align: center;
  color: red;
  float: right;
  font-weight: 500;
  padding: 3px 0;
}
.card-body-line {
  display: flex;
  justify-content: flex-start;
}
</style>