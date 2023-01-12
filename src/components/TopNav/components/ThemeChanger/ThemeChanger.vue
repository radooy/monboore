<template>
  <v-btn :prepend-icon="icon" @click="onClick">Смени темата</v-btn>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import store from "@/store";

const theme = computed(() => store.state.theme);

const icon = computed(() => {
  return theme.value === "light" ? "mdi-weather-sunny" : "mdi-weather-night";
});

function onClick(): void {
  theme.value === "light"
    ? store.dispatch("updateTheme", "dark")
    : store.dispatch("updateTheme", "light");
}
</script>
