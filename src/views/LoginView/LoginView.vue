<template>
  <form-wrapper>
    <h2 class="text-center mb-3 font-weight-light pt-5">
      {{ PageTexts.logInToProfile }}
    </h2>
    <ErrorMessage v-if="hasError" :message="errorText" />
    <v-form
      v-model="valid"
      class="w-75 mx-auto my-0 pa-5"
      ref="form"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :label="PageTexts.email"
        :rules="emailRules"
        required
        @focus="hasError = false"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :label="PageTexts.password"
        type="password"
        :rules="passRules"
        required
        @focus="hasError = false"
      ></v-text-field>
      <div class="text-center">
        <v-btn @click="login" :disabled="!valid">{{ PageTexts.logIn }}</v-btn>
      </div>
    </v-form>
    <div class="text-center pb-5">
      <RouterLink to="register" class="text-grey-darken-1">
        {{ PageTexts.dontHaveAnAccount }}
      </RouterLink>
    </div>
  </form-wrapper>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";

import FormWrapper from "@/components/FormWrapper/FormWrapper.vue";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage.vue";

import { auth, db } from "@/firebase/index";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { doc, getDoc } from "@firebase/firestore";

import { PageTexts, Errors } from "@/helpers/enums/login/login.enum";
import { DbTables } from "@/helpers/enums/db/db.enum";
import { Actions } from "@/helpers/enums/store/store.enum";

const form = ref<HTMLFormElement>();
const router = useRouter();

const email = ref("");
const emailRules = [
  (v: string) => !!v || Errors.emailIsRequired,
  (v: string) => /.+@.+\..+/.test(v) || Errors.emailShouldBeValid,
];

const password = ref("");
const passRules = [(v: string) => !!v || Errors.passwordIsRequired];
const valid = ref(true);

const hasError = ref(false);
const errorText = ref("");

async function login() {
  const { valid } = await form?.value?.validate();

  if (valid) {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential: UserCredential) => {
        const docRef = doc(db, DbTables.users, userCredential.user.uid);

        try {
          const docRefSnapshot = await getDoc(docRef);

          if (docRefSnapshot.exists()) {
            const data = docRefSnapshot.data();
            const isAdmin: boolean = data.isAdmin;
            const { email, uid } = userCredential.user;

            store
              .dispatch(Actions.logIn, { email, uid, isAdmin })
              .then(() => router.push("/"))
              .catch((e) => console.log(e));
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((e) => {
        hasError.value = true;
        if (e.code === Errors.userNotFoundCode) {
          errorText.value = Errors.userNotFound;
          return;
        }
        if (e.code === Errors.passwordIsWrongCode) {
          errorText.value = Errors.passwordIsWrong;
          return;
        }
      });
  }
}
</script>
