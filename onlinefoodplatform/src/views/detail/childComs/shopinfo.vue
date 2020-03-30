<template>
  <div class="shopinfo">
    <el-row>
      <el-col>
        <el-card>
          <div slot="header" class="clearfix">
            <span>商家信息</span>
          </div>
          <div class="info">{{shopInfo.info}}</div>
        </el-card>
        <el-card>
          <div class="box">
            <div class="title">商家电话</div>
            <div class="info">{{shopInfo.phone}}</div>
          </div>
        </el-card>
        <el-card>
          <div class="box">
            <div class="title">商家地址</div>
            <div class="info">{{shopInfo.address}}</div>
          </div>
        </el-card>
        <el-card>
          <div class="box">
            <div class="title">营业时间</div>
            <div class="info">{{shopInfo.time}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "shopinfo",
  data() {
    return {
      shopInfo: {
        info:
          "百川水业是一家家庭饮用水服务商，主营桶装水、瓶装水、净水机、饮水设备及家庭消费品等，配送范围覆盖广州主要城区及周边地区，创立十多年，至今拥有200+家服务网点，实现全城高效送达。",
        phone: "18347515548",
        address: "成都市锦江区净居寺南街99号附20号",
        time: "09:30-20:30"
      }
    };
  }
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
}
.info {
  color: #777;
  font-size: 15px;
}
</style>