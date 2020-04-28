<template>
  <div class="tourist">
    <el-row class="user-info" @click.native="infoClick">
      <el-col :span="18">
        <div class="user-name">
          {{userInfo.nickName}}
          <br />
          <i class="iconfont icon-tubiao">{{userInfo.phone}}</i>
          <div class="user-name-tips">Nice to meet you</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="profile-avatar">
          <el-avatar :size="75" :src="userInfo.avatar"></el-avatar>
        </div>
      </el-col>
    </el-row>
    <div class="list">
      <list-cell v-for="(item, index) in list" :key="index" @click.native="showDialog(index)">
        <i class="iconfont" :class="item.iconName" slot="icon"></i>
        <div class="icontext" slot="text">{{item.text}}</div>
      </list-cell>
    </div>
    <el-dialog :title="title" :visible.sync="dialogTableVisible">
      <collection :collection="getCollection" v-if="showCollection"></collection>
      <my-address :user-id="userInfo.id" v-if="showAddress"></my-address>
    </el-dialog>
  </div>
</template>

<script>
import ListCell from "components/content/ListCell";
import Collection from "./Collection";
import MyAddress from "./Address"
import { mapGetters } from "vuex";
export default {
  name: "Tourists",
  props: {
    userInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    ListCell,
    Collection,
    MyAddress
  },
  data() {
    return {
      list: [
        {
          iconName: "icon-shoucang",
          text: "我的收藏"
        },
        {
          iconName: "icon-dizhi",
          text: "我的地址"
        },
        {
          iconName: "icon-kefu",
          text: "在线客服"
        },
        {
          iconName: "icon-order-acquired",
          text: "成为商家"
        },
        {
          iconName: "icon-shezhi",
          text: "设置"
        }
      ],
      title: "",
      dialogTableVisible: false,
      showCollection: false,
      showAddress: false
    };
  },
  methods: {
    infoClick() {
      this.$router.push("/sign");
    },
    showDialog(index) {
      switch (index) {
        case 0:
          this.dialogTableVisible = true;
          this.showCollection = true;
          this.showAddress = false
          this.title = this.list[index].text
          break;
        case 1: 
        this.dialogTableVisible = true;
          this.showCollection = false;
          this.showAddress = true
          this.title = this.list[index].text
          break;
        case 3: 
          break;
        default:
          this.$notify({
          title: 'Feature',
          message: '这是一个feature',
          type: 'success'
        });
          break;
      }
    }
  },
  computed: {
    getCollection() {
      console.log(this.userInfo.collection.length)
      if (this.userInfo.collection.length === 0) {
        return [];
      } else {
        return this.userInfo.collection.split(",");
      }
    }
  }
};
</script>

<style scoped>
.user-info {
  /*display: flex;*/
  padding: 15px;
  background: var(--color-ele-blue);
  /*justify-content: space-between;*/
}
.user-name {
  font-size: 20px;
  font-weight: 600;
  color: white;
}
.user-name-tips {
  font-size: 15px;
  font-weight: 500;
}
.icon-tubiao {
  font-size: 15px !important;
  font-weight: 500;
}
.user-icon {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: solid 0.1px #999;
  overflow: hidden;
}
.user-icon img {
  width: 100%;
  height: 100%;
}

</style>

<style>
.el-dialog {
  width: 90% !important;
  /* max-height: 90% !important; */
}
</style>