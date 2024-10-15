<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits(['applyFilter', 'addFilter'])

const filters = ref([])

const toggleFilter = (filter: string) => {
    if (filters.value.includes(filter)) {
        filters.value = filters.value.filter((f) => f !== filter)
    } else {
        filters.value = [...filters.value, ...[filter]]
    }
    emit('applyFilter', filters.value)
}

const filterList = computed({
    get() {
        return filters.value
    }
})
</script>
<template>
    <span
        class="flex flex-row items-center -space-x-px overflow-hidden overflow-x-auto scroll-auto scroll-smooth rounded-md my-4 border bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
        <button @click="toggleFilter('中转')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            中转
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('中转') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('直连')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            直连
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('直连') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('不限速')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            不限速
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('不限速') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('不限设备数量')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            不限设备
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('不限设备数量') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('共享账号')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            共享账号
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('共享账号') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('按量付费')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            按量付费
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('按量付费') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('emby')"
            class="flex-auto inline-block px-4 py-2 md:py-1.5 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            EMBY
            <i class="transition-colors duration-150 ease-in-out mt--1"
                :class="[(filterList || []).includes('emby') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>
    </span>
</template>
