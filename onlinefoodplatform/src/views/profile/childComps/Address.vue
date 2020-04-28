<template>
  <div class="address">
    <el-row v-if="addresses.length === 0">
      <el-col :span="24">
        <div class="address-header">
          <el-button type="primary" plain size="small" @click="innerVisible = true">新增</el-button>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="no-address">建议添加一个地址</div>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col :span="24">
        <div class="address-header">
          <el-button type="primary" plain size="small" @click="innerVisible = true">新增</el-button>
        </div>
      </el-col>
      <el-col :span="24" v-for="(item, index) in addresses" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>收货人姓名：{{item.receiving_name}}</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="deleteAdd(index)">删除</el-button>
          </div>

          <div class="address-info">
            <div class="address-phone">联系方式：{{item.receiving_phone}}</div>
          </div>

          <div class="address-add">{{item.receiving_address}}</div>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog width="90%" title="新增地址" :visible.sync="innerVisible" append-to-body>
      <el-form label-position="left" label-width="80px" :model="addressForm">
        <el-form-item label="收货人">
          <el-input v-model="addressForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="addressForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="addressForm.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="newAddress" class="add-button">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { selectReceivingByUserId, addReceiving, delectreceiving } from "network/user";
export default {
  name: "Address",
  props: {
    userId: {
      tyep: String,
      default: ""
    }
  },
  data() {
    return {
      addresses: [],
      innerVisible: false,
      addressForm: {
        name: "",
        phone: "",
        address: ""
      }
    };
  },
  created() {
    this.getAddress();
  },
  methods: {
    getAddress() {
      selectReceivingByUserId({ user_id: this.userId }).then(res => {
        if (res.code === "000") {
          this.addresses = res.receivinglist;
        }
      });
    },
    newAddress() {
      let data = {
        user_id: this.userId,
        receiving_name: this.addressForm.name,
        receiving_phone: this.addressForm.phone,
        receiving_address: this.addressForm.address
      };
      addReceiving(data).then(res => {
        console.log(res);
        this.getAddress()
      });
    },
    deleteAdd(index) {
      delectreceiving({"receiving_id": this.addresses[index].receiving_id}).then(res => {
        if(res.code === "000") {
          this.$message("删除成功")
          this.getAddress()
        } else {
          this.$message("删除失败")
        }
      }).catch(() => {
        this.$message("删除失败")
      })
    }
  }
};
</script>

<style scoped>
.address-header {
  display: flex;
  justify-content: flex-end;
  padding: 0 10px 10px;
}
.address-info {
  display: flex;
  justify-content: space-between;
}
.address-add {
  text-align: right;
  padding-top: 10px;
  color: #888;
}
.no-address {
  padding: 10px;
}
.add-button {
  margin-bottom: 20px;
}

.address-phone {
  color: #666;
  font-size: 13px;
}
.address-name {
  color: var(--color-ele-blue);
  font-size: 15px;
}
</style>
<style>
.el-dialog__body {
  padding: 0 10px !important;
  overflow-y: scroll;
}
</style>