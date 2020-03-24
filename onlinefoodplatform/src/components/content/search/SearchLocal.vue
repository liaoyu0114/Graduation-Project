<template>
  <div class="search">
    <search-nav-bar class="search-nav">
       <div slot="left" @click="backClick">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="search-title" slot="center">选择地址</div>
    </search-nav-bar>
    <div class="search-box">
      <el-autocomplete
        popper-class="my-autocomplete"
        v-model="state"
        class="search-el"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
      >
        <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
        <template slot-scope="{ item }">
          <div class="name">{{ item.name }}</div>

          <span class="addr">{{ item.address }}</span>
        </template>
      </el-autocomplete>
    </div>
    <scroll class="scroll">
      <div
        class="item"
        v-for="(item,index) in aroundRestaurants"
        @click="itemClick(index)"
        :key="index"
      >
        <search-item :search-item="item"></search-item>
      </div>
    </scroll>
  </div>
</template>

<script>
import { around, text } from "network/map";
import { mapGetters } from "vuex";
import SearchItem from "./SearchItem";
import SearchNavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "SearchLocal",
  components: {
    SearchItem,
    SearchNavBar,
    Scroll
  },
  data() {
    return {
      aroundRestaurants: [],
      state: "",
      appKey: "abe346ab804b17ebc88f74f3c0173935"
    };
  },
  computed: {
    ...mapGetters(["getLocation"])
  },
  methods: {
    itemClick(index) {
      let item = this.aroundRestaurants[index];
      let address = {
        latitude: item.location.split(",")[1],
        longitude: item.location.split(",")[0],
        province: item.pname,
        city: item.cityname,
        district: item.adname,
        needAddress: item.name,
        formattedAddress: item.address
      };
      this.setLocation(address);
    },
    setLocation(addresss) {
      this.$confirm("此操作重设定位, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "重设成功!"
          });
          this.$store.commit("setLocation", addresss);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消重设"
          });
        });
    },
    handleSelect(item) {
      this.state = item.name;
      let address = {
        latitude: item.location.split(",")[1],
        longitude: item.location.split(",")[0],
        province: item.pname,
        city: item.cityname,
        district: item.adname,
        needAddress: item.name,
        formattedAddress: item.address
      };
      this.setLocation(address);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    querySearchAsync(queryString, cb) {
      let params = {
        key: this.appKey,
        keywords: queryString,
        city: "成都"
      };

      text(params).then(res => {
        var restaurants = res.pois;
        var results = queryString
          ? restaurants.filter(this.createStateFilter(queryString))
          : restaurants;
        cb(results);
      });
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    getAround() {
      console.log(this.getLocation);
      let data = {
        key: this.appKey,
        location: this.getLocation,
        radius: 3000
      };
      around(data)
        .then(res => {
          this.aroundRestaurants = res.pois;
        })
        .catch(err => {
          console.log(err);
        });
    },
     backClick() {
        this.$router.back()
      }
  },
  created() {
    this.getAround();
  }
};
</script>

<style scoped>
.search-nav {
  background: var(--color-ele-blue);
  color: white;
}
.search {
  /* width: 100% !important; */
  background: white;
}
.search-box {
  margin: 10px;
}
.my-autocomplete li {
  line-height: normal !important;
  padding: 7px;
}
.search-el {
  width: 100%;
}
.name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.addr {
  font-size: 12px;
  color: #b4b4b4;
}

.highlighted .addr {
  color: #ddd;
}
.scroll {
  position: absolute;
  top: 100px;
  height: calc(100vh - 158px);
  overflow: hidden;
}
.item {
  cursor: pointer;
}
</style>
