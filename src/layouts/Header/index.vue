<template>
  <Header :class="prefixCls">
    <div :class="`${prefixCls}-left`">
      <span :class="`${prefixCls}-trigger`">
        <menu-unfold-outlined v-if="collapsed" @click="toggleCollapsed" />
        <menu-fold-outlined v-else @click="toggleCollapsed" />
      </span>
      <LayoutBreadcrumb />
    </div>
  </Header>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue'
import { Layout } from 'ant-design-vue'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { useMenuSetting } from '@/hooks/useMenuSetting'
import LayoutBreadcrumb from './components/Breadcrumb.vue';

export default defineComponent({
  components: {
    Header: Layout.Header,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LayoutBreadcrumb,
  },
  setup() {
    const prefixCls = 'layout-header'
    const { getCollapsed, toggleCollapsed } = useMenuSetting()

    return {
      prefixCls,
      collapsed: getCollapsed,
      toggleCollapsed,
    }
  }
})
</script>

<style lang="less" scoped>
.layout-header {
  &-left {
    display: flex;
    align-items: center;
  }
  &-trigger {
    font-size: 16px;
    padding: 1px 10px;
  }
}
</style>