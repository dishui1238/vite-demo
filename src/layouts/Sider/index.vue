<template>
  <Sider v-model:collapsed="getCollapsed" :trigger="null" collapsible>
    <div class="logo" />
    <LayoutMenu />
  </Sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout, Menu } from 'ant-design-vue'
import { useMenuSetting } from '@/hooks/setting/useMenuSetting'
import LayoutMenu from '@/layouts/Menu/index.vue'

export default defineComponent({
  components: {
    Sider: Layout.Sider,
    Menu,
    MenuItem: Menu.Item,
    LayoutMenu,
  },
  setup() {
    const { getCollapsed } = useMenuSetting()

    return {
      getCollapsed,
    };
  }
})
</script>

<style lang="less" scoped>
</style>