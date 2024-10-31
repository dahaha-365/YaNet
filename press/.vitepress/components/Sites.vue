<script setup lang="ts">
import { querySites } from '../src/sites.tsx'
</script>

<template>
  <div class="overflow-x-auto scroll-auto scroll-smooth">
    <nav class="gradient-background-primary p-1px rounded-md shadow-md dark:shadow-none">
      <ul class="items-start flex-row flex bg-white/70 dark:bg-black/60 important:m-0 rounded-md important:p-0">
        <li class="flex-1 block">常用网站</li>
        <li class="flex-1 block">影音媒体</li>
        <li class="flex-1 block">社交平台</li>
        <li class="flex-1 block">人工智能</li>
        <li class="flex-1 block">效率工具</li>
      </ul>
    </nav>
    <div class="nav-cols flex-row flex items-start">
      <ul class="flex-1 block">
        <li v-for="(item, index) in querySites(['常用网站'], true)">
          <i :class="item.icon"></i>
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
        <li>
          <a class="important:text-pink-6" href="https://s.yanet.app/Gomqha" target="_blank">银河录像局</a>
        </li>
      </ul>
      <ul class="flex-1 block">
        <li v-for="(item, index) in querySites(['流媒体'], true)">
          <i :class="item.icon"></i>
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
        <li>
          <a class="important:text-pink-6" href="https://s.yanet.app/czIT26" target="_blank">环球巴士</a>
        </li>
      </ul>
      <ul class="flex-1 block">
        <li v-for="(item, index) in querySites(['社交媒体'], true)">
          <i :class="item.icon"></i>
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
        <li>
          <a class="important:text-pink-6" href="https://s.yanet.app/SsVeRX" target="_blank">奈飞小镇</a>
        </li>
      </ul>
      <ul class="flex-1 block">
        <li v-for="(item, index) in querySites(['人工智能'], true)">
          <i :class="item.icon"></i>
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
        <li>
          <a class="important:text-pink-6" href="https://s.yanet.app/fOrkca" target="_blank">网飞小铺</a>
        </li>
      </ul>
      <ul class="flex-1 block">
        <li v-for="(item, index) in querySites(['效率工具'], true)">
          <i :class="item.icon"></i>
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </li>
        <li>
          <a class="important:text-pink-6" href="https://s.yanet.app/Y8es4V" target="_blank">蜜糖小铺</a>
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
  margin-left: -1.6em;
}
</style>
