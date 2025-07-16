<script setup>
import HeroSection from "../components/HeroSection.vue";
import GlobalLayout from "../layout/GlobalLayout.vue";
import ContactForm from "../components/ContactForm.vue";
import services from "../utils/../utils/services.js";
</script>

<template>
    <GlobalLayout>
        <template #top>
            <HeroSection />
        </template>
        <template #body>
            <div class="w-screen sm:flexjustify-center gap-12 px-6 py-8 sm:py-16 sm:px-12">
                <div class="flex flex-col gap-2 w-[35rem] w-full">
                    <p class="text-3xl sm:text-6xl font-medium text-brand-yellow">What do we do ?</p>
                    <p class="text-gray-600 text-xl sm:text-2xl font-semibold max-w-screen">We work on variety of
                        domains to help our
                        clients
                        meet their business goals.</p>
                    <ul class="pl-8 py-2 list-disc text-lg text-brand-yellow font-semibold">
                        <li v-for="(item, idx) in Object.keys(services)" :key="idx">{{ item }}</li>
                    </ul>
                    <p class="transition-all flex items-center gap-2 hover:gap-6 rounded-md ease-in bg-brand-yellow 
                        max-w-fit sm:text-xl text-white font-semibold py-2 px-6 sm:py-4 mb-4 sm:mb-0 cursor-pointer">
                        <router-link to="/service">
                            AND MORE
                        </router-link>
                        <span> <i class="fa-solid fa-arrow-right"></i></span>
                    </p>
                </div>

                <div class="sm:w-[40rem]">
                    <video src="/src/assets/sbb-intro-video.mp4" autoplay loop></video>
                </div>
            </div>

            <div class="w-full px-12 py-16 bg-gray-100">
                <p class="w-full text-xl sm:text-4xl text-center font-semibold text-brand-yellow">Why us / What do we
                    offer?</p>
                <div class="sm:flex-row flex flex-col justify-center items-center gap-4 mt-5 sm:mt-12">
                    <div class="flex flex-col gap-1 sm:gap-4 w-80 sm:h-90 overflow-hidden items-center text-center 
                        border rounded-sm border-brand-yellow p-4">
                        <img src="../assets/idea.svg" class="object-contain w-40 h-20">
                        <p class="text-lg sm:text-2xl font-semibold text-brand-yellow">Cross-Sector Expertise</p>
                        <p class="font-normal sm:text-lg">We’ve worked with manufacturing units, service providers,
                            NGOs,
                            trading firms, and institutional bodies.</p>
                    </div>

                    <div
                        class="flex flex-col w-80 sm:h-90 overflow-hidden items-center text-center gap-4 border rounded-sm border-brand-yellow p-4">
                        <img src="../assets/support.svg" class="object-contain w-40 h-20">
                        <p class="text-lg sm:text-2xl font-semibold text-brand-yellow">Complete Business Solutions</p>
                        <p class="font-normal sm:text-lg">From setup to strategy, compliance to performance—we offer
                            holistic, end-to-end advisory services.</p>
                    </div>

                    <div
                        class="flex flex-col w-80 sm:h-90 overflow-hidden items-center text-center gap-4 border rounded-sm border-brand-yellow p-4">
                        <img src="../assets/reliable.svg" class="object-contain w-40 h-20">
                        <p class="text-lg sm:text-2xl font-semibold text-brand-yellow">Professionally Backed Team</p>
                        <p class="font-normal sm:text-lg">Supported by Chartered Accountants, Legal Experts, and
                            Industry
                            Advisors, ensuring depth and credibility in every solution.</p>
                    </div>

                    <div
                        class="flex flex-col w-80 sm:h-90 overflow-hidden items-center text-center gap-4 border rounded-sm border-brand-yellow p-4">
                        <img src="../assets/reliable.svg" class="object-contain w-40 h-20">
                        <p class="text-lg sm:text-2xl font-semibold text-brand-yellow">Outcome-Oriented Approach</p>
                        <p class="font-normal sm:text-lg">
                            We prioritize measurable impact, sustainable growth, and long-term value creation for our
                            clients.
                            Let’s Grow Together
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center py-12 px-8">
                <p class="w-full text-3xl sm:text-4xl text-center font-semibold text-brand-yellow">Reach us today !</p>
                <div class="flex flex-col">
                    <div id="form">
                        <ContactForm />
                    </div>
                </div>
            </div>


        </template>
    </GlobalLayout>
</template>
