<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">在线点餐平台</div>
    </nav-bar>
    <tab-control
      :titles="['综合排序', '评分优先', '距离优先']"
      class="tabcontrol-fixed"
      @tabClick="tabClick"
      ref="tabControlFixed"
      v-show="isShowTabControl"
    ></tab-control>

    <location :location-data="$store.state.locationData" :i-p-info="$store.state.IPInfo"></location>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollPosition="currentPosition"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <colloction :recommends="recommends" @imageLoaded="swiperImageLoad"></colloction>
      <tab-control :titles="['综合排序', '评分优先', '距离优先']" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="goodsShow"></goods-list>
    </scroll>
    <transition name="slide-fade">
      <back-top @click.native="backClick" v-show="isShowBackTop" />
    </transition>
  </div>
</template>

<script>
import AMap from "AMap";
import Location from "./childComs/Location";
import HomeSwiper from "./childComs/HomeSwiper";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import NavBar from "components/common/navbar/NavBar";
import BackTop from "components/content/backTop/BackTop";
import Colloction from "./childComs/Collection";
import { mapGetters } from "vuex";
import { selectshoprandom } from "network/user";

export default {
  name: "Home",
  components: {
    Location,
    HomeSwiper,
    GoodsList,
    Scroll,
    TabControl,
    NavBar,
    BackTop,
    Colloction
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    selectshoprandom()
      .then(res => {
        console.log(res);
        this.goods = res.shoplist;
        this.goodsShow = this.goods.concat();
      })
      .catch(err => {
        console.log(err);
      });
  },
  data() {
    // debugger
    return {
      tabOffsetTop: 0,
      isShowBackTop: false,
      result: {},
      //是否展示吸顶效果的tabControl
      isShowTabControl: false,
      //已滑动距离
      scrolledPosition: 0,
      recommends: [
        {
          id: 20,
          is_in_serving: true,
          description: "苦了累了，来点甜的",
          title: "甜品饮品",
          link:
            "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 10,
          is_in_serving: true,
          description: "足不出户，便利回家",
          title: "商超便利",
          link:
            "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5546%5Cu8d85%5Cu4fbf%5Cu5229%22%2C%22complex_category_ids%22%3A%5B254%2C255%2C256%2C257%2C258%2C271%2C272%2C273%2C274%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A252%2C%22name%22%3A%22%5Cu5546%5Cu5e97%5Cu8d85%5Cu5e02%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%95%86%E8%B6%85%E4%BE%BF%E5%88%A9&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 15,
          is_in_serving: true,
          description: "附近美食一网打尽",
          title: "美食",
          link:
            "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7f8e%5Cu98df%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C260%5D%2C%22is_show_all_category%22%3Afalse%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%BE%8E%E9%A3%9F&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 225,
          is_in_serving: true,
          description: "有菜有肉，营养均衡",
          title: "简餐",
          link:
            "eleme://restaurants?filter_key=%7B%22activity_types%22%3A%5B3%5D%2C%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7b80%5Cu9910%22%2C%22complex_category_ids%22%3A%5B209%2C212%2C215%2C265%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%7B%22id%22%3A3%2C%22name%22%3A%22%5Cu4e0b%5Cu5355%5Cu7acb%5Cu51cf%22%2C%22icon_name%22%3A%22%5Cu51cf%22%2C%22icon_color%22%3A%22f07373%22%2C%22is_need_filling%22%3A1%2C%22is_multi_choice%22%3A0%2C%22filter_value%22%3A3%2C%22filter_key%22%3A%22activity_types%22%7D%5D%7D&target_name=%E7%AE%80%E9%A4%90&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 403297,
          is_in_serving: true,
          description: "大胆尝鲜，遇见惊喜",
          title: "新店特惠",
          link:
            "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu65b0%5Cu5e97%5Cu7279%5Cu60e0%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C239%2C244%2C248%2C252%2C260%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22support_ids%22%3A%5B-1%5D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%96%B0%E5%BA%97%E7%89%B9%E6%83%A0&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 92,
          is_in_serving: true,
          description: "准时必达，超时赔付",
          title: "准时达",
          link:
            "eleme://restaurants?filter_key=%7B%22support_ids%22%3A%5B9%5D%2C%22activities%22%3A%5B%7B%22id%22%3A9%2C%22name%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%2C%22icon_name%22%3A%22%5Cu51c6%22%2C%22icon_color%22%3A%22E8842D%22%2C%22is_need_filling%22%3A0%2C%22is_multi_choice%22%3A1%2C%22filter_value%22%3A9%2C%22filter_key%22%3A%22support_ids%22%2C%22description%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%7D%5D%7D&target_name=%E5%87%86%E6%97%B6%E8%BE%BE&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 1,
          is_in_serving: true,
          description: "0元早餐0起送，每天都有新花样。",
          title: "预订早餐",
          link:
            "eleme://web?url=https%3A%2F%2Fzaocan.ele.me&target_name=%E9%A2%84%E8%AE%A2%E6%97%A9%E9%A4%90&animation_type=1&is_need_mark=&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        },
        {
          id: 65,
          is_in_serving: true,
          description: "",
          title: "土豪推荐",
          link:
            "eleme://restaurants?filter_key=%7B%22activities%22%3A%5B%7B%22filter_key%22%3A%22tags%22%2C%22filter_value%22%3A0%7D%5D%7D&target_name=%E5%9C%9F%E8%B1%AA%E6%8E%A8%E8%8D%90&animation_type=1&is_need_mark=0&banner_type=",
          image_url:
            "https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg",
          icon_url: "",
          title_color: "",
          __v: 0
        }
      ],
      banners: [
        {
          image: "https://s1.ax1x.com/2020/04/24/J0fJED.jpg",
          link: "https://s1.ax1x.com/2020/04/24/J0fJED.jpg"
        },
        {
          image: "https://s1.ax1x.com/2020/04/24/J0f8HO.png",
          link: "https://s1.ax1x.com/2020/04/24/J0f8HO.png"
        },
        {
          image: "https://s1.ax1x.com/2020/04/24/J0fyVS.jpg",
          link: "https://s1.ax1x.com/2020/04/24/J0fyVS.jpg"
        },
        {
          image: "https://s1.ax1x.com/2020/04/24/J0frb8.jpg",
          link: "https://s1.ax1x.com/2020/04/24/J0frb8.jpg"
        },
        {
          image: "https://s1.ax1x.com/2020/04/24/J0fDDf.jpg",
          link: "https://s1.ax1x.com/2020/04/24/J0fDDf.jpg"
        }
      ],
      goodsShow: [],
      goods: [],
      goods2: [
        {
          shop_unique_key: "995e238d3c3f634614e52735f2c1fd99",
          id: "13",
          name: "儿时味粽子飘香饭",
          address: "苍南县龙港镇龙翔路151号一层",
          longitude: 120.551027,
          latitude: 27.588527,
          phone: "136****0881 0577-68699919",
          opening_hours: "06:50/20:00",
          rating: 4.8,
          rating_count: 26,
          categories: "地方小吃;包子粥店",
          month_sales: 160,
          float_delivery_fee: 3,
          order_lead_time: 28,
          recommend_reasons: "配送飞快",
          delivery_mode: "",
          description: "",
          promotion_info: "",
          is_star: false,
          status: 1,
          province: "浙江省",
          city: "温州市",
          district: "苍南县",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["皇品叉烧饭", "梅菜扣肉饭+汤", "酱汁卤肉饭+汤"]
        },
        {
          shop_unique_key: "5dbf8a693773ac1e72dcabe8ebd2972d",
          id: "12",
          name: "藿香鱼川菜馆",
          address: "成都市温江区天府街办青泰小区13组8栋1号",
          longitude: 103.827548,
          latitude: 30.665575,
          phone: "189****6421",
          opening_hours: "10:00/14:30;16:00/21:30",
          rating: 4.5,
          rating_count: 134,
          categories: "川湘菜",
          month_sales: 103,
          float_delivery_fee: 4,
          order_lead_time: 47,
          recommend_reasons: "",
          delivery_mode: "",
          description: "欢迎广大新老用户前来品尝",
          promotion_info: "热烈庆祝本店入住饿了么外卖",
          is_star: false,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "温江区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: [
            "冬菇滑鸡粥单人餐T",
            "奥堡辣堡双人餐ST",
            "葡式蛋挞6只TN"
          ]
        },
        {
          shop_unique_key: "2ec7daa83e2e946ff4d0ad3b84eeb8b9",
          id: "11",
          name: "华德士(团结店)",
          address: "成都市郫都区团结镇团三路277号附18号",
          longitude: 103.987516,
          latitude: 30.817816,
          phone: "176****5519",
          opening_hours: "10:00/02:05",
          rating: 4.5,
          rating_count: 46,
          categories: "汉堡薯条;简餐",
          month_sales: 355,
          float_delivery_fee: 1,
          order_lead_time: 27,
          recommend_reasons: "配送飞快",
          delivery_mode: "",
          description: "大吉大利、天天吃鸡！",
          promotion_info: "工商全校男女都送上楼、传媒男寝上楼、女寝看情况",
          is_star: false,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "郫都区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg"
        },
        {
          shop_unique_key: "ca9e69d5a9f897f8c73191212ff239e6",
          id: "10",
          name: "小叶厨房（高新店）",
          address: "成都高新区成汉中路185号-1楼31号",
          longitude: 104.054714,
          latitude: 30.593332,
          phone: "19938851895 028-61555620",
          opening_hours: "10:30/22:00",
          rating: 4.7,
          rating_count: 72,
          categories: "川湘菜;简餐",
          month_sales: 250,
          float_delivery_fee: 1.5,
          order_lead_time: 34,
          recommend_reasons: "",
          delivery_mode: "",
          description: "小叶厨房2019全新菜品欢迎新老顾客下单、",
          promotion_info:
            "欢迎光临小叶厨房。本店的餐品是由饿了么蜂鸟骑手负责配送。骑手取餐时，我们已经检查包装及餐品数量，并提醒骑手一定保存好餐品。如您接餐后发现任何问题，一定及时拨打门店电话与我们联系。请不要随意给差评哦。这样我们不能为您解决问题，感谢您的选择！",
          is_star: false,
          status: 5,
          province: "四川省",
          city: "成都市",
          district: "武侯区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["苹果汁", "蒜苔炒肉丝锅巴饭", "回锅肉锅巴饭"]
        },
        {
          shop_unique_key: "2dfe462b0fb15e86c0349dc310236fa6",
          id: "9",
          name: "龙骨匠（沙湾店）",
          address: "成都市金牛区沙湾路1号负1楼",
          longitude: 104.052702,
          latitude: 30.684902,
          phone: "173****0817",
          opening_hours: "10:00/22:00",
          rating: 4.6,
          rating_count: 412,
          categories: "盖浇饭;其他小吃",
          month_sales: 1814,
          float_delivery_fee: 2.5,
          order_lead_time: 28,
          recommend_reasons: "配送飞快",
          delivery_mode: "蜂鸟专送",
          description:
            "龙是中华民族象征性的符号，辣是湖湘人生命之中不可缺少的味道！口鲜香醇，满嘴湖湘味，火辣的感觉，销魂的滋味！一面红墙一颗心，一顿龙骨一份情！没理由“就是辣么喜欢你”！",
          promotion_info:
            "随时恭候小哥哥小姐姐们的吐槽哟，解决所有您的不满，更有小惊喜等着您哟订餐须知：请确保您的电话畅通，以便送餐员能及时联系上您；为了确保能及时用餐希望您提前45分钟以上预定下单，避开高峰时期。",
          is_star: false,
          status: 5,
          province: "四川省",
          city: "成都市",
          district: "金牛区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["酱拌子炒腊肉锅巴饭"]
        },
        {
          shop_unique_key: "469b28ec9840565b172830b350beaf55",
          id: "8",
          name: "马队长资格烤羊肉",
          address: "成都市锦江区双桂路350号1层",
          longitude: 104.115943,
          latitude: 30.639814,
          phone: "176****0853",
          opening_hours: "16:00/03:00",
          rating: 4.8,
          rating_count: 2,
          categories: "烧烤;其他小吃",
          month_sales: 28,
          float_delivery_fee: 10.5,
          order_lead_time: 42,
          recommend_reasons: "",
          delivery_mode: "",
          description: "",
          promotion_info: "",
          is_star: false,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "锦江区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: [
            "酱拌子炒腊肉锅巴饭",
            "青椒肉丝盖浇饭",
            "干土豆片腊肉盖浇饭",
            "农家小炒肉",
            "红烧鸡块锅巴饭"
          ]
        },
        {
          shop_unique_key: "469b28ec9840565b172830b350beaf55",
          id: "7",
          name: "马队长资格烤羊肉",
          address: "成都市锦江区双桂路350号1层",
          longitude: 104.115943,
          latitude: 30.639814,
          phone: "176****0853",
          opening_hours: "16:00/03:00",
          rating: 4.8,
          rating_count: 2,
          categories: "烧烤;其他小吃",
          month_sales: 28,
          float_delivery_fee: 10.5,
          order_lead_time: 42,
          recommend_reasons: "",
          delivery_mode: "",
          description: "",
          promotion_info: "",
          is_star: false,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "锦江区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: [
            "酱拌子炒腊肉锅巴饭",
            "青椒肉丝盖浇饭",
            "干土豆片腊肉盖浇饭",
            "农家小炒肉",
            "红烧鸡块锅巴饭"
          ]
        },
        {
          shop_unique_key: "d41fff1427c7fb2622ce7e29e08d4bf3",
          id: "6",
          name: "阳澄湖大闸蟹（蓉城店）",
          address: "成都市金牛区同和路99号附15号1楼",
          longitude: 104.016834,
          latitude: 30.6836,
          phone: "130****8199",
          opening_hours: "09:00/01:00",
          rating: 5,
          rating_count: 0,
          categories: "川湘菜",
          month_sales: 36,
          float_delivery_fee: 8,
          order_lead_time: 29,
          recommend_reasons: "配送飞快",
          delivery_mode: "",
          description: "",
          promotion_info: "",
          is_star: false,
          status: 5,
          province: "四川省",
          city: "成都市",
          district: "金牛区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: [
            "麻辣香锅单人B套餐（含米饭一份）",
            "麻辣香锅单人BA套餐（含米饭一份）",
            "麻辣香锅单人A套餐（含米饭一份）"
          ]
        },
        {
          shop_unique_key: "0d9132c3e1f979240eca3645f818bb3c",
          id: "5",
          name: "德克士（新繁店）",
          address: "成都市新都区新繁镇正西街124号附1号",
          longitude: 104.0158,
          latitude: 30.873006,
          phone: "028 - 83089577",
          opening_hours: "07:00/22:30",
          rating: 4.6,
          rating_count: 122,
          categories: "汉堡薯条;炸鸡炸串",
          month_sales: 449,
          float_delivery_fee: 3,
          order_lead_time: 29,
          recommend_reasons: "配送飞快",
          delivery_mode: "",
          description: "德克士（新繁店）",
          promotion_info:
            "一桶系列中1.25L可乐应无货改为3听罐装可乐，介意的顾客慎重购买，谢谢",
          is_star: true,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "新都区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["骨肉相连", "红烧丸子", "扬州炒饭"]
        },
        {
          shop_unique_key: "0d9132c3e1f979240eca3645f818bb3c",
          id: "4",
          name: "德克士（新繁店）",
          address: "成都市新都区新繁镇正西街124号附1号",
          longitude: 104.0158,
          latitude: 30.873006,
          phone: "028 - 83089577",
          opening_hours: "07:00/22:30",
          rating: 4.6,
          rating_count: 122,
          categories: "汉堡薯条;炸鸡炸串",
          month_sales: 449,
          float_delivery_fee: 3,
          order_lead_time: 29,
          recommend_reasons: "配送飞快",
          delivery_mode: "",
          description: "德克士（新繁店）",
          promotion_info:
            "一桶系列中1.25L可乐应无货改为3听罐装可乐，介意的顾客慎重购买，谢谢",
          is_star: true,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "新都区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["骨肉相连", "红烧丸子", "扬州炒饭"]
        },
        {
          shop_unique_key: "ff28842eb61eb6ea96627ce821ce4377",
          id: "3",
          name: "秋圃沙拉果汁(恒大店)",
          address: "成都市青羊区提督街99号华置广场the one购物中心负一层B1038号",
          longitude: 104.07421,
          latitude: 30.661333,
          phone: "184****9550",
          opening_hours: "10:00/21:30",
          rating: 4.8,
          rating_count: 56,
          categories: "西餐;奶茶果汁",
          month_sales: 224,
          float_delivery_fee: 1,
          order_lead_time: 20,
          recommend_reasons: "配送飞快",
          delivery_mode: "蜂鸟专送",
          description:
            "秋圃·沙拉果汁是专注做主食沙拉和鲜榨果汁的健康饮食馆，有各种主食沙拉和自制沙拉酱，欢迎大家过来种草拔草：）",
          promotion_info:
            "Natural Garden秋圃（沙拉·果汁） 美味的食物天天有 健康的灵魂只有一个 我们可以为您提供美味 同时也能提供健康 让我们一起推翻外卖不健康的标签吧",
          is_star: true,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "青羊区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["骨肉相连", "红烧丸子", "扬州炒饭"]
        },
        {
          shop_unique_key: "f9fcf109f71873cdaabe8902d5b85812",
          id: "2",
          name: "汤锅王黄牛肉",
          address: "四川省彭州市天彭镇朝阳中路219、221号",
          longitude: 103.951844,
          latitude: 30.989284,
          phone: "186****7788",
          opening_hours: "10:00/22:00",
          rating: 0,
          rating_count: 0,
          categories: "其他菜系;川湘菜",
          month_sales: 0,
          float_delivery_fee: 4,
          order_lead_time: 0,
          recommend_reasons: "配送飞快",
          delivery_mode: "蜂鸟专送",
          description: "",
          promotion_info: "",
          is_star: false,
          status: 4,
          province: "四川省",
          city: "成都市",
          district: "彭州市",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["骨肉相连", "红烧丸子", "扬州炒饭"]
        },
        {
          shop_unique_key: "084c9871f6958d8ece502d3f7452d94a",
          id: "1",
          name: "香飘飘芋儿鸡",
          address: "龙泉驿区十陵街道江华路59号2栋附116号",
          longitude: 104.184438,
          latitude: 30.651957,
          phone: "158****2717",
          opening_hours: "11:00/21:00",
          rating: 5,
          rating_count: 3,
          categories: "香锅砂锅",
          month_sales: 14,
          float_delivery_fee: 2,
          order_lead_time: 20,
          recommend_reasons: "配送飞快",
          delivery_mode: "蜂鸟专送",
          description: "",
          promotion_info: "",
          is_star: false,
          status: 1,
          province: "四川省",
          city: "成都市",
          district: "龙泉驿区",
          image:
            "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2991054592,3218464923&fm=26&gp=0.jpg",
          shop_dishes: ["西兰花", "油菜", "台式烤肠"]
        }

        // {
        //   id: 2,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 3.5,
        //   distance: 5360
        // },
        // {
        //   id: 3,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 4,
        //   distance: 4201
        // },
        // {
        //   id: 4,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 3.7,
        //   distance: 3578
        // },
        // {
        //   id: 5,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 4.2,
        //   distance: 8645
        // },
        // {
        //   id: 6,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 4.8,
        //   distance: 1423
        // },
        // {
        //   id: 7,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 4.4,
        //   distance: 301
        // },
        // {
        //   id: 8,
        //   image:
        //     "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
        //   title: "狗子们，情人节到了快来选个头像吧",
        //   score: 3.9,
        //   distance: 428
        // }
      ]
    };
  },
  computed: {
    ...mapGetters(["homeLoading", "cartLength"])
  },
  activated() {
    /**
     * 每次重新进入home组件，scrollerHeight都会被重置为0
     * 于是使用vuex记录离开时的scrollerHeight
     * 再次进入home组件时，将beterscroll的scrollerHeight设置为保存的scrollerHeight
     */
    this.$refs.scroll.scroll.scrollerHeight = this.$store.state.homeScrollHeight;
    this.$refs.scroll.urefresh();
    //返回离开前的位置，即保留用户以滑动的状态
    this.$refs.scroll.uscrollTo(0, this.scrolledPosition, 0);
    this.$refs.scroll.urefresh();
  },
  deactivated() {
    //获取已经滑动的高度
    this.scrolledPosition = this.$refs.scroll.getPositionY();
    //记录此时可滚动区域高度
    this.$store.commit(
      "changeHomeScrollHeight",
      this.$refs.scroll.scroll.scrollerHeight
    );
    //取消全局事件监听 事件名，响应方法名
    this.$bus.$off("imageLoad", this.itemImgListener);
  },
  methods: {
    backClick() {
      this.$refs.scroll.uscrollTo(0, 0, 1);
    },
    currentPosition(position) {
      //吸顶TabControl的隐藏/显示，使用v-if。
      this.isShowTabControl = -position.y > this.tabOffsetTop;
      this.isShowBackTop = -position.y > 1000;
    },
    swiperImageLoad() {
      // //所有组件都有$el ,用于获取组件内元素
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.goodsShow = this.goods.concat();
          break;
        case 1:
          this.goodsShow.sort(function(a, b) {
            return b.shop_score - a.shop_score;
          });
          break;
        case 2:
          this.goodsShow.sort((a, b) => {
            return a.distance - b.distance;
          });
          break;
      }
      console.log(this.goodsShow)
      // 同步吸顶tabcontrol和滚动tabcontrol的选中状态
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlFixed.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.home-nav {
  background: var(--color-ele-blue);
  color: white;
}
.scroll {
  position: relative;
  top: 0;
  height: calc(100vh - 86px - 95px);
  right: 0;
  left: 0;
  background: white;
  overflow: hidden;
}
@media screen and (min-width: 500px) {
  .scroll,
  .tabcontrol-fixed {
    width: 500px !important;
  }
}
.tabcontrol-fixed {
  position: absolute;
  top: 125px;
  width: 100vw;
  z-index: 9;
}

.fa-shopping-cart {
  color: var(--color-ele-blue);
  font-size: 20px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
