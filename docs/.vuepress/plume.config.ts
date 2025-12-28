import { defineThemeConfig } from 'vuepress-theme-plume'
import axios from 'axios'
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

async function getGithubProfile() {
  return await axios
    .get('https://api.github.com/user/146246')
    .then((res) => res.data)
}

export async function getPlumeConfig() {
  const profile = await getGithubProfile()
  const avatarResponse = await axios
    .get(profile.avatar_url, { responseType: 'arraybuffer' })
    .then((res) => res.data)
  const publicDir = join(process.cwd(), 'docs', '.vuepress', 'public')
  writeFileSync(join(publicDir, 'avatar.png'), avatarResponse)

  return {
    logo: '/logo@0.1x.png',
    profile: {
      avatar: `/avatar.png`,
      name: profile.name,
      description: profile.bio,
      circle: true,
    },
    social: [
      {
        icon: 'github',
        link: profile.html_url,
      },
    ],
    collections: [
      {
        type: 'post',
        dir: 'blog',
        linkPrefix: 'blog',
        title: '博客',
      },
      {
        type: 'doc',
        dir: 'github',
        linkPrefix: 'github',
        title: '逛逛Github',
      },
    ],
  }
}
