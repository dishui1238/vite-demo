<template>
  <Layout class="default-layout">
    <Sider />
    <Layout>
      <Header style="background: #fff; padding: 0" />
      <Content />
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Layout } from 'ant-design-vue'
import Header from './Header/index.vue';
import Sider from './Sider/index.vue'
import Content from './Content/index.vue'

export default defineComponent({
  name: 'defaultLayout',
  components: {
    Layout,
    Header,
    Sider,
    Content,
  },

  setup() {
    return {
    };
  }
})
</script>

<style lang="less" scoped>
.default-layout {
  height: 100vh;
}
</style>