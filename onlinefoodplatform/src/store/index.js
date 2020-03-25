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
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store
