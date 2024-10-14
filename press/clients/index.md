<script setup>
import { ref } from 'vue'
const clients = ref(null)
const applyFilter = (filters) => {
    console.log(filters)
    const eles = document.getElementById('clients').querySelectorAll(`[data-filter-value~='${filters.join(' ')}']`)
    console.log(eles)
}
</script>

# 梯子客户端汇总

<filter-bar @applyFilter="applyFilter"></filter-bar>

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
