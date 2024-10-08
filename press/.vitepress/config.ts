import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  // 应用级配置选项
  lang: 'zh-CN',
  title: 'YaNet',
  description: 'Yet another Internet.',
  vite: {
    plugins: [
      UnoCSS(),
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ]
  }
})
