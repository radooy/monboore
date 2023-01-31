<template>
  <v-dialog
    v-model="dialogWatch"
    class="w-50 text-center"
    @click:outside="emit('close')"
  >
    <v-card>
      <v-card-title class="text-center">Общи условия</v-card-title>
      <v-card-text
        >Общите условия на сайта ще бъдат описани тук по-подробно от всякога.
      </v-card-text>
      <v-card-actions class="my-0 mx-auto">
        <v-btn elevation="5" class="bg-grey-lighten-4" @click="emit('agree')"
          >Съгласявам се</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, defineEmits, defineProps, toRef, watch } from "vue";

const emit = defineEmits<{
  (event: "agree"): void;
  (event: "close"): void;
}>();

const props = defineProps({
  dialog: {
    type: Boolean,
    default: false,
  },
});

const dialogProp = toRef(props, "dialog");

const dialogWatch = ref(false);
watch(dialogProp, (value: boolean) => {
  dialogWatch.value = value;
});
</script>
