<script setup>
import { useSlots, ref } from 'vue'
import { format } from 'timeago.js';
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
const slots = useSlots()
const url = slots.default()[0].children
let [, , , , appId] = /https?:\/\/apps.apple.com\/((cn|us|hk|sg|jp)\/)*app\/([a-z-]+\/)*id(\d+)/i.exec(url)
const alova = createAlova({
    requestAdapter: adapterFetch(),
    responded: response => response.json(),
    id: 'itunes-apple-lookup',
    cacheFor: {
        // 统一设置POST的缓存模式
        GET: {
            mode: 'restore',
            expire: 60 * 60 * 1000
        },
        // 统一设置HEAD请求的缓存模式
        HEAD: 60 * 60 * 1000,
        OPTIONS: 60 * 60 * 1000,
    }
})
const appStoreData = ref()
appStoreData.value = await alova.Get('https://itunes.apple.com/lookup?output=json&id=' + appId, {
    headers: {
        'Content-Type': 'application/json'
    }
})
</script>
<template>
    <div class="appstore-card my5">
        <div v-if="appStoreData?.resultCount === 1">
            <div bg="gray-50 dark:gray-800" border="~ solid gray-3 hover:gray-4 dark:gray-7 dark:hover:gray-5"
                class="p3 rd-md transition-all ease-linear">
                <div class="flex gap-4">
                    <div class="min-w-max">
                        <span text="emerald-6 dark:gray-1" bg="emerald-6/10 dark:gray-9"
                            class="rd flex aspect-square rounded-full" shadow>
                            <span flex text-2xl>
                                <img class="w-16 h-16 rounded-full" :src="appStoreData.results[0].artworkUrl100"
                                    :alt="appStoreData.results[0].trackName" />
                            </span>
                        </span>
                    </div>
                    <div class="space-y-0.5">
                        <h3 text="lg gray-9 dark:gray-1" class="font-semibold mt0">
                            <a :href="appStoreData.results[0].trackViewUrl" target="_blank">
                                <i i-logos-apple-app-store></i>
                                {{ appStoreData.results[0].trackName }}</a>
                            <sup ml-2 text="gray-6 dark:gray-4" bg="gray-3 dark:gray-7" px-1 rounded-sm>{{
                                appStoreData.results[0].version }}</sup>
                        </h3>
                        <p text="gray-6 dark:gray-4" class="line-clamp-2">
                            {{ appStoreData.results[0].description }}
                        </p>
                        <div class="flex gap-4 repo-info">
                            <span class="price"><i i-carbon-currency-dollar text="yellow-4"></i>
                                <span bg="yellow-4" text="emerald-8 shadow" px-1 rounded-sm>{{
                                    appStoreData.results[0].price
                                    }}</span>
                            </span>
                            <span><i i-carbon-star></i> {{ Math.round(appStoreData.results[0].averageUserRating * 100) /
                                100
                                }}</span>
                            <span><i i-carbon-time></i> {{ format((new
                                Date(appStoreData.results[0].currentVersionReleaseDate)).getTime(),
                                'zh_CN') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div>
                <i i-logos-apple-app-store mr-2 bg="white" class="rounded-full"></i>
                <a :href="url" target="_blank">
                    {{ url }}
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
.appstore-card h3 {
    margin-top: 0;
}

.appstore-card a {
    text-decoration: none;
    text-underline-offset: 0;
}

.appstore-card .repo-info i,
.appstore-card a i {
    margin-top: -0.2em;
}

.appstore-card .price {
    font-weight: 700;
}
</style>
