<template>
  <v-app class="grey lighten-4">
    <navbar></navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navbar from "./views/navbar.vue";

export default {
  components: {
    navbar: navbar
  }
};
</script>

<style scoped>
@import url("//cdn.materialdesignicons.com/3.5.95/css/materialdesignicons.min.css");
</style>
