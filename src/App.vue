<template>
  <v-app :theme="theme">
    <top-nav />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import store from "./store";

import TopNav from "./components/TopNav/TopNav.vue";

const theme = computed(() => store.state.theme);
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap");

.v-application {
  font-family: "Sofia Sans", sans-serif;
  background-size: cover !important;
  background-image: url("@/assets/books.jpg") !important;
}

.v-toolbar {
  background-color: white;
}

.v-toolbar__content {
  justify-content: space-between;
}
</style>
