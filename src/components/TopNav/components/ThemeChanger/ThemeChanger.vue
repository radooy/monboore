<template>
  <v-btn @click="onClick" class="mr-3">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";

import { Actions, ThemeVariants } from "@/helpers/enums/store/store.enum";

const store = useStore();
const theme = computed(() => store.state.theme);

const icon = computed(() => {
  return theme.value === ThemeVariants.light
    ? "mdi-weather-sunny"
    : "mdi-weather-night";
});

function onClick(): void {
  theme.value === ThemeVariants.light
    ? store.dispatch(Actions.updateTheme, ThemeVariants.dark)
    : store.dispatch(Actions.updateTheme, ThemeVariants.light);
}
</script>
