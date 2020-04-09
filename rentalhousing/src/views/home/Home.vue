<template>
  <div class="home-page">
    <el-container>
      <el-header class="home-header">
        <div class="collapse-menu" @click="menuClick">
          <i :class="collapseMenu"></i>
        </div>
        <div class="header-avatar">
           <el-avatar :size="45" src="http://img1.imgtn.bdimg.com/it/u=3620016507,562397260&fm=11&gp=0.jpg"></el-avatar>
           <div class="avatar-menu">
          测试i
        </div>
        </div>
        
      </el-header>
       <el-container>
   
  
      <el-aside width="64px" class="home-aside">
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          :collapse="true"
          hide-timeout="10000"
          ref="mymenu"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isCollapse: true,
      menuWidth: "60px"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick() {
      this.isCollapse = !this.isCollapse
      this.menuWidth = window.getComputedStyle(this.$refs.mymenu.$el).width
      console.log(this.menuWidth)
      console.log(window.getComputedStyle(this.$refs.mymenu.$el).width)
    }
  },
  computed: {
    collapseMenu() {
      return this.isCollapse ? "el-icon-s-fold" : "el-icon-s-unfold";
    },
    getWidth() {
      // return this.isCollapse ? "64px" : "200px";
      return "64px"
    }
  },
  mounted () {
    this.menuWidth = window.getComputedStyle(this.$refs.mymenu.$el).width
  }
};
</script>

<style scoped>
.home-header {
  position: relative;
  background: var(--IGHT-STEEL-BLUE);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-aside {
  height: calc(100vh - 60px);
}
.header-avatar {
  position: relative;
  width: 100px;
}
.avatar-menu {
  position: absolute;
  padding: 5 0 0;
  width: 100%;
  height: 100px;
  background: var(--IGHT-STEEL-BLUE);
  display: none;
  transition: .5s ease;
}
.header-avatar:hover .avatar-menu {
  display: block;
}
.el-icon-s-fold, .el-icon-s-unfold {
  font-size: 30px;
  color: var(--CYAN-AZURE)
}
</style>

<style>
.el-menu {
  height: 100%;
}
</style>