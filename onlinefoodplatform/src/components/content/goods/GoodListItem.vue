<template>
  <div class="goodsitem"  @click="goodClick">
    <el-row :gutter="20">
      <el-col :span="8" >
        <el-image :src="goodsItem.shop_pic" class="item-image">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="24">
            <div class="good-title-text">{{goodsItem.shop_name}}</div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="24">
            <el-rate
              v-model="value"
              class="stars"
              disabled
              show-score
              score-template="{value}"
              text-color="#ff9900"
            ></el-rate>
          </el-col>
          <el-col :span="24" class="sales-box">
            <div class="sales" v-if="goodsItem.shop_sales">月销<span>{{goodsItem.shop_sales}}</span></div>
            <div class="distance" v-if="distance"><span>{{distance}}</span></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="item-addres">{{goodsItem.shop_address}}</div>
            <!-- <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="店家公告" name="0"> -->
              <div class="des">{{goodsItem.shop_notice}}</div>
              <!-- </el-collapse-item>
            </el-collapse> -->
            
          </el-col>
          <el-col :span="24">
            <!-- <span>今日推荐</span> -->
            <el-tag
              type="success"
              size="small"
              v-for="item in goodsItem.shop_dishes"
              :key="item"
              class="dishes-item"
            >{{item}}</el-tag>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {
          activeNames: ['0']
        };
      }
    }
  },
  data() {
    return {
      value: 0,
      distance: ""
    };
  },
  computed: {
//     getDistance() {
//       if (this.goodsItem.shop_distance < 1) {
// return this.goodsItem.shop_distance + "m"

//       } else {
//         return this.goodsItem.shop_distance.toFixed(1) + "km"
//       }
//     }
  },
  mounted() {
    this.value = this.goodsItem.shop_score;
    if (this.goodsItem.distance < 1) {
this.distance = this.goodsItem.distance * 1000 + "m"

      } else {
        this.distance = this.goodsItem.distance.toFixed(1) + "km"
      }
  },
  methods: {
    goodClick() {
        // // 2 使用detail/xxx形式 需要在router配置动态
        this.$router.push('/detail/shop' + this.goodsItem.shop_id);
      
    }
  }
};
</script>

<style scoped>
.sales-box {
  display: flex;
  justify-content: flex-start;
}
.goodsitem {
  margin: 10px 0;
  width: 100vw;
  cursor: pointer;
}
.item-image {
  border-radius: 10px;
  overflow: hidden;
}
.good-title-text {
  color: var(--color-ele-blue);
  font-weight: 600;
  font-size: 17px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.item-addres {
  padding: 5px 0;
  font-size: 13px !important;
}
.item-addres,
.distance,
.sales {
  font-size: 14px;
  color: #777;
}
.des {
  font-size: 12px;
  padding: 2px;
  color: #777;
}
.dishes-item {
  margin: 5px;
}
</style>
<style>
.el-collapse-item__header {
  height: 23px;
  line-height: 23px ;
  color:#666;
}
.el-collapse-item__content {
  padding-bottom: 0 !important;
}
.sales span,
.distance span {
  color:#F56C6C; 
  font-weight: 600;
}
.distance {
  margin-left: 10px;
}
</style>