<template>
  <div class="goods">
    <div class="goodslist">
      <el-row :gutter="10">
        <el-col class="menu-right" :span="24">
          <div ref="menu">
            <el-card
              :body-style="{ padding: '0px' }"
              v-for="(item, index) in goods"
              :key="index"
              class="card"
            >
              <el-row>
                <el-col :span="6">
                  <el-image :src="item.dishes_pic"></el-image>
                </el-col>
                <el-col :span="18">
                  <div class="dish-info">
                    <div class="dish-name">{{item.dishname}}</div>
                    <el-rate
                      v-model="item.score"
                      class="stars"
                      disabled
                      show-score
                      text-color="#ff9900"
                    ></el-rate>
                    <div class="dish-info-detal">
                      <div class="dish-price">{{item.dishes_price}}</div>
                      <div class="dishes-sales">销量{{item.sales_volume}}</div>
                    </div>
                  </div>
                  <el-col :span="24" >
                    <div @click="addCart(index)">
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                    </div>
                  </el-col>
                </el-col>
                
              </el-row>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { debounce } from "common/utils";
import { selectDishesList } from "network/user";
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
      goods: [],
      showDecris: [], //商品列表的高度集合
      indexOfLeft: 0
    };
  },
  activated() {
    this.goods = []
    selectDishesList({ shop_id: this.$route.params.id })
      .then(res => {
        if (res.code === "000") {
          this.goods = res.disheslist;
          this.goods.forEach(item => {
            this.showDecris.pop(false)
            return (item.dishes_pic =
              "https://assets.hhh233.xyz/disheslouis-hansel-shotsoflouis-mVZ_gjm_TOk-unsplash.jpg?imageView2/1/w/320/h/200/format/webp/q/75|watermark/2/text/Q1VJVF8yMDE2MDYyMDYw6I-c5ZOB5rWL6K-V/font/5b6u6L2v6ZuF6buR/fontsize/400/fill/I0UwRTBFMA==/dissolve/100/gravity/Center/dx/10/dy/10");
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
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
    addCart(index) {
      this.$store.dispatch('addCart', this.goods[index])
    },
    refresh() {
      this.$refs.rightScroll.urefresh();
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
          this.menuIndex = index;
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
    }
  },
  mounted() {
    this.getFoodListHeight();
    console.log(this.$route.params.id);
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
.scroll-right {
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
