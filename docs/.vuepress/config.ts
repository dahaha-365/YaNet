import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { getPlumeConfig } from './plume.config'
import { ThemeOptions } from 'vuepress-theme-plume'

const plumeConfig = await getPlumeConfig()
console.log(plumeConfig)

export default defineUserConfig({
  // 必须设置默认语言
  lang: 'zh-CN',
  title: 'YaNet',
  description: 'Yet another Internet.',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  theme: plumeTheme(plumeConfig as ThemeOptions),
  bundler: viteBundler(),
})
