<template>
  <div class="my-house">
    <div class="bg"></div>
    <div class="house-box limit">
      <my-house-cell v-for="(item, index) in leaseOrder" :key="index" :scope="item"></my-house-cell>

      <el-row v-if="!userInfo.tenant_id || leaseOrder.length === 0">
        <el-col>
          <div class="no-more">
            <el-image
                    style="width: 50%"
                    src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"
            ></el-image>
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
        leaseOrder: [],
        house: [],
        query: {
          page: 1,
          pageSize: 10
        },
        type: 0
      };
    },
    computed: {
      ...mapGetters(["userInfo"])
    },
    created() {

      if (this.userInfo.tenant_id) {
        this.loadLease()
      }
    },
    methods: {
      loadLease() {
        this.$post("/selectLeaseListByTenantId", {
          tenant_id: this.userInfo.tenant_id
        }).then(res => {
          if (res.code === "000") {
            this.leaseOrder = res.leaseInfoList.reverse().map(item => {
              item.house = {
                housingresources_type: {
                  first: "",
                  second: "",
                  third: ""
                },
                housingresources_pic: []
              }
              return item
            });
          } else {
            this.$message.warning(res.msg);
          }
        }).catch(err => {
          console.log(err);
          this.$message.error("网络错误");
        });
      }
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