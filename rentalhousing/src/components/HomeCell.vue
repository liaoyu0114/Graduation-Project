<template>
  <div class="home-cell">
    <el-row type="flex" align="center" class="cell-row" :gutter="5" v-if="widthWindow">
      <el-col :span="6">
        <div class="image">
          <el-image
            src="https://pic1.ajkimg.com/display/anjuke/8fc37fd0100458c0a10f5b1c548baaec/240x180c.jpg?t=1"
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
              <a href>高升桥地铁站 应届生免押 无中介 可月付 可短租 衣冠庙</a>
            </b>
          </div>
          <div class="cell-describe">
            <div class="des-box">
              <span>3室1厅</span>
              <span>15平米</span>
              <span>高层(共17层)</span>
              <span>
                <i class="iconfont icon-profile"></i>李双全
              </span>
            </div>

            <div class="dec-address">
              <span>武侯名园</span>
              <span>武侯-武侯祠大街</span>
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
            <span class="price">920</span>
            <span>元/每月</span>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="24">
        <el-card :body-style="{ padding: '0px' }">
          <el-image
            src="https://pic1.ajkimg.com/display/anjuke/8fc37fd0100458c0a10f5b1c548baaec/240x180c.jpg?t=1"
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
              <span>3室1厅</span>
              <span>15平米</span>
              <span>高层(共17层)</span>
              <span>
                <i class="iconfont icon-profile"></i>李双全
              </span>
            </div>

            <div class="dec-address-mobile">
              <span>武侯名园</span>
              <span>武侯-武侯祠大街</span>
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
  data() {
    return {
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" }
      ]
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
@media screen and (min-width: 500px) {
.home-cell:hover {
  background: #eeeeee;
}
.home-cell:hover a {

  color: #f45f21;
  text-decoration: solid 1px #f45f21 !important;
}
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