<template>
  <div class="goodsitem" @click="goodClick">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-image :src="goodsItem.image" class="item-image">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span="24">
            <div class="good-title-text">{{goodsItem.title}}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-rate v-model="value"
            class="stars"
            disabled
            show-score
            score-template="{value}"
            text-color="#ff9900"></el-rate>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-tag type="warning" size="mini">销量100</el-tag>
            <el-tag type="warning" size="mini">标签二</el-tag>
            <el-tag type="warning" size="mini">标签二</el-tag>
            <el-tag type="warning" size="mini">标签二</el-tag>
            <el-tag type="warning" size="mini">标签二</el-tag>
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
          return {}
        }
      }
    },
    data() {
      return {
        value: 4.6
      }
    },
    computed: {

    },
    methods: {
      goodClick() {
        //路由跳转
        // 1.使用query detail？xxx形式
        this.$router.push({
          path: '/detail'
          // query: {
          //   iid: this.goodsItem.iid
          // }
        });
      }
    }
  }
</script>

<style scoped>
  .goodsitem {
    margin: 10px 0;
    width: 100vw;
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
    overflow:hidden;
    white-space:nowrap;
  }
  .stars {
    /*width: 50%;*/
  }
</style>
