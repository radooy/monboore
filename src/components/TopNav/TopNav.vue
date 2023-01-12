<template>
  <v-app-bar>
    <v-btn @click="goTo('/')" class="logo">MONBOORE</v-btn>
    <div>
      <v-btn @click="goTo('register')">Регистрация</v-btn>
      <v-btn @click="goTo('login')">Логин</v-btn>
      <theme-changer></theme-changer>
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import ThemeChanger from "./components/ThemeChanger/ThemeChanger.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goTo(page: string): void {
  router.push(page);
}
</script>
