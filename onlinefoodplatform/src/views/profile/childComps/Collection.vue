<template>
  <div class="collection">
    <div class="no-collection" v-if="collection.length === 0">
      没有收藏什么
    </div>
    <div class="collection-item" v-for="(item, index) in collections" :key="index" v-else>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { selectDishesList } from "network/user"

export default {
  name: "Collection",
  props: {
    collection: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    getCollection() {
      this.collections = this.collection.map(item => {
        let collect = {}
        selectDishesList({"shop_id": item}).then(res => {
          return res.shop
        }).catch(err => {
          console.log(err)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>