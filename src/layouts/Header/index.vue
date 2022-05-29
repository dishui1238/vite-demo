<template>
  <Header :class="prefixCls">
    <div :class="`${prefixCls}-left`">
      <span :class="`${prefixCls}-trigger`">
        <menu-unfold-outlined v-if="collapsed" @click="toggleCollapsed" />
        <menu-fold-outlined v-else @click="toggleCollapsed" />
      </span>
      <LayoutBreadcrumb />
    </div>
    <div :class="`${prefixCls}-right`">123</div>
  </Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  display: flex;
  justify-content: space-between;
  &-left {
    display: flex;
    align-items: center;
  }
  &-trigger {
    font-size: 16px;
    padding: 1px 10px;
  }
  &-right {
    display: flex;
    align-items: center;
  }
}
</style>