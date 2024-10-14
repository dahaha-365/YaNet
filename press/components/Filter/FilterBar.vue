<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps({
    filterContainer: String,
})

const emit = defineEmits(['applyFilter', 'addFilter'])


const filters = ref([])

const toggleFilter = (filter: string) => {
    if (filters.value.includes(filter)) {
        filters.value = filters.value.filter((f) => f !== filter)
    } else {
        filters.value.push(filter)
    }
    console.log(filters.value)
    emit('applyFilter', filters.value)
}
</script>
<template>
    <span
        class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
        <button @click="toggleFilter('windows')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Windows
        </button>

        <button @click="toggleFilter('mac')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Mac
        </button>

        <button @click="toggleFilter('linux')"
            class="inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 focus:relative">
            Linux
        </button>
    </span>
</template>
