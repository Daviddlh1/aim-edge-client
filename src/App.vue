<template>
<div>
  <v-app>
    <NavBar/>
    <v-main class="indigo lighten-5">
      <router-view/>
    </v-main>
  </v-app>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'App',
  components:{
    NavBar
  },
};
</script>