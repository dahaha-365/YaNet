<script setup>
import { useSlots, ref } from 'vue'
const slots = useSlots()
const url = slots.default()[0].children
console.log(url);
let [isGithub, , repo] = /https?:\/\/(www\.)?github\.com\/([a-z0-9-]+\/[a-z0-9-\.]+)/i.exec(url)
console.log(isGithub);
console.log(repo);
const response = await fetch('https://api.github.com/repos/' + repo)
const githubData = await response.json();
console.log(response);
console.log(githubData);
//     const githubData = json;
</script>
<template>
    <div class="github-card my-5">
        <div v-if="response.ok">
            <div bg="white dark:gray-950" shadow="lg dark:none transparent hover:emerald-6/20"
                border="~ gray-1 hover:gray-1 dark:gray-9 dark:hover:gray-6"
                class="p3 rd-md transition-all ease-linear">
                <div class="flex gap-4">
                    <div class="min-w-max">
                        <span text="emerald-6 dark:gray-1" bg="emerald-6/10 dark:gray-9"
                            class="rd flex aspect-square p3">
                            <span flex text-2xl>
                                <img class="w-16 h-16 rounded-full" :src="githubData?.owner.avatar_url"
                                    :alt="githubData?.owner.login" />
                            </span>
                        </span>
                    </div>
                    <div class="space-y-0.5">
                        <h3 text="lg gray-9 dark:gray-1" class="font-semibold mt-0">
                            <span bg="indigo-3" i-carbon-logo-github inline-block class="w-24.5px h-24.5px"></span>
                            <a :href="githubData?.html_url" target="_blank">{{ githubData?.full_name }}</a>
                        </h3>
                        <p text="gray-6 dark:gray-4" class="line-clamp-2">
                            {{ githubData?.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            {{ response.status }} 这个仓库好像不存在了
        </div>
    </div>
</template>
<style scoped>
.github-card h3 {
    margin-top: 0;
}
</style>
