/**
 * Mihomo Meta branch configuration type definitions.
 * Generated from MetaCubeX/mihomo docs/config.yaml (Meta branch).
 *
 * Notes:
 * - Arrays of objects use concrete generic item types (e.g. TunnelConfig[], ListenerConfig[]).
 * - Dynamic YAML maps use Record<string, T>.
 * - Proxy definitions are discriminated by `type`.
 * - YAML keys are intentionally kept in Mihomo's original kebab-case.
 */

export type MaybeArray<T> = T | T[]
export type StringMap<T = string> = Record<string, T>
export type HostsConfig = Record<string, string | string[]>
export type NameserverPolicy = Record<string, string | string[]>

export type FindProcessMode = 'always' | 'strict' | 'off'
export type MihomoMode = 'rule' | 'global' | 'direct'
export type LogLevel = 'silent' | 'error' | 'warning' | 'info' | 'debug'
export type GeositeMatcher = 'succinct' | 'mph' | 'hybrid'
export type TunStack = 'system' | 'gvisor' | 'mixed'
export type EnhancedMode = 'fake-ip' | 'redir-host'
export type FakeIpFilterMode = 'blacklist' | 'whitelist' | 'rule'
export type DnsCacheAlgorithm = 'lru' | 'arc'
export type IpVersion = 'dual' | 'ipv4' | 'ipv6' | 'ipv4-prefer' | 'ipv6-prefer'
export type Network = 'tcp' | 'udp'
export type ProxyType =
  | 'socks5'
  | 'http'
  | 'snell'
  | 'ss'
  | 'gost-relay'
  | 'vmess'
  | 'vless'
  | 'trojan'
  | 'hysteria'
  | 'hysteria2'
  | 'wireguard'
  | 'tailscale'
  | 'openvpn'
  | 'masque'
  | 'tuic'
  | 'shadowquic'
  | 'ssr'
  | 'ssh'
  | 'mieru'
  | 'sudoku'
  | 'anytls'
  | 'trusttunnel'
  | 'dns'
  | 'rematch'
  | 'direct'

export interface GeoxUrl {
  geoip?: string
  geosite?: string
  mmdb?: string
}

export type ClientAuthType =
  | ''
  | 'request'
  | 'require-any'
  | 'verify-if-given'
  | 'require-and-verify'

export interface TlsConfig {
  certificate?: string
  'private-key'?: string
  'client-auth-type'?: ClientAuthType
  'client-auth-cert'?: string
  'ech-key'?: string
  'custom-certifactes'?: string[]
}

export interface ExternalControllerCors {
  'allow-origins'?: string[]
  'allow-private-network'?: boolean
}

export interface ExperimentalConfig {
  'quic-go-disable-gso'?: boolean
}

export interface ProfileConfig {
  'store-selected'?: boolean
  'store-fake-ip'?: boolean
}

export interface TunConfig {
  enable?: boolean
  stack?: TunStack
  'dns-hijack'?: string[]
  'auto-detect-interface'?: boolean
  'auto-route'?: boolean
  mtu?: number
  gso?: boolean
  'gso-max-size'?: number
  'auto-redirect'?: boolean
  'strict-route'?: boolean
  'disable-icmp-forwarding'?: boolean
  'route-address-set'?: string[]
  'route-exclude-address-set'?: string[]
  'route-address'?: string[]
  'inet4-route-address'?: string[]
  'inet6-route-address'?: string[]
  'endpoint-independent-nat'?: boolean
  'include-interface'?: string[]
  'exclude-interface'?: string[]
  'include-uid'?: number[]
  'include-uid-range'?: string[]
  'exclude-uid'?: number[]
  'exclude-uid-range'?: string[]
  'include-mac-address'?: string[]
  'exclude-mac-address'?: string[]
  'include-android-user'?: number[]
  'exclude-android-user'?: number[]
  'include-package'?: string[]
  'exclude-package'?: string[]
}

export interface SniffProtocolConfig {
  ports?: Array<number | string>
  'override-destination'?: boolean
}

