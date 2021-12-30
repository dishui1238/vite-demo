import { createI18n } from "vue-i18n"; //引入vue-i18n组件

// 直接引入所有的模块; import.meta.glob 懒加载
// const modules = import.meta.globEager("./*");

//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.ts
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件

import zh_CN from "./zh-CN";
import en_US from "./en-US";

// 语言库
const messages = {
  "zh-CN": zh_CN,
  "en-US": en_US,
};

//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  locale: "zh-CN",
  messages: messages,
});

export default i18n; //将i18n暴露出去，在main.js中引入挂载
