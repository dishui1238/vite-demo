<template>
  <Sider
    v-model:collapsed="getCollapsed"
    :trigger="null"
    collapsible
    :width="210"
    :collapsedWidth="48"
  >
    <div class="logo" />
    <LayoutMenu />
  </Sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout, Menu } from 'ant-design-vue'
import { useMenuSetting } from '@/hooks/useMenuSetting'
import LayoutMenu from '@/layouts/Menu/index.vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    Sider: Layout.Sider,
    Menu,
    MenuItem: Menu.Item,
    LayoutMenu,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
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