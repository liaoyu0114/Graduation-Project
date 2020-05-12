<template>
  <div class="my-house">
    <div class="bg"></div>
    <div class="house-box limit">
      <my-house-cell v-for="(item, index) in leaseOrder" :key="index" :lease="item"></my-house-cell>
    
    <el-row v-if="!userInfo.tenant_id">
      <el-col>
        <div class="no-more">
          <el-image style="width: 50%" src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"></el-image>
        </div>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
import MyHouseCell from "./MyHouseCell";
import { mapGetters } from "vuex";
export default {
  name: "MyHouse",
  components: {
    MyHouseCell
  },
  data() {
    return {
      leaseOrder: [
         {
        lease_id: 117632713,
        lease_time: new Date().getTime() - 1000 * 24 * 3600 * 10,
        lease_type: 0,
        landlord: {},
        house: {},
        tenant: {}
      },
        {
        lease_id: 117632713,
        lease_time: new Date().getTime() - 1000 * 24 * 3600 * 10,
        lease_type: 1,
        landlord: {},
        house: {},
        tenant: {}
      }
      ]
    };
  },
  computed: {
    ...mapGetters(["userInfo", "landlord", "house"])
  },
  created () {
    this.leaseOrder[0].house = this.house[0]
    this.leaseOrder[0].tenant = this.userInfo
    this.leaseOrder[0].landlord = this.landlord
    this.leaseOrder[1].house = this.house[0]
    this.leaseOrder[1].tenant = this.userInfo
    this.leaseOrder[1].landlord = this.landlord
    
  }
};
</script>

<style scoped>
.my-house {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  background: transparent;
}
.limit {
  max-width: 1000px;
  width: 100%;
  background: white;
}
.bg {
  position: absolute;
  top: 0;
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