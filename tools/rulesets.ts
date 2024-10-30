import { createAlova } from 'alova'
import { useRequest } from 'alova/client'
import VueHook from 'alova/vue';
import adapterFetch from 'alova/fetch'
import { classicalExtractor, singJsonExtrator } from './src/ruleset-extrator.ts'

const alova = createAlova({
  requestAdapter: adapterFetch(),
  statesHook: VueHook,
  responded: response => response.text(),
})

const { send: getAIChatNotCNRules } = useRequest(() => alova.Get('https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/sing/geo/geosite/category-ai-chat-!cn.json', {
  transform(rawData: string) {
    return singJsonExtrator(rawData)
  }
}), { immediate: false })

const { send: getJetbrainsAiRules } = useRequest(() => alova.Get('https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/sing/geo/geosite/jetbrains-ai.json', {
  transform(rawData: string) {
    return singJsonExtrator(rawData)
  }
}), { immediate: false })

const { send: getClaudeRules } = useRequest(() => alova.Get('https://github.com/blackmatrix7/ios_rule_script/raw/refs/heads/master/rule/Clash/Claude/Claude.list', {
  transform(rawData: string) {
    return classicalExtractor(rawData)
  }
}), { immediate: false })

const { send: getOpenAIRules } = useRequest(() => alova.Get('https://github.com/blackmatrix7/ios_rule_script/raw/refs/heads/master/rule/Clash/OpenAI/OpenAI.list', {
  transform(rawData: string) {
    return classicalExtractor(rawData)
  }
}), { immediate: false })

const { send: getBardAIRules } = useRequest(() => alova.Get('https://github.com/blackmatrix7/ios_rule_script/raw/refs/heads/master/rule/Clash/BardAI/BardAI.list', {
  transform(rawData: string) {
    return classicalExtractor(rawData)
  }
}), { immediate: false })

const { send: getCopilotRules } = useRequest(() => alova.Get('https://github.com/blackmatrix7/ios_rule_script/raw/refs/heads/master/rule/Clash/Copilot/Copilot.list', {
  transform(rawData: string) {
    return classicalExtractor(rawData)
  }
}), { immediate: false })

const { send: getNotionRules } = useRequest(() => alova.Get('https://github.com/blackmatrix7/ios_rule_script/raw/refs/heads/master/rule/Clash/Notion/Notion.list', {
  transform(rawData: string) {
    return classicalExtractor(rawData)
  }
}), { immediate: false })

const build = async () => {
  const [AIChatNotCNRules, jetbrainsAiRules, claudeRules, openAIRules, bardAIRules, copilotRules, notionRules] = await Promise.all([getAIChatNotCNRules(), getJetbrainsAiRules(), getClaudeRules(), getOpenAIRules(), getBardAIRules(), getCopilotRules(), getNotionRules()]);
  const rules = Array.from(new Set([...AIChatNotCNRules, ...jetbrainsAiRules, ...claudeRules, ...openAIRules, ...bardAIRules, ...copilotRules, ...notionRules]))
  rules.sort()
  // console.log(rules)
  const header = `# AI ruleset\n# Creator URL: https://yanet.app\n# Created at ${new Date().toISOString}\n\n`
  // console.log(String(jetbrainsAiRules))
}

build()
