# Mihomo Script TS + esbuild

## 目录

```text
.
├── src/
│   └── main.ts
├── scripts/
│   └── build.mjs
├── dist/
│   ├── mihomo-config.js
│   └── mihomo-config.min.js
├── mihomo-config.d.ts
├── mihomo-script.d.ts
├── package.json
└── tsconfig.json
```

## 安装

```bash
pnpm install
```

## 类型检查

```bash
pnpm typecheck
```

## 构建两个版本

```bash
pnpm build
```

输出：

```text
dist/mihomo-config.js
dist/mihomo-config.min.js
```

## 单独构建

```bash
pnpm build:unmin
pnpm build:min
```

## main 函数

入口必须保持：

```ts
function main(config: MihomoConfig): MihomoConfig {
  return config
}

globalThis.main = main
```

不要写：

```ts
export function main() {}
```

也不要把入口命名为：

```ts
function run() {}
```

因为 Mihomo 脚本运行时需要查找全局 `main`。

## 为什么使用 IIFE

esbuild 使用：

```text
format: iife
```

避免最终文件依赖 ES Module 的：

```js
import
export
```

Mihomo 可以直接把生成后的 JS 当脚本执行。

## 为什么同时设置 keepNames

：

```js
keepNames: true
```

用于尽量保留函数和类的名称。

但真正保证 Mihomo 能找到入口的不是 `keepNames`，而是：

```ts
globalThis.main = main
```

因此即使未来调整压缩参数，也不会依赖 `main` 是否被保留为局部变量名。

## API 沙箱

`mihomo-script.d.ts` 只提供 TypeScript 层面的允许 API。

运行时仍然应该由 Mihomo / 沙箱负责限制：

```text
Infinity
NaN
undefined

Function
Object
Math
JSON
Array
Proxy

ArrayBuffer
SharedArrayBuffer
BigInt
Boolean
Date
DataView
Map
TypedArray
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
BigInt64Array
BigUint64Array
Float32Array
Float64Array

String
RegExp
Symbol

Error
RangeError
ReferenceError
TypeError
SyntaxError
EvalError
URIError
AggregateError

Reflect
Promise

encodeURI
encodeURIComponent
decodeURI
decodeURIComponent

WeakRef
WeakMap
WeakSet

Atomics
console
```

TypeScript 类型声明本身不是安全边界。
