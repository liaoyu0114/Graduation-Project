<template>
  <div class="collection">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in recommends" class="recommend-item" :key="item.title">
        <div >
          <a :href="item.link">
            <el-image :src="item.image_url" @load="loaded"></el-image>
            <div class="item-title">{{item.title}}</div>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Collection",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  },
  methods: {
    loaded() {
      this.$emit("imageLoaded")
    }
  }
};
</script>

<style scoped>
.collection {
  padding: 10px 0;
}
.item-title {
  width: 100%;
  text-align: center;
}
a {
      color: #7e8c8d;
    text-decoration: none;

}
</style>