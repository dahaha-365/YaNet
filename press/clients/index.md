<script setup lang="ts">
import { queryClients } from './clients.ts'
import { ref } from 'vue'
const clients = ref(null)
const filter = ref([])
console.log(queryClients([]))
const applyFilter = (filters) => {
    console.log(filters)
    filter.value = filters
}
</script>

# 梯子客户端汇总

<filter-bar @applyFilter="applyFilter"></filter-bar>

<div border="solid gray-300 rounded-md dark:gray-7" bg="gray-100 dark:gray-800" shadow="md" class="p-4 m-4" v-for="(item, index) in queryClients(filter)">
    <h3 class="important:my-0">
        <i i-carbon-link mr-2 mt--1></i>
        <a class="important:no-underline" :href="'./' + item.slug ">{{ item.name }}</a>
    </h3>
    <p class="important:mb-0 line-clamp-2">{{ item.description }}</p>
</div>

<filter-container filterId="clients" ref="clients" id="clients">

<filter-item dataFilterValue="windows mac linux clash mihomo gui" filterScope="client">

<template #content>

<!--@include: ./mihomo-party.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="windows mac linux clash mihomo gui" filterScope="client">

<template #content>

<!--@include: ./clash-verge-rev.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="windows mac linux clash mihomo gui" filterScope="client">

<template #content>

<!--@include: ./clash-nyanpasu.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="windows mac linux clash mihomo singbox gui" filterScope="client">

<template #content>

<!--@include: ./gui-for-cores.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="windows mac linux clash mihomo gui" filterScope="client">

<template #content>

<!--@include: ./pandora-box.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="windows mac linux android clash mihomo gui" filterScope="client">

<template #content>

<!--@include: ./clash-for-flutter.md-->

</template>

</filter-item>

<filter-item dataFilterValue="ios iphone ipad appletv gui" filterScope="client">

<template #content>

<!--@include: ./shadowrocket.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="mac ios iphone ipad appletv gui" filterScope="client">

<template #content>

<!--@include: ./surge.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="ios iphone ipad appletv gui" filterScope="client">

<template #content>

<!--@include: ./loon.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="mac ios iphone ipad appletv gui" filterScope="client">

<template #content>

<!--@include: ./stash.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="ios iphone ipad gui" filterScope="client">

<template #content>

<!--@include: ./egern.md-->

</template>

</filter-item>

-----

<filter-item dataFilterValue="windows mac android ios iphone ipad appletv gui" filterScope="client">

<template #content>

<!--@include: ./karing.md-->

</template>

</filter-item>

</filter-container>

[[toc]]
