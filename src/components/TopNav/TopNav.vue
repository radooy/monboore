<template>
  <v-app-bar>
    <v-btn
      :prepend-icon="
        theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      @click="onClick"
    >
      Смени темата
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits<{
  (event: "changeTheme", themeVal: string): void;
}>();

const theme = ref("light");

function onClick(): void {
  theme.value = theme.value === "light" ? "dark" : "light";
  emit("changeTheme", theme.value);
}
</script>
