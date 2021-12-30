import type { App } from 'vue';
import { Input, Layout, Menu } from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app.use(Input).use(Menu).use(Layout);
}