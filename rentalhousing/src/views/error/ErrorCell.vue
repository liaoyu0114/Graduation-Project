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
          <span v-if="error.obstacle_state === 0" class="willdo">未处理</span>
          <span v-else-if="error.obstacle_state === 1" class="doing">正在处理</span>
          <span v-else class="finished">已完成</span>
        </div>
      </div>
      <el-row class="card-body" :gutter="10">
        <el-col :span="12" class="card-body-line">
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
        </el-col>
        <el-col :span="12" class="card-body-line">
        <div style="width: 200px;text-align: center">
          <el-image
                  fit="contain"
                  style="width: 200px;height: 128px"
                  :src="error.obstacle_pic[0]"
                  :preview-src-list="error.obstacle_pic"
          ></el-image>
          <div style="color: #999; font-size: 12px">点击图片查看更多</div>
        </div>

          <div class="info-box">
            <div class="error-remark">备注信息</div>
            <div class="error-remark-detail">{{error.obstacle_detail}}</div>
          </div>
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
  .error-remark {
    font-size: 16px;
    font-weight: 600;
  }
  .error-remark-detail {
    margin-top: 5px;
    font-size: 14px;
    font-weight: 500;
  }
  .willdo {
    color: #f56c6c;
  }
  .doing {
    color: #E6A23C;
  }
  .finished {
    color: #67C23A;
  }
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