export interface SnifferConfig {
  enable?: boolean
  'force-dns-mapping'?: boolean
  'parse-pure-ip'?: boolean
  'override-destination'?: boolean
  sniff?: Record<string, SniffProtocolConfig>
  'force-domain'?: string[]
  'skip-src-address'?: string[]
  'skip-dst-address'?: string[]
  'skip-domain'?: string[]
  sniffing?: string[]
  'port-whitelist'?: string[] // @废弃
}

export interface NtpConfig {
  enable: boolean
  'write-to-system': boolean
  server: string
  port?: number
  interval?: number
  'dialer-proxy'?: 'DIRECT' | string
}

export interface TunnelConfig {
  network: Network[]
  address: string
  target: string
  proxy: string
}

export interface DnsFallbackFilter {
  geoip?: boolean
  'geoip-code'?: string
  ipcidr?: string[]
  domain?: string[]
  geosite?: string[]
}

export interface DnsConfig {
  'cache-algorithm'?: DnsCacheAlgorithm
  enable?: boolean
  'prefer-h3'?: boolean
  listen?: string
  ipv6?: boolean
  'ipv6-timeout'?: number
  'default-nameserver'?: string[]
  'enhanced-mode'?: EnhancedMode
  'fake-ip-range'?: string
  'fake-ip-range6'?: string
  'fake-ip-filter'?: string[]
  'fake-ip-filter-mode'?: FakeIpFilterMode
  'fake-ip-ttl'?: number
  'use-hosts'?: boolean
  'respect-rules'?: boolean
  nameserver?: string[]
  fallback?: string[]
  'proxy-server-nameserver'?: string[]
  'proxy-server-nameserver-policy'?: NameserverPolicy
  'direct-nameserver'?: string[]
  'direct-nameserver-follow-policy'?: boolean
  'fallback-filter'?: DnsFallbackFilter
  'fallback-lazy-query'?: boolean
  'nameserver-policy'?: NameserverPolicy
  'use-system-hosts'?: boolean
}

export interface SmuxConfig {
  enabled?: boolean
  protocol?: 'smux' | 'yamux' | 'h2mux'
  'max-connections'?: number
  'min-streams'?: number
  'max-streams'?: number
  padding?: boolean
  statistic?: boolean
  'only-tcp'?: boolean
}

export interface TlsClientConfig {
  tls?: boolean
  sni?: string
  servername?: string
  'skip-cert-verify'?: boolean
  fingerprint?: string
  'client-fingerprint'?: string
  'name-cert-verify'?: string
  certificate?: string
  'private-key'?: string
  alpn?: string[]
}

export interface Socks5ProxyConfig extends TlsClientConfig {
  name: string
  type: 'socks5'
  server: string | string[]
  port: number
  username?: string
  password?: string
  udp?: boolean
  'ip-version'?: IpVersion
}

export interface HttpProxyConfig extends TlsClientConfig {
  name: string
  type: 'http'
  server: string | string[]
  port: number
  username?: string
  password?: string
  'ip-version'?: IpVersion
}

export interface SnellObfsOptions {
  mode: 'http' | 'tls' | 'shadow-tls' | 'restls' | 'jls'
  host?: string
  password?: string
  version?: number
  alpn?: string[]
  'version-hint'?: string
  username?: string
}

export interface SnellProxyConfig {
  name: string
  type: 'snell'
  server: string | string[]
  port: number
  psk: string
  version?: 1 | 2 | 3 | 4 | 5
  udp?: boolean
  reuse?: boolean
  'client-fingerprint'?: string
  'obfs-opts'?: SnellObfsOptions
  'ip-version'?: IpVersion
}

export interface ShadowsocksPluginOptions {
  mode?: string
  host?: string
  password?: string | string[]
  version?: number
  username?: string
  alpn?: string[]
  'version-hint'?: string
  'restls-script'?: string
  key?: string
  crypt?: string
  conn?: number
  autoexpire?: number
  scavengettl?: number
  mtu?: number
  ratelimit?: number
  sndwnd?: number
  rcvwnd?: number
  datashard?: number
  parityshard?: number
  dscp?: number
  nocomp?: boolean
  acknodelay?: boolean
  nodelay?: number
  interval?: number
  resend?: number
  sockbuf?: number
  smuxver?: number
  smuxbuf?: number
  framesize?: number
  streambuf?: number
  keepalive?: number
}

