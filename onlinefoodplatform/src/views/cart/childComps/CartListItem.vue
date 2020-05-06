<template>
  <div class="shop-item">
    <el-row :gutter="10">
      <el-col :span="24">
        <span class="cart-shop-name">{{cartItem.shop_name}}</span>
      </el-col>
      <el-col v-for="(item,index) in cartItem.dishes" :key="index">
        <el-col :span="8" >
          <div class="item-img">
            <el-image :src="item.dishes_pic" @click="increase(item)"></el-image>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="item-info">
            <el-col :span="24">
              <div class="item-title">{{item.dishname}}</div>
            </el-col>
            <el-col :span="24">
              <div class="item-desc">{{item.material}}</div>
            </el-col>
            <el-col :span="20">
              <div class="info-bottom">
                <div class="item-count right">
                  <div class="item-price left">¥{{item.dishes_price}}</div>
                  <div class="number-decrease">
                    <el-button
                      type="text"
                      @click="decrease(index)"
                      :disabled="item.count === 1"
                    >
                      <i class="el-icon-minus"></i>
                    </el-button>
                  </div>
                  <div class="input-box">
                    <input class="input" type="text" v-model="item.count" />
                  </div>
                  <div class="number-increase">
                    <el-button type="text" @click="increase(index)">
                      <i class="el-icon-plus"></i>
                    </el-button>
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
        
      </el-col>
      <el-col :span="24" class="price-calc">
          <div class="order-info" style="height: 100%">总计：{{totalPrice}}</div>
          <div class="order-button">
            <el-button type="primary" plain size="mini" @click="createOrder">去结算</el-button>
          </div>
        </el-col>
    </el-row>
    <div class="line"></div>
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
  computed: {
    totalPrice() {
      return this.cartItem.dishes.reduce((total, val) => {
        return total + val.count * val.dishes_price;
      }, 0);
    }
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
      this.$emit("createOrder");
    },
    deleteClick(index) {
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
    decrease(index) {
      console.log(index)
      this.$set(object, key, value)
      this.cartItem.dishes[index].count--;
    },
    increase(index) {
      this.cartItem.dishes[index].count++;
    }
  }
};
</script>

<style scoped>
/* .shop-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  flex-wrap: wrap;
} */
.cart-shop-name {
  padding: 10px 10px;
  color: var(--color-ele-blue)
}
.item-selector {
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price-calc {
  display: flex;
  justify-content: space-between;
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
.line {
  background: #bbb;
  height: 1px;
  margin: 5px 0 5px;
  width: 100%;
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