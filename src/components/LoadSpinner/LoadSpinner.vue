<template>
  <v-card elevation="7" width="100%" height="100%">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
      class="spinner"
    ></v-progress-circular>
  </v-card>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