export type ShadowsocksCipher =
  | 'aes-128-gcm'
  | 'aes-192-gcm'
  | 'aes-256-gcm'
  | 'aes-128-cfb'
  | 'aes-192-cfb'
  | 'aes-256-cfb'
  | 'aes-128-ctr'
  | 'aes-192-ctr'
  | 'aes-256-ctr'
  | 'rc4-md5'
  | 'chacha20-ietf'
  | 'xchacha20'
  | 'chacha20-ietf-poly1305'
  | 'xchacha20-ietf-poly1305'
  | '2022-blake3-aes-128-gcm'
  | '2022-blake3-aes-256-gcm'
  | '2022-blake3-chacha20-poly1305'
  | string

export interface ShadowsocksProxyConfig extends TlsClientConfig {
  name: string
  type: 'ss'
  server: string | string[]
  port: number
  cipher: ShadowsocksCipher
  password: string | string[]
  udp?: boolean
  'udp-over-tcp'?: boolean
  'ip-version'?: IpVersion
  plugin?:
    | 'obfs'
    | 'v2ray-plugin'
    | 'shadow-tls'
    | 'gost-plugin'
    | 'jls'
    | 'restls'
    | 'kcptun'
    | string
  'plugin-opts'?: ShadowsocksPluginOptions
  smux?: SmuxConfig
  'dialer-proxy'?: string
}

export interface GostRelayProxyConfig {
  name: string
  type: 'gost-relay'
  server: string | string[]
  port: number
  tls?: boolean
  udp?: boolean
}

export interface VmessMkcpOptions {
  mtu?: number
  tti?: number
  'uplink-capacity'?: number
  'downlink-capacity'?: number
  congestion?: boolean
  'write-buffer'?: number
  'read-buffer'?: number
  seed?: string
  header?: string
}

export interface VmessMekyaOptions extends VmessMkcpOptions {
  url?: string
  'max-write-delay'?: number
  'max-request-size'?: number
  'polling-interval-initial'?: number
  'h2-pool-size'?: number
  kcp?: VmessMkcpOptions
}

export interface VmessH2Options {
  host?: string[]
  path?: string
}

export interface GrpcOptions {
  'grpc-service-name'?: string
}

export interface VmessProxyConfig extends TlsClientConfig {
  name: string
  type: 'vmess'
  server: string | string[]
  port: number
  uuid: string
  alterId?: number
  cipher?: string
  network?: 'tcp' | 'http' | 'h2' | 'grpc' | 'mkcp' | 'mekya' | string
  'mkcp-opts'?: VmessMkcpOptions
  'mekya-opts'?: VmessMekyaOptions
  'h2-opts'?: VmessH2Options
  'grpc-opts'?: GrpcOptions
}

export interface VlessRealityOptions {
  'public-key': string
  'short-id': string
  'support-x25519mlkem768'?: boolean
}

export interface WebSocketOptions {
  path?: string
  headers?: Record<string, string>
  'max-early-data'?: number
  'early-data-header-name'?: string
  'v2ray-http-upgrade'?: boolean
  'v2ray-http-upgrade-fast-open'?: boolean
}

export interface XHttpOptions {
  path?: string
  host?: string
  mode?: string
  'extra-headers'?: Record<string, string>
}

export interface VlessProxyConfig extends TlsClientConfig {
  name: string
  type: 'vless'
  server: string | string[]
  port: number
  uuid: string
  network?: 'tcp' | 'ws' | 'grpc' | 'xhttp' | string
  udp?: boolean
  flow?: string | null
  encryption?: string
  'reality-opts'?: VlessRealityOptions
  'grpc-opts'?: GrpcOptions
  'ws-opts'?: WebSocketOptions
  'xhttp-opts'?: XHttpOptions
  alpn?: string[]
}

