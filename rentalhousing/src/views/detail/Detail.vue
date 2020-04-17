<template>
  <div class="detail-page">
        <div class="bg"></div>
    <div class="detail-box">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>房屋详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col>
          <div class="detail-title">衣冠庙地铁口 西南民大旁200米 出行便利 家具家电齐全</div>
        </el-col>
        <el-col :span="24">
          <div class="detail-title-down">
            <div class="price-box">
              <span class="price-count">1840</span>
              <span class="price-d">元/月</span>
            </div>
            <span class="line"></span>
            <div class="detail-house-type">1室0厅</div>
            <span class="line"></span>
            <div class="detail-house-rect">28平方米</div>
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
            <el-carousel-item v-for="(item, index) in urls" :key="index">
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
                <el-image src="https://s1.ax1x.com/2020/04/14/GzMjzj.png"></el-image>
              </div>
            </el-col>
            <el-col :lg="24" :md="6">
              <div class="user-name">Name</div>
              <div class="user-button">
                <el-button type="primary" size="mini">联系ta</el-button>
                <el-button type="primary" size="mini">预约看房</el-button>
                <el-button type="primary" size="mini">租房申请</el-button>
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
                  <span class="price price-count-info">840</span>
                  <span class="price price-d-info">元/月</span>
                  <span>付1押1</span>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="house-info-1">
                  <div>
                    <span class="title">户型:</span>
                    <span class="title-dec">2室1厅1卫</span>
                  </div>
                  <div>
                    <span class="title">面积:</span>
                    <span class="title-dec">21平方米</span>
                  </div>
                  <div>
                    <span class="title">朝向:</span>
                    <span class="title-dec">朝南</span>
                  </div>
                </div>
                <div class="house-info-2">
                  <div>
                    <span class="title">楼层:</span>
                    <span class="title-dec">中层(共21层)</span>
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
                    <span class="title-dec">Location</span>
                  </div>
                  <div>
                    <span class="title">要求:</span>
                    <span class="title-dec">男女不限</span>
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
              1：租房没有中介费完全零费用
              <br />2：高素质室友，让你拥有高质量的合住伙伴和生活中的朋友
              <br />3：‘一房一锁’让你安心的工作，学习和生活
              <br />4：专业维修，及时上门维修，避免影响正常生活
              <br />
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-container>
  <el-footer>© Copyright 2018 Footer Template- All Rights Reserved</el-footer>
</el-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "Detail",
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
      ]
    };
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
.bg {
  position: absolute;
  top: 0;
  left: calc((100vw - 1215px) / 2);
  max-width: 1200px;
  width: 100%;
  height: calc(100vh - 60px);
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