<template>
  <BasicMenuItem v-if="!menuHasChildren(item)" v-bind="$props" />
  <SubMenu v-if="menuHasChildren(item)">
    <template #title>
      <span class="menu_item_flex">{{ item.title }}</span>
    </template>
    <template v-for="childrenItem in item.children" :key="childrenItem.path">
      <SubMenuItem v-bind="$props" :item="childrenItem" />
    </template>
  </SubMenu>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Menu } from 'ant-design-vue'
import { MenuItem, ThemeType } from '@/types/config'
import BasicMenuItem from './BasicMenuItem.vue'

export default defineComponent({
  name: 'SubMenuItem',
  isSubMenu: true,
  components: {
    SubMenu: Menu.SubMenu,
    BasicMenuItem,
  },
  props: {
    item: {
      type: Object as PropType<MenuItem>,
      default: () => { },
    },
    theme: {
      type: String as PropType<ThemeType>,
      default: () => 'dark',
    },
    showTitle: {
      type: Boolean,
      default: () => true,
    },
  },

  setup(props) {

    function menuHasChildren(menuItem: MenuItem): boolean {
      return Reflect.has(menuItem, 'children') && !!menuItem.children && menuItem.children.length > 0
    }

    return {
      menuHasChildren,
    }
  }
})
</script>

<style scoped>
</style>