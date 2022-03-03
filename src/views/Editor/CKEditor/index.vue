<template>
  <div class="content-wrapper">
    content-wrapper
    <!-- <ckeditor v-model="content" :editor="editor" :config="editorConfig" ref="editorRef" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
// import ClassicEditor from '@ckeditor/ckeditor5-vue';
// import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily'


export default defineComponent({
  setup() {
    // const content = ref()
    // const editorRef = ref()
    // const editor = ClassicEditor
    // const editorConfig = {
    //   simpleUpload: {},
    //   // plugins: [FontFamily],
    //   toolbar: {
    //     items: [
    //       'heading',
    //       '|',
    //       'blockQuote',
    //       '|',
    //       'bold', 'italic',
    //       // 'alignment', '|',
    //       'strikethrough', 'underline', 'subscript', 'superscript',
    //       '|',
    //       'link',
    //       '|',
    //       'bulletedList', 'numberedList',
    //       'todoList',
    //       // '-', // break point
    //       'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
    //       '|',
    //       // 'code', 'codeBlock', '|',
    //       'insertTable',
    //       'outdent', 'indent',
    //       '|',
    //       'imageUpload',
    //       '|',
    //       'undo', 'redo',
    //     ],
    //     shouldNotGroupWhenFull: true,
    //   },
    //   // alignment: {
    //   //   options: ['left', 'right', 'center'],
    //   // },
    //   language: 'zh-cn',
    //   // fontBackgroundColor: {
    //   //   colors: ['red', 'yellow'],
    //   // },

    // }

    // onMounted(() => {
    //   // console.log('123',Array.from(editorRef.value.ui.componentFactory.names()));
    // })


    return {
      // editorRef,
      // content,
      // editorConfig,
      // editor,
    }
  }
})
</script>

<style scoped lang="less">
.editable-container {
  position: relative;
  border: 1px solid #ddd;
  border-top: 0;
  background: #eee;
  padding: 3em;
  overflow-y: scroll;
  height: calc(100% - 40px);
  .ck-editor__editable {
    width: 21cm;
    max-width: 100%;
    min-height: 29.7cm;
    margin: 0 auto;
    padding: 1cm 1.2cm;
    border: 1px #d3d3d3 solid !important;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1) !important;
  }
}
</style>
