<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" class="nav-item">
        <a-button type="primary">Home</a-button>
      </router-link>
      <router-link to="/detail" class="nav-item">
        <a-button type="primary">Detail</a-button>
      </router-link>
      <router-link to="/login" class="nav-item">
        <a-button type="primary">Login</a-button>
      </router-link>
    </div>
    <vue-particles
      class="particles"
      color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    ></vue-particles>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav {
  position: fixed;
  bottom: 0;
  left: 200px;
  z-index: 99;
  display: none;
}
@media screen and (max-width: 500px) {
  .nav {
    left: 10px;
  }
}

.nav-item {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
.particles {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background: url(https://s1.ax1x.com/2020/04/15/JCutTx.jpg);
  background-size: cover;
}
</style>
