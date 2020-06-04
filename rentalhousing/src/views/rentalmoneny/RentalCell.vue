<template>
  <div class="rantal-cell">
    <el-row>
      <el-col :span="24">

      </el-col>
      <el-col :span="24" >
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="rental-title">租金订单: {{scope.rent.rent_id}}</span>
            <span class="rental-date">
              创建日期:
              <span>{{scope.rent.rent_time | formatDate("YYYY-MM-DD HH:mm")}}</span>
            </span>
            <span class="rental-date2" v-if="scope.rent.rent_type === 1">
              缴纳日期:
              <span>{{scope.rent.rent_endtime | formatDate("YYYY-MM-DD HH:mm")}}</span>
            </span>
            <span class="rent-state finished" v-if="scope.rent.rent_type === 1">已缴纳</span>
            <span class="rent-state doing" v-else>未缴纳</span>
          </div>
          <el-row>
            <el-col :span="24" class="rent-box">

              <div class="landlord-info">

                <div class="landlord-pic">
                  <el-avatar :src="scope.landlord.landlord_pic" :size="75"></el-avatar>
                </div>

                <div class="landlord-info-del">
                  <span><strong>房东信息</strong></span><br><br>
                  <span>昵称：{{scope.landlord.landlord_nickname}}</span><br>
                  <span>联系方式： {{scope.landlord.landlord_contact}}</span><br>
                  <span>邮箱： {{scope.landlord.landlord_mail}}</span>

                  </div>
              </div>
              <div class="order-info">
                <div v-if="scope.rent.rent_type === 0">
                  应缴纳金额:
                  <span>￥{{scope.rent.rent_price}}</span>
                </div>
                <div v-else>
                  已缴纳金额:
                  <span>￥{{scope.rent.rent_price}}</span>
                </div>
              </div>
              <div class="button-ara" v-if="scope.rent.rent_type === 0">
                <div >
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
      scope: {}
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    methods: {
      paypay() {
        if (this.scope.rent.rent_type === 1) {
          this.$confirm("已缴费，请勿重复缴纳", "提示！！！", {
            type: "warning",
            showCancelButton: false
          })
        } else {
          this.$post("/payRent", {
            "rent_id": this.scope.rent.rent_id
          }).then(res => {
            if (res.code === "000") {
              this.$confirm("恭喜你缴纳成功了", "提示！！！", {
                type: "success",
                showCancelButton: false
              }).then(() => {
                this.$emit("paySuccess", this.scope.rent.rent_id)
              })
            } else {
              this.$message.warning(res.msg)
            }
          }).catch(err => {
            console.log(err);
            this.$message.error("未知错误")
          })

        }
      }
    }
  };
</script>

<style scoped>
  .rent-box {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-info {
    margin: 20px;
    padding: 0 20px;
    font-weight: 600;
  }
  .order-info span {
    color: #ff6a25;
  }

  .landlord-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .landlord-info-del span {
    padding: 5px;
    color: #999999;
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