export interface TrojanProxyConfig extends TlsClientConfig {
  name: string
  type: 'trojan'
  server: string | string[]
  port: number
  password: string
  network?: 'tcp' | 'ws' | 'grpc' | string
  flow?: string
  'flow-show'?: boolean
  udp?: boolean
  'grpc-opts'?: GrpcOptions
}

export interface HysteriaProxyConfig {
  name: string
  type: 'hysteria'
  server: string | string[]
  port: number
  'auth-str'?: string
  auth?: string
  protocol?: string
  up?: string | number
  down?: string | number
  obfs?: string
  'obfs-password'?: string
  sni?: string
  alpn?: string[]
  'skip-cert-verify'?: boolean
  'ca-str'?: string
  'ca-path'?: string
  'client-fingerprint'?: string
  udp?: boolean
}

export interface Hysteria2ProxyConfig {
  name: string
  type: 'hysteria2'
  server: string | string[]
  port: number
  password: string
  obfs?: string
  'obfs-password'?: string
  sni?: string
  alpn?: string[]
  'skip-cert-verify'?: boolean
  'ca-str'?: string
  'ca-path'?: string
  fingerprint?: string
  udp?: boolean
  'hop-interval'?: number
}

export interface WireguardProxyConfig {
  name: string
  type: 'wireguard'
  server: string | string[]
  port: number
  ip: string
  ipv6?: string
  'public-key': string
  'private-key': string
  udp?: boolean
  reserved?: string | number[]
  mtu?: number
  'persistent-keepalive'?: number
  'ip-version'?: IpVersion
}

export interface MasqueProxyConfig {
  name: string
  type: 'masque'
  server: string | string[]
  port: number
  'private-key': string
  'public-key': string
  ip?: string
  ipv6?: string
  mtu?: number
  udp?: boolean
  network?: 'h3-l4proxy' | 'h2' | string
}

export interface TailscaleProxyConfig {
  name: string
  type: 'tailscale'
  udp?: boolean
  'exit-node'?: string
  'exit-node-allow-lan-access'?: boolean
  'control-url'?: string
  'accept-dns'?: boolean
  'accept-routes'?: boolean
  'state-dir'?: string
}

export interface OpenVpnProxyConfig {
  name: string
  type: 'openvpn'
  server: string | string[]
  port: number
  proto?: 'tcp' | 'udp' | string
  ca?: string
  cert?: string
  key?: string
  username?: string
  password?: string
  udp?: boolean
  'route-gateway'?: string
  'route-nopull'?: boolean
}

export interface TuicProxyConfig {
  name: string
  type: 'tuic'
  server: string | string[]
  port: number
  token?: string
  uuid?: string
  password?: string
  'disable-sni'?: boolean
  'reduce-rtt'?: boolean
  'request-timeout'?: number
  'udp-relay-mode'?: 'native' | 'quic' | string
  alpn?: string[]
  sni?: string
  'skip-cert-verify'?: boolean
  'congestion-controller'?: string
  udp?: boolean
}

export interface ShadowquicProxyConfig {
  name: string
  type: 'shadowquic'
  server: string | string[]
  port: number
  username: string
  password: string
  sni?: string
  'skip-cert-verify'?: boolean
  udp?: boolean
}

export interface SsrProxyConfig {
  name: string
  type: 'ssr'
  server: string | string[]
  port: number
  cipher: string
  password: string
  obfs?: string
  protocol?: string
  'protocol-param'?: string
  'obfs-param'?: string
  udp?: boolean
}

export interface SshProxyConfig {
  name: string
  type: 'ssh'
  server: string | string[]
  port: number
  username: string
  password?: string
  privateKey?: string
  'private-key-passphrase'?: string
  udp?: boolean
}

export interface MieruProxyConfig {
  name: string
  type: 'mieru'
  server: string | string[]
  port: number
  transport?: 'TCP' | 'UDP' | string
  username: string
  password: string
  udp?: boolean
}

export interface SudokuHttpMaskConfig {
  disable?: boolean
  mode?: 'legacy' | string
}

