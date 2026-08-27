/// <reference path="../../types/mihomo-config.d.ts" />
/// <reference path="../../types/substore.d.ts" />

import { DnsConfig, NtpConfig, SnifferConfig } from '../../types/mihomo-config';

export const bypassProxyCidrs: string[] = [
  // === IPv4 ===
  '0.0.0.0/8', // 本网络/本机（部分系统/容器用 0.0.0.0 表示本机）
  '10.0.0.0/8', // RFC1918 A类私有地址（大型企业内网）
  '100.64.0.0/10', // CGNAT 共享地址空间（运营商级NAT，不可公网路由）
  '127.0.0.0/8', // 环回地址（本机回环测试）
  '169.254.0.0/16', // 链路本地地址（APIPA/mDNS/Bonjour 局域网发现）
  '172.16.0.0/12', // RFC1918 B类私有地址（172.16.0.0–172.31.255.255）
  '192.0.0.0/24', // IETF 协议分配（DS-Lite/PCP 等本地网关协议）
  '192.168.0.0/16', // RFC1918 C类私有地址（家庭/小型办公网络）
  '224.0.0.0/4', // 组播地址（mDNS/SSDP/DLNA/AirPlay 等局域网发现协议）
  '240.0.0.0/4', // 保留地址 + 广播（含 255.255.255.255，不应进入代理）
  '255.255.255.255/32', // 有限广播地址（DHCP 等依赖此地址）

  // === IPv6 ===
  '::/128', // 未指定地址（等同于 IPv4 的 0.0.0.0）
  '::1/128', // IPv6 环回地址（等同于 127.0.0.1）
  'FC00::/7', // IPv6 ULA 唯一本地地址（等同于 RFC1918 私网）
  'FE80::/10', // IPv6 链路本地地址（等同于 169.254.0.0/16）
  'FF00::/8', // IPv6 组播地址（局域网服务发现必需直连）
];

/**
 * 共享 DNS 配置
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
    'https://dns.adguard-dns.com/dns-query',
    'https://dns.cloudflare.com/dns-query',
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
      'https://dns.adguard-dns.com/dns-query',
      'https://dns.cloudflare.com/dns-query',
    ],
  },
};

/**
 * 共享sniffer配置
 */
export const snifferConfig: SnifferConfig = {
  enable: false,
  'force-dns-mapping': true,
  'parse-pure-ip': true,
  'override-destination': false,
  sniff: {
    TLS: {
      ports: [443, 8443],
    },
    HTTP: {
      ports: [80, '8080-8880'],
    },
    QUIC: {
      ports: [443, 8443],
    },
  },
  'skip-src-address': bypassProxyCidrs.filter((ip) => ip !== '198.18.0.0/16'),
};

export const ntpConfig: NtpConfig = {
  enable: true,
  'write-to-system': false,
  server: 'ntp.aliyun.com',
};
