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

<style lang="less">
.v-toolbar__content {
  justify-content: space-between;
}
</style>
