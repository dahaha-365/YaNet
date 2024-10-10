import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'

import env from 'dotenv'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "YaNet",
  description: "Yet another Internet.",
  vite: {
    plugins: [
      UnoCSS(),
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    ],
    define: {
      GITHUB_CLIENT_ID: JSON.stringify(process.env.VITE_GITHUB_CLIENT_ID || env.config().parsed?.VITE_GITHUB_CLIENT_ID),
      GITHUB_CLIENT_SECRET: JSON.stringify(process.env.VITE_GITHUB_CLIENT_SECRET || env.config().parsed?.VITE_GITHUB_CLIENT_SECRET),
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '客户端', link: '/clients/' },
      { text: '规则仓库', link: '/rules/' },
      { text: '机场', link: '/airports/' },
      { text: '图标集', link: '/iconsets/' },
    ],

    sidebar: [
      {
        text: '客户端',
        items: [
          { text: 'PC/MacOS/Linux平台', link: '/clients/#pc-mac-linux平台' },
          { text: 'Android/iOS/Apple TV平台', link: '/clients/#android-ios-apple-tv平台' },
          { text: '路由器/其他平台', link: '/clients/#路由器-其他平台' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dahaha-365/YaNet' }
    ]
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    toc: {
      level: [1, 2, 3, 4]
    }
  }
})
