<template>
  <div class="goods">
    <div class="goodslist">
      <el-row :gutter="10">
        <el-col class="menu-left" :span="6">
          <scroll
            class="scroll-left"
            ref="scrollleft"
            :probe-type="3"
            @scrollPosition="leftPosition"
          >
          <div class="link" v-for="(item, index) in goods" :key="index" @click="refresh"> <a class="href"  :href="'#'+item.name">{{item.name}}</a></div>
         
            <!-- <el-menu
              :default-active="activeIndex"
              class="el-menu-vertical-demo"
              @select="handleSelect"
            >
              <el-menu-item
                v-for="(item, index) in goods"
                :index="index.toString()"
                :key="index"
                :class="{activity: index == menuIndex}"
              >
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-menu> -->
          </scroll>
        </el-col>
        <el-col class="menu-right" :span="18">
          <div
            class="scroll-right"
            ref="scrollright"
          >
            <div ref="menu">
              <el-card
                :body-style="{ padding: '0px' }"
                v-for="(item, index) in goods"
                :key="index"
                class="card"
              >
              <a :id="item.name"></a> 
                <el-row :gutter="10">
                  <el-col :span="24" class="food-header">
                    <span class="menu_item_title">{{item.name}}</span>
                    <span class="menu_item_description">{{item.description}}</span>
                  </el-col>
                  <div v-for="(foods,foodindex) in item.foods" :key="foodindex">
                    <el-col :span="4">
                      <el-image :src="imgBaseUrl"></el-image>
                    </el-col>
                    <el-col :span="20">
                      <div class="goods">
                        <div class="description_foodname">{{foods.name}}</div>
                        <div class="food_description_content">{{foods.description}}</div>
                        <el-rate v-model="value" disabled show-score text-color="#ff9900"></el-rate>
                        <div class="food_description_sale_rating">
                          <span class="sales">月售{{foods.month_sales}}份</span>
                          <span>好评率{{foods.satisfy_rate}}%</span>
                        </div>
                        <el-col :span="18">
                          <div class="menu_detail_footer">
                            <div class="food_price">
                              <span>¥</span>
                              <span>{{foods.specfoods[0].price}}</span>
                              <span v-if="foods.specifications.length">起</span>
                            </div>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="add-cart">
                            <div class="dowm">
                              <i class="fa fa-minus-circle"></i>
                            </div>
                            <div class="count">{{count}}</div>
                            <div class="add" @click="addCart(index,foodindex)">
                              <i class="fa fa-plus-circle" aria-hidden="true"></i>
                            </div>
                          </div>
                        </el-col>
                      </div>
                    </el-col>
                  </div>
                </el-row>
              </el-card>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { debounce } from "common/utils";
