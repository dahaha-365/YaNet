<script setup lang="ts">
import { queryAirports } from './src/airports.ts'
import Filter from './components/Fliter.vue'
import { ref } from 'vue'
const clients = ref(null)
const filters = ref([])
const applyFilter = (val) => {
    filters.value = val
}
</script>

# 机场列表

- 机场有跑路风险，尽量不要年付或者支付大额订单
- 尽量用小号邮箱注册
- 数据有时效性，购买时请以机场实际参数为准

<Filter @applyFilter="applyFilter"></Filter>

<div border="solid gray-300 width-1 rounded-md dark:gray-7" bg="gray-100 dark:gray-800" shadow="md" class="p-4 m-4" v-for="(item, index) in queryAirports(filters, 'and')">
    <h3 class="important:my-0">
        <i i-carbon-link mr-2 mt--1></i>
        <a class="important:no-underline" :href="item.url" target="_blank">{{ item.name }}</a>
    </h3>
    <p class="important:mb-0 line-clamp-2">{{ item.slogan }}</p>
</div>
