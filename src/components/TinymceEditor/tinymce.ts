// Any plugins you want to setting has to be imported
// Detail plugins list see https://www.tinymce.com/docs/plugins/
// Custom builds see https://www.tinymce.com/download/custom-builds/
// colorpicker/contextmenu/textcolor plugin is now built in to the core editor, please remove it from your editor configuration

// imagetools
export const plugins = [
  'advlist anchor autolink code codesample  directionality  fullscreen hr insertdatetime link lists nonbreaking noneditable pagebreak paste preview print save searchreplace tabfocus  template  textpattern visualblocks visualchars wordcount table image toc',
]

export const toolbar = 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | toc alignleft aligncenter alignright alignjustify lineheight | outdent indent | numlist bullist | forecolor backcolor | pagebreak | charmap emoticons | fullscreen preview save print | hr link image | anchor pagebreak | insertdatetime | blockquote removeformat subscript superscript code codesample | searchreplace'

// export const toolbar =  ['undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment']

export const fontFormats = '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif,Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats'