export interface SudokuProxyConfig {
  name: string
  type: 'sudoku'
  server: string | string[]
  port: number
  key: string
  'aead-method'?: 'chacha20-poly1305' | string
  'padding-min'?: number
  'padding-max'?: number
  'table-type'?: 'prefer_ascii' | string
  httpmask?: SudokuHttpMaskConfig
  'enable-pure-downlink'?: boolean
}

export interface AnyTlsProxyConfig {
  name: string
  type: 'anytls'
  server: string | string[]
  port: number
  password: string
  udp?: boolean
  sni?: string
  'skip-cert-verify'?: boolean
  'client-fingerprint'?: string
}

export interface TrustTunnelProxyConfig {
  name: string
  type: 'trusttunnel'
  server: string | string[]
  port: number
  username: string
  password: string
  'health-check'?: boolean
  udp?: boolean
  network?: Network[]
  'congestion-controller'?: string
}

export interface DnsProxyConfig {
  name: string
  type: 'dns'
  server?: string
  port?: number
  udp?: boolean
}

export interface RematchProxyConfig {
  name: string
  type: 'rematch'
  'target-rematch-name': string
  'target-sub-rule': string
}

export interface DirectProxyConfig {
  name: string
  type: 'direct'
  'interface-name'?: string
  'routing-mark'?: number
}

export type ProxyConfig =
  | Socks5ProxyConfig
  | HttpProxyConfig
  | SnellProxyConfig
  | ShadowsocksProxyConfig
  | GostRelayProxyConfig
  | VmessProxyConfig
  | VlessProxyConfig
  | TrojanProxyConfig
  | HysteriaProxyConfig
  | Hysteria2ProxyConfig
  | WireguardProxyConfig
  | TailscaleProxyConfig
  | OpenVpnProxyConfig
  | MasqueProxyConfig
  | TuicProxyConfig
  | ShadowquicProxyConfig
  | SsrProxyConfig
  | SshProxyConfig
  | MieruProxyConfig
  | SudokuProxyConfig
  | AnyTlsProxyConfig
  | TrustTunnelProxyConfig
  | DnsProxyConfig
  | RematchProxyConfig
  | DirectProxyConfig

export type ProxyGroupType =
  | 'select'
  | 'url-test'
  | 'fallback'
  | 'load-balance'
  | 'relay'
  | 'smart'
  | string

export interface ProxyGroupHealthCheck {
  url?: string
  interval?: number
  timeout?: number
  lazy?: boolean
  'expected-status'?: string
}

export interface ProxyGroupConfig {
  name: string
  type: ProxyGroupType
  proxies?: string[]
  use?: string[]
  url?: string
  interval?: number
  timeout?: number
  tolerance?: number
  lazy?: boolean
  filter?: string
  'exclude-filter'?: string
  'exclude-type'?: string
  'include-all'?: boolean
  'include-all-proxies'?: boolean
  'include-all-providers'?: boolean
  'expected-status'?: string
  'disable-udp'?: boolean
  persistent?: boolean
  'interface-name'?: string
  'routing-mark'?: number
  'url-opts'?: Record<string, unknown>
  hidden?: boolean
  icon?: string
  'health-check'?: ProxyGroupHealthCheck
}

export interface ProviderHealthCheck {
  enable?: boolean
  interval?: number
  url?: string
  timeout?: number
  lazy?: boolean
  'expected-status'?: string
}

export interface ProxyProviderOverride {
  'skip-cert-verify'?: boolean
  'name-cert-verify'?: string
  udp?: boolean
  tfo?: boolean
  'interface-name'?: string
  'routing-mark'?: number
  'dialer-proxy'?: string
  'additional-prefix'?: string
  'additional-suffix'?: string
  'proxy-name'?: string
}

export interface ProxyProviderConfig {
  type: 'http' | 'file' | 'inline' | string
  url?: string
  interval?: number
  path?: string
  proxy?: string
  'dialer-proxy'?: string
  payload?: ProxyConfig[]
  header?: Record<string, string[] | string>
  'health-check'?: ProviderHealthCheck
  override?: ProxyProviderOverride
  'filter-regex'?: string
  'exclude-filter'?: string
  'exclude-type'?: string
  'health-check-filter'?: string
}

