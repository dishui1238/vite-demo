<template>
  <MenuItem :key="item.path">
    <MenuItemContent :item="item" />
  </MenuItem>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Menu } from 'ant-design-vue';
import { MenuItem, ThemeType } from '@/types/config'
import MenuItemContent from './MenuItemContent.vue';

export default defineComponent({
  name: 'BasicMenuItem',
  components: { MenuItem: Menu.Item, MenuItemContent },
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
      default: () => true
    },
  },
  setup() {
    return {};
  },
});
</script>
