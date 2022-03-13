<template>
  <nav>
    <v-app-bar class="white lighten-4 nav-bar" >      
      <img class="logo" src="https://aimedgeapps.com/wp-content/uploads/2021/12/Captura-de-pantalla-2021-12-15-131916.jpg" alt="">

    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name:"NavBar",
}
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    display: flex;
    min-height: 5rem;
    align-items: center;
    justify-content: space-around;
  }

  .logo {
    width: 10rem;
  }
  
  .menu {
    height: 100%;
    margin: auto 0;
  }
</style>