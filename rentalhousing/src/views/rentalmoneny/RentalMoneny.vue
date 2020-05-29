<template>
  <div class="rentail-moneny">
    <div class="bg"></div>
    <div class="rental-body" v-if="rentOrderOne.length !== 0">
      <rental-cell v-for="(item, index) in rentOrderOne" :key="index" :rent="item"></rental-cell>
    </div>
    <div class="rental-body" v-if="rentOrderTwo.length !== 0">
      <rental-cell v-for="(item, index) in rentOrderTwo" :key="index" :rent="item"></rental-cell>
    </div>
    <el-row v-if="rentOrderOne.length === 0 && rentOrderTwo.length === 0">
      <el-col :span="24">
        <div class="no-more">
          <el-image
            style="width: 50%"
            src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"
          ></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RentalCell from "./RentalCell";
import { mapGetters } from "vuex";
export default {
  name: "RentalMoneny",
  components: {
    RentalCell
  },
  data() {
    return {
      rentOrderOne: [],
      rentOrderTwo: [],
      queryStateOne: {
        tenant_id: "",
        rent_type: 0, //未缴纳
        currIndex: 1,
        pageSize: 15
      },
      queryStateTwo: {
        tenant_id: "",
        rent_type: 1, //已缴纳
        currIndex: 1,
        pageSize: 15
      }
    };
  },
  created() {
    // this.rentOrder.map( item => {
    //   item.house = this.house[0]
    //   item.landlord = this.landlord;
    //   item.tenant = this.userInfo
    // })
    if (this.userInfo.tenant_id) {
      this.loadRentOne();
    }
  },
  activated() {
    if (this.userInfo.tenant_id) {
      this.loadRentOne();
    }
  },
  computed: {
    ...mapGetters(["userInfo", "landlord", "house"])
  },
  methods: {
    loadRentOne() {
      this.queryStateOne.tenant_id = this.userInfo.tenant_id;
      this.$post("/selectRentListByTenantId", this.queryStateOne)
        .then(res => {
          if (res.code === "000") {
            this.rentOrderOne = res.rentList
          } else {
            this.$message.warning(res.msg)
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.warning("网络错误")
        });
    },
    loadRentTwo() {
      this.queryStateTwo.tenant_id = this.userInfo.tenant_id;
      this.$post("/selectRentListByTenantId", this.queryStateTwo)
        .then(res => {
           if (res.code === "000") {
            this.rentOrderTwo = res.rentList
          } else {
            this.$message.warning(res.msg)
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.warning("网络错误")
        });
    }
  }
};
</script>

<style scoped>
.rentail-moneny {
  display: flex;
  position: relative;
  justify-content: center;
}

.rental-body {
  max-width: 1000px;
  width: 100%;
  background: white;
}
.bg {
  position: absolute;
  top: 0;
  left: calc((100vw - 1000px) / 2);
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 60px);
  background: white;
  z-index: -1;
}
.no-more {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>