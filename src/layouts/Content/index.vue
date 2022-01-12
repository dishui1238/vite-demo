<template>
  <Content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
  >
    <RouterView></RouterView>
  </Content>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Layout } from 'ant-design-vue'
import { useMenuSetting } from '@/hooks/useMenuSetting'

export default defineComponent({
  components: {
    Content: Layout.Content,
  },
  setup() {
    const { getCollapsed } = useMenuSetting()


    return {
    };
  }
})
</script>

<style lang="less" scoped>
</style>