import UnoCSS from 'unocss/vite'
import { defineConfig, MarkdownOptions } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'

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
    ]
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '客户端', link: '/clients/' },
      { text: '机场', link: '/airports/' }
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