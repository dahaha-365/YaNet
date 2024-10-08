<script setup>
import { useSlots, ref } from 'vue'
const slots = useSlots()
const url = slots.default()[0].children
console.log(url);
let [isGithub, , repo] = /https?:\/\/(www\.)?github\.com\/([a-z0-9-]+\/[a-z0-9-]+)/i.exec(url)
console.log(isGithub);
console.log(repo);
const response = await fetch('https://api.github.com/repos/' + repo)
const githubData = await response.json();
console.log(response);
console.log(githubData);
//     const githubData = json;
</script>
<template>
    <div class="github-card">
        <div v-if="response.ok">
            <div class="flex gap-5 sm-gap-6 border-1">
                <div class="min-w-max">
                    <img class="w-10 h-10 rounded-full" :src="githubData?.owner.avatar_url"
                        :alt="githubData?.owner.login" />
                </div>
                <div class="space-y-1">
                    <h3 text="xl gray-9 dark:white" class="font-semibold">
                        <a :href="githubData?.html_url" target="_blank">{{ githubData?.full_name }}</a>
                    </h3>
                    <p text="gray-7 dark:gray-3">
                        {{ githubData?.description }}
                    </p>
                </div>
            </div>
        </div>
        <div v-else>
            {{ response.status }} 这个仓库好像不存在了
        </div>
    </div>
</template>
<style scoped>
.github-card {
    display: block;
    width: 520px;
}
</style>
