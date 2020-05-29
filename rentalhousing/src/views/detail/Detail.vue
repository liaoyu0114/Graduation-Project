<template>
  <div class="detail-page">
    <div class="bg"></div>
    <div class="detail-box" v-loading="loading">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>房屋详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col>
          <div class="detail-title">{{house.housingresources_name}}</div>
        </el-col>
        <el-col :span="24">
          <div class="detail-title-down">
            <div class="price-box">
              <span class="price-count">{{house.housingresources_price}}</span>
              <span class="price-d">元/月</span>
            </div>
            <span class="line"></span>
            <div class="detail-house-type">{{house.housingresources_type}}</div>
            <span class="line"></span>
            <div class="detail-house-rect">{{house.housingresources_area}}平方米</div>
            <span class="line hidden-sm-and-down"></span>
            <div class="detail-tags hidden-sm-and-down">
              <el-tag
                size="mini"
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                effect="plain"
              >{{ item.label }}</el-tag>
            </div>
          </div>
        </el-col>
        <el-col :span="24" class="hidden-sm-and-up">
          <div class="detail-title-down">
            <div class="detail-tags">
              <el-tag
                size="mini"
                v-for="item in items"
                :key="item.label"
                :type="item.type"
                effect="plain"
              >{{ item.label }}</el-tag>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :lg="18" :md="24">
          <el-carousel height="400px" class="detail-carousel">
            <el-carousel-item v-for="(item, index) in house.housingresources_pic" :key="index">
              <el-image :src="item" fit="cover">
                <div slot="placeholder" class="image-slot-placeholder">
                  <div>
                    <i class="el-icon-loading"></i>
                    <div>rentalhousing</div>
                  </div>
                  <br />
                </div>
                <div slot="error" class="image-slot-error">
                  <div>
                    <i class="el-icon-picture-outline"></i>
                    <div>rentalhousing</div>
                  </div>
                  <br />
                </div>
              </el-image>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :lg="6" :md="24">
          <div class="user-border">
            <el-col :lg="{span: 24, offset: 0}" :md="{span: 6, offset: 6}" class="user-icon-box">
              <div class="user-icon">
                <el-image :src="landlord.landlord_pic"></el-image>
              </div>
            </el-col>
            <el-col :lg="24" :md="6">
              <div class="user-name">{{landlord.landlord_nickname}}</div>
              <div class="user-button">
                <el-button type="primary" size="mini" @click="showPhone">联系TA</el-button>
                <el-button type="primary" size="mini" @click="applyOne">预约看房</el-button>
                <!-- <el-button type="primary" size="mini" @click="dialogVisible = true">租房申请</el-button> -->
              </div>
              <div class="user-describe"></div>
            </el-col>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="house-info">
              <div class="houser-info-title">房屋信息</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda.</div>
            </div>
            <el-row>
              <el-col :span="24">
                <div class="price-box-info">
                  <span class="price price-count-info">{{house.housingresources_price}}</span>
                  <span class="price price-d-info">元/月</span>
                  <span>{{house.housingresources_renttype}}</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="house-info-1">
                  <div>
                    <span class="title">户型:</span>
                    <span class="title-dec">{{house.housingresources_type}}</span>
                  </div>
                  <div>
                    <span class="title">面积:</span>
                    <span class="title-dec">{{house.housingresources_area}}平方米</span>
                  </div>
                  <div>
                    <span class="title">朝向:</span>
                    <span class="title-dec">朝{{house.housingresources_orientations}}</span>
                  </div>
                </div>
                <div class="house-info-2">
                  <div>
                    <span class="title">楼层:</span>
                    <span class="title-dec">{{house.housingresources_floor}}层</span>
                  </div>
                  <div>
                    <span class="title">装修:</span>
                    <span class="title-dec">精装修</span>
                  </div>
                  <div>
                    <span class="title">类型:</span>
                    <span class="title-dec">普通住宅</span>
                  </div>
                </div>
                <div class="house-info-3">
                  <div>
                    <span class="title">地址:</span>
                    <span class="title-dec">{{house.housingresources_address}}</span>
                  </div>
                  <div>
                    <span class="title">小区:</span>
                    <span class="title-dec">{{house.housingresources_village}}</span>
                  </div>
                  <div>
                    <span class="title"></span>
                    <span class="title-dec"></span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="house-info">
              <div class="houser-info-title">房源概况</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda.</div>
            </div>
            <div class="more-info">
             {{house.housingresources_introduce}}
            </div>
          </el-card>
        </el-col>
        <el-col style="max-width: 1200px">
          <div class="one">
            {{one.hitokoto}}
          </div>
        </el-col>
        <el-col :offset="16" :span="8" style="max-width: 1200px">
          <div class="one-api">
            ————   {{one.from}}
            <span style="padding-left: 10px">{{one.from_who}}</span>
          </div>
        </el-col>
      </el-row>
      <!--<el-row>-->

      <!--</el-row>-->

    </div>
    <el-dialog title="看房申请" :visible.sync="dialogVisible" width="50%">
      <apply @cancel="cancel"></apply>
    </el-dialog>
  </div>
