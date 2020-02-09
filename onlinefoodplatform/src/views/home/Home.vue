<template>
  <div class="home">
    <h1>首页</h1>
    <div class="amap-wrapper" v-if="locationData.Address">
      {{locationData.Address}}
    </div>
    <div class="amap2" v-else>
      {{userInfo.ProvinceName}} - {{userInfo.CCityName}} - {{userInfo.RegionName}}
    </div>
  </div>
</template>

<script>
  import AMap from 'AMap'

  export default {
    name: "Home",
    data() {
      // debugger
      return {
        locationData: {
          // 用于定位相关信息提交
          lat: "", // 纬度
          lon: "", // 经度
          province: "", // 省
          city: "", // 市
          district: "", // 区 县
          nowPlace: "", // 省-市-区
          Address: "", // 详细地址
        },
        userInfo: {
          // 通过IP获取的地址
          ProvinceName: "",
          CCityName: "",
          RegionName: ""
        }
      };
    },
    methods:{
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
            // data是具体的定位信息
            // debugger
            console.log("定位成功信息：", data);
            self.newGetAddress(data.position.lat, data.position.lng);
          }

          function onError(data) {
            // debugger
            // 定位出错
            console.log("定位失败错误：", data);
            self.getLngLatLocation();
          }
        });
      },
      getLngLatLocation() {
        // 定位失败手动通过IP定位
        const self = this;
        AMap.plugin("AMap.CitySearch", function() {
          var citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function(status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              console.log("通过ip获取当前城市：", result);
              let lat = (result.bounds.wc.lat + result.bounds.nc.lat) / 2;
              let lng = (result.bounds.southwest.lng + result.bounds.northeast.lng) / 2
              self.newGetAddress(lat, lng)
              //逆向地理编码
              AMap.plugin("AMap.Geocoder", function() {
                var geocoder = new AMap.Geocoder({
                  // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                  city: result.adcode
                });

                var lnglat = result.rectangle.split(";")[0].split(",");

                geocoder.getAddress(lnglat, function(status, data) {
                  if (status === "complete" && data.info === "OK") {
                    // result为对应的地理位置详细信息
                    // console.log(data);
                    self.userInfo.ProvinceName = data.regeocode.addressComponent.province.toString();
                    self.userInfo.CCityName = data.regeocode.addressComponent.city;
                    self.userInfo.RegionName = data.regeocode.addressComponent.district;
                  }
                });
              });
            }
          });
        });
      },
      newGetAddress: function(latitude, longitude) {
        const _thisSelf = this;
        _thisSelf.locationData.lat = latitude;
        _thisSelf.locationData.lon = longitude;
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
            // console.log("getAddress", result);
            if (status === "complete" && result.info === "OK") {
              // result为对应的地理位置详细信息
              const adcode = result.regeocode.addressComponent.adcode; // 省市编码
              if (
                reg1.test(adcode) ||
                reg2.test(adcode) ||
                reg3.test(adcode) ||
                reg4.test(adcode)
              ) {
                _thisSelf.locationData.city =
                  result.regeocode.addressComponent.province;
              } else {
                _thisSelf.locationData.city =
                  result.regeocode.addressComponent.city;
              }
              // 提取 省 市 区 详细地址信息 重拼装省-市-区信息
              _thisSelf.locationData.province =
                result.regeocode.addressComponent.province;
              _thisSelf.locationData.district =
                result.regeocode.addressComponent.district;
              _thisSelf.locationData.Address = result.regeocode.formattedAddress;
              _thisSelf.locationData.nowPlace =
                result.regeocode.addressComponent.province +
                result.regeocode.addressComponent.city +
                result.regeocode.addressComponent.district;
              _thisSelf.userInfo.ProvinceName = _thisSelf.locationData.province;
              _thisSelf.userInfo.CCityName = _thisSelf.locationData.city;
              _thisSelf.userInfo.RegionName = _thisSelf.locationData.district;
            } else {
              console.log(_thisSelf.locationData); // 回调函数
            }
          });
        });
      }
    },
    created() {
      this.getLocation();
    }
  }
</script>

<style scoped>

</style>
