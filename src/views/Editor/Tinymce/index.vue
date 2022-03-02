<template>
  <div>
    <TinymceEditor :value="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { TinymceEditor } from '@/components'

export default defineComponent({
  components: {
    TinymceEditor,
  },
  setup() {
    const content = ref()


    return { content }
  }
})
</script>

<style scoped>
</style>