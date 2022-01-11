import { defineStore } from 'pinia'
import type { RouteLocationNormalized, RouteLocationRaw, Router } from 'vue-router';


interface TabState {
  cacheTabList: Set<string>,
  tabList: RouteLocationNormalized[]
}

export const useTabStore = defineStore({
  id: 'tab',
  state: (): TabState => ({
    cacheTabList: new Set(), // 需要缓存的 tab
    tabList: [],

  }),
  getters: {
    getTabList(): RouteLocationNormalized[] {
      return this.tabList;
    },

  },
  actions: {
    addTab(route: RouteLocationNormalized) {
      const { path } = route
      const hasExit = this.tabList.some(item => item.path === path)
      if (!hasExit) {
        this.tabList.push(route);
      }
    },

    closeTabByKey(key: string, router: Router) {
      const index = this.tabList.findIndex(item => item.path === key)

      const { currentRoute, replace } = router;

      if (index === -1) return

      this.tabList.splice(index, 1)
      // 如果关闭的是当前路由
      if (currentRoute.value.path === key) {
        const len = this.tabList.length
        replace(len ? this.tabList[len - 1] : '/')
      }
    }

  },
})