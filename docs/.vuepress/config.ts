import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import plumeConfig from './plume.config'

export default defineUserConfig({
  // 必须设置默认语言
  lang: 'zh-CN',
  title: 'YaNet',
  description: 'Yet another Internet.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  theme: plumeTheme(plumeConfig),
  bundler: viteBundler(),
})
