<template>
  <v-app :theme="theme">
    <LoadSpinner v-if="loading"></LoadSpinner>
    <div v-else>
      <top-nav />
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </div>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

import TopNav from "./components/TopNav/TopNav.vue";
import LoadSpinner from "./components/LoadSpinner/LoadSpinner.vue";
import FooterComponent from "./components/FooterComponent/FooterComponent.vue";

import { auth } from "./firebase";
import { authUser } from "@/helpers/functions/auth";
import { Actions } from "./helpers/enums/store/store.enum";

const store = useStore();
const loading = computed(() => store.state.loading);

const theme = computed(() => store.state.theme);

store.dispatch(Actions.loading, true);

auth.onAuthStateChanged((user) => {
  if (user) {
    return authUser(user, store.dispatch).then(() => {
      store.dispatch(Actions.loading, false);
    });
  }
  store.dispatch(Actions.loading, false);
});
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

.v-bottom-navigation__content {
  justify-content: space-around !important;
  align-self: center;
}
</style>
