/// <reference path="../../../types/mihomo-config.d.ts" />
/// <reference path="../../../types/substore.d.ts" />
/// <reference path="../../../types/qure-icons.d.ts" />

import { DnsConfig, MihomoConfig, NtpConfig, SnifferConfig, TunConfig } from '../../../types/mihomo-config'
import { RegionGroup } from '../types/region'
import {
  QURE_COLOR_Argentina,
  QURE_COLOR_Australia,
  QURE_COLOR_Canada,
  QURE_COLOR_China,
  QURE_COLOR_China_Map,
  QURE_COLOR_Germany,
  QURE_COLOR_Hong_Kong,
  QURE_COLOR_Japan,
  QURE_COLOR_Korea,
  QURE_COLOR_Malaysia,
  QURE_COLOR_Singapore,
  QURE_COLOR_Turkey,
  QURE_COLOR_United_Kingdom,
  QURE_COLOR_United_States,
} from '../qure-icons'

/**
 * 通用直连ip
 */
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
]

/**
 * 通用分流规则
 */
export const rules = [
  'DST-PORT,22,直连', // Git SSH（必须放首位，防止密钥协商失败）
  'DST-PORT,3389,直连', // Windows远程连接
  'DST-PORT,5938,直连', // TeamViewer（核心端口，含TCP/UDP）
  'DST-PORT,7070,直连', // AnyDesk（主端口，含TCP/UDP音视频流）
  'DST-PORT,19966,直连', // 向日葵远程控制
  'DST-PORT,21114-21119,直连', // RustDesk（含WebSocket中继端口）
  'DST-PORT,4118,直连', // 蒲公英P2P穿透
  'DST-PORT,7654,直连', // N2N SuperNode端口
  'DST-PORT,9118,直连', // 节点小宝端口
  'DST-PORT,50000-50100,直连', // AnyDesk/RustDesk备用中继端口（关键！）
  'DST-PORT,5353,直连', // 向日葵内网穿透
  'DST-PORT,9118,直连', // 节点小宝
  'GEOIP,private,直连',
  'GEOSITE,private,直连',
  'GEOSITE,category-container,默认节点',
]

/**
 * 通用地区分组
 */
export const allRegionDefinitions: RegionGroup = [
  {
    name: 'HK香港',
    regex: /港|🇭🇰|hk|hongkong|hong kong/i,
    icon: QURE_COLOR_Hong_Kong,
  },
  {
    name: 'US美国',
    regex: /(?!.*aus)(?=.*(美|🇺🇸|us(?!t)|usa|american|united states)).*/i,
    icon: QURE_COLOR_United_States,
  },
  {
    name: 'JP日本',
    regex: /日本|🇯🇵|jp|japan/i,
    icon: QURE_COLOR_Japan,
  },
  {
    name: 'KR韩国',
    regex: /韩|🇰🇷|kr|korea/i,
    icon: QURE_COLOR_Korea,
  },
  {
    name: 'SG新加坡',
    regex: /新加坡|🇸🇬|sg|singapore/i,
    icon: QURE_COLOR_Singapore,
  },
  {
    name: 'CN中国大陆',
    regex: /中国|🇨🇳|cn|china/i,
    icon: QURE_COLOR_China_Map,
  },
  {
    name: 'TW台湾省',
    regex: /台湾|台灣|🇹🇼|tw|taiwan|tai wan/i,
    icon: QURE_COLOR_China,
  },
  {
    name: 'GB英国',
    regex: /英|🇬🇧|uk|united kingdom|great britain/i,
    icon: QURE_COLOR_United_Kingdom,
  },
  {
    name: 'DE德国',
    regex: /德国|🇩🇪|de|germany/i,
    icon: QURE_COLOR_Germany,
  },
  {
    name: 'MY马来西亚',
    regex: /马来|🇲🇾|my|malaysia/i,
    icon: QURE_COLOR_Malaysia,
  },
  {
    name: 'TK土耳其',
    regex: /土耳其|🇹🇷|tk|turkey/i,
    icon: QURE_COLOR_Turkey,
  },
  {
    name: 'CA加拿大',
    regex: /加拿大|🇨🇦|ca|canada/i,
    icon: QURE_COLOR_Canada,
  },
  {
    name: 'AU澳大利亚',
    regex: /澳大利亚|🇦🇺|au|australia|sydney/i,
    icon: QURE_COLOR_Australia,
  },
  {
    name: 'AR阿根廷',
    regex: /阿根廷|🇦🇷|arg|argentina/i,
    icon: QURE_COLOR_Argentina,
  },
]

/**
 * 预置倍率正则
 */
export const multiplierRegex = /(?<=[xX✕✖⨉倍率])([1-9]+(\.\d+)*|0{1}\.\d+)(?=[xX✕✖⨉倍率])*/i

/**
 * 共享sniffer配置
 */
export const snifferConfig: SnifferConfig = {
  enable: true,
  'parse-pure-ip': true,
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
  'skip-domain': ['Mijia Cloud'],
}

/**
 * 通用ntp配置
 */
export const ntpConfig: NtpConfig = {
  enable: true,
  'write-to-system': false,
  server: 'ntp.aliyun.com',
}

/**
 * 通用tun配置
 */
export const tunConfig: TunConfig = {
  enable: true,
  stack: 'mixed',
  device: 'utun1999',
  'auto-route': true,
  'auto-redirect': true,
  'auto-detect-interface': true,
  'strict-route': true,
  mtu: 1500,
  gso: true,
  'gso-max-size': 65536,
  'exclude-interface': ['NodeBabyLink'],
  'route-exclude-address': bypassProxyCidrs.filter((ip) => ip !== '198.18.0.0/16'),
  'dns-hijack': ['any:53', 'tcp://any:53'],
}

/**
 * 共享 DNS 配置
 */
export const dnsConfig: DnsConfig = {
  enable: true,
  'cache-algorithm': 'arc',
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
  'direct-nameserver': ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'],
  'proxy-server-nameserver': ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'],
  fallback: ['https://dns.adguard-dns.com/dns-query', 'https://dns.cloudflare.com/dns-query'],
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
  'proxy-server-nameserver-policy': {},
}

/**
 * 共享顶级配置项
 */
export const mihomoConfig: MihomoConfig = {
  port: 7890,
  'socks-port': 7891,
  'redir-port': 7892,
  'tproxy-port': 7893,
  'mixed-port': 7894,
  'allow-lan': true,
  'bind-address': '*',
  authentication: ['mihomo:yanet'],
  'skip-auth-prefixes': ['127.0.0.1/8', '::1/128'],
  mode: 'rule',
  'log-level': 'warning',
  ipv6: false,
  'keep-alive-idle': 15,
  'keep-alive-interval': 15,
  'disable-keep-alive': false,
  'find-process-mode': 'strict',
  'external-controller': '0.0.0.0:9090',
  'external-controller-cors': {
    'allow-origins': ['*'],
    'allow-private-network': true,
  },
  'external-controller-routing-mark': 5566,
  secret: 'yanet',
  'external-ui': './external-ui',
  'external-ui-url': 'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip',
  profile: {
    'store-fake-ip': true,
    'store-selected': true,
  },
  'unified-delay': true,
  'tcp-concurrent': true,
  'routing-mark': 6666,
  'geodata-mode': false,
  'geodata-loader': 'memconservative',
  'geo-auto-update': true,
  'geo-update-interval': 24,
  'geox-url': {
    geoip: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat',
    geosite: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat',
    mmdb: 'https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb',
    asn: 'https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb',
  },
  'global-ua': 'clash.meta',
  'etag-support': true,
}