</template>

<script>
import Apply from "./Apply"
import axios from "axios"
import {mapGetters} from "vuex"
export default {
  name: "Detail",
  components: {
    Apply
  },
  data() {
    return {
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" }
      ],
      urls: [
        "https://s1.ax1x.com/2020/04/14/Gxx9yR.jpg",
        "https://s1.ax1x.com/2020/04/14/GznAK0.jpg",
        "https://s1.ax1x.com/2020/04/14/Gznlx1.jpg"
      ],
      loading: true,
      diaTitle: "",
      dialogVisible: false,
      house: {},
      landlord: {},
      one: {

      }
    };
  },
  created() {
    this.getHouseDetail()
    axios.get("https://v1.hitokoto.cn/", {
      c: "d"
    }).then( res => {
        this.one = res.data
    })
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    getHouseDetail() {
      this.$post("/selectHousingresourcesById", {"housingresources_id": this.$route.query.id}).then(res => {
        if (res.code === "000") {

          this.house = res.housingresources;
          this.house.housingresources_pic = JSON.parse(res.housingresources.housingresources_pic)
          this.landlord = res.landlord;
          this.loading = false
        } else {
          this.$message.warning(res.msg);
        }

      }).catch(err => {
        console.log(err);
        this.$message.error("网络错误");
        // this.loading = false
      })
    },
    showPhone() {
       this.$confirm(`房东电话： ${this.landlord.landlord_contact ? this.landlord.landlord_contact : this.landlord.landlord_phone}`, '提示', {
         showConfirmButton: false,
          cancelButtonText: '确定',
          type: 'info'
        })
    },
    applyOne() {
      if (!this.userInfo.tenant_id) {
         this.$confirm('登录后才可以申请哦, 是否前往登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push("/login")
        }).catch(() => {
          
        });
      } else {
this.dialogVisible = true
      }
      
    },
    cancel() {
       this.dialogVisible = false
    }
  }
};
</script>
<style scoped>
.house-info-1,
.house-info-2,
.house-info-3 {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.house-info-1 div,
.house-info-2 div,
.house-info-3 div {
  width: 33%;
}
.title {
  color: #777;
  font-size: 13px;
}
.title-dec {
  color: #333;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 500;
}
</style>
<style scoped>
  .one {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #b9e1dc;
    margin-top: 10px;
  }
  .one-api {

    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--TIMBERWOLF);
  }
.bg {
  position: absolute;
  top: 0;
  left: calc((100vw - 1220px) / 2);
  max-width: 1220px;
  width: 100%;
  height: 100vh;
  background: white;
  z-index: -1;
}
.house-info {
  display: flex;
  justify-content: space-between;
}
.houser-info-title {
  font-size: 18px;
  font-weight: 500;
  color: #777;
}
.house-info:last-child {
  font-size: 14px;
  color: #888;
}
.price-box-info {
  color: #666;
  font-size: 12px;
}
.price-count-info {
  font-size: 20px;
  font-weight: 600;
}
.price-d-info {
  font-size: 15px;
  padding: 0 5px;
}
.price {
  color: #f45f21;
}
</style>
<style scoped>
.image-slot-placeholder,
.image-slot-error {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.image-slot-placeholder div div,
.image-slot-error div div {
  text-transform: uppercase;
  text-align: center;
  color: #aaa;
}
.el-icon-loading,
.el-icon-picture-outline {
  font-size: 10rem;
  color: #aaa;
}
.el-carousel__item .el-image {
  width: 100%;
  height: 100%;
}
.user-icon {
  width: 120px;
  height: 168px;
  margin: 10px 0;
}
.user-icon-box {
  display: flex;
  justify-content: center;
}
.user-border {
  border: solid #aaa 1px;
  border-radius: 10px;
  margin: 10px 0 0;
  height: 400px;
}
.detail-carousel {
  margin: 10px;
}
.user-name {
  text-align: center;
  line-height: 22px;
}
.user-button {
  display: flex;
  justify-content: center;
  margin: 5px;
}
@media screen and (max-width: 992px) {
  .user-border {
    margin: 10px 0;
  }
  .user-icon {
    padding: 10px;
  }
}
</style>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<style scoped>
.detail-page {
  display: flex;
  justify-content: center;
  width: 100%;
}
.detail-box {
  width: 100%;
  padding: 10px 10px 0;
  max-width: 1200px;
  background: white;
}
.detail-title {
  font-size: 24px;
  margin: 10px 0;
}
.detail-title-down {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 30px;
}
.line {
  width: 1px;
  background: #bbb;
  height: 20px;
}
.price-box {
  color: #f45f21;
  font-size: 18px;
  padding-right: 10px;
}
.price-count {
  font-size: 20px;
  font-weight: 700;
  padding-right: 3px;
}
.detail-house-type,
.detail-house-rect {
  font-size: 18px;
  padding: 0 10px;
  font-weight: 500;
}
.detail-tags {
  padding: 0 10px;
}
.detail-tags span {
  margin: 0 5px;
}
</style>