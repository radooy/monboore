<template>
  <v-app-bar>
    <v-btn @click="goTo('/')" class="logo">{{ PageTexts.appTitle }}</v-btn>
    <div>
      <v-btn v-if="!loggedIn" @click="goTo('login')">{{
        PageTexts.loginButton
      }}</v-btn>
      <v-btn v-else @click="logOut">{{ PageTexts.logOutButton }}</v-btn>
      <theme-changer></theme-changer>
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

import ThemeChanger from "./components/ThemeChanger/ThemeChanger.vue";

import store from "@/store";
import { auth } from "@/firebase";
import { signOut } from "@firebase/auth";

import { PageTexts } from "@/helpers/enums/nav/nav.enum";

const loggedIn = computed(() => store.state.loggedIn);
const router = useRouter();

function goTo(page: string): void {
  router.push(page);
}

function logOut(): void {
  signOut(auth)
    .then(() => {
      store.dispatch("logOut").then(() => {
        goTo("/");
      });
    })
    .catch((e) => console.log(e));
}
</script>
