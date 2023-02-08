<template>
  <v-bottom-navigation elevation="7" height="100" class="pa-5">
    <a href="https://www.facebook.com/book1box" target="_blank">
      <v-icon size="40">mdi-facebook</v-icon>
    </a>
    <a href="https://www.instagram.com/bookbox.1/" target="_blank">
      <v-icon size="40">mdi-instagram</v-icon>
    </a>
    <a href="http://bookboxbg.com/" target="_blank">
      <v-icon size="40">
        <BookboxIcon></BookboxIcon>
      </v-icon>
    </a>
    <RouterLink to="about">
      <v-icon size="40" class="icon"> mdi-information </v-icon>
    </RouterLink>
  </v-bottom-navigation>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import BookboxIcon from "@/components/BookboxIcon/BookboxIcon.vue";

import { useColor } from "@/helpers/composables/useColor";

const color = useColor();
</script>

<style lang="scss" scoped>
a,
.icon {
  color: v-bind(color);
  text-decoration: none;
}
</style>
