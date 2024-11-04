import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
import env from 'dotenv'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "YaNet",
  titleTemplate: ':title - YaNet',
  description: "Yet another Internet.",
  vite: {
    plugins: [
      AutoSidebar({
        ignoreList: ["readme.md"],
        ignoreIndexItem: true,
        collapsed: false,
        path: '/press',
      }),
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
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=' + (process.env.VUE_APP_GOOGLE_ANALYTICS_ID || env.config().parsed?.VUE_APP_GOOGLE_ANALYTICS_ID) },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.VUE_APP_GOOGLE_ANALYTICS_ID || env.config().parsed?.VUE_APP_GOOGLE_ANALYTICS_ID}');`
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '客户端', link: '/clients', activeMatch: '/clients/' },
      { text: '规则仓库', link: '/rules', activeMatch: '/rules/' },
      { text: '机场', link: '/airports', activeMatch: '/airports/' },
      { text: '图标集', link: '/iconsets', activeMatch: '/iconsets/' },
    ],

    sidebar: [],

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
