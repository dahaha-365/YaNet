<script setup>
import { useSlots } from 'vue'
const slots = useSlots()
const url = slots.default()[0].children
</script>
<template>
    <div>
        <i i-carbon-link mr-2></i>
        <a :href="url" target="_blank">{{ url }}</a>
    </div>
</template>
