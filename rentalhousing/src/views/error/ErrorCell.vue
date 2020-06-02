<template>
  <div class="error-cell">
    <el-card class="error-card">
      <div slot="header" class="card-title">
        <span>报障ID: {{scope.obstacle.obstacle_id}}</span>
        <span
                style="padding-left: 10px"
        >创建时间： {{scope.obstacle.obstacle_time}}</span>
        <span
                style="padding-left: 10px"
                v-if="scope.obstacle.obstacle_state === 2"
        >完成时间： {{scope.obstacle.obstacle_completiontime}}</span>
        <div class="error-status">
          <span v-if="scope.obstacle.obstacle_state === 0" class="willdo">未处理</span>
          <span v-else-if="scope.obstacle.obstacle_state === 1" class="doing">正在处理</span>
          <span v-else class="finished">已完成</span>
        </div>
      </div>
      <el-row class="card-body" :gutter="10">
        <el-col :span="8" class="card-body-line">
          <div class="info-box">
            <div style="display: flex; justify-content: center">
              <span>
                <el-avatar :size="75" :src="scope.landlord.landlord_pic"></el-avatar>
              </span>
            </div>
            <span style="padding: 10px"><strong>房东信息</strong></span><br>
            <span style="padding: 10px">昵称： {{scope.landlord.landlord_nickname}}</span><br>
            <span style="padding: 10px">联系方式：{{scope.landlord.landlord_contact}}</span><br>
            <span style="padding: 10px">邮箱：{{scope.landlord.landlord_mail}}</span><br>
          </div>
        </el-col>
        <el-col :span="16" class="card-body-line">
          <div style="width: 200px;text-align: center">
            <el-image
                    fit="contain"
                    style="width: 200px;height: 128px"
                    :src="scope.obstacle.obstacle_pic[0]"
                    :preview-src-list="scope.obstacle.obstacle_pic"
            ></el-image>
            <div style="color: #999; font-size: 12px">点击图片查看更多</div>
          </div>

          <div class="info-box">
            <div class="error-remark">备注信息</div>
            <div class="error-remark-detail">{{scope.obstacle.obstacle_detail}}</div>
          </div>
        </el-col>
        <el-col style="color: #999999">
          <!--长时间未处理，主动联系房东-->
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "ErrorCell",
    props: {
      scope: {}
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
  .card-body {
    height: 120px;
  }
  .card-body-line {
    display: flex;
    justify-content: flex-start;
  }
</style>