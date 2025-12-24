import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  logo: '/logo.png',
  profile: {
    name: 'YaNet',
  },
  collections: [
    {
      type: 'post',
      dir: 'blog',
      title: '博客',
    },
    {
      type: 'doc',
      dir: 'github',
      linkPrefix: 'github',
      title: '逛逛Github',
    },
  ],
  // 更多配置...
})
