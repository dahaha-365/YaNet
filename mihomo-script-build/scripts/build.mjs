import { build } from 'esbuild';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const minify = process.argv.includes('--minify=true');
const outdir = fileURLToPath(new URL('../dist/', import.meta.url));

await mkdir(outdir, { recursive: true });

/**
 * 构建条目配置。
 * entry: 源文件（相对于 mihomo-script-build/ 目录）
 * name:  输出文件名前缀
 */
const entries = [
  { entry: 'src/mihomo-global-script.ts', name: 'mihomo-global-script' },
  {
    entry: 'src/mihomo-global-script-media.ts',
    name: 'mihomo-global-script-media',
  },
];

for (const { entry, name } of entries) {
  const outfile = minify ? `${outdir}/${name}.min.js` : `${outdir}/${name}.js`;

  await build({
    entryPoints: [entry],
    outfile,
    bundle: true,
    format: 'esm',
    platform: 'neutral',
    target: 'es2022',

    minify,
    keepNames: true,
    mangleProps: /^$/,
    sourcemap: false,
    legalComments: 'none',
    charset: 'utf8',
  });

  // 移除产物中的 export 语句，确保沙箱环境中可直接执行
  let code = await readFile(outfile, 'utf8');
  code = code.replace(/^\s*export\s*{[\s\S]*?}\s*;?\s*$/gm, '');
  code = code.replace(/^\s*export\s+default\s+/gm, '');
  await writeFile(outfile, code.trimEnd() + '\n');

  // 未压缩版本用 Prettier 格式化（单引号、尾逗号等）
  if (!minify) {
    await execAsync(
      `bun x prettier --write --single-quote --trailing-comma all "${outfile}"`,
      {
        cwd: fileURLToPath(new URL('../', import.meta.url)),
      },
    );
  }

  console.log(`built: dist/${minify ? `${name}.min.js` : `${name}.js`}`);
}