export type RuleProviderBehavior = 'domain' | 'ipcidr' | 'classical' | string
export type RuleProviderFormat = 'yaml' | 'text' | 'mrs' | 'binary' | string

export interface RuleProviderConfig {
  type: 'http' | 'file' | 'inline' | string
  behavior: RuleProviderBehavior
  interval?: number
  path?: string
  url?: string
  proxy?: string
  format?: RuleProviderFormat
  payload?: string[]
  'health-check'?: ProviderHealthCheck
}

export interface VmessListenerUser {
  username: string | number
  uuid: string
  alterId?: number
}

export interface VlessListenerUser {
  username: string | number
  uuid: string
  flow?: string
}

export interface TrojanListenerUser {
  username: string | number
  password: string
}

export interface ShadowquicListenerUser {
  username: string
  password: string
}

export interface RealityLimitConfig {
  'after-bytes': number
  'bytes-per-sec': number
  'burst-bytes-per-sec': number
}

export interface RealityConfig {
  dest: string
  'private-key': string
  'short-id': string[]
  'server-names': string[]
  'limit-fallback-upload'?: RealityLimitConfig
  'limit-fallback-download'?: RealityLimitConfig
}

export interface ShadowquicJlsUpstream {
  addr: string
}

export interface SudokuListenerHttpMask {
  disable?: boolean
  mode?: 'legacy' | string
}

export interface ListenerBaseConfig {
  name: string
  type: ListenerType
  listen?: string
  port?: number
  udp?: boolean
  users?: unknown
  certificate?: string
  'private-key'?: string
}

export type ListenerType =
  | 'socks'
  | 'http'
  | 'mixed'
  | 'redir'
  | 'tproxy'
  | 'shadowsocks'
  | 'snell'
  | 'vmess'
  | 'tuic'
  | 'shadowquic'
  | 'tunnel'
  | 'vless'
  | 'anytls'
  | 'mieru'
  | 'sudoku'
  | 'trojan'
  | 'hysteria2'
  | 'hysteria2-realm'
  | 'trusttunnel'
  | 'tun'
  | string

export interface SocksListenerConfig extends ListenerBaseConfig {
  type: 'socks'
  users?: Array<{ username: string; password: string }>
}

export interface HttpListenerConfig extends ListenerBaseConfig {
  type: 'http'
  users?: Array<{ username: string; password: string }>
}

export interface MixedListenerConfig extends ListenerBaseConfig {
  type: 'mixed'
  users?: Array<{ username: string; password: string }>
}

export interface RedirListenerConfig extends ListenerBaseConfig {
  type: 'redir'
}
export interface TproxyListenerConfig extends ListenerBaseConfig {
  type: 'tproxy'
}

export interface ShadowsocksListenerConfig extends ListenerBaseConfig {
  type: 'shadowsocks'
  password: string
  cipher: string
}

export interface SnellListenerConfig extends ListenerBaseConfig {
  type: 'snell'
  psk: string
  version?: number
}

export interface VmessListenerConfig extends ListenerBaseConfig {
  type: 'vmess'
  users?: VmessListenerUser[]
}

export interface TuicListenerConfig extends ListenerBaseConfig {
  type: 'tuic'
}

export interface ShadowquicListenerConfig extends ListenerBaseConfig {
  type: 'shadowquic'
  users?: ShadowquicListenerUser[]
  'jls-upstream'?: ShadowquicJlsUpstream
}

export interface TunnelListenerConfig extends ListenerBaseConfig {
  type: 'tunnel'
  network?: Network[]
  target?: string
}

export interface VlessListenerConfig extends ListenerBaseConfig {
  type: 'vless'
  users?: VlessListenerUser[]
  'reality-config'?: RealityConfig
}

export interface AnyTlsListenerConfig extends ListenerBaseConfig {
  type: 'anytls'
  users?: Record<string, string>
}

export interface MieruListenerConfig extends ListenerBaseConfig {
  type: 'mieru'
  transport?: string
  users?: Record<string, string>
}

