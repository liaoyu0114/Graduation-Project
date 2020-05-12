<template>
  <div class="rantal-cell">
    <el-row>
      <el-col :span="24"></el-col>
      <el-col :span="24" v-if="userInfo.tenant_id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="rental-title">租金订单: {{rent.rent_id}}</span>
            <span class="rental-date" v-if="rent.rent_type === 0">
              截止日期:
              <span>{{rent.rent_endtime | formatDate("YYYY-MM-DD HH:mm")}}</span>
            </span>
            <span class="rental-date2" v-if="rent.rent_type === 1">
              缴纳日期:
              <span>{{rent.rent_time | formatDate("YYYY-MM-DD HH:mm")}}</span>
            </span>
            <span class="rent-state finished" v-if="rent.rent_type === 1">已缴纳</span>
            <span class="rent-state doing" v-else>未缴纳</span>
          </div>
          <el-row :gutter="50" style="padding: 0 70px">
            <el-col :span="12">
              <el-card :body-style="{ padding: '0px' }">
                <el-image
                  :fit="contain"
                  :src="rent.house.housingresources_pic[0]"
                  :preview-src-list="rent.house.housingresources_pic"
                ></el-image>
                <div style="padding: 14px;font-size:14px">
                  <span class="house-name">{{rent.house.housingresources_name}}</span>
                  <div class="bottom clearfix">
                    <span>地址：{{rent.house.housingresources_address}}</span>
                  </div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <div class="order-info">
                <div>
                  应缴纳金额:
                  <span>￥{{rent.rent_price}}</span>
                </div>
              </div>
              <div class="landlord-info">
                <div style="display: flex; justify-content: center;">
                  <el-avatar :src="rent.landlord.landlord_pic" :size="100"></el-avatar>
                </div>

                <div class="landlord-info-del">昵称：{{rent.landlord.landlord_nickname}}</div>
                <div class="landlord-info-del">邮箱： {{rent.landlord.landlord_mail}}</div>
              </div>
              <div class="button-ara">
                <div>
                  <el-button type="primary" plain size="small" @click="paypay">缴纳租金</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RentalCell",
  props: {
    rent: {}
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    paypay() {
      if (this.rent.rent_type === 1) {
        this.$confirm("已缴费，请勿重复缴纳", "提示！！！", {
          type: "warning",
          showCancelButton: false
        })
      } else {
        this.$confirm("恭喜你缴纳成功了", "提示！！！", {
          type: "success",
          showCancelButton: false
        }).then(() => {
          this.rent.rent_type = 1
        })
      }
    }
  }
};
</script>

<style scoped>
.order-info {
  margin: 20px;
  padding: 0 20px;
  font-weight: 600;
}
.order-info span {
  color: #ff6a25;
}

.landlord-info {
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.landlord-info div {
  width: 100%;
}
.no-more {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.landlord-info-del {
  padding: 10px 20px;
}
.rantal-cell {
  padding: 10px;
}
.rental-title,
.rental-date2 {
  color: #0090fa;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}
.rental-date2 {
  padding-left: 10px;
}
.rent-state {
  float: right;
  padding: 0 5px;
  font-size: 14px;
  font-weight: 600;
}
.finished {
  color: #999;
}
.doing {
  color: #fd5f31;
}
.rental-date {
  color: #0090fa;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
}
.rental-date span {
  font-size: 15px;
  color: #fd5f31;
}
.house-name {
  color: #0b4f60;
}
.clearfix {
  margin-top: 10px;
  color: #999;
}
.button-ara {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
</style>