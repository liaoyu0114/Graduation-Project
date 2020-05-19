<template>
  <div class="home-cell">
    <el-row type="flex" align="center" class="cell-row" :gutter="5" v-if="widthWindow">
      <el-col :span="6">
        <div class="image">
          <el-image
                  :src="scope.housingresources_pic"
          ></el-image>
          <div class="image-icon">
            <i class="iconfont icon-pics"></i>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <el-col :span="20">
          <div class="cell-title">
            <b class="strongbox">
              <!--housingresources_address: (...)-->
              <!--housingresources_area: (...)-->
              <!--housingresources_category: (...)-->
              <!--housingresources_floor: (...)-->
              <!--housingresources_id: (...)-->
              <!--housingresources_introduce: (...)-->
              <!--housingresources_latitude: (...)-->
              <!--housingresources_longitude: (...)-->
              <!--housingresources_name: (...)-->
              <!--housingresources_orientations: (...)-->
              <!--housingresources_pic: (...)-->
              <!--housingresources_price: (...)-->
              <!--housingresources_renttype: (...)-->
              <!--housingresources_state: (...)-->
              <!--housingresources_type: (...)-->
              <!--housingresources_village: (...)-->
              <!--landlord_id: (...)-->
              <a>{{scope.housingresources_name}}</a>
            </b>
          </div>
          <div class="cell-describe">
            <div class="des-box">
              <span class="vr-line">{{scope.housingresources_type}}</span>
              <span class="vr-line">{{scope.housingresources_area}}平米</span>
              <span class="vr-line">{{scope.housingresources_floor}}层</span>
              <span>
                {{scope.housingresources_category}}
              </span>
            </div>

            <div class="dec-address">
              <span class="vr-line">{{scope.housingresources_village}}</span>
              <span class="vr-line">{{scope.housingresources_address}}</span>
              <span>武侯祠横街18号</span>
            </div>
            <div class="tag-group">
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
        <el-col :span="4" class="price-box">
          <div class>
            <span class="price">{{scope.housingresources_price}}</span>
            <span>元/每月</span>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <el-image
                  :src="scope.housingresources_pic"
                  class="image"
          ></el-image>
          <div class="cardbox">
            <div class="cell-title-mobile">高升桥地铁站 应届生免押 无中介 可月付 可短租 衣冠庙</div>
            <div class="price-box-mobile">
              <span class="price-mobile">920</span>
              <span>元/每月</span>
            </div>
            <div class="cell-describe-mobile">
              <div class="des-box-mobile">
                <span class="vr-line">3室1厅</span>
                <span class="vr-line">15平米</span>
                <span class="vr-line">高层(共17层)</span>
                <span >
                <i class="iconfont icon-profile"></i>李双全
              </span>
              </div>

              <div class="dec-address-mobile">
                <span class="vr-line">武侯名园</span>
                <span class="vr-line">武侯-武侯祠大街</span>
                <span>武侯祠横街18号</span>
              </div>
              <div class="tag-group-mobile">
                <el-tag
                        size="mini"
                        v-for="item in items"
                        :key="item.label"
                        :type="item.type"
                        effect="plain"
                >{{ item.label }}</el-tag>
              </div>
            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "HomeCell",
    props: {
      scope: {}
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
        url: "https://s1.ax1x.com/2020/04/13/GvcrND.jpg"
      };
    },
    computed: {
      widthWindow() {
        return window.screen.width > 500;
      }
    }
  };
</script>

<style scoped>
  .home-cell {
    width: 100%;
    margin: 10px 0;
    padding: 15px 0;
    border-bottom: solid #dddddd 1px;
  }
  .image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-icon {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 2px 4px;
    background: rgba(0, 0, 0, 0.2);
  }
  .icon-pics {
    color: white;
  }
  .strongbox {
    color: #0090fa;
  }
  @media screen and (min-width: 500px) {
    .home-cell:hover {
      background: #eeeeee;
    }
    .home-cell:hover a {

      color: #f45f21;
      text-decoration: underline !important;
    }
  }
  .vr-line {
    position: relative;
  }
  .vr-line:before {
    content: "\007C";
    position: absolute;
    top: 28%;
    margin-right: 3px;
    right: -0.25rem;
    line-height: 100%;
    height: 60%;
    display: inline-block;
    vertical-align: middle;
  }

  .price-box, .price-box-mobile {
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    color: #f45f21 !important;
    font-size: 1rem;
  }
  .price, .price-mobile {
    font-weight: 600;
    padding: 0 0 0 3px;
  }
  .cell-title {
    font-size: 1rem;
    padding: 0 5px;
  }
  .cell-describe, .cell-describe-mobile {
    color: #999 ;
  }
  .dec-address span,
  .des-box span {
    padding: 5px;
  }
  .dec-address-mobile span,
  .des-box-mobile span {
    padding: 5px;
  }
  .dec-address-mobile span,
  .des-box-mobile span {
    white-space: nowrap;
  }
  .cardbox {
    padding: 0 5px;
  }
  .cell-title-mobile {
    margin: 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #1890ff;
    font-size: 1rem;
  }
  .tag-group-mobile {
    margin-bottom: 10px;
  }
</style>

<style>
  .el-tag {
    margin: 5px;
  }
</style>