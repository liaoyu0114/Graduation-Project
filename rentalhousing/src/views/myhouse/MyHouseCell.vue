<template>
  <div class="house-cell">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="house-title">租房订单ID: {{scope.lease.lease_id}}</span>
            <span class="house-title">创建时间: {{scope.lease.lease_time}}</span>
            <span class="lease-state leasing" v-if="scope.lease.lease_type === '0'  ">租赁中</span>
            <span class="lease-state leased" v-else>已结束租赁</span>
          </div>
          <el-row :gutter="20">
            <!--<el-col :span="6">-->
            <!--<div class="image">-->
            <!--<el-image-->
            <!--fit="contain"-->
            <!--:src="lease.house.housingresources_pic[0]"-->
            <!--:preview-src-list="lease.house.housingresources_pic"-->
            <!--&gt;</el-image>-->
            <!--<div class="image-icon">-->
            <!--<i class="iconfont icon-pics"></i>-->
            <!--</div>-->
            <!--</div>-->
            <!--</el-col>-->
            <el-col :span="24">
              <el-row>
                <el-col :span="24">
                  <div class="user-info">
                    <el-avatar :src="scope.landlord.landlord_pic" :size="50"></el-avatar>
                    <div class="user-info-name">{{scope.landlord.landlord_nickname}}</div>
                  </div>
                </el-col>
                <el-col :span="20">
                  <div class="cell-describe">
                    <div class="des-box">
                      <span class="vr-line">{{getHType}}</span>|
                      <span class="vr-line">{{scope.house.housingresources_area}}平米</span>|
                      <span class="vr-line">{{scope.house.housingresources_floor}}</span>
                    </div>

                    <div class="dec-address">
                      <span class="vr-line">小区：{{scope.house.housingresources_village}}</span><br>
                      <span class="vr-line">地址：{{scope.house.housingresources_address}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4" class="price-box">
                  <div class>
                    <span class="price">{{scope.house.housingresources_price}}</span>
                    <span>元/每月</span>
                  </div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="12" :offset="12">
              <div class="button-area">
                <el-button type="primary" size="mini" plain @click="showLandlord">联系房东</el-button>
                <el-button type="warning" size="mini" plain @click="showDic">地址导航</el-button>
                <el-button v-if="scope.lease.lease_type === '0'" type="danger" size="mini" plain @click="applyCancel">申请退房</el-button>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "MyHouseCell",
    props: {
      scope: {}
    },
    data() {
      return {
        diaVisiable: false,
        cancelForm: {}
      };
    },
    computed: {
      ...mapGetters(["userInfo"]),
      getHType() {
        if (this.scope.house) {
          return `${this.scope.house.housingresources_type.first}室${this.scope.house.housingresources_type.second}厅${this.scope.house.housingresources_type.third}卫`;
        }  else {
          return ""
        }
      }
    },
    created() {
      this.loadHouse()
    },
    methods: {
      loadHouse() {
        this.$post("/selectHousingresourcesById", {
          "housingresources_id": this.scope.lease.housingresources_id
        }).then(res => {
          if (res.code === "000") {
            let house = res.housingresources;
            house.housingresources_type = JSON.parse(house.housingresources_type);
            house.housingresources_pic = JSON.parse(house.housingresources_pic);
            this.scope.house = house;
          } else {
            this.$message.warning(res.msg);
          }
        })
            .catch(err => {
              console.log(err);
              this.$message.error("网络错误");
            });
      },
      showLandlord() {
        this.$confirm(
            `房东电话:${this.scope.landlord.landlord_contact}`,
            "提示",
            {
              type: "info",
              confirmButtonText: "确定",
              showCancelButton: false
            }
        );
      },
      applyCancel() {
        this.$confirm(
            "将要申请退房是否继续？？？",
            "提示",
            {
              type: "warning",
            }
        ).then(() => {
          this.lease.lease_type = 1;
          this.$message.success("退房成功")
        });
      },
      showDic() {
        window.open(
            "https://gaode.com/dir?from%5Bid%5D=B001C0650L&from%5Bname%5D=%E6%88%90%E9%83%BD%E4%BF%A1%E6%81%AF%E5%B7%A5%E7%A8%8B%E5%A4%A7%E5%AD%A6(%E8%88%AA%E7%A9%BA%E6%B8%AF%E6%A0%A1%E5%8C%BA)&from%5Blnglat%5D=103.988471%2C30.581856&from%5Bmodxy%5D=103.989711%2C30.579261&from%5Bpoitype%5D=141201&from%5Badcode%5D=510116&to%5Bname%5D=%E6%AD%A6%E4%BE%AF%E5%90%8D%E5%9B%AD&to%5Blnglat%5D=104.045738%2C30.63944&to%5Bid%5D=B001C03966&to%5Bpoitype%5D=120302&to%5Badcode%5D=510100&to%5Bmodxy%5D=104.046103%2C30.638697&type=car&policy=1"
        );
      }
    }
  };
</script>

<style scoped>
  .house-cell {
    padding: 10px;
  }

  .cell-describe {
    /*text-align: center;*/
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
    height: 150px;
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
  .lease-state {
    float: right;
    padding: 0 3px;
    font-size: 15px;
    font-weight: 500;
  }
  .leased {
    color: #b4cdd7;
  }
  .leasing {
    color: #fd5f31;
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
  .house-title {
    font-size: 14px;
    padding-right: 10px;
  }

  .button-area {
    float: right;
    padding: 0 10px;
  }
  .price-box,
  .price-box-mobile {
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    color: #f45f21 !important;
    font-size: 1rem;
  }
  .price,
  .price-mobile {
    font-weight: 600;
    padding: 0 0 0 3px;
  }
  .cell-title {
    font-size: 1rem;
    padding: 0 5px;
  }
  .cell-describe,
  .cell-describe-mobile {
    color: #999;
  }
  .des-box,
  .dec-address {
    padding: 5px 0;
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