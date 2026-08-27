/// <reference path="../../types/mihomo-config.d.ts" />
/// <reference path="../../types/substore.d.ts" />

import { DnsConfig } from '../../types/mihomo-config';

/**
 * 共享 DNS 配置
 *
 * 此模块仅导出 dnsConfig，无任何模块级副作用，
 * 可被 tree-shaking 安全移除。
 */
export const dnsConfig: DnsConfig = {
  enable: true,
  listen: '127.0.0.1:1053',
  ipv6: false,
  'enhanced-mode': 'fake-ip',
  'prefer-h3': false,
  'use-hosts': true,
  'use-system-hosts': true,
  'respect-rules': true,
  'fake-ip-range': '198.18.0.1/16',
  'fake-ip-filter-mode': 'whitelist',
  'fake-ip-filter': [
    'geosite:gfw',
    'geosite:jetbrains-ai',
    'geosite:category-ai-!cn',
    'geosite:category-ai-chat-!cn',
    'geosite:telegram',
  ],
  'default-nameserver': ['223.5.5.5', '119.29.29.29'],
  nameserver: ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'],
  'direct-nameserver': [
    'https://doh.pub/dns-query',
    'https://dns.alidns.com/dns-query',
  ],
  'proxy-server-nameserver': [
    'https://doh.pub/dns-query',
    'https://dns.alidns.com/dns-query',
  ],
  fallback: [
    'https://dns.google/dns-query',
    'https://dns.adguard-dns.com/dns-query',
  ],
  'fallback-filter': {
    geoip: true,
    'geoip-code': 'CN',
  },
  'nameserver-policy': {
    'geosite:private': 'system',
    'geosite:tld-cn,cn,steam@cn,category-games@cn,microsoft@cn,apple@cn,category-game-platforms-download@cn,category-public-tracker':
      ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'],
    'geosite:jetbrains-ai,category-ai-!cn,category-ai-chat-!cn': [
      'https://dns.google/dns-query',
      'https://dns.adguard-dns.com/dns-query',
    ],
  },
};
