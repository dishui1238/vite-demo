import '@/styles/index.less'

import { createApp } from "vue";
import { createPinia } from 'pinia';
import VueLuckyCanvas from '@lucky-canvas/vue'
import App from "./App.vue";
import VueI18n from "./locales";
import { router } from "./router";

const store = createPinia();


function bootstrap() {
  const app = createApp(App)

  app.use(VueI18n).use(store).use(router).use(VueLuckyCanvas)

  // 路由守卫

  app.mount("#app");

}

bootstrap()
