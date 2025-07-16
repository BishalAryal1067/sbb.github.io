<script setup>
import GlobalLayout from "../layout/GlobalLayout.vue";

const importantInfo = [
    {
        title: "company registration",
        links: [
            {
                title: "company registration guide",
                type: "article",
                url: "https://lawscholarsnepal.com/company-registration-in-nepal/"
            }
        ]
    },
    {
        title: "Taxation",
        links: [
            {
                title: "company registration guide",
                type: "article",
                url: "https://lawscholarsnepal.com/company-registration-in-nepal/"
            }
        ]
    },



]

</script>



<template>
    <GlobalLayout>
        <template #top>
            <div class="w-full h-fit bg-brand-dark pt-[10rem] pb-12 ps-8">
                <p class="w-fit text-lg py-1 text-light-gold font-normal">Information
                </p>
                <p class="mt-4 text-4xl font-semibold text-light-gold border-s-2 ps-4">
                    Important information on various topics
                </p>
            </div>
        </template>

        <template #body>
            <div class="flex flex-col px-12 py-6 min-h-[65rem] gap-6">
                <div v-for="(item, id) in importantInfo" :key="id + item.title" class="w-full flex flex-col gap-4">
                    <p class="text-3xl text-brand-yellow font-semibold">{{ item.title }}</p>
                    <div v-for="(item, id) in (item.links)" :key="id" class="w-full flex justify-between">
                        <span class="capitalize font-semibold text-xl">{{ item.title }} </span>
                        <span class="block w-3 h-3 rounded-[50%] bg-gray-300"></span>
                        <span class="capitalize font-semibold text-xl">{{ item.type }} </span>
                        <span class="block w-3 h-3 rounded-[50%] bg-gray-300"></span>
                        <a :href="item.url" target="_blank" class="text-xl">
                            <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </template>
    </GlobalLayout>
</template>
