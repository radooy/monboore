<template>
  <v-sheet
    elevation="5"
    rounded
    class="w-50 mx-auto my-0"
    :class="{ 'w-100': $vuetify.display.xs }"
  >
    <slot></slot>
  </v-sheet>
</template>
