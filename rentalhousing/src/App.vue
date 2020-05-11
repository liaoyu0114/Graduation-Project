<template>
  <div id="app">
    <vue-particles
      class="particles"
      color="#fff"
      v-if="showParticles"
    ></vue-particles>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created () {
    this.showParticles = window.screen.width > 500;
    if (localStorage.phone !== "" && localStorage.password !== "") {
      let data = {
        "landlord_phone": localStorage.phone,
        "landlord_password": localStorage.password
      };
      this.$post("/loginLandlord", data).then(res => {
        if (res.code === "000") {
          this.$store.commit("setUserInfo",res.Landlord);
          this.$router.push("/")
        }
      })
    }

  }
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
