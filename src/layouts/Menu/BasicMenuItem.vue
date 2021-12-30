<template>
  <MenuItem :key="item.path">
    <span class="menu_item_flex">
      {{item.title}}
    </span>
  </MenuItem>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Menu } from 'ant-design-vue';
import { MenuItem, ThemeType } from '@/types/config'

export default defineComponent({
  name: 'BasicMenuItem',
  components: { MenuItem: Menu.Item },
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
