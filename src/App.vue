<template>
  <ConfigProvider :locale="getAntdLocale">
    <!-- <AppProvider> -->
    <RouterView />
    <!-- </AppProvider> -->
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue'
import i18n from '@/locales/index'
import { useAppStore } from './store/app';
// import { AppProvider } from '/@/components/Application';
// import { useTitle } from '/@/hooks/web/useTitle';
// import { useLocale } from '/@/locales/useLocale';

// import 'dayjs/locale/zh-cn';
// support Multi-language
// const { getAntdLocale } = useLocale();
const { getLocale } = useAppStore()
const getAntdLocale:any = i18n.global.getLocaleMessage(getLocale);

// Listening to page changes and dynamically changing site titles
// useTitle();
</script>
