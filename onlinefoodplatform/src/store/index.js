import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  userInfo: {
    id: null,
    nickName: "",
    phone: "",
    sex: "",
    avatar: "",
    createTime: "",
    email: ""
  },
  homeScrollHeight: 0,
  homeLoading: "",
  locationData: {
    // 用于定位相关信息提交
    lat: "", // 纬度
    lng: "", // 经度
    province: "", // 省
    city: "", // 市
    district: "", // 区 县
    nowPlace: "", // 省-市-区
    address: "", // 详细地址
    needAddress: "" // 详细地址展示的
  },
  IPInfo: {
    // 通过IP获取的地址
    lat: "",
    lng: "",
    ProvinceName: "",
    CCityName: "",
    RegionName: ""
  },
  cartList: [{
    iid: '1m70y5k',
    image: '//s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg',
    title: '2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装',
    desc: '2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装',
    price: '59.00',
    checked: false,
    count: 1
  }]
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store
