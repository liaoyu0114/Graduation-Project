<template>
  <div class="rentail-moneny">
    <div class="bg"></div>
    <div class="rental-body">
      <rental-cell v-for="(item, index) in rentOrder" :key="index" :rent="item"></rental-cell>
    </div>
    <el-row v-if="!userInfo.tenant_id">
      <el-col :span="24">
        <div class="no-more">
          <el-image style="width: 50%" src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RentalCell from "./RentalCell";
import {mapGetters} from 'vuex'
export default {
  name: "RentalMoneny",
  components: {
    RentalCell
  },
  data() {
    return {
      rentOrder: [
        {
          rent_id: 123930,
          landlord: {},
          house: {},
          tenant: {},
          rent_price: 888,
          rent_time: new Date().getTime(),
          rent_endtime: new Date().getTime(),
          rent_type: 0
        },
        {
          rent_id: 198376,
          landlord: {},
          house: {},
          tenant: {},
          rent_price: 999,
          rent_time: new Date().getTime(),
          rent_endtime: new Date().getTime(),
          rent_type: 1
        }
      ]
    };
  },
  created () {
    this.rentOrder.map( item => { 
      item.house = this.house[0]
      item.landlord = this.landlord
      item.tenant = this.userInfo
    })
  },
  computed: {
    ...mapGetters(["userInfo", "landlord", "house"])
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