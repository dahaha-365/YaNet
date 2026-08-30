export interface Region {
  name: string
  icon: string
  regex?: RegExp
  proxies?: string[]
  [key: string]: any
}

export type RegionGroup = Region[]
