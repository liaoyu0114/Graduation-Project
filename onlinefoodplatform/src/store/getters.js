export default {
  getLocation(state) {
    console.log(state)
    if (state.locationData.address.length !== 0) {
      return state.locationData.lng + ',' + state.locationData.lat
    }
    if (state.IPInfo.CCityName.length !==0) {
      return state.IPInfo.lng + ',' + state.IPInfo.lat
    }
  },
  homeLoading(state) {
    if (state.locationData.address.length !== 0) {
      return state.homeLoading === state.locationData.needAddress
    }
    if (state.IPInfo.CCityName.length !==0) {
      return state.homeLoading === state.IPInfo.district
    }
  }
}
