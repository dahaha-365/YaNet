<script setup lang="ts">
import { UseClipboard } from '@vueuse/components/index.mjs'
defineProps(['item'])
</script>
<template>
    <div border="solid gray-300 width-1 rounded-md dark:gray-7" bg="gray-100 dark:gray-800" shadow="md" class="p-4 m-4">
        <h3 class="important:my-0">
            <i i-carbon-link mr-2 mt--1></i>
            <a class="important:no-underline" :href="item.url" target="_blank">{{ item.name }}</a>
        </h3>
        <p class="important:mb-0 line-clamp-2">{{ item.slogan }}</p>
        <div class="coupons mt-4" v-if="item?.coupons.length > 0">
            <i i-carbon-cut-out mr-2></i>
            <UseClipboard v-slot="{ copy, copied }" :source="coupon.code" v-for="(coupon, index) in item.coupons"
                :key="index">
                <button @click="copy()" class="transition-all duration-300"
                    :class="copied ? 'important:b-green important:text-gray-9 important:bg-green' : 'text-gray-8 dark:text-gray-1'"
                    border="~ gray-300 solid rounded-md hover:gray-400 dark:gray-700 dark:hover:gray-5" shadow-sm mr-2
                    px-4>
                    {{ coupon.text }}
                    <i class="transition-all duration-300"
                        :class="copied ? 'i-carbon-document-tasks bg-gray-9' : 'i-carbon-document-blank bg-gray-8 dark:bg-gray-1'"></i>
                </button>
            </UseClipboard>
        </div>
    </div>
</template>
