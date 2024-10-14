<script setup lang="ts">
import { ref } from 'vue'
const filters = ref([])
const applyFilters = (filters) => {
    console.log(filters)
}
const addFilter = (filter) => {
    filter.value.push(filter)
    console.log(filter)
}
defineExpose({
    applyFilters,
    addFilter,
})
</script>
<template>
    <div>
        <slot></slot>
    </div>
</template>
