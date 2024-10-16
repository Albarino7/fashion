import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import viteLegacyPlugin from "@vitejs/plugin-legacy";

// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      //存放的位置
      dts: "src/auto-import.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 引入组件的,包括自定义组件
      // 存放的位置
      dts: "src/components.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    viteLegacyPlugin({
      targets: ['ie>=11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  }
})
