<template>
  <div id="app" ref="app">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
    <div class="cart" @click="cartClick" v-if="showCart">
      <el-badge :value="cartLength" class="item">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      </el-badge>
    </div>
    <main-tab-bar class="main-tab-bar" v-if="showTabbar"></main-tab-bar>
  </div>
</template>

<script>
import AMap from "AMap";
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
import { sign } from "./network/user";
import { mapGetters } from "vuex";
import { sendEmail } from "./network/yesapi";

export default {
  name: "app",
  components: {
    MainTabBar
  },
  data() {
    return {
      listTab: [
        "/detail",
        "/detail/goods",
        "/detail/comment",
        "/detail/shopinfo",
        "/sign"
      ],
      listCart: ["/sign", "/cart"]
    };
  },
  computed: {
    ...mapGetters(["cartLength"]),
    showTabbar() {
      return this.listTab.indexOf(this.$route.path) === -1;
    },
    showCart() {
      return this.listCart.indexOf(this.$route.path) === -1;
    }
  },
  created() {
    this.signAuto();
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    cartClick() {
      this.$router.push("/cart");
    },
    getLocation() {
      const self = this;
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, // 是否使用高精度定位，默认:true
          timeout: 5000, // 超过10秒后停止定位，默认：无穷大
          maximumAge: 0, // 定位结果缓存0毫秒，默认：0
          convert: true // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        });

        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, "complete", onComplete);
        AMap.event.addListener(geolocation, "error", onError);

        function onComplete(data) {
          self.newGetAddress(data.position.lat, data.position.lng);
        }

        function onError(data) {
          if (self.$route.path !== "/home") {
            self.getLngLatLocation();
            return;
          }
          self.getLngLatLocation();
        }
      });
    },
    getLngLatLocation() {
      // 定位失败手动通过IP定位
      const self = this;
      AMap.plugin("AMap.CitySearch", function() {
        const citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          console.log(result);
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            //逆向地理编码
            let center = result.bounds.getCenter();

            AMap.plugin("AMap.Geocoder", function() {
              var geocoder = new AMap.Geocoder({
                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                city: result.adcode
              });

              var lnglat = result.rectangle.split(";")[0].split(",");

              geocoder.getAddress(lnglat, function(status, data) {
                if (status === "complete" && data.info === "OK") {
                  // result为对应的地理位置详细信息
                  // console.log(data.regeocode.getCenter())
                  let address = {
                    lat: center.lat,
                    lng: center.lng,
                    province: data.regeocode.addressComponent.province,
                    city: data.regeocode.addressComponent.city,
                    district: data.regeocode.addressComponent.district
                  };
                  self.$store.state.homeLoading = address.district;
                  self.$store.commit("setIPInfo", address);
                }
              });
            });
          }
        });
      });
    },
    newGetAddress: function(latitude, longitude) {
      const _thisSelf = this;
      const mapObj = new AMap.Map("amap2");
      mapObj.plugin("AMap.Geocoder", function() {
        const geocoder = new AMap.Geocoder({
          city: "全国", // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          radius: 100 // 以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息
        });
        const lnglat = [longitude, latitude]; // 倒序反写经纬度
        // 天津120 北京110 上海310 重庆500 ,
        const reg1 = /^[1][1][0][0-9][0-9][0-9]/;
        const reg2 = /^[1][2][0][0-9][0-9][0-9]/;
        const reg3 = /^[5][0][0][0-9][0-9][0-9]/;
        const reg4 = /^[3][1][0][0-9][0-9][0-9]/;
        geocoder.getAddress(lnglat, function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // result为对应的地理位置详细信息
            let address = result.regeocode.addressComponent;

            const adcode = address.adcode; // 省市编码

            let location = {
              latitude,
              longitude,
              province: address.province,
              district: address.district,
              city: address.city,
              formattedAddress: result.regeocode.formattedAddress,
              nowPlace: address.province + address.city + address.district,
              needAddress:
                address.township + address.neighborhood + address.building
            };
            _thisSelf.$store.state.homeLoading = location.needAddress;
            _thisSelf.$store.commit("setLocation", location);
          } else {
            console.log("err location"); // 回调函数
          }
        });
      });
    },
    signAuto() {
      if (!(localStorage.phone && localStorage.password)) {
        return

}if (localStorage.phone.length !== 0 || localStorage.password !== 0) {
        let data = {
          user_phone: localStorage.phone,
          user_password: localStorage.password
        };
        sign(data).then(res => {
          if (res.code === "000") {
            this.$store.commit("setUserInfo", res.user);
          }
        });
      }
    }
  }
};
</script>
<style>
@import "./assets/css/base.css";
@import url("https://at.alicdn.com/t/font_1631969_9mn028p8lgp.css");
.main-tab-bar {
  margin: 0 5px;
}
.view {
  overflow: hidden;
}
.cart {
  position: fixed;
  bottom: 55px;
  right: 10px;
  background: #fff;
  border: solid 1px #409eff;
  color: #409eff;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  z-index: 99;
}
.fa-shopping-cart {
  font-size: 16px;
}
#app {
  overflow: hidden;
}
@media screen and (min-width: 500px) {
  .view {
    width: 500px;
  }
  #app {
    display: flex;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: #6e6e6e;
  }
}
</style>
