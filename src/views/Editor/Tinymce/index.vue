<template>
  <div>
    <Button type="primary" @click="handleSave">保存</Button>
    <TinymceEditor v-model:value="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Button } from 'ant-design-vue';
import { TinymceEditor } from '@/components'

export default defineComponent({
  components: {
    TinymceEditor,
    Button,
  },
  setup() {
    const content = ref()

    const handleSave = () => {
      console.log(content.value);
    }


    return { content, handleSave }
  }
})
</script>

<style scoped>
</style>