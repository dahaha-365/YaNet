# Mihomo Script TS + esbuild

通过 `TypeScript` 构建 Mihomo 覆写脚本！

## 推荐机场

| 名称                                  | 描述                                                                                                 |
|---------------------------------------|------------------------------------------------------------------------------------------------------|
| [白月光](https://s.yanet.vip/nqvuOO)  | 全球 76+ 国家/地区，103+ 节点覆盖，IEPL 专线支持，低延迟稳定连接                                     |
| [M78星云](https://s.yanet.vip/qqDI8m) | 流媒体和 GPT 解锁，有 IEPL 专线，最大提供 2GBPs 速率，12.8元/月 150G起，不限客户端数量，有 EMBY 服务 |


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
