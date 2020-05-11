<template>
  <div class="house-cell">
    <el-row>
      <el-col :span="24" v-if="userInfo.landlord_id">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="house-title">衣冠庙地铁口 西南民大旁200米 出行便利 家具家电齐全</span>
          </div>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="image">
                <el-image :src="url"></el-image>
                <div class="image-icon">
                  <i class="iconfont icon-pics"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="18">
              <el-row>
                <el-col :span="24">
                  <div class="user-info">
                    <el-avatar :src="ur1" :size="50"></el-avatar>
                    <div class="user-info-name">出租方</div>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="cell-describe">
                    <div class="des-box">
                      <span class="vr-line">3室1厅</span>
                      <span class="vr-line">15平米</span>
                      <span class="vr-line">高层(共17层)</span>
                      <span>
                        <i class="iconfont icon-profile"></i>李双全
                      </span>
                    </div>

                    <div class="dec-address">
                      <span class="vr-line">武侯名园</span>
                      <span class="vr-line">武侯-武侯祠大街</span>
                      <span>武侯祠横街18号</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4" :offset="20" class="price-box">
                  <div class>
                    <span class="price">920</span>
                    <span>元/每月</span>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col>
        <div class="no-more">
          <el-image style="width: 50%" src="https://assets.hhh233.xyz/iPhone_cff6e_RPReplay_Final1589202378.gif"></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "MyHouseCell",
    data() {
      return {
        url: "https://s1.ax1x.com/2020/04/13/GvcrND.jpg",
        ur1: "https://s1.ax1x.com/2020/05/08/YnUMwR.jpg"
      };
    },
    computed: {
        ...mapGetters(["userInfo"])
    }
  };
</script>

<style scoped>
  .house-cell {
    padding: 10px;
  }
  .no-more {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  .house-header {
    margin-bottom: 10px;
    margin-left: 10px;
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
  .user-info {
    display: flex;
    justify-content: flex-start;
    line-height: 50px;
  }
  .user-info-name {
    padding: 0 10px;
    font-size: 15px;
    font-weight: 500;
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