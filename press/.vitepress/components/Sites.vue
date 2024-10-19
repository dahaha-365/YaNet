<script setup lang="ts">
import { querySites } from '../src/sites.tsx'
</script>

<template>
    <div>
        <nav class="gradient-background-primary p-1px rounded-md shadow-md dark:shadow-none">
            <ul class="flex-row flex items-center bg-white/70 dark:bg-black/60 important:m-0 rounded-md important:p-0">
                <li class="flex-auto">常用网站</li>
                <li class="flex-auto">影音媒体</li>
                <li class="flex-auto">社交平台</li>
                <li class="flex-auto">人工智能</li>
                <li class="flex-auto">效率工具</li>
            </ul>
        </nav>
        <div class="nav-cols flex-row flex items-start">
            <ul class="flex-auto block">
                <li v-for="(item, index) in querySites(['常用网站'], true)">
                    <i :class="item.icon"></i>
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
            <ul class="flex-auto block">
                <li v-for="(item, index) in querySites(['流媒体'], true)">
                    <i :class="item.icon"></i>
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
            <ul class="flex-auto block">
                <li v-for="(item, index) in querySites(['社交媒体'], true)">
                    <i :class="item.icon"></i>
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
            <ul class="flex-auto block">
                <li v-for="(item, index) in querySites(['人工智能'], true)">
                    <i :class="item.icon"></i>
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
            <ul class="flex-auto block">
                <li v-for="(item, index) in querySites(['效率工具'], true)">
                    <i :class="item.icon"></i>
                    <a :href="item.url" target="_blank">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
ul li {
    list-style: none;
    margin: 0;
    display: inline-block;
    text-align: center;
    padding: 1em 0.5em;
}

.nav-cols ul {
    padding-left: 0;
}

.nav-cols li {
    display: block;
}

.nav-cols li a {
    text-decoration: none;
}

.nav-cols li i {
    margin-right: 0.4em;
    margin-top: -0.25em;
}

.i-cib\:instagram {
    background: radial-gradient(circle at 30% 110%,
            #ffdb8b 0%,
            #ee653d 25%,
            #d42e81 50%,
            #a237b6 75%,
            #3e57bc 100%);
}
</style>
