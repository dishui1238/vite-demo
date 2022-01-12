<template>
  <Dropdown :trigger="['contextmenu']">
    <div class="ant-dropdown-link">{{ getTitle }}</div>
    <template #overlay>
      <Menu>
        <MenuItem v-for="item in getDropMenuList" :key="item.event">
          <div @click="handleMenuEvent(item)">{{ item.text }}</div>
        </MenuItem>
      </Menu>
    </template>
  </Dropdown>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { RouteLocationNormalized } from 'vue-router'
import { Dropdown, Menu } from 'ant-design-vue'
import { useTabDropdown } from '../useTabDropdown'

export default defineComponent({
  components: {
    Dropdown,
    Menu,
    MenuItem: Menu.Item
  },
  props: {
    tabItem: {
      type: Object as PropType<RouteLocationNormalized>,
      default: null
    }
  },
  setup(props) {

    const getTitle = computed(() => props.tabItem.meta.title as string)
    const { getDropMenuList, handleMenuEvent } = useTabDropdown()

    return {
      getTitle,
      getDropMenuList,
      handleMenuEvent,
    }
  }
})
</script>

<style scoped>
</style>