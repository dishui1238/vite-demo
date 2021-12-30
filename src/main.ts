import { createApp } from "vue";
import { createPinia } from 'pinia';
import VueLuckyCanvas from '@lucky-canvas/vue'
import App from "./App.vue";
import VueI18n from "./locales";
import { router } from "./router";

const store = createPinia();

createApp(App)
  .use(VueI18n)
  .use(router)
  .use(store)
  .use(VueLuckyCanvas)
  .mount("#app");
