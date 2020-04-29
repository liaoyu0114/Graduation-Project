<template>
  <div id="shop-item">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :span="8">
        <div class="item-img">
          <el-image :src="cartItem.dish.dishes_pic"></el-image>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="item-info">
          <el-col :span="24">
            <div class="item-title">{{cartItem.dish.dishname}}</div>
          </el-col>
          <el-col :span="24">
            <div class="item-desc">{{cartItem.dish.material}}</div>
          </el-col>
          <el-col :span="20">
            <div class="info-bottom">
              
              <div class="item-count right">
                <div class="item-price left">¥{{cartItem.dish.dishes_price}}</div>
                <div class="number-decrease" >
                  <el-button type="text" @click="decrease" :disabled="cartItem.count === 1"><i class="el-icon-minus"></i></el-button>
                  
                </div>
                <div class="input-box">
                 <!-- <div> -->
<input class="input" type="text" v-model="cartItem.count" />
                 <!-- </div> -->
                  
                </div>

                <div class="number-increase">
                   <el-button type="text"  @click="increase">  <i class="el-icon-plus"></i></el-button>
                
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <el-button @click="deleteClick" type="text">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </el-button>
          </el-col>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="order-info" style="height: 100%">
          总计： 
        </div>
        <div class="order-button">
          <el-button type="primary" plain size="mini" @click="createOrder">去结算</el-button>
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
  data() {
    return {
      cartItem: this.product,
      active: this.product.checked
    };
  },
  created() {
    // this.cartItem = this.product
  },
  watch: {
    cartItem(val) {
      this.active = val.checked;
    }
  },
  methods: {
    checkedChange: function() {
      console.log(this.product.checked);
      // this.product.checked = true
      this.cartItem.checked = !this.cartItem.checked;
      console.log(this.product.checked);
      // this.$set(this.product, "checked", !this.product.checked )
      // this.$emit("checkedChange")
    },
    createOrder() {
      this.$emit("createOrder")
    },
    deleteClick() {
      this.$confirm("此操作将删除商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$emit("deleteClick");
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    decrease() {
      if (this.cartItem.count <= 1) {
        this.$message("不能再少了哦")
        return
      }
      this.cartItem.count--;
    },
    increase() {
      this.cartItem.count++;
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
  flex-wrap: wrap;
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
.item-price {
  text-align: center;
  margin: auto;
  padding-right: 20px;
}

.box {
  display: flex;
  justify-self: center;
  height: 100%;
}

.item-count {
  display: flex;
  justify-content: space-around;
  margin-right: 20px;
}

.input {
  width: 50%;
  text-align: center;
  height: 20px;
  border: solid 1px #999;
  border-radius: 4px;
}
.input-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.number-decrease， .number-increase {
  display: flex;
  align-items: center;
}
.el-icon-minus,
.el-icon-plus {
  display: block;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
}
</style>

<style>
.el-message-box {
  width: 100%;
}
</style>