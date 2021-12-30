// import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from "vue-router";
import { basicRoutes } from "./route";

// createRouter 创建一个可以被 Vue 应用程序使用的路由实例
// createWebHistory 创建一个 HTML5 历史，即单页面应用程序中最常见的历史记录。应用程序必须通过 http 协议被提供服务。
// createWebHashHistory 创建一个 hash 历史记录,对于没有主机的 web 应用程序 (例如 file://)，或当配置服务器不能处理任意 URL 时这非常有用

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // 用于路由实现历史记录
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }), // 在页面之间导航时控制滚动的函数 return期望滚动到哪个的位置
});
