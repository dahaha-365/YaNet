import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 必须设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    // 主题配置...
  }),
  bundler: viteBundler(),
})
