<template>
  <Header class="layout-header">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed" />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
  </Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useMenuSetting } from '@/hooks/setting/useMenuSetting'

export default defineComponent({
  components: {
    Header: Layout.Header,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  setup() {
    const { getCollapsed, toggleCollapsed } = useMenuSetting()


    return {
      collapsed: getCollapsed,
      toggleCollapsed,
    }
  }
})
</script>

<style lang="less" scoped>
</style>