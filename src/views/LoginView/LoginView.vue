<template>
  <form-wrapper>
    <h2 class="text-center mb-3 font-weight-light pt-5">Влезте в профила си</h2>
    <v-form
      v-model="valid"
      class="w-75 mx-auto my-0 pa-5"
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        label="E-mail"
        :rules="emailRules"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Парола"
        type="password"
        :rules="passRules"
        required
      ></v-text-field>

      <div class="text-center">
        <v-btn @click="login">Вход</v-btn>
      </div>
    </v-form>
    <div class="text-center pb-5">
      <RouterLink to="register">
        Нямате акаунт? Създайте своя от тук!
      </RouterLink>
    </div>
  </form-wrapper>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FormWrapper from "@/components/FormWrapper/FormWrapper.vue";

const form = ref<HTMLFormElement>();

const email = ref("");
const emailRules = [
  (v: string) => !!v || "Полето E-mail е задължително",
  (v: string) => /.+@.+\..+/.test(v) || "Моля въведете валиден имейл",
];

const password = ref("");
const passRules = [(v: string) => !!v || "Полето парола е задължително"];
const valid = ref(true);

async function login() {
  const { valid } = await form?.value?.validate();

  if (valid) alert("Form is valid");
}
</script>
