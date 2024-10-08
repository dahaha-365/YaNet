<script setup>
import { useSlots, ref } from 'vue'
const slots = useSlots()
const url = slots.default()[0].children
const embed = ref()
let [isGithub, ,] = /https?:\/\/(www\.)?github\.com\/([a-z0-9-]+\/[a-z0-9-]+)/i.exec(url)
if (isGithub) {
    embed.value = 'github'
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
