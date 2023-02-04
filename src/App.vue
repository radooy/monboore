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
  </v-app>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import TopNav from "./components/TopNav/TopNav.vue";
import LoadSpinner from "./components/LoadSpinner/LoadSpinner.vue";

import { auth } from "./firebase";
import { authUser } from "@/helpers/functions/auth";
import { Mutations } from "./helpers/enums/store/store.enum";

const store = useStore();
const theme = computed(() => store.state.theme);
const loading = ref(true);

auth.onAuthStateChanged((user) => {
  if (user) {
    authUser(user, store.dispatch).then(() => {
      loading.value = false;
    });
  } else {
    store.dispatch(Mutations.logOut).then(() => {
      loading.value = false;
    });
  }
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
</style>
