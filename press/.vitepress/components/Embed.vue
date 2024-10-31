<script setup>
import { useSlots, ref } from 'vue'
const slots = useSlots()
const url = slots.default()[0].children
const embed = ref()
let [, domain] = /https?:\/\/([a-z0-9][a-z0-9-\.]+\.(com|net|org|app|wiki))/i.exec(url)
switch (domain) {
  case 'github.com':
  case 'www.github.com':
    embed.value = 'Github'
    break
  case 'apps.apple.com':
    embed.value = 'AppStore'
    break
  default:
    embed.value = 'Link'
    break
}
</script>
<template>
  <Suspense>
    <template #default>
      <component :is="embed">
        {{ url }}
      </component>
    </template>
    <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback>
      <Link>{{ url }}</Link>
    </template>
  </Suspense>
</template>
