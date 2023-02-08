<template>
  <v-bottom-navigation elevation="7" height="100" class="pa-5">
    <a href="https://www.facebook.com/book1box" target="_blank">
      <v-icon size="40">mdi-facebook</v-icon>
    </a>
    <a href="https://www.instagram.com/bookbox.1/" target="_blank">
      <v-icon size="40">mdi-instagram</v-icon>
    </a>
    <a href="http://bookboxbg.com/" target="_blank">
      <v-icon size="40">mdi-store</v-icon>
    </a>
    <RouterLink to="about">
      <v-icon size="40" class="icon"> mdi-information </v-icon>
    </RouterLink>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";

const store = useStore();
const theme = computed(() => store.state.theme);

const color = computed(() => {
  return theme.value === "light" ? "black" : "#ffffffde";
});
</script>

<style lang="scss" scoped>
a,
.icon {
  color: v-bind(color);
  text-decoration: none;
}
</style>
