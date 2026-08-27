/**
 * Mihomo Script
 *
 * 这里实现真正的 main。
 *
 * 注意：
 * - 不要把 main 改成其他名字
 * - 不要 export main
 * - 不要通过 default export 暴露 main
 * - 最终通过 globalThis.main = main 暴露给 Mihomo
 */
import MihomoConfig from '../../types/mihomo-config'

function main(config: MihomoConfig, profileName?: string): MihomoConfig {
  // ============================================================
  // 在这里编写你的 Mihomo 配置处理逻辑
  // ============================================================

  return config
}

/**
 * Mihomo 脚本运行时要求全局存在 main。
 *
 * 使用 globalThis.main 而不是 export，确保生成的 JS 是：
 *
 *   function main(config) { ... }
 *   globalThis.main = main
 *
 * 而不是：
 *
 *   function a(config) { ... }
 */
globalThis.main = main
