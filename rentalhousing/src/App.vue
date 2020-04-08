<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" class="nav-item"><a-button type="primary">Home</a-button></router-link>
      <router-link to="/detail" class="nav-item"><a-button type="primary">Detail</a-button></router-link>
      <router-link to="/login" class="nav-item"><a-button type="primary">Login</a-button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  position: fixed;
  top: 0;
  left: 10;
}

.nav-item {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}


</style>
