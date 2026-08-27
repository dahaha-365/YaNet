/**
 * Sub-Store 脚本运行时全局变量类型定义
 *
 * 来源：https://github.com/sub-store-org/Sub-Store/blob/master/scripts/demo.js
 *
 * 设计目标：
 * - 声明 Sub-Store 脚本环境中可用的全局 API 和变量
 * - 不引入 DOM、浏览器 API 等无关全局类型
 * - 节点类型参考 mihomo 的 Clash.Meta 结构
 *
 * 建议 tsconfig：
 *   "lib": ["ES2022"]
 *   "types": ["./substore"]
 */

/// <reference path="./mihomo-config.d.ts" />

export {};

declare global {
  // ===== 基本函数和对象 =====
  const Function: FunctionConstructor;
  const Object: ObjectConstructor;
  const Math: Math;
  const JSON: JSON;
  const Array: ArrayConstructor;
  const Proxy: ProxyConstructor;

  // ===== 数据类型和数组 =====
  const ArrayBuffer: ArrayBufferConstructor;
  const SharedArrayBuffer: SharedArrayBufferConstructor;
  const BigInt: BigIntConstructor;
  const Boolean: BooleanConstructor;
  const Date: DateConstructor;
  const DataView: DataViewConstructor;
  const Map: MapConstructor;
  const Set: SetConstructor;

  const Int8Array: Int8ArrayConstructor;
  const Uint8Array: Uint8ArrayConstructor;
  const Uint8ClampedArray: Uint8ClampedArrayConstructor;
  const Int16Array: Int16ArrayConstructor;
  const Uint16Array: Uint16ArrayConstructor;
  const Int32Array: Int32ArrayConstructor;
  const Uint32Array: Uint32ArrayConstructor;
  const BigInt64Array: BigInt64ArrayConstructor;
  const BigUint64Array: BigUint64ArrayConstructor;
  const Float32Array: Float32ArrayConstructor;
  const Float64Array: Float64ArrayConstructor;

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
    | Float64Array;

  // ===== 字符串、正则表达式和符号 =====
  const String: StringConstructor;
  const RegExp: RegExpConstructor;
  const Symbol: SymbolConstructor;

  // ===== 错误对象 =====
  const Error: ErrorConstructor;
  const RangeError: RangeErrorConstructor;
  const ReferenceError: ReferenceErrorConstructor;
  const TypeError: TypeErrorConstructor;
  const SyntaxError: SyntaxErrorConstructor;
  const EvalError: EvalErrorConstructor;
  const URIError: URIErrorConstructor;
  const AggregateError: AggregateErrorConstructor;

  // ===== 反射和异步 =====
  const Reflect: typeof globalThis.Reflect;
  const Promise: PromiseConstructor;

  // ===== 编码和解码 =====
  function encodeURI(uri: string): string;
  function encodeURIComponent(uriComponent: string | number | boolean): string;
  function decodeURI(encodedURI: string): string;
  function decodeURIComponent(encodedURIComponent: string): string;

  // ===== 弱引用 =====
  const WeakRef: WeakRefConstructor;
  const WeakMap: WeakMapConstructor;
  const WeakSet: WeakSetConstructor;

  // ===== 原子操作 =====
  const Atomics: typeof globalThis.Atomics;

  // ===== 控制台输出 =====
  const console: Console;

  // ===== 全局对象 =====
  const Infinity: number;
  const NaN: number;

  // ===== Sub-Store 全局变量 =====

  /**
   * 当前正在处理的节点。
   * 仅在脚本操作（非函数式入口）中可用。
   * 结构参考 Clash.Meta (mihomo) 的代理节点格式。
   */
  var $server: SubStoreProxy;

  /**
   * 脚本参数，由用户在脚本操作配置中传入。
   */
  var $arguments: Record<string, string>;

  /**
   * 通过链接传入的参数。
   * 支持两种格式：
   * - JSON 对象：encodeURIComponent(JSON.stringify({ arg1: 'a' }))
   * - Query 字符串：encodeURIComponent('arg1=a&arg2=b')
   *
   * 包含 _req 字段（请求上下文）和 _res 字段（响应控制）。
   */
  var $options: SubStoreOptions | undefined;

  /**
   * 最终输出的文件内容。
   * 在脚本操作中对其赋值可改变输出内容。
   */
  var $content: string;

  /**
   * 文件数组，在多文件处理时可用。
   */
  var $files: string[];

  /**
   * Sub-Store OpenAPI，用于发起 HTTP 请求等。
   * 源码：https://github.com/sub-store-org/Sub-Store/blob/master/backend/src/vendor/open-api.js
   */
  var $substore: SubStoreOpenAPI;

  /**
   * 脚本资源缓存。
   * 支持 set/get/gettime/_cleanup 方法。
   */
  var scriptResourceCache: SubStoreCache;

  /**
   * 节点处理工具库，提供解析、处理、输出等功能。
   */
  var ProxyUtils: SubStoreProxyUtils;

  /**
   * 机场订阅流量信息处理工具。
   */
  var flowUtils: SubStoreFlowUtils;

  /**
   * 生成产物（订阅、配置等）。
   */
  function produceArtifact(opts: ProduceArtifactOptions): Promise<string | SubStoreProxyNode[]>;

  /**
   * 脚本执行上下文，包含环境信息、订阅源信息等。
   */
  var context: SubStoreContext;

  // ===== 类型定义 =====

  /**
   * Sub-Store 节点类型，参考 Clash.Meta (mihomo) 结构。
   */
  interface SubStoreProxy {
    name: string;
    type?: string;
    server?: string;
    port?: number;
    [key: string]: unknown;
  }

  /**
   * $options 类型。
   */
  interface SubStoreOptions {
    [key: string]: unknown;
    /** 请求上下文 */
    _req?: {
      method: string;
      url: string;
      path: string;
      query: Record<string, string>;
      params: Record<string, string>;
      headers: Record<string, string>;
      body: unknown;
      socket?: {
        remoteAddress: string;
      };
    };
    /** 响应控制 */
    _res?: {
      headers?: Record<string, string>;
      status?: number;
    };
  }

  /**
   * Sub-Store OpenAPI 类型。
   */
  interface SubStoreOpenAPI {
    http: {
      get(opts: HttpRequestOptions): Promise<HttpResponse>;
      post(opts: HttpRequestOptions): Promise<HttpResponse>;
      put(opts: HttpRequestOptions): Promise<HttpResponse>;
      delete(opts: HttpRequestOptions): Promise<HttpResponse>;
      head(opts: HttpRequestOptions): Promise<HttpResponse>;
      patch(opts: HttpRequestOptions): Promise<HttpResponse>;
      options(opts: HttpRequestOptions): Promise<HttpResponse>;
    };
    info(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
    debug(...args: unknown[]): void;
    log(...args: unknown[]): void;
    done: (val?: unknown) => void;
    notify: (title: string, subtitle: string, message: string) => void;
  }

  interface HttpRequestOptions {
    url: string;
    headers?: Record<string, string>;
    body?: string | object;
    timeout?: number;
    [key: string]: unknown;
  }

  interface HttpResponse {
    statusCode: number;
    headers: Record<string, string>;
    body: string;
  }

  /**
   * 脚本资源缓存。
   */
  interface SubStoreCache {
    set(key: string, value: unknown, ttl?: number): void;
    get(key: string, ttl?: number, removeIfExpired?: boolean): unknown | undefined;
    gettime(key: string): number | undefined;
    _cleanup(prefix?: string, ttl?: number): void;
  }

  /**
   * ProxyUtils 类型。
   */
  interface SubStoreProxyUtils {
    /** 订阅解析 */
    parse: unknown;
    /** 节点操作/文件操作 */
    process: unknown;
    /** 输出订阅 */
    produce: (proxies: SubStoreProxyNode[], platform?: string) => string;
    /** 获取随机端口 */
    getRandomPort: (range: string) => number | string;
    /** IP 地址处理 */
    ipAddress: unknown;
    isIPv4: (ip: string) => boolean;
    isIPv6: (ip: string) => boolean;
    isIP: (ip: string) => number;
    /** YAML 解析和生成 */
    yaml: {
      parse(str: string): unknown;
      safeLoad(str: string): unknown;
      safeDump(obj: unknown): string;
      dump(obj: unknown): string;
      stringify(obj: unknown): string;
    };
    /** 获取 emoji 旗帜 */
    getFlag: (name: string) => string;
    /** 移除 emoji 旗帜 */
    removeFlag: (name: string) => string;
    /** 获取 ISO 3166-1 alpha-2 代码 */
    getISO: (name: string) => string;
    /** Gist 操作类 */
    Gist: unknown;
    /** 下载资源 */
    download: unknown;
    /** 下载二进制文件 */
    downloadFile: unknown;
    /** age 加密/解密 */
    age: {
      encrypt(plaintext: string, recipient: string): Promise<string>;
      decrypt(armored: string, secretKey: string): Promise<string>;
    };
    /** MMDB 地理数据库 */
    MMDB: unknown;
    /** 判断是否为有效 UUID */
    isValidUUID: (uuid: string) => boolean;
    /** DNS over HTTPS 解析 */
    doh: unknown;
    /** Buffer 类 */
    Buffer: typeof Buffer;
    /** Base64 编码/解码 */
    Base64: {
      encode(str: string): string;
      decode(str: string): string;
      encodeToUTF8(str: string): string;
      decodeToUTF8(str: string): string;
    };
    /** JSON5 解析 */
    JSON5: {
      parse(text: string): unknown;
      stringify(value: unknown, replacer?: unknown, space?: string | number): string;
    };
    /** MD5 哈希 */
    hex_md5: (str: string) => string;
  }

  /**
   * flowUtils 类型。
   */
  interface SubStoreFlowUtils {
    /** 解析流量信息 */
    parse: (headers: Record<string, string>, body?: string) => SubStoreFlow | undefined;
    /** 格式化流量信息 */
    stringify: (flow: SubStoreFlow) => string;
  }

  interface SubStoreFlow {
    upload: number;
    download: number;
    total: number;
    expire: number;
  }

  /**
   * produceArtifact 参数选项。
   */
  interface ProduceArtifactOptions {
    /** 类型：subscription 或 collection 或 file */
    type: "subscription" | "collection" | "file";
    /** 名称 */
    name: string;
    /** 目标平台 */
    platform?: string;
    /** 输出类型 */
    produceType?: "internal" | string;
    /** 输出选项 */
    produceOpts?: Record<string, unknown>;
  }

  /**
   * 脚本上下文。
   */
  interface SubStoreContext {
    /** 订阅源数据 */
    source: Record<string, SubStoreSourceData | SubStoreCollectionData>;
    /** 运行环境 (Node / Surge / Loon 等) */
    backend: string;
    /** 运行版本 */
    version: string;
    /** 进程控制，用于动态控制后续 action 是否执行 */
    process?: {
      type: "enable" | "disable";
      customNames: string[];
    };
    /** 原始订阅内容 */
    raw: string[] | Record<string, string[] | undefined>;
  }

  interface SubStoreSourceData {
    name: string;
    displayName?: string;
    mergeSources?: string;
    ignoreFailedRemoteSub?: boolean;
    process?: unknown[];
    icon?: string;
    source?: "local" | "remote";
    url?: string;
    content?: string;
    ua?: string;
    "display-name"?: string;
    useCacheForFailedRemoteSub?: boolean;
  }

  interface SubStoreCollectionData {
    name: string;
    displayName?: string;
    mergeSources?: string;
    ignoreFailedRemoteSub?: boolean;
    icon?: string;
    process?: unknown[];
    subscriptions: string[];
    "display-name"?: string;
  }

  /**
   * 通用代理节点类型（用于 produceArtifact 返回等场景）。
   */
  interface SubStoreProxyNode {
    name: string;
    type?: string;
    server?: string;
    port?: number;
    [key: string]: unknown;
  }
}
