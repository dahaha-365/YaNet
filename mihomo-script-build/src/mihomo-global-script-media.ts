/// <reference path="../../types/mihomo-config.d.ts" />
/// <reference path="../../types/mihomo-script.d.ts" />
/// <reference path="../../types/substore.d.ts" />

/**
 * Mihomo 全局配置脚本 — 媒体专用版
 *
 * 适用于媒体设备（Apple TV、流媒体等）的配置处理。
 * 构建产物：dist/mihomo-global-script-media.js / dist/mihomo-global-script-media.min.js
 */

import MihomoConfig from '../../types/mihomo-config'
import { dnsConfig } from './config'

function main(config: MihomoConfig, profileName?: string): MihomoConfig {
  // ============================================================
  // 在这里编写你的 Mihomo 媒体配置处理逻辑
  // ============================================================

  config.dns = dnsConfig

  return config
}

globalThis.main = main
