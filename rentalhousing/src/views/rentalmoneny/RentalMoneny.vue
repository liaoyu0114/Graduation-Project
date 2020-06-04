<template>
  <div class="rentail-moneny">
    <div class="bg"></div>
    <div class="title-box">
      <div  class="title">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="未缴纳" name="first"></el-tab-pane>
          <el-tab-pane label="已缴纳" name="second"></el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <br>
    <div class="rental-body" v-loading="loading" v-if="rentOrder.length !== 0">


      <rental-cell v-for="(item, index) in rentOrder"
                   @paySuccess="paySuccess"
                   :key="index"
                   :scope="item"></rental-cell>
    </div>
    <el-row v-if="rentOrder.length === 0">
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
      loading: true,
      activeName: "first",
      rentOrder: [],
      queryState: {
        tenant_id: "",
        rent_type: 0, //未缴纳
        currIndex: 1,
        pageSize: 9999
      },
      name: "first"
    };
  },
  created() {
    if (this.userInfo.tenant_id) {
      this.loadRent();
    }
  },
  activated() {
    if (this.userInfo.tenant_id) {
      this.loadRent();
    }
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    handleClick() {
      this.loading = true;
      if (this.activeName === "first") {
        this.queryState.currIndex = 1;
        this.queryState.rent_type = 0;
      } else {
        this.queryState.currIndex = 1;
        this.queryState.rent_type = 1;

      }
      this.loadRent()

    },
    paySuccess() {
      this.loading = true;
      if (this.activeName === "first") {
        this.queryState.currIndex = 1;
        this.queryState.rent_type = 0;
      } else {
        this.queryState.currIndex = 1;
        this.queryState.rent_type = 1;
      }
      this.loadRent()
    },
    loadRent() {
      this.queryState.tenant_id = this.userInfo.tenant_id;
      this.$post("/selectRentListByTenantId", this.queryState)
        .then(res => {
          if (res.code === "000") {
            this.rentOrder = res.rentInfoList
          } else {
            this.$message.warning(res.msg)
          }
          this.loading = false
        })
        .catch(err => {
          console.log(err);
          this.$message.warning("未知错误");
          this.loading = false
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
  flex-wrap: wrap;
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
.title-box {
  width: 100%;
  display: flex;
  justify-content: center;
}
.title {
  max-width: 1000px;
}
.no-more {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>