<!--
 * @Author: your name
 * @Date: 2021-12-29 14:46:55
 * @LastEditTime: 2022-03-02 20:06:47
 * @LastEditors: Please set LastEditors
 * @Description: 菜单
 * @FilePath: /vite-demo/src/layouts/Menu/index.vue
-->

<template>
  <div>
    <Menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="inline"
      @click="handleMenuClick"
    >
      <template v-for="item in menuList" :key="item.path">
        <SubMenuItem :item="item" />
      </template>
    </Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu } from 'ant-design-vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue';
import SubMenuItem from './SubMenuItem.vue';
import { useGo } from '@/hooks/usePage';
import { useMenuSetting } from '@/hooks/useMenuSetting';

export default defineComponent({
  components: {
    Menu,
    MenuItem: Menu.Item,
    SubMenuItem,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const go = useGo()
    const { getMenus } = useMenuSetting()

    function handleMenuClick({ key }: { key: string }) {
      go(key)
    }

    return {
      selectedKeys: ref<string[]>(),
      handleMenuClick,
      menuList: getMenus(),
    };
  }
})
</script>

<style scoped>
</style>
