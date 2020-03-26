<template>
  <div class="goodsitem"  @click="goodClick">
    <el-row :gutter="20">
      <el-col :span="8" >
        <el-image :src="goodsItem.image" class="item-image">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="24">
            <div class="good-title-text">{{goodsItem.name}}</div>
          </el-col>
        </el-row>
        <el-row >
          <el-col :span="16">
            <el-rate
              v-model="value"
              class="stars"
              disabled
              show-score
              score-template="{value}"
              text-color="#ff9900"
            ></el-rate>
          </el-col>
          <el-col :span="8">
            <div class="sales">月销<span>{{goodsItem.month_sales}}</span></div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="item-addres">{{goodsItem.address}}</div>
            <!-- <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="店家公告" name="0"> -->
              <div class="des">{{goodsItem.description}}</div>
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
      value: 0
    };
  },
  mounted() {
    this.value = this.goodsItem.rating;
  },
  methods: {
    goodClick() {
      //路由跳转
      // 1.使用query detail？xxx形式
      this.$router.push({
        path: "/detail"
        // query: {
        //   iid: this.goodsItem.iid
        // }
      });
    }
  }
};
</script>

<style scoped>
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
}
.item-addres,
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
.sales span {
  color:#F56C6C; 
  font-weight: 600;
}
</style>