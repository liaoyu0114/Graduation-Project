import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    house: [
      {
        housingresources_id: 1982,
        housingresources_name: "衣冠庙地铁口 西南民大旁200米 出行便利 家具家电齐全",
        housingresources_category: "整套出租",
        housingresources_village: "武侯名园",
        housingresources_type: { first: '2', second: '1', third: '1' },
        housingresources_introduce: `1：租房没有中介费完全零费用
          2：高素质室友，让你拥有高质量的合住伙伴和生活中的朋友
          3：‘一房一锁’让你安心的工作，学习和生活
          4：专业维修，及时上门维修，避免影响正常生活`,
        housingresources_floor: "中层",
        housingresources_orientations: "南",
        housingresources_renttype: "押一付三",
        housingresources_price: 930,
        housingresources_area: "80",
        housingresources_longitude: "",
        housingresources_latitude: "",
        housingresources_address: "武侯区武侯大道xx路xx号",
        housingresources_pic: [
          "https://s1.ax1x.com/2020/04/14/GznAK0.jpg",
          "https://s1.ax1x.com/2020/04/14/Gxx9yR.jpg",
          "https://s1.ax1x.com/2020/04/14/Gznlx1.jpg"
        ],
        housingresources_state: ""
      }

    ],
    landlord: {
      // houser
      landlord_id: 123,
      landlord_phone: 18382389882,
      landlord_password: "",
      landlord_mail: "1453473547@qq.com",
      landlord_nickname: "我是房东",
      landlord_realname: "真实姓名",
      landlord_IDnumber: "身份证510xxxxxxxxx",
      landlord_contact: "18382389882",
      landlord_pic: "https://s1.ax1x.com/2020/04/17/JVI740.jpg",
      landlord_sex: "1",
      landlord_time: new Date()
    },
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    house(state) {
      return state.house
    },
    landlord(state) {
      return state.landlord
    }
  }
})
