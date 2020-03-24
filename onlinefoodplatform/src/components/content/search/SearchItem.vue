<template>
  <div class="search-item">
    <el-row>
      <el-col :span="24">
        <div class="item-name">{{searchItem.name}}</div>
      </el-col>
      <el-col :sapn="24">
        <div class="item-add">{{searchItem.address}}</div>
        
      </el-col>
     
    </el-row>
     <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "SearchItem",
  props: {
    searchItem: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
 .item-name {
   color: #666666;
   font-size: 18px;
   padding: 5px 13px;
 }
 .item-add {
   color: #899999;
   padding: 5px 13px;
 }
 .line {
   width: 100%;
   color: #999999;
   height: 3px;
 }
</style>