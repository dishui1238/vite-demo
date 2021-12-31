<template>
  <div>
    <a-breadcrumb :routes="routes">
      <template #itemRender="{ route, paths }">
        <router-link to @click="handleClick(route, paths, $event)">{{ route.title }}</router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { Breadcrumb } from 'ant-design-vue'
import { useRouter } from 'vue-router';
import { findPath } from '@/utils/menuHelper';
import { useMenuSetting } from '@/hooks/setting/useMenuSetting';
import { MenuItem } from '@/types/config';
import { useGo } from '@/hooks/setting/usePage';

export default defineComponent({
  name: 'LayoutBreadcrumb',
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item
  },
  setup() {
    const routes = ref<MenuItem[]>()
    const { getMenus } = useMenuSetting()
    const { currentRoute } = useRouter()
    const go = useGo()


    watchEffect(() => {
      let path = currentRoute.value.path;
      const breadcrumbList = findPath(getMenus(), (n: MenuItem) => n.path === path) as MenuItem[];
      routes.value = breadcrumbList
    })


    const handleClick = (routes: MenuItem, paths: string[], e: Event) => {
      e?.preventDefault();
      go(routes.path)
    }

    return {
      routes,
      handleClick,
    }
  }
})
</script>

<style scoped>
</style>