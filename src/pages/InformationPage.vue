<script setup>
import GlobalLayout from "../layout/GlobalLayout.vue";
import links from "../constants/links.js";
import articles from "../constants/articles.js";
import videos from "../constants/youtube.js";

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
            <div class="flex flex-col px-12 py-6 min-h-[45rem] gap-6">
                <!--articles-->
                <div class="w-full">
                    <p class="font-semibold text-2xl text-center">Article and Blog Sites</p>
                    <div class="flex flex-wrap gap-6 justify-center mt-2">
                        <a :src="article.url" frameborder="0" v-for="article in articles" :key="article.title"
                            target="_blank"
                            class="border border-gray-400 px-4 py-2 cursor-pointer rounded-sm flex gap-2 items-center">
                            <img src="../assets/pdf-icon.png" alt="Emblem_of_Nepal" class="w-10">
                            <span class="block text-brand-yellow font-semibold"> {{ article.title }} </span>
                        </a>
                    </div>
                </div>

                <div class="w-full">
                    <p class="font-semibold text-2xl text-center">Useful Videos</p>
                    <div class="flex flex-wrap gap-6 justify-center mt-2">
                        <a :src="video.url" frameborder="0" v-for="video in videos" :key="video.title" target="_blank"
                            class="border border-gray-400 px-4 py-2 cursor-pointer rounded-sm flex gap-2 items-center">
                            <img src="../assets/pdf-icon.png" alt="Emblem_of_Nepal" class="w-10">
                            <span class="block text-brand-yellow font-semibold"> {{ video.title }} </span>
                        </a>
                    </div>
                </div>
                <div class="w-full">
                    <p class="font-semibold text-2xl text-center mt-4">Useful Links</p>
                    <div class="flex flex-wrap gap-6 justify-center mt-2">
                        <a v-for="(link, index) in links" :href="link.url" :key="`index-${link}`" target="_blank"
                            class="border border-gray-400 px-4 py-2 rounded-sm flex gap-2 items-center">
                            <img src="../assets/Emblem_of_Nepal.png" alt="Emblem_of_Nepal" class="w-10">
                            <span class="block text-brand-yellow font-semibold">{{ link.title }}</span>
                        </a>
                    </div>
                </div>

            </div>


        </template>
    </GlobalLayout>
</template>
