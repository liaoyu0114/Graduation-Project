import {
  ADD_COUNTER,
  ADD_TO_CART,
  ADD_TO_SHOP
} from './mutation-types'

export default {
  //做异步操作时或者复杂操作，使用 this.$store.dispatch('addCart', product)访问
  addCart(context, payload) {
    /**
     * 先判断原来是否有这个商品
     * 如果有，用oldProduct记录这个商品，然后在第二个if就让已有商品的count+1
     * 如果没有，就给payload添加count属性，设置为1,然后push payload到cartList
     * 这样count属性至少为1
     * @type {null}
     */
    return new Promise((resolve, reject) => {
      //1.查找之前数组中是否有这个商品
      let oldShop = context.state.cartList.find(item => {return item.shop_id === payload.shop_id})
      //2.判断是否有这个店铺
      if (oldShop) {
        //数量加1
        let oldProduct = oldShop.dishes.find(item => { return item.dishes_id === payload.dishes[0].dishes_id});
        if (oldProduct) {
          context.commit(ADD_COUNTER, oldProduct);
          resolve();
        } else {
          payload.dishes[0].count = 1;
          context.commit(ADD_TO_SHOP, payload);
          resolve();
        }
      } else {
        //添加新的商品
        payload.dishes[0].count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve();
      }
    });

  }
}
