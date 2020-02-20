<template>
  <div class="home">
    <tab-control :titles="['流行', '新款', '精选']" class="tabcontrol-fixed"
                 @tabClick="tabClick" ref="tabControlFixed" v-show="isShowTabControl"></tab-control>

    <location :location-data="locationData" :user-info="userInfo"></location>
    <scroll class="scroll" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scrollPosition="currentPosition">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="goods"></goods-list>
    </scroll>

  </div>
</template>

<script>
  import AMap from 'AMap'
  import Location from './childComs/Location'
  import HomeSwiper from './childComs/HomeSwiper'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl';

  export default {
    name: "Home",
    components: {
      Location,
      HomeSwiper,
      GoodsList,
      Scroll,
      TabControl
    },
    data() {
      // debugger
      return {
        tabOffsetTop: 0,
        //是否展示吸顶效果的tabControl
        isShowTabControl: false,
        //已滑动距离
        scrolledPosition: 0,
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
        },
        banners: [
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ee2ecf4.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ee2ecf4.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ec1c603.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ec1c603.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ed215ff.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ed215ff.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ef31513.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ef31513.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234f02f89a.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234f02f89a.jpg"
          }
        ],
        goods: [
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "https://img2.woyaogexing.com/2020/02/13/85b722fa53cb42f5ac828e3981760e94!400x400.jpeg",
            title: "狗子们，情人节到了快来选个头像吧"
          }
        ]
      };
    },
    methods:{
      currentPosition(position) {
        // this.listenShowBackTop(position);

        //吸顶TabControl的隐藏/显示，使用v-if。
        this.isShowTabControl = -position.y > this.tabOffsetTop;
      },
      swiperImageLoad(){
        // //所有组件都有$el ,用于获取组件内元素
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      },
      tabClick(index) {
        // switch (index) {
        //   case 0 :
        //     this.currentType = 'pop';
        //     break
        //   case 1 :
        //     this.currentType = 'new';
        //     break
        //   case 2 :
        //     this.currentType = 'sell';
        //     break
        // }
        //同步吸顶tabcontrol和滚动tabcontrol的选中状态
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControlFixed.currentIndex = index;
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
          const citySearch = new AMap.CitySearch();
          citySearch.getLocalCity(function(status, result) {
            if (status === "complete" && result.info === "OK") {
              // 查询成功，result即为当前所在城市信息
              console.log("通过ip获取当前城市：", result);
              // let lat = (result.bounds.wc.lat + result.bounds.nc.lat) / 2;
              // let lng = (result.bounds.southwest.lng + result.bounds.northeast.lng) / 2
              // self.newGetAddress(lat, lng)
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
      console.log(typeof this.locationData);
    }
  }
</script>

<style scoped>
  .scroll {
    position: absolute;
    top: 86px;
    bottom: 53px;
    right: 0;
    left: 0;
    overflow: hidden;
  }
  .tabcontrol-fixed {
    position: absolute;
    top: 86px;
    width: 100vw;
    z-index: 9;
  }
</style>
