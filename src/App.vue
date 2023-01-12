<template>
  <v-app :theme="theme">
    <top-nav @change-theme="(e) => (theme = e)" />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TopNav from "./components/TopNav/TopNav.vue";

const theme = ref("light");
</script>
