<script setup>
import { useSlots, ref } from 'vue'
import { jsonp } from 'vue-jsonp';
import { format } from 'timeago.js';
const slots = useSlots()
const url = slots.default()[0].children
let [isAppStore, , , , appId] = /https?:\/\/apps.apple.com\/((cn|us|hk|sg|jp)\/)*app\/([a-z-]+\/)*id(\d+)/i.exec(url)
const response = await jsonp('https://itunes.apple.com/lookup', {
    callbackQuery: 'callback',
    // callbackName: 'jsonp_func',
    output: 'json',
    id: appId
})
console.log(response);
</script>
<template>
    <div class="appstore-card my5">
        <div v-if="response.resultCount === 1">
            <div bg="gray-50 dark:gray-800" border="~ solid gray-3 hover:gray-4 dark:gray-7 dark:hover:gray-5"
                class="p3 rd-md transition-all ease-linear">
                <div class="flex gap-4">
                    <div class="min-w-max">
                        <span text="emerald-6 dark:gray-1" bg="emerald-6/10 dark:gray-9"
                            class="rd flex aspect-square rounded-full" shadow>
                            <span flex text-2xl>
                                <img class="w-16 h-16 rounded-full" :src="response.results[0].artworkUrl100"
                                    :alt="response.results[0].trackName" />
                            </span>
                        </span>
                    </div>
                    <div class="space-y-0.5">
                        <h3 text="lg gray-9 dark:gray-1" class="font-semibold mt0">
                            <a :href="response.results[0].trackViewUrl" target="_blank">
                                <i i-logos-apple-app-store></i>
                                {{ response.results[0].trackName }}</a>
                            <sup ml-2 text="gray-6 dark:gray-4" bg="gray-3 dark:gray-7" px-1 rounded-sm>{{
                                response.results[0].version }}</sup>
                        </h3>
                        <p text="gray-6 dark:gray-4" class="line-clamp-2">
                            {{ response.results[0].description }}
                        </p>
                        <div class="flex gap-4 repo-info">
                            <span class="price"><i i-carbon-currency-dollar text="yellow-4"></i>
                                <span bg="yellow-4" text="emerald-8 shadow" px-1 rounded-sm>{{ response.results[0].price
                                    }}</span>
                            </span>
                            <span><i i-carbon-star></i> {{ Math.round(response.results[0].averageUserRating * 100) / 100
                                }}</span>
                            <span><i i-carbon-time></i> {{ format((new
                                Date(response.results[0].currentVersionReleaseDate)).getTime(),
                                'zh_CN') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h3 text="lg gray-9 dark:gray-1" class="font-semibold mt0">
                <a :href="url" target="_blank">
                    <i i-logos-apple-app-store></i>
                    App Store</a>
            </h3>
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
