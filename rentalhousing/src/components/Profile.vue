<template>
  <div class="profile">
    <el-form class="form-limit" label-position="left" :model="profile" :label-width="labelWidth" :rules="profileRules">
      <el-form-item :label="label.name" prop="name">
        <el-input v-model="profile.name" placeholder="输入"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data () {
    return {
      profile: {
        name: ""
      },
      label: {
          name: "name"
      },
      profileRules: {
        name: {}
      },
      labelWidth: "0px"
    }
  },
  created () {
    this.labelWidth = window.screen.width > 500 ? "70px" : "0px"
    if (window.screen.width < 500) {
      for (let item in this.label) {
        this.label[item] = ""
      }
    }
  }
}
</script>

<style scoped>

</style>