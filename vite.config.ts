import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import usePluginImport from "vite-plugin-importer";
import WindiCSS from 'vite-plugin-windicss'
import { generateModifyVars } from './build/generate/generateModifyVars';


const root = process.cwd();

function pathResolve(dir: string) {
  return resolve(root, ".", dir);
}

export default ({ mode }) => {
  process.env = loadEnv(mode, root);

  return defineConfig({
    root: process.cwd(), // 项目根目录（index.html 文件所在的位置）
    base: process.env.VITE_PUBLIC_PATH, // 公共基础路径
    mode, // 'development'（开发模式），'production'（生产模式）,在配置中指明将会把 serve 和 build 时的模式 都 覆盖掉。也可以通过命令行 --mode 选项来重写。
    // define: {}, // 定义全局常量替换方式
    plugins: [
      WindiCSS(),
      vue(),
      usePluginImport({
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css",
      }),
    ], // 需要用到的插件数组
    resolve: {
      // 定义别名
      alias: [
        {
          // @/xxxx => src/xxxx
          find: "@/",
          replacement: pathResolve("src") + "/",
        },
        {
          find: "@comp/",
          replacement: pathResolve("src/components") + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: generateModifyVars(),
          javascriptEnabled: true,
        },
      },
    },
    // server - 开发服务器选项
    server: {
      host: true, // 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址
      port: Number(process.env.VITE_PORT), // 端口，默认 3000
      // 代理
      proxy: {
        // 字符串简写写法
        "/foo": "http://localhost:4567",
        // 选项写法
        "/api": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        },
        // 正则表达式写法
        "^/fallback/.*": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/fallback/, ""),
        },
        // 使用 proxy 实例
        // "/api": {
        //   target: "http://jsonplaceholder.typicode.com",
        //   changeOrigin: true,
        //   configure: (proxy, options) => {
        //     // proxy 是 'http-proxy' 的实例
        //   },
        // },
      },
    },
  });
};
