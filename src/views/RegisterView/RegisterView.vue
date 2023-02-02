<template>
  <form-wrapper>
    <div class="pt-5">
      <h2 class="text-center mb-3 font-weight-light">
        {{ PageTexts.register }}
      </h2>
      <h4 class="text-center mb-3 font-weight-light">
        {{ PageTexts.createNewProfile }}
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
        @focus="isEmailAlreadyInUse = false"
        :rules="emailRules"
        :label="PageTexts.email"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        @focus="isEmailAlreadyInUse = false"
        :rules="passRules"
        :label="PageTexts.password"
        type="password"
        required
      ></v-text-field>

      <v-text-field
        v-model="rePassword"
        @focus="isEmailAlreadyInUse = false"
        :rules="rePassRules"
        :label="PageTexts.rePassword"
        type="password"
        required
      ></v-text-field>
      <v-checkbox
        v-model="checked"
        @focus="isEmailAlreadyInUse = false"
        @click="openDialog"
        :label="PageTexts.agreeWithTerms"
      ></v-checkbox>
      <div class="text-center text-red-darken-4" v-if="isEmailAlreadyInUse">
        {{ Errors.emailAlreadyInUse }}
      </div>
      <div class="text-center">
        <v-btn @click="register" :disabled="!valid || !checked">
          {{ PageTexts.finish }}
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
import { useRouter } from "vue-router";
import TermsDialog from "./components/TermsDialog.vue";
import FormWrapper from "@/components/FormWrapper/FormWrapper.vue";

import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { auth, db } from "@/firebase/index";

import { Errors, PageTexts } from "@/helpers/enums/register/register.enum";
import { DbTables } from "@/helpers/enums/db.enum";

// FORM
const form = ref<HTMLFormElement>();
const valid = ref(true);

const email = ref("");
const emailRules = [
  (v: string) => !!v || Errors.emailIsRequired,
  (v: string) => /.+@.+\..+/.test(v) || Errors.emailShouldBeValid,
];

const password = ref("");
const passRules = [
  (v: string) => !!v || Errors.passwordIsRequired,
  (v: string) => v.length >= 8 || Errors.passwordShouldBeAtleast,
  (v: string) =>
    /^(?=.*?[0-9])(?=.*?[A-Za-z])(?=.*?[#?!@$%^&*\-_]).{8,20}$/.test(v) ||
    Errors.passwordShouldContain,
];

const rePassword = ref("");
const rePassRules = [
  (v: string) => !!v || Errors.rePasswordIsRequired,
  (v: string) => v.length >= 8 || Errors.rePasswordShouldBeAtleast,
  (v: string) => v === password.value || Errors.passwordsMustMatch,
];

function resetForm() {
  email.value = "";
  password.value = "";
  rePassword.value = "";
  checked.value = false;
}

// DIALOG
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

// REGISTER
const isEmailAlreadyInUse = ref(false);
const router = useRouter();

async function register(): Promise<void> {
  if (!checked.value) {
    return;
  }
  const { valid } = await form?.value?.validate();

  if (valid) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        addUserToDatabase(userCredential).then(() => {
          router.push("login");
        });
      })
      .catch((error) => {
        console.log(error);
        isEmailAlreadyInUse.value = true;
        resetForm();
      });
  }
}

async function addUserToDatabase(
  userCredential: UserCredential
): Promise<void> {
  {
    await setDoc(doc(db, DbTables.users, userCredential.user.uid), {
      email: email.value,
      isAdmin: false,
      agreeWithTerms: checked.value,
    });
  }
}
</script>
