<template>
  <v-dialog
    v-model="dialogWatch"
    class="w-50 text-center"
    @click:outside="emit('close')"
  >
    <v-card>
      <v-card-title class="text-center">{{
        TermsDialog.termsHeading
      }}</v-card-title>
      <v-card-text>{{ TermsDialog.terms }} </v-card-text>
      <v-card-actions class="my-0 mx-auto">
        <v-btn elevation="5" class="bg-grey-lighten-4" @click="emit('agree')">{{
          TermsDialog.consent
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { TermsDialog } from "@/helpers/enums/register/register.enum";
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
