/// <reference path="../../types/mihomo-config.d.ts" />
/// <reference path="../../types/mihomo-script.d.ts" />
/// <reference path="../../types/substore.d.ts" />

import MihomoConfig, { BuiltInProxyConfig, ProxyGroupConfig } from '../../types/mihomo-config'
import { dnsConfig, tunConfig, snifferConfig, ntpConfig, mihomoConfig, allRegionDefinitions, rules } from './lib/config'
import { regionGroupGenerator } from './lib/funcs'
import { serviceConfig } from '../../types/mihomo-script'
import {
  QURE_COLOR_Advertising,
  QURE_COLOR_Amazon,
  QURE_COLOR_ChatGPT,
  QURE_COLOR_Game,
  QURE_COLOR_Heart,
  QURE_COLOR_HKMTMedia,
  QURE_COLOR_JP,
  QURE_COLOR_Mouse,
  QURE_COLOR_Music_Enhance,
  QURE_COLOR_Proxy,
  QURE_COLOR_Streaming_CN,
  QURE_COLOR_StreamingCN,
} from './qure-icons'

const services: serviceConfig[] = [
  {
    key: 'openai',
    name: '国外AI',
    icon: QURE_COLOR_ChatGPT,
    url: 'https://chat.openai.com/cdn-cgi/trace',
    rules: ['GEOSITE,category-ai-!cn,国外AI', 'GEOSITE,category-ai-chat-!cn,国外AI'],
  },
  {
    key: 'media-gc',
    name: '华语媒体',
    icon: QURE_COLOR_HKMTMedia,
    url: 'https://viu.tv/',
    rules: ['RULE-SET,hk-media,华语媒体', 'RULE-SET,tw-media,华语媒体', 'RULE-SET,biliintl-media,华语媒体'],
    providers: [
      {
        key: 'hk-media',
        type: 'http',
        url: 'https://ruleset.skk.moe/Clash/non_ip/stream_hk.txt',
        path: './ruleset/ruleset.skk.moe/stream_hk.txt',
        format: 'text',
        behavior: 'classical',
      },
      {
        key: 'tw-media',
        type: 'http',
        url: 'https://ruleset.skk.moe/Clash/non_ip/stream_tw.txt',
        path: './ruleset/ruleset.skk.moe/stream_tw.txt',
        format: 'text',
        behavior: 'classical',
      },
      {
        key: 'biliintl-media',
        type: 'http',
        url: 'https://ruleset.skk.moe/Clash/non_ip/stream_biliintl.txt',
        path: './ruleset/ruleset.skk.moe/stream_biliintl.txt',
        format: 'text',
        behavior: 'classical',
      },
    ],
  },
  {
    key: 'entertainment',
    name: '海外娱乐',
    icon: QURE_COLOR_Music_Enhance,
    url: 'https://www.youtube.com/s/desktop/494dd881/img/favicon.ico',
    rules: ['GEOSITE,category-entertainment,海外娱乐'],
  },
  {
    key: 'ecommerce',
    name: '海淘电商',
    icon: QURE_COLOR_Amazon,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['GEOSITE,category-ecommerce,海淘电商', 'GEOSITE,paypal,海淘电商'],
  },
  {
    key: 'communication',
    name: '国际社交',
    icon: QURE_COLOR_Heart,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['GEOSITE,category-communication,国际社交', 'GEOSITE,category-social-media-!cn,国际社交'],
  },
  {
    key: 'communication',
    name: '游戏专线',
    icon: QURE_COLOR_Game,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['GEOSITE,category-game-accelerator-cn,直连', 'GEOSITE,category-games-!cn,游戏专线'],
  },
  {
    key: 'dmca',
    name: 'DMCA审计',
    icon: QURE_COLOR_Mouse,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['RULE-SET,dmca,DMCA审计'],
    providers: [
      {
        key: 'dmca',
        type: 'http',
        url: 'https://github.com/QuixoticHeart/rule-set/raw/refs/heads/ruleset/meta/dmca.list',
        path: './ruleset/QuixoticHeart/dmca.list',
        format: 'text',
        behavior: 'classical',
      },
    ],
  },
  {
    key: 'ads',
    name: '广告拦截',
    icon: QURE_COLOR_Advertising,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['GEOSITE,category-ads,广告拦截', 'RULE-SET,AWAvenue,广告拦截'],
    providers: [
      {
        key: 'AWAvenue',
        type: 'http',
        url: 'https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/Filters/AWAvenue-Ads-Rule-Clash.mrs',
        path: './ruleset/TG-Twilight/AWAvenue-Ads-Rule-Clash.mrs',
        format: 'mrs',
        behavior: 'domain',
      },
    ],
  },
  {
    key: 'china',
    name: '国内网站',
    icon: QURE_COLOR_StreamingCN,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['GEOIP,cn,国内网站'],
  },
  {
    key: 'japan',
    name: '日本网站',
    icon: QURE_COLOR_JP,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['GEOIP,jp,日本网站'],
  },
  {
    key: 'fish',
    name: '漏网之鱼',
    icon: QURE_COLOR_Streaming_CN,
    url: 'https://www.gstatic.com/generate_204',
    rules: ['MATCH,漏网之鱼'],
  },
]