export interface SudokuListenerConfig extends ListenerBaseConfig {
  type: 'sudoku'
  key?: string
  'aead-method'?: string
  'padding-min'?: number
  'padding-max'?: number
  'table-type'?: string
  'handshake-timeout'?: number
  'enable-pure-downlink'?: boolean
  httpmask?: SudokuListenerHttpMask
}

export interface TrojanListenerConfig extends ListenerBaseConfig {
  type: 'trojan'
  users?: TrojanListenerUser[]
}

export interface Hysteria2ListenerConfig extends ListenerBaseConfig {
  type: 'hysteria2'
  users?: Record<string, string>
}

export interface Hysteria2RealmListenerConfig extends ListenerBaseConfig {
  type: 'hysteria2-realm'
  token?: string
  'max-realms'?: number
  'max-realms-per-ip'?: number
  'trusted-proxy-header'?: string
  'realm-name-pattern'?: string
}

export interface TrustTunnelListenerConfig extends ListenerBaseConfig {
  type: 'trusttunnel'
  users?: TrojanListenerUser[]
  network?: Network[]
  'congestion-controller'?: string
}

export interface TunListenerConfig extends ListenerBaseConfig {
  type: 'tun'
  stack?: TunStack
  'dns-hijack'?: string[]
  'inet4-address'?: string[]
  'inet6-address'?: string[]
}

export type ListenerConfig =
  | SocksListenerConfig
  | HttpListenerConfig
  | MixedListenerConfig
  | RedirListenerConfig
  | TproxyListenerConfig
  | ShadowsocksListenerConfig
  | SnellListenerConfig
  | VmessListenerConfig
  | TuicListenerConfig
  | ShadowquicListenerConfig
  | TunnelListenerConfig
  | VlessListenerConfig
  | AnyTlsListenerConfig
  | MieruListenerConfig
  | SudokuListenerConfig
  | TrojanListenerConfig
  | Hysteria2ListenerConfig
  | Hysteria2RealmListenerConfig
  | TrustTunnelListenerConfig
  | TunListenerConfig

export interface MihomoConfig {
  port?: number
  'socks-port'?: number
  'redir-port'?: number
  'tproxy-port'?: number
  'mixed-port'?: number
  'allow-lan'?: boolean
  'bind-address'?: string
  authentication?: string[]
  'skip-auth-prefixes'?: string[]
  'lan-allowed-ips'?: string[]
  'lan-disallowed-ips'?: string[]
  'find-process-mode'?: FindProcessMode
  mode?: MihomoMode
  'geox-url'?: GeoxUrl
  'geo-auto-update'?: boolean
  'geo-update-interval'?: number
  'geosite-matcher'?: GeositeMatcher
  'log-level'?: LogLevel
  ipv6?: boolean
  tls?: TlsConfig
  'external-controller'?: string
  'external-controller-tls'?: string
  secret?: string
  'external-controller-cors'?: ExternalControllerCors
  'external-controller-unix'?: string
  'external-controller-pipe'?: string
  'external-controller-routing-mark'?: number
  'external-ui'?: string
  'external-ui-name'?: string
  'external-ui-url'?: string
  'external-doh-server'?: string
  'interface-name'?: string
  'disable-keep-alive'?: boolean
  'keep-alive-idle'?: number
  'keep-alive-interval'?: number
  'routing-mark'?: number
  'tcp-concurrent'?: boolean
  experimental?: ExperimentalConfig
  hosts?: HostsConfig
  profile?: ProfileConfig
  tun?: TunConfig
  sniffer?: SnifferConfig
  tunnels?: TunnelConfig[]
  dns?: DnsConfig
  proxies?: ProxyConfig[]
  'proxy-groups'?: ProxyGroupConfig[]
  'proxy-providers'?: Record<string, ProxyProviderConfig>
  'rule-providers'?: Record<string, RuleProviderConfig>
  rules?: string[]
  'sub-rules'?: Record<string, string[]>
  listeners?: ListenerConfig[]
  ntp: NtpConfig
}

export type { MihomoConfig as default }
