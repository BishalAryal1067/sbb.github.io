<script setup>
import GlobalLayout from "../layout/GlobalLayout.vue";
</script>


<template>
    <GlobalLayout>
        <template #top>
            <div class="w-full h-fit bg-brand-dark pt-[10rem] pb-12 ps-8">
                <p class="w-fit px-6 py-4 border border-light-gold rounded-4xl text-light-gold font-normal">About Us</p>
                <p class="mt-4 text-4xl font-semibold text-light-gold border-s-2 ps-4">Intoduction, values & vision</p>
            </div>
        </template>

        <template #body>
            <div class="w-full flex flex-col gap-4 items-center py-12 text-left">
                <p class="text-2xl font-normal w-1/2">
                    Sbb Advisory Solutions
                    is a firm established with a vision of helping business to navigate their way in this compitetive
                    world.We strategize and develop solutions specific to your business needs.
                </p>


                <p class="text-2xl font-normal w-1/2">
                    S.B.B is a forward-thinking consultancy firm delivering tailored legal, financial, and compliance
                    solutions to businesses across industries. With a diverse, experienced team and a deep understanding
                    of the business landscape, we empower organizations with clarity, control, and strategic direction.
                </p>

                <p class="text-2xl font-normal w-1/2">
                    From startups and scale-ups to NGOs and investment entities, we provide insightful, actionable, and
                    growth-focused advisory built to deliver results.

                </p>
            </div>
            <div class="w-full relative flex justify-center px-8 py-12 bg-gray-200">
                <p class="absolute top-11/20 left-6/20 
                    text-4xl
                    italic
                    opacity-30
                    font-bold text-transparent stroke-text text-stroke-light-gold pointer-events-none select-none">
                    EMPOWERING GROWTH THROUGH TAILORED SOLUTIONS
                </p>
                <p class="text-4xl font-bold italic text-dark-gold">
                    EMPOWERING GROWTH THROUGH TAILORED SOLUTIONS
                </p>
            </div>
            <div class="w-full flex flex-col py-12 mt-4 items-center justify-center px-8 py-12 gap-4">
                <p class="text-4xl font-semibold text-brand-yellow">What we believe in?</p>
                <div class="w-full flex flex-wrap items-center justify-center gap-4">
                    <div
                        class="flex flex-col items-center justify-center gap-2 border-e-1 border-dark-gold w-[25rem] px-6 py-8 h-[15rem]">
                        <img src="" alt="">
                        <p class="text-2xl font-semibold text-dark-gold">Sustainability</p>
                        <p class="text-lg text-center">We want to help your business to sustain in future my mitigating
                            the risks.
                        </p>
                    </div>

                    <div
                        class="flex flex-col items-center justify-center gap-2 border-e-1 border-dark-gold w-[25rem] px-6 py-8 h-[15rem]">
                        <img src="" alt="">
                        <p class="text-2xl font-semibold text-dark-gold">Boldness</p>
                        <p class="text-lg text-center"> We embrace courage and innovation, pushing boundaries to create
                            impactful solutions.</p>
                    </div>

                    <div
                        class="flex flex-col items-center justify-center gap-2 w-[25rem] px-6 py-8 h-[15rem] rounded-sm">
                        <img src="" alt="">
                        <p class="text-2xl font-semibold text-dark-gold">Breakthroughs</p>
                        <p class="text-lg text-center"> We drive pioneering ideas that transform challenges into
                            opportunities and set new industry
                            standards.</p>
                    </div>
                </div>
            </div>
        </template>
    </GlobalLayout>
</template>

<style>
.stroke-text {
    -webkit-text-stroke: 2px rgb(182, 108, 39);
    text-stroke: 2px rgb(182, 108, 39);
}
</style>
