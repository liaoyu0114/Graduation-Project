<template>
  <div class="homing">
    <el-container>
      <div class="body-box">
        <el-main class="limit limit-2">
          <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane label="综合浏览" name="first">综合浏览</el-tab-pane>
            <el-tab-pane label="整套出租" name="second">
              <home-cell v-for="item in 10" :key="item" @click.native="pushDetail"></home-cell>
            </el-tab-pane>
            <el-tab-pane label="单间出租" name="third">单间出租</el-tab-pane>
            <el-tab-pane label="短租/日租" name="fourth">短租/日租</el-tab-pane>
          </el-tabs>
           <el-backtop target="limit limit-2"></el-backtop>
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
        activeName: "second"
      };
    },
    methods: {
      pushDetail() {
        console.log(1)
        this.$router.push("/detail")
      }
    }
  }
</script>

<style scoped>
.homing,
.el-container,
.body-box {
  background: transparent;
}
  .body-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .limit {
    max-width: 900px;
    padding: 10px !important;
    background: white;
  }

</style>