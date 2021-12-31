import { computed, unref } from 'vue';
import { useAppStore } from "@/store/app";
import { MenuItem } from '@/types/config.d';
import menuList from '@/config/menu.config';

export function useMenuSetting() {
  const appStore = useAppStore()
  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed);
  function toggleCollapsed() {
    appStore.setMenuSetting({
      collapsed: !unref(getCollapsed),
    });
  }

  function getMenus():MenuItem[] {
    return menuList;
  }

  return {
    getCollapsed,
    toggleCollapsed,
    getMenus,
  }

}