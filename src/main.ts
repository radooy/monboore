import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { VueFire, VueFireAuth } from "vuefire";
import { app as firebaseApp } from "./firebase";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(vuetify)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  });

app.mount("#app");
