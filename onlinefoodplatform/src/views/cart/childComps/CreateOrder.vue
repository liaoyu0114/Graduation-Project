<template>
  <div class="create-order" v-loading.fullscreen.lock="fullscreenLoading">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>收货人地址</span>
            <el-button style="float: right; padding: 3px 0" type="text" v-if="currentAddress.receiving_name">更改收货人</el-button>
             <el-button style="float: right; padding: 3px 0" type="text" v-else @click="showTips">添加地址</el-button>
          </div>
          <div class="order-address" v-if="currentAddress.receiving_name">
            <div class="address-add">地址：{{currentAddress.receiving_address}}</div>
            <div class="address-info">
              <span>收货人：{{currentAddress.receiving_name}}</span>
              <br />
              <span>联系方式：{{currentAddress.receiving_phone}}</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="header-title">{{orderItem.shop_name}}</span>
          </div>
          <el-row :gutter="10" v-for="(item, index) in orderItem.dishes" :key="index">
            <el-col :span="4">
              <el-image :src="item.dishes_pic"></el-image>
            </el-col>
            <el-col :span="16">
              <div>{{item.dishname}}</div>
              <div class="order-count">x{{item.count}}</div>
            </el-col>
            <el-col :span="4">
              <div class="total-price">￥{{item.dishes_price * item.count}}</div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <el-input type="textarea" :rows="2" placeholder="备注" v-model="remark"></el-input>
          <div class="tableware">
            <div>餐具份数</div>
            <el-input-number size="mini" v-model="tablewareNumber" :min="1"></el-input-number>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <div class="add-button">
            <el-button type="primary" plain size="small" @click="getOrder">确定</el-button>
        </div>
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { selectReceivingByUserId, addOrder } from "network/user";
export default {
  name: "CreateOrder",
  props: {
    orderItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      currentAddress: {},
      addresses: [],
      remark: "",
      tablewareNumber: 1,
      fullscreenLoading: false
    };
  },
  mounted() {
    selectReceivingByUserId({ user_id: this.$store.state.userInfo.id }).then(
      res => {
        if (res.code === "000") {
          this.addresses = res.receivinglist;
          if (this.addresses.length !== 0) {
            this.currentAddress = this.addresses[0];
          }
        }
      }
    );
  },
  methods: {
    showTips() {
      this.$confirm('请前往个人信息页添加地址', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    getOrder() {

      if(!this.currentAddress.receiving_name) {
        this.$notify({
          title: '警告',
          message: '添加地址！！！！',
          type: 'warning'
        });
      } else if(!this.$store.state.userInfo.id) {
        this.$router.push("/sign");
        this.$emit("closeDia")
      } else {
        // this.fullscreenLoading = true;

        let data = {
          "user_id": this.$store.state.userInfo.id,
          "shop_id": this.orderItem.shop_id,
          "orderDishesList": this.orderItem.dishes.map(item => {
            let dish = {
              "dishes_id": item.dishes_id,
              "orderdishes_number": item.count
            }
            return dish
          }),
          "remark": this.remark,
          "tableware_number": this.tablewareNumber,
          "consignee_phone": this.currentAddress.receiving_phone,
          "consignee_address": this.currentAddress.receiving_address
        };
        this.$post("/addOrder", data).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
        // addOrder(data).then(res => {
        //
        //   // this.fullscreenLoading = false;
        //   if (res.code === "000") {
        //     this.$emit("createSuccess", )
        //   } else {
        //     this.$notify({
        //       title: '警告',
        //       message: '下单失败!!!!',
        //       type: 'warning'
        //     });
        //   }
        // }).catch(err => {
        //   // this.fullscreenLoading = false
        //   this.$notify({
        //     title: '警告',
        //     message: '网络出错！！！',
        //     type: 'warning'
        //   });
        // })
      }
    }
  }
};
</script>

<style scoped>
.total-price {
  color: #ff834f;
}
.header-title {
  font-weight: 500;
  font-size: 14px;
  color: #409EFF;
}
.order-count {
  color: #999;
}
.tableware {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.add-button {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.add-button .el-button {
  width: 50%;
}
.address-add {
  font-size: 16px;
  font-weight: 500;
  color: #666;
}
.address-info {
  font-size: 13px;
  color: #999;
  padding-top: 10px;
}
</style>
