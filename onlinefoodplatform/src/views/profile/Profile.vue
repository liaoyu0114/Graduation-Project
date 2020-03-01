<template>
  <div class="profile">
    <tourists></tourists>
  </div>
</template>

<script>
  import Tourists from './childComps/Tourists'

  export default {
    name: "Profile",
    components: {
      Tourists
    }
  }
</script>

<style scoped>
 .profile {
   background: white;
 }
</style>
