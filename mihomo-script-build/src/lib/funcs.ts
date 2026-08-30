import { BuiltInProxyConfig } from '../../../types/mihomo-config'
import { Region, RegionGroup } from '../types/region'
import { QURE_COLOR_World_Map } from '../qure-icons'

const GROUP_BASE_OPTION = {
  interval: 300,
  timeout: 3000,
  url: 'https://www.gstatic.com/generate_204',
  lazy: true,
  'max-failed-times': 3,
  hidden: false,
}

/**
 * 地区分组生成
 * @param proxies 代理列表
 * @param regionGroup 地区分组
 */
export function regionGroupGenerator(proxies: BuiltInProxyConfig[], regionGroup: RegionGroup) {
  const regionGroups: Record<string, any> = {}
  const otherProxies: string[] = []

  for (const r of regionGroup) {
    regionGroups[r.name] = {
      ...r,
      type: 'url-test',
      tolerance: 50,
      proxies: [],
    }
  }

  regionGroups['other'] = {
    name: '其他节点',
    icon: QURE_COLOR_World_Map,
    proxies: otherProxies,
  }

  for (let i = 0; i < proxies.length; i++) {
    const proxyName = proxies[i].name
    let matched = false

    for (let j = 0; j < regionGroup.length; j++) {
      const region = regionGroup[j]
      if (region.regex && region.regex.test(proxyName)) {
        regionGroups[region.name].proxies.push(proxyName)
        matched = true
        break
      }
    }

    if (!matched) {
      otherProxies.push(proxyName)
    }
  }

  const generatedRegionGroups: any[] = []

  for (const r of regionGroup) {
    const group = regionGroups[r.name]
    if (group.proxies.length > 0) {
      generatedRegionGroups.push({
        ...GROUP_BASE_OPTION,
        name: r.name,
        type: 'url-test',
        tolerance: 50,
        icon: r.icon,
        proxies: group.proxies,
      })
    }
  }

  if (otherProxies.length > 0) {
    generatedRegionGroups.push({
      ...GROUP_BASE_OPTION,
      name: '其他节点',
      type: 'select',
      proxies: otherProxies,
      icon: QURE_COLOR_World_Map,
    })
  }

  return generatedRegionGroups
}

/**
 * 过滤代理倍率
 * @param proxies 代理列表
 * @param regex 倍率正则
 * @param limit 倍率上限，默认2
 */
export function filterProxiesMultiplier(proxies: BuiltInProxyConfig[], regex: RegExp, limit: number = 2) {}
