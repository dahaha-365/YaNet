<script setup lang="ts">
import { queryAirports } from './src/airports.ts'
import Filter from './components/Fliter.vue'
import Item from './components/Item.vue'
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

<Item v-for="(item, index) in queryAirports(filters, 'and')" :item="item" :index="index" :key="index"></Item>
