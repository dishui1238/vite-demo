import { computed, unref, ref } from 'vue';
import { useAppStore } from "@/store/app";

export function useMenuSetting() {
  const appStore = useAppStore()
  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed);
  function toggleCollapsed() {
    appStore.setMenuSetting({
      collapsed: !unref(getCollapsed),
    });
  }

  return {
    getCollapsed,
    toggleCollapsed,
  }

}