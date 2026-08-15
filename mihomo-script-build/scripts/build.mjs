import { build } from 'esbuild'
import { mkdir } from 'node:fs/promises'

const minify = process.argv.includes('--minify=true')
const outdir = new URL('../dist/', import.meta.url)

await mkdir(outdir, { recursive: true })

await build({
  entryPoints: ['src/main.ts'],
  outfile: new URL(
    minify ? 'mihomo-config.min.js' : 'mihomo-config.js',
    outdir
  ),
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  target: 'es2022',

  // Mihomo 直接执行脚本，不需要 export/import。
  globalName: undefined,

  // min 版本压缩；unmin 版本保留可读结构。
  minify,

  // 不让 esbuild 因为函数名优化而改变 main 的函数名。
  keepNames: true,

  // 不做属性名混淆，避免 Mihomo 配置字段和脚本访问的字段被改名。
  mangleProps: false,

  // 不生成 source map，最终文件可以直接交给 Mihomo。
  sourcemap: false,

  // 保留 main 作为 IIFE 内的顶层函数声明。
  // 通过 src/main.ts 的 globalThis.main 绑定确保宿主可调用。
  footer: {
    js: '\n'
  },

  legalComments: 'none',
  charset: 'utf8'
})

console.log(`built: ${minify ? 'dist/mihomo-config.min.js' : 'dist/mihomo-config.js'}`)
