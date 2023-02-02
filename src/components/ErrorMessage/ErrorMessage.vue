<template>
  <div class="text-center text-red-darken-4">
    {{ messageRef }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRef } from "vue";

const props = defineProps({
  message: {
    type: String,
    default: "",
  },
});

const messageRef = toRef(props, "message");
</script>
