<template>
  <div class="tab-wrapper">
    <Tabs
      v-model:activeKey="activeKeyRef"
      type="editable-card"
      hide-add
      @change="handleChange"
      @edit="handleEdit"
    >
      <TabPane v-for="pane in getTabList" :key="pane.path" :tab="pane.name" :closable="true"></TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Tabs } from 'ant-design-vue'
import { useTabStore } from '@/store/tabStore'
import { useRouter } from 'vue-router'
import { listenRouteChange } from '@/utils/routeChange'
import { useGo } from '@/hooks/setting/usePage'


export default defineComponent({
  components: {
    Tabs,
    TabPane: Tabs.TabPane
  },
  setup() {
    const activeKeyRef = ref('')
    const { getTabList, addTab, closeTabByKey } = useTabStore()

    const router = useRouter()
    const go = useGo()

    listenRouteChange((route) => {
      const { path } = route
      activeKeyRef.value = path
      addTab(route)
    })

    function handleEdit(targetKey: string): void {
      closeTabByKey(targetKey, router)
    }

    function handleChange(key: string) {
      activeKeyRef.value = key
      go(key)
    }


    return {
      activeKeyRef,
      getTabList,
      handleEdit,
      handleChange,
    }
  }
})
</script>

<style scoped lang="less">
.tab-wrapper{
  background-color: #fff;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
}
</style>
