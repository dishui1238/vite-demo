<template>
  <div class="content-wrapper">
    <textarea
      id="tinymceId"
      ref="elRef"
      :style="{ visibility: 'hidden' }"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref, computed, onMounted, nextTick } from 'vue'
// import { Upload } from 'ant-design-vue';
import Editor from '@tinymce/tinymce-vue'
import type { RawEditorSettings } from 'tinymce';
import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/silver';
import 'tinymce/icons/default/icons';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/hr';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/noneditable';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/print';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
// import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/tabfocus';
// import 'tinymce/plugins/table';
import 'tinymce/plugins/template';
import 'tinymce/plugins/textpattern';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';
import { plugins, toolbar } from './tinymce'

export default defineComponent({
  components: { Editor },
  setup() {
    const elRef = ref()
    const contentValue = ref()
    // const editorRef = ref<Editor>();


    onMounted(() => {
      tinymce.init({initOptions})
    });

    const initOptions = computed((): RawEditorSettings => {
      console.log('plugins', plugins);
      return {
        selector: `#tinymceId`,
        plugins,
        toolbar,
        language_url: '/public/tinymce/langs/zh_CN.js', //引入语言包文件
        language: 'zh_CN', //语言类型
        height: 600, //注：引入autoresize插件时，此属性失效
        placeholder: '在这里输入文字...',
        // skin: skinName.value,
        skin_url: '/public/tinymce/skins/ui/oxide',
        // emoticons_database_url: '/public/tinymce/emoticons/js/emojis.js', //更改表情插件路径
        // menubar: 'file edit insert view format table',
        // branding: false,
        // default_link_target: '_blank',
        // link_title: false,
        // object_resizing: false,
        // auto_focus: true,
        // setup: (editor) => {
        //   console.log('editor setup', editor);
        //   // editor.on('init', (e) => initSetup(e));
        // },
      }
    })

    // function initSetup(e) {
    //   const editor = unref(editorRef);
    //   if (!editor) {
    //     return;
    //   }
    //   const value = '';
    //   editor.setContent(value);
    // }



    return {
      contentValue,
      initOptions,
    }
  }
})
</script>

<style scoped lang="less">
</style>
