<template>
  <form-wrapper>
    <div class="pt-5">
      <h2 class="text-center mb-3 font-weight-light">Регистрирайте се</h2>
      <h4 class="text-center mb-3 font-weight-light">
        Създайте нов потребителски профил
      </h4>
    </div>
    <v-form
      class="w-75 mx-auto my-0 pa-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passRules"
        label="Парола"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="rePassword"
        :rules="rePassRules"
        label="Повтори паролата"
        type="password"
        required
      ></v-text-field>
      <v-checkbox
        v-model="checked"
        label="Съгласявам се с общите условия"
        @click="openDialog"
      ></v-checkbox>
      <div class="text-center">
        <v-btn @click="validate" :disabled="!valid || !checked">
          Завършване
        </v-btn>
      </div>
    </v-form>
    <terms-dialog
      :dialog="dialog"
      @agree="dialog = false"
      @close="closeDialog"
    ></terms-dialog>
  </form-wrapper>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TermsDialog from "./components/TermsDialog.vue";
import FormWrapper from "@/components/FormWrapper/FormWrapper.vue";

const form = ref<HTMLFormElement>();
const valid = ref(true);

const email = ref("");
const emailRules = [
  (v: string) => !!v || "Полето E-mail е задължително",
  (v: string) => /.+@.+\..+/.test(v) || "Моля въведете валиден имейл",
];

const password = ref("");
const passRules = [
  (v: string) => !!v || "Полето парола е задължително",
  (v: string) => v.length > 6 || "Паролата трябва да бъде поне 6 символа",
];

const rePassword = ref("");
const rePassRules = [
  (v: string) => !!v || "Полето повтори паролата е задължително",
  (v: string) =>
    v.length > 6 || "Повтори паролата трябва да бъде поне 6 символа",
  (v: string) => v === password.value || "Паролите трябва да съвпадат",
];

const checked = ref(false);
const dialog = ref(false);

function openDialog() {
  if (checked.value) {
    return;
  } else {
    dialog.value = true;
  }
}

function closeDialog() {
  checked.value = false;
  dialog.value = false;
}

async function validate() {
  if (!checked.value) {
    return;
  }
  const { valid } = await form?.value?.validate();

  if (valid) alert("Form is valid");
}
</script>
