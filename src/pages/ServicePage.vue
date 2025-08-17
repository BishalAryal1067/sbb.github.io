<script setup>
import GlobalLayout from "../layout/GlobalLayout.vue";
import services from "../utils/services.js";
import { ref, onMounted, computed, watch } from "vue";
import image1 from "../assets/pexels-goumbik-669610.jpg";
import image2 from "../assets/pexels-pixabay-48148.jpg";

const imageSources = [image1, image2]
const activeService = ref(null);
const activeSource = ref(null);
const selectActiveService = (val) => {
    if (!activeService.value || !val) activeService.value = Object.keys(services)[0];
    else activeService.value = val;
}

onMounted(() => {
    selectActiveService();
});

const isActive = (item) => {
    return item === activeService.value;
}

watch(activeService, (service) => {
    const index = Object.keys(services).indexOf(service)
    activeSource.value = imageSources[index % 2]
})


</script>


<template>
    <GlobalLayout>
        <template #top>
            <div class="w-full h-fit bg-brand-dark pt-[10rem] pb-12 ps-8">
                <p class="w-fit text-lg py-1 text-light-gold font-normal">our services
                </p>
                <p class="mt-4 text-4xl font-semibold text-light-gold border-s-2 ps-4">services we provide</p>
            </div>
        </template>

        <template #body>
            <div class="w-full flex items-center justify-center min-h-[65dvh]">
                <div class="flex gap-[10rem] pt-6 pb-6">
                    <div class="flex flex-col gap-6 text-xl cursor-pointer">
                        <span v-for="(item, idx) in Object.keys(services)" :key="idx" @click="activeService = item"
                            :class="{ 'font-semibold': isActive(item) }">
                            <i class="fa-solid fa-minus" v-if="isActive(item)"></i> {{ item }}
                        </span>
                    </div>
                    <div class="flex flex-col text-2xl gap-3 relative w-[45rem] h-[40rem]">
                        <img :src="`${activeSource}`" class="absolute top-0 left-0 w-full h-full opacity-80" />
                        <div class="flex flex-col gap-4 absolute items-end right-[-15rem]">
                            <span v-for="(item, idx) in services[activeService]" :key="idx"
                                class="bg-brand-yellow max-w-fit z-1 px-6 py-4 rounded-s-4xl text-white font-bold italic">
                                {{ item }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </GlobalLayout>
</template>
