import {
  ADD_COUNTER,
  ADD_TO_CART,
  ADD_TO_SHOP
} from './mutation-types'

export default {
  //已有商品增加count
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  //购物车添加新商品
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  },
  [ADD_TO_SHOP](state,payload) {
    state.cartList.find(item => {return item.shop_id === payload.shop_id}).dishes.push(payload.dishes[0])
  },
  deleCartByShop(state, payload) {
    let index = state.cartList.findIndex(item => {
      return item.shop_id === payload.shop_id
    })
    state.cartList.splice(index, 1)
  },
  deletById(state, payload) {
    if (state.cartList[payload.index].dishes.length === 1) {
      state.cartList.splice(payload.index,1)
    }  else {
      state.cartList[payload.index].dishes.splice(payload.dishIndex, 1)
    }

  },
  changeHomeScrollHeight(state, position) {
    state.homeScrollHeight = position;
  },
  setLocation(state, address) {
    state.locationData.lat = address.latitude;
    state.locationData.lng = address.longitude;

    state.locationData.province = address.province;
    state.locationData.city = address.city;
    state.locationData.district = address.district;
    // 省市区+详细地址
    state.locationData.address = address.formattedAddress;
    // 省市区
    state.locationData.nowPlace = address.province + address.city + address.district;

    state.locationData.needAddress = address.needAddress
    state.homeLoading = state.locationData.needAddress
  },
  setIPInfo(state, address) {
    state.IPInfo.lat = address.lat;
    state.IPInfo.lng = address.lng;
    state.IPInfo.ProvinceName = address.province.toString();
    state.IPInfo.CCityName = address.city;
    state.IPInfo.RegionName = address.district;
    state.homeLoading = state.IPInfo.district
  },
  setUserInfo(state, userInfo) {
    state.userInfo.id = userInfo.user_id;
      state.userInfo.nickName = userInfo.user_nickname;
      state.userInfo.phone = userInfo.user_phone;
      state.userInfo.avatar = userInfo.user_pic;
      state.userInfo.createTime = userInfo.user_time;
      state.userInfo.email = userInfo.user_mail;
      state.userInfo.collection = userInfo.collection
  }
}
