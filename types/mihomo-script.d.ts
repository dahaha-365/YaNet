/**
 * Mihomo 全局脚本运行时类型定义
 *
 * 入口：
 *   main(config: MihomoConfig, profileName?: string): MihomoConfig
 *
 * 设计目标：
 * - 仅声明脚本运行时允许访问的全局 API
 * - 不引入 DOM、Node.js、Web API、浏览器 API 等额外全局类型
 * - Mihomo 配置类型复用 mihomo-config.d.ts 中的 MihomoConfig
 *
 * 建议 tsconfig：
 *   "lib": ["ES2022"]
 *   "types": ["./mihomo-script"]
 *
 * 注意：
 * TypeScript 的 lib 类型声明本身不能可靠地阻止脚本通过显式类型导入、
 * any、类型断言等方式绕过限制；真正的运行时权限仍应由脚本沙箱执行器保证。
 */

import { MihomoConfig, RuleProviderConfig } from './mihomo-config'

export {}

declare global {
  /**
   * Mihomo 脚本唯一入口。
   *
   * - config:    原始 Mihomo 配置，经过 main 处理后必须返回一个 MihomoConfig
   * - profileName: 当前配置文件的名称（可选）
   */
  function main(config: MihomoConfig, profileName?: string): MihomoConfig

  // ===== 常量 =====
  const Infinity: number
  const NaN: number

  // ===== 基本函数和对象 =====
  const Function: FunctionConstructor
  const Object: ObjectConstructor
  const Math: Math
  const JSON: JSON
  const Array: ArrayConstructor
  const Proxy: ProxyConstructor

  // ===== 数据类型和数组 =====
  const ArrayBuffer: ArrayBufferConstructor
  const SharedArrayBuffer: SharedArrayBufferConstructor
  const BigInt: BigIntConstructor
  const Boolean: BooleanConstructor
  const Date: DateConstructor
  const DataView: DataViewConstructor
  const Map: MapConstructor

  const Int8Array: Int8ArrayConstructor
  const Uint8Array: Uint8ArrayConstructor
  const Uint8ClampedArray: Uint8ClampedArrayConstructor
  const Int16Array: Int16ArrayConstructor
  const Uint16Array: Uint16ArrayConstructor
  const Int32Array: Int32ArrayConstructor
  const Uint32Array: Uint32ArrayConstructor
  const BigInt64Array: BigInt64ArrayConstructor
  const BigUint64Array: BigUint64ArrayConstructor
  const Float32Array: Float32ArrayConstructor
  const Float64Array: Float64ArrayConstructor

  /**
   * TypedArray 是 ECMAScript 规范中的抽象概念。
   * TypeScript 没有可直接 new 的 TypedArray 全局构造器，因此这里提供
   * 类型别名用于类型标注，而不额外暴露一个不存在的运行时构造器。
   */
  type TypedArray =
    | Int8Array
    | Uint8Array
    | Uint8ClampedArray
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | BigInt64Array
    | BigUint64Array
    | Float32Array
    | Float64Array

  // ===== 字符串、正则表达式和符号 =====
  const String: StringConstructor
  const RegExp: RegExpConstructor
  const Symbol: SymbolConstructor

  // ===== 错误对象 =====
  const Error: ErrorConstructor
  const RangeError: RangeErrorConstructor
  const ReferenceError: ReferenceErrorConstructor
  const TypeError: TypeErrorConstructor
  const SyntaxError: SyntaxErrorConstructor
  const EvalError: EvalErrorConstructor
  const URIError: URIErrorConstructor
  const AggregateError: AggregateErrorConstructor

  // ===== 反射和异步 =====
  const Reflect: typeof globalThis.Reflect
  const Promise: PromiseConstructor

  // ===== 编码和解码 =====
  function encodeURI(uri: string): string
  function encodeURIComponent(uriComponent: string | number | boolean): string
  function decodeURI(encodedURI: string): string
  function decodeURIComponent(encodedURIComponent: string): string

  // ===== 弱引用 =====
  const WeakRef: WeakRefConstructor
  const WeakMap: WeakMapConstructor
  const WeakSet: WeakSetConstructor

  // ===== 原子操作 =====
  const Atomics: typeof globalThis.Atomics

  // ===== 控制台输出 =====
  const console: Console
}

export interface serviceConfig {
  key: string
  name: string
  icon: string
  url: string
  rules: string[]
  providers?: (RuleProviderConfig & { key: string })[]
}

export interface serviceGroupConfig {
  [key: string]: serviceConfig
}