/**
 * Mihomo 全局配置脚本
 *
 * 入口：main(config: MihomoConfig, profileName?: string): MihomoConfig
 * 构建产物：dist/mihomo-global-script.js / dist/mihomo-global-script.min.js
 */

function main(config: MihomoConfig, profileName?: string): MihomoConfig {
  // ============================================================
  // 在这里编写你的 Mihomo 配置处理逻辑
  // ============================================================
  if (config.dns?.['proxy-server-nameserver']) {
    dnsConfig['proxy-server-nameserver'] = config.dns?.['proxy-server-nameserver']
  }
  if (config.dns?.['proxy-server-nameserver-policy']) {
    dnsConfig['proxy-server-nameserver-policy'] = config.dns?.['proxy-server-nameserver-policy']
  }
  const proxies = config.proxies
  config = mihomoConfig
  config.ntp = ntpConfig
  config.dns = dnsConfig
  config.tun = tunConfig
  config.sniffer = snifferConfig
  config.rules = rules
  config['rule-providers'] = {}
  config.proxies = [
    {
      name: '直连',
      type: 'direct',
      udp: true,
      'routing-mark': 6655,
    } as BuiltInProxyConfig,
    {
      name: '拒绝',
      type: 'reject',
    } as BuiltInProxyConfig,
    ...(proxies as unknown as BuiltInProxyConfig[]),
  ]
  const regionGroups = regionGroupGenerator(proxies!, allRegionDefinitions)
  const regionGroupNames = regionGroups.map((g) => g.name).sort()
  const serviceGroups: ProxyGroupConfig[] = [
    {
      name: '默认节点',
      url: 'https://www.gstatic.com/generate_204',
      icon: QURE_COLOR_Proxy,
      type: 'select',
      proxies: [...regionGroupNames, '直连'],
      interval: 300,
      timeout: 3000,
      lazy: true,
      hidden: false,
    },
  ]
  services.forEach((svc) => {
    config.rules?.push(...svc.rules)

    if (Array.isArray(svc.providers)) {
      svc.providers.forEach((provider) => {
        config['rule-providers']![provider.key] = {
          interval: provider.interval ?? 86400,
          behavior: provider.behavior,
          format: provider.format,
          url: provider.url,
          path: provider.path,
          type: provider.type,
        }
      })
    }

    serviceGroups.push({
      name: svc.name,
      url: svc.url,
      icon: svc.icon,
      type: 'select',
      proxies: ['默认节点', ...regionGroupNames, '直连', '拒绝'],
      interval: 300,
      timeout: 3000,
      lazy: true,
      hidden: false,
    })
  })
  config['proxy-groups'] = [
    ...serviceGroups,
    ...regionGroups.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })),
  ]

  return config
}

globalThis.main = main
