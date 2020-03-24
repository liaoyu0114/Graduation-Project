export default {
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
  },
  setIPInfo(state, address) {
    state.IPInfo.lat = address.lat;
    state.IPInfo.lng = address.lng;
    state.IPInfo.ProvinceName = address.province.toString();
    state.IPInfo.CCityName = address.city;
    state.IPInfo.RegionName = address.district;
  }
}
