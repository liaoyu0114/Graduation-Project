<template>
  <div class="location">
    <div class="location-address">
      <i class="iconfont icon-icon-dingwei"></i>
      <div class="address-box" v-if="IPInfo.ProvinceName || locationData.Address">
        <div v-if="locationData.Address">
          {{locationData.Address}}
        </div>
        <div v-else> {{IPInfo.ProvinceName}} {{IPInfo.CCityName}} {{IPInfo.RegionName}}</div>
        <div class="icon-down-u"></div>
      </div>
      <div class="address-box-2" v-else>
        <div class="address-loading" v-if="isLoad">定位中...</div>
        <div class="address-failed" v-else>定位失败</div>
      </div>
    </div>
    <div class="search">
      <i class="iconfont icon-0201chazhao"></i>
      <p>搜索商家、商品名称</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Location",
    props: {
      locationData: {
        type: Object,
        default() {
          return {}
        }
      },
      IPInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isLoad: true
      }
    },
    created() {
      setTimeout(function () {
        if (this.IPInfo.ProvinceName.length === 0 && this.locationData.needAddress.length === 0) {
          this.isLoad = false
        }
      }, 5000)
    }
  }
</script>

<style scoped>
  .location {
     background: #4294f7;
     padding: 10px 0;
  }
  .location-address {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 5% 10px;
    color: white;
    height: 20px;
    line-height: 20px;
  }
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    margin: 0 5%;
    border-radius: 18px;
    color: #999;
    background: white;
  }
  .search p {
    font-size: 14px;
    margin-bottom: 10px;
    margin-left: 5px;
  }
  .icon-down-u {
    margin-top: 6px;
    margin-left: 3px;
    width: 0;
    height: 0;
    border-top: 6px solid white;
    border-bottom: 6px solid transparent;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  .address-box, .address-box-2{
    margin-left: 5px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  .address-box {
   display: flex;
  }

</style>