export default {
  name: "goods",
  components: {
    Scroll
  },
  data() {
    return {
      menuIndex: 0,
      value: 3.7,
      menuIndexChange: true, //解决选中index时，scroll监听事件重复判断设置index的bug
      imgBaseUrl: "http://elm.cangdu.org/img/1700587e5b163508.jpg",
      goods: [
        {
          name: "热销榜🔥",
          description: "热销来袭～",
          restaurant_id: 1,
          id: 9196,
          foods: [
            {
              _id: "5e01b173de911551beafb045",
              tips: "742评价 月售798份",
              item_id: 6086,
              category_id: 9196,
              restaurant_id: 1,
              name: "长沙喜茶",
              server_utc: "2019-12-22T12:14:57.129Z",
              month_sales: 798,
              description: "e1",
              rating: 4.6,
              image: "",
              specifications: [],
              specfoods: [
                {
                  specs_name: "默认",
                  name: "长沙喜茶",
                  item_id: 6138,
                  sku_id: 23881,
                  food_id: 23908,
                  restaurant_id: 1,
                  _id: "5e0961c16901211bf3ad7c9a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 538,
                  sold_out: false,
                  price: 200,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ]
            },
            {
              _id: "5e01c15718adbf20d9cbff84",
              tips: "527评价 月售407份",
              item_id: 6107,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "e"
              },
              image_path:
                "blob:http://localhost:8002/b6d4076d-9467-4818-8eb1-e412b64c9bbb",
              name: "测试数据",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ee",
                  item_id: 6107,
                  sku_id: 23702,
                  food_id: 23729,
                  restaurant_id: 1,
                  _id: "5e01c15718adbf20d9cbff85",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 373,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 73,
              satisfy_count: 847,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:29:46.548Z",
              specifications: [],
              rating_count: 527,
              month_sales: 407,
              description: "e",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e01c635f58062216abea792",
              tips: "741评价 月售440份",
              item_id: 6111,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "dd",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170a90adb5664655.jpg",
              name: "测试数据",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dsd",
                  item_id: 6111,
                  sku_id: 24505,
                  food_id: 24532,
                  restaurant_id: 1,
                  _id: "5e6085e8942e5767f50a2907",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 111,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 35,
              satisfy_count: 87,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 741,
              month_sales: 440,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e0473708f58e17456767dcf",
              tips: "771评价 月售739份",
              item_id: 6138,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "没得活动"
              },
              image_path: "16f4162bb0262234.jpg",
              name: "长沙喜茶",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "长沙喜茶",
                  item_id: 6138,
                  sku_id: 23881,
                  food_id: 23908,
                  restaurant_id: 1,
                  _id: "5e0961c16901211bf3ad7c9a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 538,
                  sold_out: false,
                  price: 200,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 83,
              satisfy_count: 202,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T08:30:52.612Z",
              specifications: [],
              rating_count: 771,
              month_sales: 739,
              description: "味道好寂寥",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e0574227f4f8e7628d7f0f6",
              tips: "255评价 月售571份",
              item_id: 6140,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "12",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f454da7fc62267.jpg",
              name: "测试数据",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "222",
                  item_id: 6140,
                  sku_id: 23835,
                  food_id: 23862,
                  restaurant_id: 1,
                  _id: "5e05b0426901211bf3ad722e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 506,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 55,
              satisfy_count: 779,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T09:00:58.100Z",
              specifications: [],
              rating_count: 255,
              month_sales: 571,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e05e8e06901211bf3ad7798",
              tips: "932评价 月售232份",
              item_id: 6148,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "阿斯蒂芬"
              },
              image_path: "16f4715b31662323.png",
              name: "生活",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "生活",
                  item_id: 6148,
                  sku_id: 23858,
                  food_id: 23885,
                  restaurant_id: 1,
                  _id: "5e05f3866901211bf3ad77d6",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 124,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 56,
              satisfy_count: 234,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 932,
              month_sales: 232,
              description: "食品",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e0896666901211bf3ad7a34",
              tips: "156评价 月售438份",
              item_id: 6152,
              category_id: 9196,
              restaurant_id: 1,
              activity: {
                image_text: "广轻特惠",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f518b501662356.jpg",
              name: "麻辣烫",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "麻辣烫",
                  item_id: 6152,
                  sku_id: 23871,
                  food_id: 23898,
                  restaurant_id: 1,
                  _id: "5e0896666901211bf3ad7a35",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 503,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 46,
              satisfy_count: 754,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 156,
              month_sales: 438,
              description: "一饭二",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e0b14e76901211bf3ad8027",
              tips: "281评价 月售56份",
              item_id: 6164,
              category_id: 9196,
              restaurant_id: 1,
              activity: null,
              image_path: "16f5b440c1b62438.jpg",
              name: "sadf",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "sadf",
                  item_id: 6164,
                  sku_id: 23896,
                  food_id: 23923,
                  restaurant_id: 1,
                  _id: "5e0b14e76901211bf3ad8028",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 9,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 706,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 281,
              month_sales: 56,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 158
        },
        {
          name: "折扣榜",
          description: "折扣更优惠",
          restaurant_id: 1,
          id: 9197,
          foods: [
            {
              _id: "5e003b30de911551beafa45e",
              tips: "759评价 月售461份",
              item_id: 6044,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "16f30e73f4761980.png",
              name: "而不",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "而不",
                  item_id: 6044,
                  sku_id: 24031,
                  food_id: 24058,
                  restaurant_id: 1,
                  _id: "5e16e30a6901211bf3ad9c60",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 327,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 3,
              satisfy_count: 533,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 759,
              month_sales: 461,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e007b40de911551beafa739",
              tips: "420评价 月售621份",
              item_id: 6047,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "16f31e190ff62003.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6047,
                  sku_id: 24375,
                  food_id: 24402,
                  restaurant_id: 1,
                  _id: "5e539808942e5767f50a037d",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e539808942e5767f50a037e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 217,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "dadfa",
                  name: "123",
                  item_id: 6047,
                  sku_id: 24376,
                  food_id: 24403,
                  restaurant_id: 1,
                  _id: "5e539808942e5767f50a037b",
                  specs: [
                    {
                      name: "规格",
                      value: "dadfa",
                      _id: "5e539808942e5767f50a037c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 963,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 90,
              satisfy_count: 983,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "dadfa"]
                }
              ],
              rating_count: 420,
              month_sales: 621,
              description: "adfad",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e0166b0de911551beafaa10",
              tips: "391评价 月售507份",
              item_id: 6049,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "带我去"
              },
              image_path: "16f35790f4462025.jpg",
              name: "动物的fgg",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "动物的fgg",
                  item_id: 6049,
                  sku_id: 23726,
                  food_id: 23753,
                  restaurant_id: 1,
                  _id: "5e02ca64f58062216abeb0ba",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 90,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 45,
              satisfy_count: 344,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 391,
              month_sales: 507,
              description: "打威群岛",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e01af8ede911551beafb00c",
              tips: "618评价 月售45份",
              item_id: 6084,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "我去饿"
              },
              image_path:
                "blob:http://localhost:8002/72a4fcdb-a797-41d7-92f1-79c80b3eb103",
              name: "我去恶趣味",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "我去恶趣味",
                  item_id: 6084,
                  sku_id: 24394,
                  food_id: 24421,
                  restaurant_id: 1,
                  _id: "5e54e4f8942e5767f50a071f",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e54e4f8942e5767f50a0720"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 907,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111111",
                  name: "我去恶趣味",
                  item_id: 6084,
                  sku_id: 24395,
                  food_id: 24422,
                  restaurant_id: 1,
                  _id: "5e54e4f8942e5767f50a071d",
                  specs: [
                    {
                      name: "规格",
                      value: "111111",
                      _id: "5e54e4f8942e5767f50a071e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 428,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 59,
              satisfy_count: 273,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "111111"]
                }
              ],
              rating_count: 618,
              month_sales: 45,
              description: "请问",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e020111f58062216abeac46",
              tips: "204评价 月售24份",
              item_id: 6129,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "21",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f3b20f65162114.png",
              name: "1121",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1121",
                  item_id: 6129,
                  sku_id: 23744,
                  food_id: 23771,
                  restaurant_id: 1,
                  _id: "5e0312dbb007cd415b6b5f59",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0312dbb007cd415b6b5f5a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 757,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "1121",
                  item_id: 6129,
                  sku_id: 23745,
                  food_id: 23772,
                  restaurant_id: 1,
                  _id: "5e0312dbb007cd415b6b5f57",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e0312dbb007cd415b6b5f58"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 539,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 4.1,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "qqqq",
                  name: "1121",
                  item_id: 6129,
                  sku_id: 23746,
                  food_id: 23773,
                  restaurant_id: 1,
                  _id: "5e0312dbb007cd415b6b5f55",
                  specs: [
                    {
                      name: "规格",
                      value: "qqqq",
                      _id: "5e0312dbb007cd415b6b5f56"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 542,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 44,
              satisfy_count: 309,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [
                {
                  values: ["默认", "", "qqqq"],
                  name: "规格"
                }
              ],
              rating_count: 204,
              month_sales: 24,
              description: "121",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e01deaef58062216abeaa5e",
              tips: "444评价 月售577份",
              item_id: 6127,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "限时打1折",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170a909657264653.jpg",
              name: "name",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "name",
                  item_id: 6127,
                  sku_id: 24502,
                  food_id: 24529,
                  restaurant_id: 1,
                  _id: "5e608572942e5767f50a2901",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 614,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 67,
              satisfy_count: 803,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 444,
              month_sales: 577,
              description: "好吃不要钱",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e01b9f70c81a71f9cc5f008",
              tips: "540评价 月售188份",
              item_id: 6101,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "zxc"
              },
              image_path:
                "blob:http://localhost:8002/1b8161ae-98b8-4350-abb0-93a6d87d502a",
              name: "cxzcx",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "cxzcx",
                  item_id: 6101,
                  sku_id: 23764,
                  food_id: 23791,
                  restaurant_id: 1,
                  _id: "5e032839b007cd415b6b6014",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 287,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 16,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T06:58:03.912Z",
              specifications: [],
              rating_count: 540,
              month_sales: 188,
              description: "zcx",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e04239e07b4a769035f35aa",
              tips: "403评价 月售7份",
              item_id: 6136,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "域",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f402b0ed962185.jpg",
              name: "域",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "域",
                  item_id: 6136,
                  sku_id: 23791,
                  food_id: 23818,
                  restaurant_id: 1,
                  _id: "5e0426b407b4a769035f361b",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 908,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 719,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T03:02:33.545Z",
              specifications: [],
              rating_count: 403,
              month_sales: 7,
              description: "库",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e016674de911551beafaa0e",
              tips: "588评价 月售106份",
              item_id: 6048,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "额",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35781be862024.jpg",
              name: "微软微软",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "微软微软",
                  item_id: 6048,
                  sku_id: 23893,
                  food_id: 23920,
                  restaurant_id: 1,
                  _id: "5e0aeb2e6901211bf3ad7fd0",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 307,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 99,
              satisfy_count: 937,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 588,
              month_sales: 106,
              description: "额外",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e0b11736901211bf3ad801b",
              tips: "618评价 月售849份",
              item_id: 6163,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "16f5b3c2ff962437.jpg",
              name: "1231",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1231",
                  item_id: 6163,
                  sku_id: 23905,
                  food_id: 23932,
                  restaurant_id: 1,
                  _id: "5e0c9f536901211bf3ad80da",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0c9f536901211bf3ad80db"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 222,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "aaaaaaaaaa",
                  name: "1231",
                  item_id: 6163,
                  sku_id: 23906,
                  food_id: 23933,
                  restaurant_id: 1,
                  _id: "5e0c9f536901211bf3ad80d8",
                  specs: [
                    {
                      name: "规格",
                      value: "aaaaaaaaaa",
                      _id: "5e0c9f536901211bf3ad80d9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 486,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 71,
              satisfy_count: 524,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "aaaaaaaaaa"],
                  name: "规格"
                }
              ],
              rating_count: 618,
              month_sales: 849,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e0d3ebd6901211bf3ad80f2",
              tips: "711评价 月售353份",
              item_id: 6167,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "111111111111"
              },
              image_path: "16f63bd152762454.jpg",
              name: "1111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1111111",
                  item_id: 6167,
                  sku_id: 23911,
                  food_id: 23938,
                  restaurant_id: 1,
                  _id: "5e0da3386901211bf3ad8212",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 516,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 62,
              satisfy_count: 378,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 711,
              month_sales: 353,
              description: "11111111111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e16e9656901211bf3ad9cb8",
              tips: "563评价 月售152份",
              item_id: 6201,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "的",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f8e5d85dd62856.png",
              name: "是23+",
              __v: 0,
              specfoods: [
                {
                  specs_name: "23-",
                  name: "是23+",
                  item_id: 6201,
                  sku_id: 24063,
                  food_id: 24090,
                  restaurant_id: 1,
                  _id: "5e183ee86901211bf3ada3be",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 880,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0.1,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 876,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 563,
              month_sales: 152,
              description: "的23-",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e204e4a0236b14725d39380",
              tips: "403评价 月售367份",
              item_id: 6276,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "大师傅",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16fae31d92963192.jpg",
              name: "56456464",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "56456464",
                  item_id: 6276,
                  sku_id: 24160,
                  food_id: 24187,
                  restaurant_id: 1,
                  _id: "5e2818cedb7fe12148569086",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 451,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 49,
              satisfy_count: 487,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 403,
              month_sales: 367,
              description: "撒旦法",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e369e3adb7fe1214856a64e",
              tips: "932评价 月售768份",
              item_id: 6304,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1700587e5b163508.jpg",
              name: "114414",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "114414",
                  item_id: 6304,
                  sku_id: 24210,
                  food_id: 24237,
                  restaurant_id: 1,
                  _id: "5e36a9eedb7fe1214856a69d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 774,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 449,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 932,
              month_sales: 768,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e4120f5eccd9c1bec9d6177",
              tips: "126评价 月售355份",
              item_id: 6331,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "1",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1702e68d8a763717.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "tt",
                  name: "1",
                  item_id: 6331,
                  sku_id: 24263,
                  food_id: 24290,
                  restaurant_id: 1,
                  _id: "5e4163c0eccd9c1bec9d6213",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 631,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 540,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [],
              rating_count: 126,
              month_sales: 355,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e421ddceccd9c1bec9d6286",
              tips: "888评价 月售306份",
              item_id: 6332,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "werwerewr"
              },
              image_path: "170324486ec63721.jpg",
              name: "特",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "特",
                  item_id: 6332,
                  sku_id: 24271,
                  food_id: 24298,
                  restaurant_id: 1,
                  _id: "5e429dc7eccd9c1bec9d63fa",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e429dc7eccd9c1bec9d63fb"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 917,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "eee",
                  name: "特",
                  item_id: 6332,
                  sku_id: 24272,
                  food_id: 24299,
                  restaurant_id: 1,
                  _id: "5e429dc7eccd9c1bec9d63f8",
                  specs: [
                    {
                      name: "规格",
                      value: "eee",
                      _id: "5e429dc7eccd9c1bec9d63f9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 167,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 95,
              satisfy_count: 312,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [
                {
                  values: ["默认", "eee"],
                  name: "规格"
                }
              ],
              rating_count: 888,
              month_sales: 306,
              description: "erwe",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e48d4b067c5596b4931613d",
              tips: "81评价 月售230份",
              item_id: 6347,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1704c7ed2ef63839.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6347,
                  sku_id: 24330,
                  food_id: 24357,
                  restaurant_id: 1,
                  _id: "5e5008bd156c7477e1baf637",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e5008bd156c7477e1baf638"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 737,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "hjlhjklhlkhjlk",
                  name: "1",
                  item_id: 6347,
                  sku_id: 24331,
                  food_id: 24358,
                  restaurant_id: 1,
                  _id: "5e5008bd156c7477e1baf635",
                  specs: [
                    {
                      name: "规格",
                      value: "hjlhjklhlkhjlk",
                      _id: "5e5008bd156c7477e1baf636"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 639,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 775,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [
                {
                  values: ["默认", "hjlhjklhlkhjlk"],
                  name: "规格"
                }
              ],
              rating_count: 81,
              month_sales: 230,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e58e22e942e5767f50a160b",
              tips: "883评价 月售73份",
              item_id: 6385,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1708b337d6664458.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6385,
                  sku_id: 24456,
                  food_id: 24483,
                  restaurant_id: 1,
                  _id: "5e58e22e942e5767f50a160c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 131,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 23,
              satisfy_count: 925,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 883,
              month_sales: 73,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e68a699942e5767f50a3de2",
              tips: "477评价 月售11份",
              item_id: 6430,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "111"
              },
              image_path: "170c8ca9b2464869.jpg",
              name: "111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111",
                  item_id: 6430,
                  sku_id: 24588,
                  food_id: 24615,
                  restaurant_id: 1,
                  _id: "5e690515942e5767f50a3f5e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e690515942e5767f50a3f5f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 565,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "111",
                  item_id: 6430,
                  sku_id: 24589,
                  food_id: 24616,
                  restaurant_id: 1,
                  _id: "5e690515942e5767f50a3f5c",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5e690515942e5767f50a3f5d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 25,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 5,
              satisfy_count: 14,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "111"]
                }
              ],
              rating_count: 477,
              month_sales: 11,
              description: "111222",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e6903e6942e5767f50a3f42",
              tips: "698评价 月售710份",
              item_id: 6432,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "66",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170ca37598964877.jpg",
              name: "666",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "666",
                  item_id: 6432,
                  sku_id: 24581,
                  food_id: 24608,
                  restaurant_id: 1,
                  _id: "5e6903e6942e5767f50a3f43",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 511,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 26,
              satisfy_count: 605,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 698,
              month_sales: 710,
              description: "66",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e70492b07e5ca4f7d1d8369",
              tips: "573评价 月售606份",
              item_id: 6454,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "noActivity",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170e69df26465061.png",
              name: "testGoods",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "testGoods",
                  item_id: 6454,
                  sku_id: 24634,
                  food_id: 24661,
                  restaurant_id: 1,
                  _id: "5e7074a607e5ca4f7d1d83fd",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7074a607e5ca4f7d1d83fe"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "12",
                  name: "testGoods",
                  item_id: 6454,
                  sku_id: 24635,
                  food_id: 24662,
                  restaurant_id: 1,
                  _id: "5e7074a607e5ca4f7d1d83fb",
                  specs: [
                    {
                      name: "规格",
                      value: "12",
                      _id: "5e7074a607e5ca4f7d1d83fc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 620,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 39,
              satisfy_count: 858,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [
                {
                  values: ["默认", "12"],
                  name: "规格"
                }
              ],
              rating_count: 573,
              month_sales: 606,
              description: "noDetail",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e77401407e5ca4f7d1d9507",
              tips: "123评价 月售189份",
              item_id: 6476,
              category_id: 9197,
              restaurant_id: 1,
              activity: {
                image_text: "1",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17101d1ec4a65245.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6476,
                  sku_id: 24703,
                  food_id: 24730,
                  restaurant_id: 1,
                  _id: "5e77401407e5ca4f7d1d9508",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 88,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 45,
              satisfy_count: 98,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 123,
              month_sales: 189,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e7982fd6c41e733f7bd6eb9",
              tips: "783评价 月售189份",
              item_id: 6482,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1710abe53b365317.png",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6482,
                  sku_id: 24786,
                  food_id: 24813,
                  restaurant_id: 1,
                  _id: "5e7b4698dd5b8d23f149450c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 872,
                  sold_out: false,
                  price: 18,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 17,
              satisfy_count: 871,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-23T03:37:58.008Z",
              specifications: [],
              rating_count: 783,
              month_sales: 189,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e798af56c41e733f7bd6efa",
              tips: "818评价 月售690份",
              item_id: 6483,
              category_id: 9197,
              restaurant_id: 1,
              activity: null,
              image_path: "1710ac68bb065319.png",
              name: "好吃点",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "好吃点",
                  item_id: 6483,
                  sku_id: 24758,
                  food_id: 24785,
                  restaurant_id: 1,
                  _id: "5e798af56c41e733f7bd6efb",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 317,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 983,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-23T03:37:58.008Z",
              specifications: [],
              rating_count: 818,
              month_sales: 690,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 100
        },
        {
          name: "好吃的😋",
          description: "舒服的沙发",
          restaurant_id: 1,
          id: 9198,
          foods: [
            {
              _id: "5df9c9827f5a6f2f4826eddd",
              tips: "730评价 月售574份",
              item_id: 6030,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "是对方是否"
              },
              image_path: "16f17bb126261620.jpg",
              name: "炸鸡",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "炸鸡",
                  item_id: 6030,
                  sku_id: 24400,
                  food_id: 24427,
                  restaurant_id: 1,
                  _id: "5e5617a7942e5767f50a0b07",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e5617a7942e5767f50a0b08"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 437,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "234",
                  name: "炸鸡",
                  item_id: 6030,
                  sku_id: 24401,
                  food_id: 24428,
                  restaurant_id: 1,
                  _id: "5e5617a7942e5767f50a0b05",
                  specs: [
                    {
                      name: "规格",
                      value: "234",
                      _id: "5e5617a7942e5767f50a0b06"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 452,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 69,
              satisfy_count: 714,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "234"]
                }
              ],
              rating_count: 730,
              month_sales: 574,
              description:
                "在最美的时光遇见了你。张爱玲说，爱的同时便会背负憎恨的风险，我遇见你，就好像今天遇见了这朵美丽的花朵一样",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e00544ade911551beafa4a3",
              tips: "126评价 月售912份",
              item_id: 6045,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16f31494e9d61982.png",
              name: "斌哥",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "斌哥",
                  item_id: 6045,
                  sku_id: 23667,
                  food_id: 23694,
                  restaurant_id: 1,
                  _id: "5e006fa5de911551beafa5ae",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 907,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 554,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 126,
              month_sales: 912,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e017c3ade911551beafab16",
              tips: "333评价 月售67份",
              item_id: 6051,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "请问"
              },
              image_path: "16f35cd484262037.jpg",
              name: "请问",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "请问",
                  item_id: 6051,
                  sku_id: 23686,
                  food_id: 23713,
                  restaurant_id: 1,
                  _id: "5e017f41de911551beafab4c",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 219,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 728,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 333,
              month_sales: 67,
              description: "完全恶气",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e01b3579d694e1ef8e0dd40",
              tips: "858评价 月售423份",
              item_id: 6089,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "d",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path:
                "blob:http://localhost:8002/14aef1f9-ecea-48b4-a900-43b72f061028",
              name: "dwd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dwd",
                  item_id: 6089,
                  sku_id: 23774,
                  food_id: 23801,
                  restaurant_id: 1,
                  _id: "5e032903b007cd415b6b6021",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 834,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 91,
              satisfy_count: 674,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T06:41:28.965Z",
              specifications: [],
              rating_count: 858,
              month_sales: 423,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e01b6d77954531f1e6571d9",
              tips: "103评价 月售492份",
              item_id: 6097,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "无"
              },
              image_path: "16f36b20cf962058.jpg",
              name: "大龙虾",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "大龙虾",
                  item_id: 6097,
                  sku_id: 24084,
                  food_id: 24111,
                  restaurant_id: 1,
                  _id: "5e1d37896901211bf3adaf56",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 149,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 378,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T06:43:02.568Z",
              specifications: [],
              rating_count: 103,
              month_sales: 492,
              description: "好吃1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e0183e6de911551beafac07",
              tips: "82评价 月售461份",
              item_id: 6052,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "大王",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35eb2bdc62046.jpg",
              name: "大王得到1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "大王得到1",
                  item_id: 6052,
                  sku_id: 23723,
                  food_id: 23750,
                  restaurant_id: 1,
                  _id: "5e02c9fdf58062216abeb0b5",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e02c9fdf58062216abeb0b6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 278,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "agadgqewttttttttttttttttttt",
                  name: "大王得到1",
                  item_id: 6052,
                  sku_id: 23724,
                  food_id: 23751,
                  restaurant_id: 1,
                  _id: "5e02c9fdf58062216abeb0b3",
                  specs: [
                    {
                      name: "规格",
                      value: "agadgqewttttttttttttttttttt",
                      _id: "5e02c9fdf58062216abeb0b4"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 3,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 41,
              satisfy_count: 824,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", "agadgqewttttttttttttttttttt"],
                  name: "规格"
                }
              ],
              rating_count: 82,
              month_sales: 461,
              description: "的dagag",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e05f5196901211bf3ad77d9",
              tips: "54评价 月售289份",
              item_id: 6149,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f4740634462332.jpg",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6149,
                  sku_id: 23859,
                  food_id: 23886,
                  restaurant_id: 1,
                  _id: "5e05f5196901211bf3ad77da",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 869,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 82,
              satisfy_count: 782,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 54,
              month_sales: 289,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e0b16c26901211bf3ad8029",
              tips: "498评价 月售792份",
              item_id: 6165,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16f5b50eb6462439.jpg",
              name: "asdfg",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "asdfg",
                  item_id: 6165,
                  sku_id: 23900,
                  food_id: 23927,
                  restaurant_id: 1,
                  _id: "5e0c6e8a6901211bf3ad80ab",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0c6e8a6901211bf3ad80ac"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 129,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "sda",
                  name: "asdfg",
                  item_id: 6165,
                  sku_id: 23901,
                  food_id: 23928,
                  restaurant_id: 1,
                  _id: "5e0c6e8a6901211bf3ad80a9",
                  specs: [
                    {
                      name: "规格",
                      value: "sda",
                      _id: "5e0c6e8a6901211bf3ad80aa"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 850,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 9,
              satisfy_count: 704,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "sda"]
                }
              ],
              rating_count: 498,
              month_sales: 792,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e0fd56e6901211bf3ad8519",
              tips: "669评价 月售607份",
              item_id: 6180,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "是多少的我也不知道"
              },
              image_path: "16f6dd9a21462510.jpg",
              name: "甜食",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "甜食",
                  item_id: 6180,
                  sku_id: 23929,
                  food_id: 23956,
                  restaurant_id: 1,
                  _id: "5e0fd56e6901211bf3ad851a",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 386,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 946,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 669,
              month_sales: 607,
              description: "好吃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5dfdae247f5a6f2f48270819",
              tips: "187评价 月售469份",
              item_id: 6040,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "sss"
              },
              image_path: "16f26f04cf961916.png",
              name: "小米",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "小米",
                  item_id: 6040,
                  sku_id: 23932,
                  food_id: 23959,
                  restaurant_id: 1,
                  _id: "5e10999c6901211bf3ad862f",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e10999c6901211bf3ad8630"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 196,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "111",
                  name: "小米",
                  item_id: 6040,
                  sku_id: 23933,
                  food_id: 23960,
                  restaurant_id: 1,
                  _id: "5e10999c6901211bf3ad862d",
                  specs: [
                    {
                      name: "规格",
                      value: "111",
                      _id: "5e10999c6901211bf3ad862e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 925,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 84,
              satisfy_count: 351,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  values: ["默认", "111"],
                  name: "规格"
                }
              ],
              rating_count: 187,
              month_sales: 469,
              description: "sdsdsd",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e13e57c6901211bf3ad8ddd",
              tips: "444评价 月售208份",
              item_id: 6188,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "舌尖上的狂欢",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f7db8707862636.png",
              name: "舌尖上的狂欢",
              __v: 0,
              specfoods: [
                {
                  specs_name: "gg123",
                  name: "舌尖上的狂欢",
                  item_id: 6188,
                  sku_id: 23963,
                  food_id: 23990,
                  restaurant_id: 1,
                  _id: "5e1430846901211bf3ad8fb6",
                  specs: [
                    {
                      name: "规格",
                      value: "gg123",
                      _id: "5e1430846901211bf3ad8fb7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 274,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "gg224",
                  name: "舌尖上的狂欢",
                  item_id: 6188,
                  sku_id: 23964,
                  food_id: 23991,
                  restaurant_id: 1,
                  _id: "5e1430846901211bf3ad8fb4",
                  specs: [
                    {
                      name: "规格",
                      value: "gg224",
                      _id: "5e1430846901211bf3ad8fb5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 354,
                  sold_out: false,
                  price: 17,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 275,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["gg123", "gg224"],
                  name: "规格"
                }
              ],
              rating_count: 444,
              month_sales: 208,
              description: "舌尖上的狂欢",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e0f0b856901211bf3ad84b6",
              tips: "183评价 月售945份",
              item_id: 6179,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "3131"
              },
              image_path: "16f6ac4e94962502.png",
              name: "豹子",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "豹子",
                  item_id: 6179,
                  sku_id: 24004,
                  food_id: 24031,
                  restaurant_id: 1,
                  _id: "5e1584d66901211bf3ad954f",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e1584d66901211bf3ad9550"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 676,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.9,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "3223",
                  name: "豹子",
                  item_id: 6179,
                  sku_id: 24005,
                  food_id: 24032,
                  restaurant_id: 1,
                  _id: "5e1584d66901211bf3ad954d",
                  specs: [
                    {
                      name: "规格",
                      value: "3223",
                      _id: "5e1584d66901211bf3ad954e"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 284,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 73,
              satisfy_count: 123,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "3223"]
                }
              ],
              rating_count: 183,
              month_sales: 945,
              description: "热销来袭～",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e16d5e06901211bf3ad9b69",
              tips: "305评价 月售537份",
              item_id: 6198,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "士大夫",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f893344b862790.png",
              name: "士大夫",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24051,
                  food_id: 24078,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada29e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e18260c6901211bf3ada29f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 435,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "士大夫",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24052,
                  food_id: 24079,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada29c",
                  specs: [
                    {
                      name: "规格",
                      value: "士大夫",
                      _id: "5e18260c6901211bf3ada29d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 514,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "123",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24053,
                  food_id: 24080,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada29a",
                  specs: [
                    {
                      name: "规格",
                      value: "123",
                      _id: "5e18260c6901211bf3ada29b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 151,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 100,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "士大夫",
                  item_id: 6198,
                  sku_id: 24054,
                  food_id: 24081,
                  restaurant_id: 1,
                  _id: "5e18260c6901211bf3ada298",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e18260c6901211bf3ada299"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 907,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.9,
                  packing_fee: 6,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 36,
              satisfy_count: 877,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "士大夫", "123", ""],
                  name: "规格"
                }
              ],
              rating_count: 305,
              month_sales: 537,
              description: "士大夫",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e202c460236b14725d39302",
              tips: "191评价 月售697份",
              item_id: 6231,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16fadacfc5e63162.jpg",
              name: "柔荑花",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "柔荑花",
                  item_id: 6231,
                  sku_id: 24148,
                  food_id: 24175,
                  restaurant_id: 1,
                  _id: "5e2570550236b14725d39cee",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 554,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 894,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 191,
              month_sales: 697,
              description: "trteteteteteterte",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e204ca00236b14725d39379",
              tips: "170评价 月售711份",
              item_id: 6275,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "的说法的说法大"
              },
              image_path: "16fae2b5e9b63191.jpg",
              name: "范德萨",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "范德萨",
                  item_id: 6275,
                  sku_id: 24172,
                  food_id: 24199,
                  restaurant_id: 1,
                  _id: "5e2d6a8adb7fe12148569550",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e2d6a8adb7fe12148569551"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 22,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "3216546",
                  name: "范德萨",
                  item_id: 6275,
                  sku_id: 24173,
                  food_id: 24200,
                  restaurant_id: 1,
                  _id: "5e2d6a8adb7fe1214856954e",
                  specs: [
                    {
                      name: "规格",
                      value: "3216546",
                      _id: "5e2d6a8adb7fe1214856954f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 362,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 9,
              satisfy_count: 690,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [
                {
                  values: ["默认", "3216546"],
                  name: "规格"
                }
              ],
              rating_count: 170,
              month_sales: 711,
              description: "士大夫bjhgjbkhhjb",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e2bea4edb7fe12148569278",
              tips: "946评价 月售643份",
              item_id: 6296,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "12"
              },
              image_path: "16fdb8b571063409.jpg",
              name: "1234",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1234",
                  item_id: 6296,
                  sku_id: 24189,
                  food_id: 24216,
                  restaurant_id: 1,
                  _id: "5e304329db7fe12148569b76",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 196,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 997,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 946,
              month_sales: 643,
              description: "12",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e312ed3db7fe12148569bd0",
              tips: "239评价 月售974份",
              item_id: 6299,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "首单7折"
              },
              image_path: "16ff01efbe063459.jpg",
              name: "蛋包饭",
              __v: 0,
              specfoods: [
                {
                  specs_name: "asdfasdf",
                  name: "蛋包饭",
                  item_id: 6299,
                  sku_id: 24192,
                  food_id: 24219,
                  restaurant_id: 1,
                  _id: "5e3134b6db7fe12148569bd4",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 182,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 7,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 2,
              satisfy_count: 141,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [],
              rating_count: 239,
              month_sales: 974,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e33ec48db7fe1214856a234",
              tips: "136评价 月售870份",
              item_id: 6301,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16ffad30c6c63483.jpg",
              name: "13",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "13",
                  item_id: 6301,
                  sku_id: 24207,
                  food_id: 24234,
                  restaurant_id: 1,
                  _id: "5e36808bdb7fe1214856a4cf",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e36808bdb7fe1214856a4d0"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 290,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "13",
                  item_id: 6301,
                  sku_id: 24208,
                  food_id: 24235,
                  restaurant_id: 1,
                  _id: "5e36808bdb7fe1214856a4cd",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e36808bdb7fe1214856a4ce"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 495,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 29,
              satisfy_count: 48,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-21T06:40:54.933Z",
              specifications: [
                {
                  values: ["默认", ""],
                  name: "规格"
                }
              ],
              rating_count: 136,
              month_sales: 870,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e464ecc67c5596b49315d76",
              tips: "725评价 月售494份",
              item_id: 6339,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "123"
              },
              image_path: "17042a3805d63801.jpg",
              name: "食物食物 发是发v",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "食物食物 发是发v",
                  item_id: 6339,
                  sku_id: 24294,
                  food_id: 24321,
                  restaurant_id: 1,
                  _id: "5e466bb767c5596b49315de0",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e466bb767c5596b49315de1"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 372,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "1",
                  name: "食物食物 发是发v",
                  item_id: 6339,
                  sku_id: 24295,
                  food_id: 24322,
                  restaurant_id: 1,
                  _id: "5e466bb767c5596b49315dde",
                  specs: [
                    {
                      name: "规格",
                      value: "1",
                      _id: "5e466bb767c5596b49315ddf"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 236,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 84,
              satisfy_count: 511,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [
                {
                  values: ["默认", "1"],
                  name: "规格"
                }
              ],
              rating_count: 725,
              month_sales: 494,
              description: "123",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e4696e367c5596b49315ec5",
              tips: "961评价 月售780份",
              item_id: 6344,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "买一送一",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17043bd6cef63828.jpg",
              name: "测试vvc3",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "测试vvc3",
                  item_id: 6344,
                  sku_id: 24325,
                  food_id: 24352,
                  restaurant_id: 1,
                  _id: "5e4f73fd156c7477e1baf2c1",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 940,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 0.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 367,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [],
              rating_count: 961,
              month_sales: 780,
              description: "西瓜",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e47b6b767c5596b49316012",
              tips: "118评价 月售17份",
              item_id: 6345,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "1704821cdc263837.png",
              name: "asfd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "asfd",
                  item_id: 6345,
                  sku_id: 24301,
                  food_id: 24328,
                  restaurant_id: 1,
                  _id: "5e47b6b767c5596b49316013",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 414,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 93,
              satisfy_count: 441,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-14T05:27:15.179Z",
              specifications: [],
              rating_count: 118,
              month_sales: 17,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e4be3f47965b007640752d4",
              tips: "756评价 月售19份",
              item_id: 6354,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "yyy",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1705872724863888.jpg",
              name: "yyy",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "yyy",
                  item_id: 6354,
                  sku_id: 24315,
                  food_id: 24342,
                  restaurant_id: 1,
                  _id: "5e4be3f47965b007640752d5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 496,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.5,
                  packing_fee: 5,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 549,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-17T04:35:16.999Z",
              specifications: [],
              rating_count: 756,
              month_sales: 19,
              description: "yyy",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e51eab0156c7477e1bafd0d",
              tips: "110评价 月售335份",
              item_id: 6361,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "1706ffccc1364134.jpg",
              name: "汉堡王das",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "汉堡王das",
                  item_id: 6361,
                  sku_id: 24348,
                  food_id: 24375,
                  restaurant_id: 1,
                  _id: "5e523c4f156c7477e1bafe8b",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e523c4f156c7477e1bafe8c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 353,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "asd",
                  name: "汉堡王das",
                  item_id: 6361,
                  sku_id: 24349,
                  food_id: 24376,
                  restaurant_id: 1,
                  _id: "5e523c4f156c7477e1bafe89",
                  specs: [
                    {
                      name: "规格",
                      value: "asd",
                      _id: "5e523c4f156c7477e1bafe8a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 528,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "asdasd",
                  name: "汉堡王das",
                  item_id: 6361,
                  sku_id: 24350,
                  food_id: 24377,
                  restaurant_id: 1,
                  _id: "5e523c4f156c7477e1bafe87",
                  specs: [
                    {
                      name: "规格",
                      value: "asdasd",
                      _id: "5e523c4f156c7477e1bafe88"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 886,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 40,
              satisfy_count: 100,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-21T05:41:05.200Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "asd", "asdasd"]
                }
              ],
              rating_count: 110,
              month_sales: 335,
              description: "asdasdasd",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e538773942e5767f50a0333",
              tips: "987评价 月售79份",
              item_id: 6365,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "235"
              },
              image_path: "1707689770064170.jpg",
              name: "214234",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "214234",
                  item_id: 6365,
                  sku_id: 24384,
                  food_id: 24411,
                  restaurant_id: 1,
                  _id: "5e53f5c2942e5767f50a04f6",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e53f5c2942e5767f50a04f7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 742,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "adfafda",
                  name: "214234",
                  item_id: 6365,
                  sku_id: 24385,
                  food_id: 24412,
                  restaurant_id: 1,
                  _id: "5e53f5c2942e5767f50a04f4",
                  specs: [
                    {
                      name: "规格",
                      value: "adfafda",
                      _id: "5e53f5c2942e5767f50a04f5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 419,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "433",
                  name: "214234",
                  item_id: 6365,
                  sku_id: 24386,
                  food_id: 24413,
                  restaurant_id: 1,
                  _id: "5e53f5c2942e5767f50a04f2",
                  specs: [
                    {
                      name: "规格",
                      value: "433",
                      _id: "5e53f5c2942e5767f50a04f3"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 870,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 16,
              satisfy_count: 567,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "adfafda", "433"]
                }
              ],
              rating_count: 987,
              month_sales: 79,
              description: "3146",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e57628e942e5767f50a0e6f",
              tips: "468评价 月售688份",
              item_id: 6376,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "ad"
              },
              image_path: "1708558c63064358.png",
              name: "怎么样才能删除",
              __v: 0,
              specfoods: [
                {
                  specs_name: "aaaa",
                  name: "怎么样才能删除",
                  item_id: 6376,
                  sku_id: 24439,
                  food_id: 24466,
                  restaurant_id: 1,
                  _id: "5e58bc23942e5767f50a1410",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 330,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 275,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 468,
              month_sales: 688,
              description: "666",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e58cea5942e5767f50a1561",
              tips: "818评价 月售275份",
              item_id: 6383,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "2",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1708ae6a2c864445.png",
              name: "111111111111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "111111111111111",
                  item_id: 6383,
                  sku_id: 24453,
                  food_id: 24480,
                  restaurant_id: 1,
                  _id: "5e58cea5942e5767f50a1564",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e58cea5942e5767f50a1565"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 967,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "111111111111111",
                  item_id: 6383,
                  sku_id: 24454,
                  food_id: 24481,
                  restaurant_id: 1,
                  _id: "5e58cea5942e5767f50a1562",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e58cea5942e5767f50a1563"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 589,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 488,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                },
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", ""]
                }
              ],
              rating_count: 818,
              month_sales: 275,
              description: "3",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e5e0d34942e5767f50a21ac",
              tips: "106评价 月售321份",
              item_id: 6398,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "5"
              },
              image_path: "1709f6366a664552.png",
              name: "34",
              __v: 0,
              specfoods: [
                {
                  specs_name: "234",
                  name: "34",
                  item_id: 6398,
                  sku_id: 24478,
                  food_id: 24505,
                  restaurant_id: 1,
                  _id: "5e5e8678942e5767f50a2306",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 134,
                  sold_out: false,
                  price: 21,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 44,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 615,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 106,
              month_sales: 321,
              description: "34",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e5f627d942e5767f50a25fe",
              tips: "296评价 月售493份",
              item_id: 6403,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "170a498bf7564608.jpg",
              name: "黄焖鸡",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "黄焖鸡",
                  item_id: 6403,
                  sku_id: 24486,
                  food_id: 24513,
                  restaurant_id: 1,
                  _id: "5e5f627d942e5767f50a25ff",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 706,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 87,
              satisfy_count: 240,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 296,
              month_sales: 493,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e63000e942e5767f50a3149",
              tips: "345评价 月售913份",
              item_id: 6419,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "sdf"
              },
              image_path: "170b36faab864732.png",
              name: "aaa",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "aaa",
                  item_id: 6419,
                  sku_id: 24538,
                  food_id: 24565,
                  restaurant_id: 1,
                  _id: "5e635e4b942e5767f50a32a5",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 773,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 13,
              satisfy_count: 735,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 345,
              month_sales: 913,
              description: "sdf",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5df9c8d87f5a6f2f4826edc9",
              tips: "916评价 月售868份",
              item_id: 6028,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text: "舒服的沙发",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f6549336262468.png",
              name: "宫保鸡丁12",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "宫保鸡丁12",
                  item_id: 6028,
                  sku_id: 24557,
                  food_id: 24584,
                  restaurant_id: 1,
                  _id: "5e66f200942e5767f50a3869",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 793,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 6,
              satisfy_count: 631,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [],
              rating_count: 916,
              month_sales: 868,
              description:
                "现实是残酷的，在这个世界我怎样才能弥补这个空洞？我谁也不是，也不想成为谁。",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e6a0983942e5767f50a41fa",
              tips: "992评价 月售867份",
              item_id: 6435,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "1"
              },
              image_path: "170ce350a9464896.jpg",
              name: "多少度",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "多少度",
                  item_id: 6435,
                  sku_id: 24593,
                  food_id: 24620,
                  restaurant_id: 1,
                  _id: "5e6a0983942e5767f50a41fb",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 972,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.2,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 47,
              satisfy_count: 932,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 992,
              month_sales: 867,
              description: "1",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e71944e07e5ca4f7d1d874f",
              tips: "932评价 月售878份",
              item_id: 6457,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "170ebab65c965097.jpg",
              name: "ddx1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ddx1",
                  item_id: 6457,
                  sku_id: 24647,
                  food_id: 24674,
                  restaurant_id: 1,
                  _id: "5e71c0fb07e5ca4f7d1d8877",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 891,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 51,
              satisfy_count: 142,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 932,
              month_sales: 878,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e0594ad7f4f8e7628d7f2ac",
              tips: "647评价 月售372份",
              item_id: 6145,
              category_id: 9198,
              restaurant_id: 1,
              activity: null,
              image_path: "16f45ccc1ea62280.jpg",
              name: "东莞理工学院城市学院",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24665,
                  food_id: 24692,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d10",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7362b807e5ca4f7d1d8d11"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 909,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24666,
                  food_id: 24693,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d0e",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e7362b807e5ca4f7d1d8d0f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 557,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.3,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "3123123",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24667,
                  food_id: 24694,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d0c",
                  specs: [
                    {
                      name: "规格",
                      value: "3123123",
                      _id: "5e7362b807e5ca4f7d1d8d0d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 412,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "东莞理工学院城市学院",
                  name: "东莞理工学院城市学院",
                  item_id: 6145,
                  sku_id: 24668,
                  food_id: 24695,
                  restaurant_id: 1,
                  _id: "5e7362b807e5ca4f7d1d8d0a",
                  specs: [
                    {
                      name: "规格",
                      value: "东莞理工学院城市学院",
                      _id: "5e7362b807e5ca4f7d1d8d0b"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 880,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 30,
              satisfy_count: 869,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-26T09:00:58.100Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "", "3123123", "东莞理工学院城市学院"]
                }
              ],
              rating_count: 647,
              month_sales: 372,
              description: "广东莞理工学院城市学院",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e77564c07e5ca4f7d1d9550",
              tips: "447评价 月售751份",
              item_id: 6477,
              category_id: 9198,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "123"
              },
              image_path: "1710229188965246.jpg",
              name: "123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123",
                  item_id: 6477,
                  sku_id: 24714,
                  food_id: 24741,
                  restaurant_id: 1,
                  _id: "5e7880fa6c41e733f7bd6be1",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 137,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.4,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 96,
              satisfy_count: 417,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 447,
              month_sales: 751,
              description: "123",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 82
        },
        {
          name: "招牌",
          description: "招牌商品",
          restaurant_id: 1,
          id: 9200,
          foods: [
            {
              _id: "5df9c9fc7f5a6f2f4826ede7",
              tips: "593评价 月售414份",
              item_id: 6031,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "是的方法"
              },
              image_path: "16f17bcf1d161623.jpg",
              name: "佛跳墙",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "佛跳墙",
                  item_id: 6031,
                  sku_id: 23788,
                  food_id: 23815,
                  restaurant_id: 1,
                  _id: "5e0408adb007cd415b6b622e",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e0408adb007cd415b6b622f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 601,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "4个份",
                  name: "佛跳墙",
                  item_id: 6031,
                  sku_id: 23789,
                  food_id: 23816,
                  restaurant_id: 1,
                  _id: "5e0408adb007cd415b6b622c",
                  specs: [
                    {
                      name: "规格",
                      value: "4个份",
                      _id: "5e0408adb007cd415b6b622d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 279,
                  sold_out: false,
                  price: 80,
                  promotion_stock: -1,
                  recent_rating: 4.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 24,
              satisfy_count: 80,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                },
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "4个份"]
                }
              ],
              rating_count: 593,
              month_sales: 414,
              description:
                "世间万物有光的地方必有影，正因为想要守护爱，才会衍生出憎恨，它们彼此间存在着因果关系",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e0166b1de911551beafaa12",
              tips: "100评价 月售184份",
              item_id: 6050,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "带我去",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f35790f4462025.jpg",
              name: "动物的",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "动物的",
                  item_id: 6050,
                  sku_id: 23683,
                  food_id: 23710,
                  restaurant_id: 1,
                  _id: "5e01701bde911551beafaa92",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e01701bde911551beafaa93"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 285,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "",
                  name: "动物的",
                  item_id: 6050,
                  sku_id: 23684,
                  food_id: 23711,
                  restaurant_id: 1,
                  _id: "5e01701bde911551beafaa90",
                  specs: [
                    {
                      name: "规格",
                      value: "",
                      _id: "5e01701bde911551beafaa91"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 124,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.9,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 11,
              satisfy_count: 431,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  values: ["默认", ""],
                  name: "规格"
                }
              ],
              rating_count: 100,
              month_sales: 184,
              description: "打威群岛",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e018b14de911551beafad0f",
              tips: "69评价 月售295份",
              item_id: 6054,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "单位"
              },
              image_path: "16f360745c262050.jpg",
              name: "行啊",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "行啊",
                  item_id: 6054,
                  sku_id: 23691,
                  food_id: 23718,
                  restaurant_id: 1,
                  _id: "5e018b14de911551beafad10",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 207,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 1,
              satisfy_count: 841,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 69,
              month_sales: 295,
              description: "大旗网·",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e01ae08de911551beafafe7",
              tips: "940评价 月售515份",
              item_id: 6083,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "谔谔",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f368465cf62055.jpg",
              name: "呃1额",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "呃1额",
                  item_id: 6083,
                  sku_id: 23770,
                  food_id: 23797,
                  restaurant_id: 1,
                  _id: "5e03289db007cd415b6b601e",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 281,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 28,
              satisfy_count: 330,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 940,
              month_sales: 515,
              description: "额为",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e01ccacf58062216abea832",
              tips: "971评价 月售748份",
              item_id: 6116,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "dd"
              },
              image_path: "16f3707760262072.jpg",
              name: "dqwdw",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dqwdw",
                  item_id: 6116,
                  sku_id: 23704,
                  food_id: 23731,
                  restaurant_id: 1,
                  _id: "5e01ccacf58062216abea833",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 987,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 85,
              satisfy_count: 886,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 971,
              month_sales: 748,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e01cdb3f58062216abea856",
              tips: "439评价 月售109份",
              item_id: 6118,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "d",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170a909c09664654.jpg",
              name: "dd",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "dd",
                  item_id: 6118,
                  sku_id: 24503,
                  food_id: 24530,
                  restaurant_id: 1,
                  _id: "5e60858b942e5767f50a2903",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 460,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 644,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-24T07:49:14.492Z",
              specifications: [],
              rating_count: 439,
              month_sales: 109,
              description: "d",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e17f6776901211bf3ada0cb",
              tips: "79评价 月售376份",
              item_id: 6207,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "234234",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f8e1c564162845.jpg",
              name: "2342",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "2342",
                  item_id: 6207,
                  sku_id: 24061,
                  food_id: 24088,
                  restaurant_id: 1,
                  _id: "5e183ee46901211bf3ada3bb",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e183ee46901211bf3ada3bc"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 857,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "rrrrr",
                  name: "2342",
                  item_id: 6207,
                  sku_id: 24062,
                  food_id: 24089,
                  restaurant_id: 1,
                  _id: "5e183ee46901211bf3ada3b9",
                  specs: [
                    {
                      name: "规格",
                      value: "rrrrr",
                      _id: "5e183ee46901211bf3ada3ba"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 99,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 67,
              satisfy_count: 451,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "rrrrr"],
                  name: "规格"
                }
              ],
              rating_count: 79,
              month_sales: 376,
              description: "234234",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e2128210236b14725d394e1",
              tips: "184评价 月售796份",
              item_id: 6277,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "ggggggg",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16fb184c38163200.png",
              name: "ggg",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ggg",
                  item_id: 6277,
                  sku_id: 24318,
                  food_id: 24345,
                  restaurant_id: 1,
                  _id: "5e4cc5287965b0076407540b",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e4cc5287965b0076407540c"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 982,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "反倒是",
                  name: "ggg",
                  item_id: 6277,
                  sku_id: 24319,
                  food_id: 24346,
                  restaurant_id: 1,
                  _id: "5e4cc5287965b00764075409",
                  specs: [
                    {
                      name: "规格",
                      value: "反倒是",
                      _id: "5e4cc5287965b0076407540a"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 367,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 14,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [
                {
                  values: ["默认", "反倒是"],
                  name: "规格"
                }
              ],
              rating_count: 184,
              month_sales: 796,
              description: "ggggggggggg",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.3
            },
            {
              _id: "5e018b94de911551beafad3f",
              tips: "149评价 月售121份",
              item_id: 6055,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "额外人",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f3609326462051.jpg",
              name: "让r热热恶人",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "让r热热恶人",
                  item_id: 6055,
                  sku_id: 24250,
                  food_id: 24277,
                  restaurant_id: 1,
                  _id: "5e3ab147c9a05328e662220d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 918,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 61,
              satisfy_count: 523,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 149,
              month_sales: 121,
              description: "却热情",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e3d6a64eccd9c1bec9d5c39",
              tips: "212评价 月售755份",
              item_id: 6327,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "1701fe717f863642.jpg",
              name: "123123",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24506,
                  food_id: 24533,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a6",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e60ae40942e5767f50a29a7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 413,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "各人给",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24507,
                  food_id: 24534,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a4",
                  specs: [
                    {
                      name: "规格",
                      value: "各人给",
                      _id: "5e60ae40942e5767f50a29a5"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 181,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "国人通过",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24508,
                  food_id: 24535,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a2",
                  specs: [
                    {
                      name: "规格",
                      value: "国人通过",
                      _id: "5e60ae40942e5767f50a29a3"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 929,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "入股",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24509,
                  food_id: 24536,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a29a0",
                  specs: [
                    {
                      name: "规格",
                      value: "入股",
                      _id: "5e60ae40942e5767f50a29a1"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 232,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.8,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "非共和国",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24510,
                  food_id: 24537,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a299e",
                  specs: [
                    {
                      name: "规格",
                      value: "非共和国",
                      _id: "5e60ae40942e5767f50a299f"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 581,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "沟通",
                  name: "123123",
                  item_id: 6327,
                  sku_id: 24511,
                  food_id: 24538,
                  restaurant_id: 1,
                  _id: "5e60ae40942e5767f50a299c",
                  specs: [
                    {
                      name: "规格",
                      value: "沟通",
                      _id: "5e60ae40942e5767f50a299d"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 969,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 5,
              satisfy_count: 836,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [
                {
                  values: [
                    "默认",
                    "各人给",
                    "国人通过",
                    "入股",
                    "非共和国",
                    "沟通"
                  ],
                  name: "规格"
                }
              ],
              rating_count: 212,
              month_sales: 755,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e58c142942e5767f50a1470",
              tips: "750评价 月售810份",
              item_id: 6381,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "ttt"
              },
              image_path: "1708ab2ffca64434.png",
              name: "ttt",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ttt",
                  item_id: 6381,
                  sku_id: 24606,
                  food_id: 24633,
                  restaurant_id: 1,
                  _id: "5e6b14c0942e5767f50a4449",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 230,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 33,
              satisfy_count: 443,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 750,
              month_sales: 810,
              description: "tttt",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.6
            },
            {
              _id: "5e70b70c07e5ca4f7d1d84cd",
              tips: "267评价 月售806份",
              item_id: 6456,
              category_id: 9200,
              restaurant_id: 1,
              activity: {
                image_text: "没有",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170e84aba6a65086.jpeg",
              name: "11111111111111111111",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "11111111111111111111",
                  item_id: 6456,
                  sku_id: 24775,
                  food_id: 24802,
                  restaurant_id: 1,
                  _id: "5e7b447add5b8d23f14944f8",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7b447add5b8d23f14944f9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 24,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.6,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "ASD AS D",
                  name: "11111111111111111111",
                  item_id: 6456,
                  sku_id: 24776,
                  food_id: 24803,
                  restaurant_id: 1,
                  _id: "5e7b447add5b8d23f14944f6",
                  specs: [
                    {
                      name: "规格",
                      value: "ASD AS D",
                      _id: "5e7b447add5b8d23f14944f7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 652,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.4,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 76,
              satisfy_count: 224,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "ASD AS D"]
                }
              ],
              rating_count: 267,
              month_sales: 806,
              description: "111111111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.1
            },
            {
              _id: "5e7bfb67dd5b8d23f14945f9",
              tips: "42评价 月售486份",
              item_id: 6492,
              category_id: 9200,
              restaurant_id: 1,
              activity: null,
              image_path: "171144e1ec965388.png",
              name: "20200326",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "20200326",
                  item_id: 6492,
                  sku_id: 24790,
                  food_id: 24817,
                  restaurant_id: 1,
                  _id: "5e7bfb67dd5b8d23f14945fa",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 778,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 82,
              satisfy_count: 310,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [],
              rating_count: 42,
              month_sales: 486,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 27
        },
        {
          name: "测试榜",
          description: "测试用",
          restaurant_id: 1,
          id: 9253,
          foods: [
            {
              _id: "5e0985dc6901211bf3ad7d21",
              tips: "471评价 月售691份",
              item_id: 6159,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "wqeewq",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f5532bb5762391.jpg",
              name: "qeqwqw",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "qeqwqw",
                  item_id: 6159,
                  sku_id: 23884,
                  food_id: 23911,
                  restaurant_id: 1,
                  _id: "5e0985dc6901211bf3ad7d22",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 361,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.6,
                  packing_fee: 3,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 18,
              satisfy_count: 622,
              attributes: [null],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 471,
              month_sales: 691,
              description: "wqe",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.7
            },
            {
              _id: "5e158a176901211bf3ad9582",
              tips: "585评价 月售883份",
              item_id: 6195,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "3543"
              },
              image_path: "16f84cd66a862742.jpg",
              name: "343535555",
              __v: 0,
              specfoods: [
                {
                  specs_name: "",
                  name: "343535555",
                  item_id: 6195,
                  sku_id: 24017,
                  food_id: 24044,
                  restaurant_id: 1,
                  _id: "5e15b5986901211bf3ad97ff",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 755,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.7,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 4,
              satisfy_count: 365,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [],
              rating_count: 585,
              month_sales: 883,
              description: "33",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e204c6b0236b14725d39377",
              tips: "909评价 月售995份",
              item_id: 6274,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "第三方",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16fae2aa18e63190.jpg",
              name: "阿斯蒂芬a",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "阿斯蒂芬a",
                  item_id: 6274,
                  sku_id: 24111,
                  food_id: 24138,
                  restaurant_id: 1,
                  _id: "5e204c6b0236b14725d39378",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 225,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 34,
              satisfy_count: 373,
              attributes: [
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 909,
              month_sales: 995,
              description: "的说法",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.2
            },
            {
              _id: "5e23c6b00236b14725d399d6",
              tips: "988评价 月售720份",
              item_id: 6281,
              category_id: 9253,
              restaurant_id: 1,
              activity: null,
              image_path: "16fbbc018cf63313.jpg",
              name: "hffchx132",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "hffchx132",
                  item_id: 6281,
                  sku_id: 24164,
                  food_id: 24191,
                  restaurant_id: 1,
                  _id: "5e2b06fcdb7fe12148569255",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 463,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 20,
              satisfy_count: 124,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-01-15T03:36:12.450Z",
              specifications: [],
              rating_count: 988,
              month_sales: 720,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5df9c9227f5a6f2f4826edd0",
              tips: "829评价 月售442份",
              item_id: 6029,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "的沙发舒服",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "16f17b95dfa61619.jpg",
              name: "番茄炒蛋",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "番茄炒蛋",
                  item_id: 6029,
                  sku_id: 24573,
                  food_id: 24600,
                  restaurant_id: 1,
                  _id: "5e688dcc942e5767f50a3cce",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 152,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 94,
              satisfy_count: 16,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-18T06:29:51.678Z",
              specifications: [],
              rating_count: 829,
              month_sales: 442,
              description:
                "琳她曾经是我唯一的光明，失去了琳之后，我所看到地狱。这个世界里全是灰烬没有希望，即使我顶着斑的名字走遍世界各地，但是看到的只是更加让我确信这一点，就算我拥有着写轮眼还是什么都看不到",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            },
            {
              _id: "5e5df71f942e5767f50a2133",
              tips: "743评价 月售673份",
              item_id: 6397,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "test",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "1709f0d18b964550.jpg",
              name: "test",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "test",
                  item_id: 6397,
                  sku_id: 24498,
                  food_id: 24525,
                  restaurant_id: 1,
                  _id: "5e5fe7a5942e5767f50a285d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 553,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 4,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 22,
              satisfy_count: 133,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 743,
              month_sales: 673,
              description: "test",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.4
            },
            {
              _id: "5e5f6227942e5767f50a25f3",
              tips: "496评价 月售951份",
              item_id: 6402,
              category_id: 9253,
              restaurant_id: 1,
              activity: null,
              image_path: "170a4978b4f64607.jpg",
              name: "测试1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "50",
                  name: "测试1",
                  item_id: 6402,
                  sku_id: 24527,
                  food_id: 24554,
                  restaurant_id: 1,
                  _id: "5e61e8f0942e5767f50a2d8f",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 6,
                  sold_out: false,
                  price: 32,
                  promotion_stock: -1,
                  recent_rating: 0.3,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 15,
              satisfy_count: 291,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 496,
              month_sales: 951,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 5
            },
            {
              _id: "5e70468807e5ca4f7d1d8318",
              tips: "725评价 月售397份",
              item_id: 6453,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "测试上午"
              },
              image_path: "170e6936dc665059.png",
              name: "测试事务",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "测试事务",
                  item_id: 6453,
                  sku_id: 24631,
                  food_id: 24658,
                  restaurant_id: 1,
                  _id: "5e70468807e5ca4f7d1d8319",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 575,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 74,
              satisfy_count: 798,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-15T10:40:58.069Z",
              specifications: [],
              rating_count: 725,
              month_sales: 397,
              description: "测试稍微",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            },
            {
              _id: "5e7c672fdd5b8d23f14948d2",
              tips: "23评价 月售465份",
              item_id: 6496,
              category_id: 9253,
              restaurant_id: 1,
              activity: {
                image_text: "11",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17115f30a4865415.jpg",
              name: "11",
              __v: 0,
              specfoods: [
                {
                  specs_name: "ewqe ",
                  name: "11",
                  item_id: 6496,
                  sku_id: 24795,
                  food_id: 24822,
                  restaurant_id: 1,
                  _id: "5e7c6bebdd5b8d23f14948f7",
                  specs: [
                    {
                      name: "规格",
                      value: "ewqe ",
                      _id: "5e7c6bebdd5b8d23f14948f8"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 782,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.6,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "rr ",
                  name: "11",
                  item_id: 6496,
                  sku_id: 24796,
                  food_id: 24823,
                  restaurant_id: 1,
                  _id: "5e7c6bebdd5b8d23f14948f5",
                  specs: [
                    {
                      name: "规格",
                      value: "rr ",
                      _id: "5e7c6bebdd5b8d23f14948f6"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 595,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.2,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 92,
              satisfy_count: 229,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-24T17:52:57.165Z",
              specifications: [
                {
                  values: ["ewqe ", "rr "],
                  name: "规格"
                }
              ],
              rating_count: 23,
              month_sales: 465,
              description: "111",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 36
        },
        {
          name: "tytryu",
          description: "rtyr ",
          restaurant_id: 1,
          id: 9258,
          foods: [
            {
              _id: "5e01a46ade911551beafaedc",
              tips: "175评价 月售301份",
              item_id: 6073,
              category_id: 9258,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "我的"
              },
              image_path: "16f3669c52d62053.jpg",
              name: "饿我去",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "饿我去",
                  item_id: 6073,
                  sku_id: 23693,
                  food_id: 23720,
                  restaurant_id: 1,
                  _id: "5e01a46ade911551beafaedd",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 790,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 27,
              satisfy_count: 214,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [],
              rating_count: 175,
              month_sales: 301,
              description: "胃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            },
            {
              _id: "5e783d166c41e733f7bd6a5b",
              tips: "156评价 月售845份",
              item_id: 6479,
              category_id: 9258,
              restaurant_id: 1,
              activity: {
                image_text: "5月20号",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "17105db879165263.jpg",
              name: "辣条",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "辣条",
                  item_id: 6479,
                  sku_id: 24753,
                  food_id: 24780,
                  restaurant_id: 1,
                  _id: "5e7974ba6c41e733f7bd6e56",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e7974ba6c41e733f7bd6e57"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 914,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 5,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "qwerqwer",
                  name: "辣条",
                  item_id: 6479,
                  sku_id: 24754,
                  food_id: 24781,
                  restaurant_id: 1,
                  _id: "5e7974ba6c41e733f7bd6e54",
                  specs: [
                    {
                      name: "规格",
                      value: "qwerqwer",
                      _id: "5e7974ba6c41e733f7bd6e55"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 46,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 3.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 42,
              satisfy_count: 631,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                }
              ],
              is_essential: false,
              server_utc: "2020-03-23T03:37:58.008Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "qwerqwer"]
                }
              ],
              rating_count: 156,
              month_sales: 845,
              description: "额嗯嗯呢",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.5
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 3
        },
        {
          name: "5后天",
          description: "GRE",
          restaurant_id: 1,
          id: 9273,
          foods: [
            {
              _id: "5e16e2c16901211bf3ad9c5c",
              tips: "333评价 月售126份",
              item_id: 6199,
              category_id: 9273,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "我去。。。"
              },
              image_path: "16f8b5c18d462815.jpg",
              name: "猪猪侠",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "猪猪侠",
                  item_id: 6199,
                  sku_id: 24086,
                  food_id: 24113,
                  restaurant_id: 1,
                  _id: "5e1d7a886901211bf3adb0a8",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e1d7a886901211bf3adb0a9"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 523,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "辣条",
                  name: "猪猪侠",
                  item_id: 6199,
                  sku_id: 24087,
                  food_id: 24114,
                  restaurant_id: 1,
                  _id: "5e1d7a886901211bf3adb0a6",
                  specs: [
                    {
                      name: "规格",
                      value: "辣条",
                      _id: "5e1d7a886901211bf3adb0a7"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 562,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 4.7,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 31,
              satisfy_count: 468,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-27T06:01:37.107Z",
              specifications: [
                {
                  values: ["默认", "辣条"],
                  name: "规格"
                }
              ],
              rating_count: 333,
              month_sales: 126,
              description: "超级好吃",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 13
        },
        {
          name: "d1d1",
          description: "d1d1",
          restaurant_id: 1,
          id: 9295,
          foods: [
            {
              _id: "5e007accde911551beafa735",
              tips: "46评价 月售90份",
              item_id: 6046,
              category_id: 9295,
              restaurant_id: 1,
              activity: null,
              image_path: "16f3233b38f62010.jpg",
              name: "1",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1",
                  item_id: 6046,
                  sku_id: 24121,
                  food_id: 24148,
                  restaurant_id: 1,
                  _id: "5e216b080236b14725d39686",
                  specs: [
                    {
                      name: "规格",
                      value: "默认",
                      _id: "5e216b080236b14725d39687"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 780,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                },
                {
                  specs_name: "我的名字",
                  name: "1",
                  item_id: 6046,
                  sku_id: 24122,
                  food_id: 24149,
                  restaurant_id: 1,
                  _id: "5e216b080236b14725d39684",
                  specs: [
                    {
                      name: "规格",
                      value: "我的名字",
                      _id: "5e216b080236b14725d39685"
                    }
                  ],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 241,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 0.4,
                  packing_fee: 99,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 39,
              satisfy_count: 764,
              attributes: [
                {
                  icon_name: "",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2019-12-22T12:14:57.129Z",
              specifications: [
                {
                  name: "规格",
                  values: ["默认", "我的名字"]
                }
              ],
              rating_count: 46,
              month_sales: 90,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.8
            },
            {
              _id: "5e674419942e5767f50a39cc",
              tips: "759评价 月售440份",
              item_id: 6424,
              category_id: 9295,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "4567"
              },
              image_path: "170c361f0fc64831.jpg",
              name: "4567",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "4567",
                  item_id: 6424,
                  sku_id: 24564,
                  food_id: 24591,
                  restaurant_id: 1,
                  _id: "5e674419942e5767f50a39cd",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 572,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.1,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 88,
              satisfy_count: 525,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 759,
              month_sales: 440,
              description: "4567",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 2
        },
        {
          name: "smg",
          description: "bzd",
          restaurant_id: 1,
          id: 9475,
          foods: [
            {
              _id: "5e61cd2c942e5767f50a2ce7",
              tips: "537评价 月售248份",
              item_id: 6417,
              category_id: 9475,
              restaurant_id: 1,
              activity: {
                image_text: "123",
                icon_color: "f07373",
                image_text_color: "f1884f"
              },
              image_path: "170ae09582a64679.jpg",
              name: "lsj",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "lsj",
                  item_id: 6417,
                  sku_id: 24525,
                  food_id: 24552,
                  restaurant_id: 1,
                  _id: "5e61ce43942e5767f50a2d1d",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 598,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 2.7,
                  packing_fee: 1,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 86,
              satisfy_count: 820,
              attributes: [
                {
                  icon_name: "新",
                  icon_color: "5ec452"
                },
                {
                  icon_name: "招牌",
                  icon_color: "f07373"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 537,
              month_sales: 248,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4.9
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 1
        },
        {
          name: "asd",
          description: "dqef",
          restaurant_id: 1,
          id: 9638,
          foods: [
            {
              _id: "5e3d0d30eccd9c1bec9d5b37",
              tips: "784评价 月售381份",
              item_id: 6325,
              category_id: 9638,
              restaurant_id: 1,
              activity: null,
              image_path: "1701e7ba51c63624.jpg",
              name: "ssss",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "ssss",
                  item_id: 6325,
                  sku_id: 24253,
                  food_id: 24280,
                  restaurant_id: 1,
                  _id: "5e3d0d30eccd9c1bec9d5b38",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 704,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 0,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 100,
              satisfy_count: 452,
              attributes: [
                {
                  icon_color: "f07373",
                  icon_name: "招牌"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-06T12:31:15.380Z",
              specifications: [],
              rating_count: 784,
              month_sales: 381,
              description: "",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 1
        },
        {
          name: "花蝴蝶",
          description: "萍乡花蝴蝶，你值得拥有呀",
          restaurant_id: 1,
          id: 9768,
          foods: [
            {
              _id: "5e5ba9f7942e5767f50a1c53",
              tips: "30评价 月售730份",
              item_id: 6391,
              category_id: 9768,
              restaurant_id: 1,
              activity: {
                image_text_color: "f1884f",
                icon_color: "f07373",
                image_text: "11"
              },
              image_path: "170960fe26564486.jpg",
              name: "1111liu",
              __v: 0,
              specfoods: [
                {
                  specs_name: "默认",
                  name: "1111liu",
                  item_id: 6391,
                  sku_id: 24470,
                  food_id: 24497,
                  restaurant_id: 1,
                  _id: "5e5be360942e5767f50a1cee",
                  specs: [],
                  stock: 1000,
                  checkout_mode: 1,
                  is_essential: false,
                  recent_popularity: 606,
                  sold_out: false,
                  price: 20,
                  promotion_stock: -1,
                  recent_rating: 1.9,
                  packing_fee: 2,
                  pinyin_name: "",
                  original_price: 0
                }
              ],
              satisfy_rate: 6,
              satisfy_count: 820,
              attributes: [
                {
                  icon_color: "5ec452",
                  icon_name: "新"
                }
              ],
              is_essential: false,
              server_utc: "2020-02-23T15:44:16.668Z",
              specifications: [],
              rating_count: 30,
              month_sales: 730,
              description: "11liu",
              attrs: [],
              display_times: [],
              pinyin_name: "",
              is_featured: 0,
              rating: 4
            }
          ],
          type: 1,
          icon_url: "",
          is_selected: true,
          __v: 2
        }
      ],
      shopListTop: [], //商品列表的高度集合
      indexOfLeft: 0
    };
  },
  computed: {
    activeIndex() {
      return this.menuIndex.toString();
    },
    count() {
      return 1;
    }
  },
  methods: {
    refresh() {
      this.$refs.rightScroll.urefresh()
    },
    leftPosition(position) {},
    rightPosition(position) {
      // debounce((position) => {
        if (!this.$refs.scrollleft) {
          return;
        }
        // let item = (this.indexOfLeft + 1) >= this.shopListTop.length ? this.shopListTop[this.shopListTop.length - 1] : this.shopListTop[this.indexOfLeft + 1]
        this.shopListTop.forEach((item, index) => {
          if (this.menuIndexChange && -position.y >= item) {
            this.indexOfLeft = this.indexOfLeft + 1;
            this.menuIndex = index
            const menuList = document.querySelectorAll(".activity");
            const el = menuList[0];
            this.$refs.scrollleft.scroll.scrollToElement(el, 800, 0, 0);
          }
        });
      // }, 100);
    },
    handleSelect(key, keyPath) {
      this.menuIndex = key;
      //menuIndexChange解决运动时listenScroll依然监听的bug
      this.menuIndexChange = false;
      this.$refs.scrollright.uscrollTo(0, -this.shopListTop[key], 400);
      this.$refs.scrollright.scroll.on("scrollEnd", () => {
        this.menuIndexChange = true;
      });
    },
    getFoodListHeight() {
      const listContainer = this.$refs.menu;
      if (listContainer) {
        const listArr = Array.from(listContainer.children);
        listArr.forEach((item, index) => {
          this.shopListTop[index] = item.offsetTop;
        });
        // this.listenScroll(listContainer)
      }
    },
    addCart(index, foodindex) {
      console.log(this.goods[index].foods[foodindex]);
    }
  },
  mounted() {
    this.getFoodListHeight();
  }
};
</script>

<style scoped>
.scroll-left,
.scroll-right {
  position: relative;
  overflow: hidden;
  height: calc(100vh - 356px);
  z-index: 99;
}
.scroll-right  {
  overflow: scroll;
}
.menu_item_title {
  font-size: 20px;
  padding: 5px;
  color: #333;
}
.menu_item_description {
  font-size: 16px;
  color: #888;
}
/* a {
  text-decoration: none;
  color: transparent; */
/* } */
.href {

}
.activity {
  background: #f5f5f5;
}
.food-header {
  padding: 10px;
}
.description_foodname {
  font-size: 20px;
  color: #333;
  font-weight: 600;
}
.food_description_content {
  font-size: 14px;
  color: #999;
  line-height: 20px;
}
.food_description_sale_rating {
  line-height: 20px;
}
.food_description_sale_rating span {
  font-size: 14px;
  color: #333;
}
.menu_detail_footer {
  margin-left: 2.4rem;
  font-size: 0;
  margin-top: 0.3rem;
}
.food_price span {
  font-family: "Helvetica Neue", Tahoma, Arial;
}
.food_price span:nth-of-type(1) {
  line-height: 20px;
  font-size: 16px;
  color: #f60;
  margin-right: 3px;
}
.food_price span:nth-of-type(2) {
  font-size: 16px;
  color: #f60;
  font-weight: bold;
  margin-right: 10px;
}
.food_price span:nth-of-type(3) {
  font-size: 16px;
  color: #666;
}
.add-cart {
  display: flex;
  justify-content: space-evenly;
  line-height: 20px;
}
.card {
  padding: 10px 10px 20px;
}
.sales {
  margin-right: 10px;
}
</style>
