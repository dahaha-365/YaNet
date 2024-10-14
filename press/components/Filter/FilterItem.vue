<script setup>
const props = defineProps({
    filterValue: String,
    filterScope: String,
    dataFilterValue: String,
})
</script>
<template>
    <div v-bind="props" :data-filter-value="props.dataFilterValue">
        <slot name="content"></slot>
    </div>
</template>
