/// <reference path="../../types/mihomo-config.d.ts" />
/// <reference path="../../types/mihomo-script.d.ts" />
/// <reference path="../../types/substore.d.ts" />

import MihomoConfig from '../../types/mihomo-config';
import { dnsConfig, snifferConfig } from './config';

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
  config.dns = dnsConfig;
  config.sniffer = snifferConfig;

  return config;
}

globalThis.main = main;
