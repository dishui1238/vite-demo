import { MenuSetting } from './../types/config';
import { defineStore } from 'pinia'

type Locale = 'zh-CN' | 'en-US'
interface AppState {
  menuSetting: MenuSetting
  locale: Locale
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    locale: 'zh-CN',
    menuSetting: {
      collapsed: false,
    }
  }),
  getters: {
    getMenuSetting(): MenuSetting {
      return this.menuSetting
    },
    getLocale(): Locale {
      return this.locale
    }
  },
  actions: {
    setMenuSetting(setting: Partial<MenuSetting>): void {
      this.menuSetting = { ...this.menuSetting, ...setting }
    },
    setLocale(locale: Locale) {
      this.locale = locale
    }
  },
})