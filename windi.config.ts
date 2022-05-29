import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  // 白名单
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],

  // 在 dev-server/build 过程开始时，Windi CSS 将会扫描你的源码并提取出你使用的工具类。 默认情况下，它会扫描在 src/ 目录下扩展名为 vue, html, mdx, pug, jsx, tsx 的文件。
  // 如果你想启用/禁用对其他文件类型或位置的扫描，你可以使用 include 以及 exclude 选项进行配置
  extract: {
    // include: [],
    // exclude: [],
  }
})