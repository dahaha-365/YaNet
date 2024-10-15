<script setup lang="ts">
import { queryClients } from './src/clients.ts'
import Filter from './components/Fliter.vue'
import { ref } from 'vue'
const clients = ref(null)
const filters = ref([])
const applyFilter = (val) => {
    filters.value = val
}
</script>

# 梯子客户端汇总

<Filter @applyFilter="applyFilter"></Filter>

<div border="solid gray-300 width-1 rounded-md dark:gray-7" bg="gray-100 dark:gray-800" shadow="md" class="p-4 m-4" v-for="(item, index) in queryClients(filters, 'and')">
    <h3 class="important:my-0">
        <i i-carbon-link mr-2 mt--1></i>
        <a class="important:no-underline" :href="'./' + item.slug ">{{ item.name }}</a>
    </h3>
    <p class="important:mb-0 line-clamp-2">{{ item.description }}</p>
</div>
