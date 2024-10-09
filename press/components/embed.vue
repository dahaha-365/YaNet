<script setup>
import { useSlots, ref } from 'vue'
const slots = useSlots()
const url = slots.default()[0].children
const embed = ref()
const regex = {
    github: /https?:\/\/(www\.)?github\.com\/([a-z0-9-]+\/[a-z0-9-]+)/i,
    appstore: /https?:\/\/apps.apple.com\/((cn|us|hk|sg|jp)\/)*app\/([a-z-]+\/)*id(\d+)/i,
}
let [, domain] = /https?:\/\/([a-z0-9][a-z0-9-\.]+?\.(com))/i.exec(url)
switch (domain) {
    case 'github.com':
    case 'www.github.com':
        embed.value = 'github'
        break
    case 'apps.apple.com':
        embed.value = 'appstore'
        break
    default:
        embed.value = 'link'
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
            正在加载中...
        </template>
    </Suspense>
</template>
