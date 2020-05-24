<template>
  <div class="homing">
    <el-container>
      <div class="body-box">
        <div class="bg"></div>
        <el-main class="limit limit-2">
          <el-row>
            <el-col :span="24" style="margin: 10px 0">
              <div class="categpry-search">
                <el-input v-model="form.housingresources_name" clearable placeholder="输入关键字搜索" size="small"></el-input>
                <div>
                  <el-button type="primary"
                             plain
                             size="small"
                             @click="getHouse"
                             style="width: 100px">搜索</el-button>
                </div>
              </div>
            </el-col>
            <el-col :span="24" v-for="(item, index) in category" :key="index">
              <div class="category-box">
                <div class="category-title">{{item.title}}:</div>
                <div
                  v-for="(detail, dIndex) in item.detail"
                  :key="dIndex"
                  @click="detailClick(index,dIndex)"
                  class="category-detail"
                  :class="{active: form[formIndex[index]] === detail}"
                >{{detail}}</div>
              </div>
            </el-col>
          </el-row>
          <div class="line"></div>
          <el-row v-loading="loading">
            <el-col :span="24">
              <home-cell v-for="(item,index) in houseArr"
                         :key="index"
                         :scope="item"
                         @click.native="pushDetail(index)" ref="house"></home-cell>
              <div class="no-data" v-if="houseArr.length === 0">
                暂无数据
              </div>
            </el-col>
          </el-row>
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script>
import HomeCell from "../../components/HomeCell";
export default {
  name: "Homing",
  components: {
    HomeCell
  },
  data() {
    return {
      activeName: "second",
      showData: [],
      loading: false,
      price: 0,
      formIndex: ["category","type","floor","orientations","renttype","price"],
      form: {
        currIndex: 1, // 第几页
        pageSize: 15, // 每页数据量
        name: "", // 房源名称模糊搜索
        category: "不限", // 房源类别
        type: "不限", // 房型
        floor: "不限", // 楼层
        orientations: "不限", // 朝向
        renttype: "不限", // 租金类型
        price: "不限"
      },
      category: [
        {
          title: "类别",
          detail: ["不限", "整套出租", "单间出租", "短租/日租"]
        },
        {
          title: "房型",
          detail: [
            "不限",
            "三室一厅",
            "三室两厅",
            "两室一厅",
            "一室一厅",
            "其他"
          ]
        },
        {
          title: "楼层",
          detail: ["不限", "高层", "中层", "低层"]
        },
        {
          title: "朝向",
          detail: [
            "不限",
            "北",
            "东北",
            "西北",
            "东",
            "西",
            "西南",
            "东南",
            "南"
          ]
        },
        {
          title: "租金类型",
          detail: ["不限", "押一付一", "押一付三", "半年付", "年付"]
        },
        {
          title: "价格区间",
          detail: [
            "不限",
            "500以下",
            "500-1000元",
            "1000-1500元",
            "1500-2000元",
            "2000-3000元",
            "3000-4000元",
            "4000元以上"
          ]
        }
      ],
      houseArr: []
    };
  },
  computed: {
    isActive(index,dIndex) {
      let flag = false
      switch (index) {
        case 0:
          flag = this.form.housingresources_category === this.category[index].detail[dIndex]
          break;
      
        default:
          break;
      }
      return flag
    }
  },
  created() {
    this.getHouse();
  },
  methods: {
    loadMore() {
      this.form.currIndex += 1;
      let data = this.getData();
      this.$post("/selectHousingresourcesList", data).then(res => {
        if (res.code === "000") {
          this.houseArr.concat(res.housingresourceslist)
        } else {
          this.$message.error("出现了一些系统错误！！！")
        }
        this.loading = false;
        console.log(res);
      }).catch(err => {
        console.log(err);
        this.$message.error("无网络！！！");
        this.loading = false
      })
    },
    pushDetail(index) {
      this.$router.push({
        path: "/detail",
        query: {
          id: this.houseArr[index].housingresources_id
        }
      });
      console.log(index);
    },
    detailClick(index, dIndex) {
      this.form[this.formIndex[index]] = this.category[index].detail[dIndex]
      this.getHouse()
    },
    getHouse() {
      let data = this.getData();
      this.loading = true
      this.$post("/selectHousingresourcesList", data).then(res => {
        if (res.code === "000") {
          this.houseArr = res.housingresourceslist
        } else {
          this.$message.error("出现了一些系统错误！！！")
        }
        this.loading = false
        console.log(res);
      }).catch(err => {
        console.log(err);
        this.$message.error("无网络！！！");
        this.loading = false
      })
    },
    getData() {
      let data = {};
      switch (this.form.price) {
        case "500以下":
          data.housingresources_price_max = 500;
          data.housingresources_price_min = 0
          break;
        case "500-1000元":
          data.housingresources_price_max = 1000;
          data.housingresources_price_min = 500;
          break;
        case "1000-1500元":
          data.housingresources_price_max = 1500;
          data.housingresources_price_min = 1000;
          break;
        case "1500-2000元":
          data.housingresources_price_max = 2000;
          data.housingresources_price_min = 1500;
          break;
        case "2000-3000元":
          data.housingresources_price_max = 3000;
          data.housingresources_price_min = 2000;
          break;
        case "3000-4000元":
          data.housingresources_price_max = 4000;
          data.housingresources_price_min = 3000;
          break;
        case "4000元以上":
          data.housingresources_price_max = 9999999;
          data.housingresources_price_min = 4000;
          break;
        default:
          break;
      }
      data.currIndex = this.form.currIndex;
      data.pageSize = this.form.pageSize;
      data.housingresources_name = this.form.name;

      if (this.form.category !== "不限") {
        data.housingresources_category = this.form.category;
      }
      if (this.form.type !== "不限") {
        data.housingresources_type = ""
      }
      if (this.form.floor !== "不限") {
        data.housingresources_floor = this.form.floor
      }
      if (this.form.orientations !== "不限") {
        data.housingresources_orientations = this.form.orientations
      }
      if (this.form.renttype !== "不限") {
        data.housingresources_renttype = this.form.renttype
      }
      return data
    }
  }
};
</script>

<style scoped>
  .no-data {
    text-align: center;
    padding: 20px 0;
    color: #999999;
    /*border-bottom: dashed #999999 1px;*/
  }
.categpry-search {
  display: flex;
  justify-content: space-between;
  height: 40px;
}
.categpry-search {
  margin: auto;
}
.category-box {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  line-height: 16px;
  margin-bottom: 10px;
}
.category-title {
  color: #999;
  font-size: 12px;
}
.category-detail {
  padding: 0 10px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: .2s;
}
.category-detail:hover {
  color: #ff7762;
  text-decoration: underline;
}
.active {
  color: #ff7762 !important;
}
</style>


<style scoped>
.homing,
.el-container,
.body-box {
  background: transparent;
}
.body-box {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
}
.limit {
  max-width: 1000px;
  padding: 10px !important;
  background: white;
}
.bg {
  position: absolute;
  top: 0;
  max-width: 1000px;
  width: 100%;
  height: calc(100vh - 60px);
  background: white;
  z-index: -1;
}
.line {
  margin-top: 10px;
  width: 100%;
  height: 1px;
  background: #ddd;
  box-shadow: 0 1px 5px #aaa;
}
</style>