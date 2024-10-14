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
    console.log(filters.value)
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
        class="flex items-center -space-x-px overflow-hidden rounded-md border bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md">
        <button @click="toggleFilter('windows')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Windows
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('windows') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('mac')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Mac
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('mac') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('linux')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Linux
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('linux') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('android')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Android
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('android') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('ios')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            iOS
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('ios') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('appletv')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            AppleTV
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('appletv') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>

        <button @click="toggleFilter('router')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            路由器
            <i class="transition-colors duration-150 ease-in-out"
                :class="[(filterList || []).includes('router') ? 'i-carbon-checkbox-checked-filled text-green' : '', 'i-carbon-checkbox']"></i>
        </button>
    </span>
</template>
