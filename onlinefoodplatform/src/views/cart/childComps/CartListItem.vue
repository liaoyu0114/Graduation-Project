<template>
  <div id="shop-item">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :span="2">
        <div class="item-selector">
          <CheckButton @click.native="checkedChange" :is-active="product.checked"></CheckButton>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="item-img">
          <el-image :src="product.image"></el-image>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="item-info">
          <el-col :span="24">
            <div class="item-title">{{product.shop}}</div>
          </el-col>
          <el-col :span="24">
            <div class="item-desc">{{product.desc}}</div>
          </el-col>
          <el-col :span="20">
            <div class="info-bottom">
              <div class="item-price left">¥{{product.price}}</div>
              <div class="item-count right">x{{product.count}}</div>
              
            </div>
          </el-col>
          <el-col :span="4">
            <button @click="deleteClick"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkedChange: function() {
      this.product.checked = !this.product.checked;
    },
    deleteClick() {
      this.$confirm('此操作将删除商品, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.$emit("deleteClick");
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
            
     
    }
  }
};
</script>

<style scoped>
#shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
}

.info-bottom {
  display: flex;
  justify-content: start;
}

.info-bottom .item-price {
  color: orangered;
}

.box {
  display: flex;
  justify-self: center;
  height: 100%;
}
</style>

<style>
.el-message-box {
  width: 100%;
}
</style>