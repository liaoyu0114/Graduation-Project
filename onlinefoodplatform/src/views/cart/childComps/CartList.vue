<template>
  <div class="cartlist">
    <scroll class="content" ref="scroll">
     <cart-list-item v-for="(item, index) in cartList"
                     :product="item"
                     :key="index" 
                     @deleteClick="deleteClick(index)"/>
    </scroll>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import Scroll from  'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    data() {
      return{
        scrollHeight: 0
      }
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    },
    activated() {
      this.$refs.scroll.urefresh();
    },
    methods: {
      deleteClick(index) {
        this.cartList.splice(index,1);
      },
      checkedChange(index) {
        console.log(index)
        this.cartList[index].checked = !this.cartList.checked
      }
    }
  }
</script>

<style scoped>

 .content {
   position: absolute;
   top: 40px;
   right: 0;
   left: 0;
   bottom: 58px;
   overflow: hidden;
 }
</style>
