<template>
  <appstore-outlined />
  <span>{{ item.title }}</span>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MenuItem } from '@/types/config'
import {
  AppstoreOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'BasicMenuItem',
  components: { AppstoreOutlined },
  props: {
    item: {
      type: Object as PropType<MenuItem>,
      default: () => { },
    },

  },
  setup() {

    return { };
  },
});
</script>
