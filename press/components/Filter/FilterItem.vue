<script setup>
const props = defineProps({
    'filter-value': String,
    'filter-scope': String,
})
console.log(props)
</script>
<template>
    <div v-bind="props">
        <slot name="content"></slot>
    </div>
</template>
