<template>
  <div class="profile">
    <!--<tologin v-if="userInfo"></tologin>-->
    <tourists></tourists>
    <el-button @click="signClick">sign</el-button>
    <el-button @click="testClick">test</el-button>
  </div>
</template>

<script>
  import Tourists from './childComps/Tourists'
  import Tologin from 'components/content/tologin/Tologin'
  import {sign} from "../../network/user";

  export default {
    name: "Profile",
    data() {
      return {
        userInfo: {}
      }
    },
    components: {
      Tourists,
      Tologin
    },
    created() {
      this.userInfo = this.$store.state.userInfo
    },
    methods: {
      signClick() {
        let info = {
          user_phone: "1234567890",
          user_password: "123456"
        };
        sign(info).then( res => {
          console.log(res);
        })
      },
      testClick() {

      }
    }
  }
</script>

<style scoped>
 .profile {
   background: white;
 }
</style>
