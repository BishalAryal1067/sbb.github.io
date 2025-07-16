<script setup>
import { routes } from "../router.js";
import { useRoute, useRouter } from "vue-router";
import { ref, computed, nextTick } from "vue";

const route = useRoute();
const router = useRouter();

const isMenuOpen = ref(false);

const backgroundString = computed(() => {
    if (route.path !== "/") return "bg-brand-dark";
    return "bg-transparent";
});

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
    isMenuOpen.value = false;
}

function goHomeAndScrollToForm() {
    closeMenu();
    if (route.path === "/") {
        const el = document.getElementById("form");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
        router.push("/").then(() => {
            nextTick(() => {
                const el = document.getElementById("form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            });
        });
    }
}


import { watch } from "vue";

watch(isMenuOpen, (open) => {
    if (open) {
        document.body.classList.add("menu-open");
    } else {
        document.body.classList.remove("menu-open");
    }
});
</script>

<template>
    <nav :class="['absolute w-screen top-0 left-0 z-30', backgroundString]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
                <img src="../assets/sbb.svg" alt="Logo" class="h-10 w-auto object-contain" />
            </div>

            <!-- Desktop Menu -->
            <div class="hidden sm:flex space-x-8 items-center">
                <router-link v-for="route in routes" :key="route.name" :to="route.path"
                    class="text-white text-lg font-medium hover:text-yellow-400 transition" @click="closeMenu">
                    {{ route.name }}
                </router-link>

                <button @click="goHomeAndScrollToForm"
                    class="bg-brand-yellow text-black px-6 py-2 rounded font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300">
                    Email Us
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <!-- Hamburger Button (Mobile & Tablet) -->
            <button @click="toggleMenu" aria-label="Toggle menu"
                class="sm:hidden text-white text-2xl cursor-pointer focus:outline-none z-100">
                <i :class="isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
            </button>
        </div>

        <!-- Mobile Overlay Menu -->
        <transition name="slide-fade">
            <div v-if="isMenuOpen" class="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-40 flex">
                <div class="bg-brand-dark w-64 max-w-xs h-full p-6 flex flex-col gap-8 text-white"
                    @click.self="closeMenu">
                    <nav class="flex flex-col space-y-6">
                        <router-link v-for="route in routes" :key="route.name" :to="route.path"
                            class="text-xl font-medium hover:text-yellow-400 transition" @click="closeMenu">
                            {{ route.name }}
                        </router-link>

                        <button @click="goHomeAndScrollToForm"
                            class="bg-brand-yellow cursor-pointer text-black px-6 py-3 rounded font-semibold flex items-center gap-3 hover:gap-5 transition-all duration-300">
                            Email Us
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </nav>
                </div>

                <!-- Clicking outside the menu closes it -->
                <div class="flex-1" @click="closeMenu"></div>
            </div>
        </transition>
    </nav>
</template>

<style scoped>
/* Slide and fade transition for overlay */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-fade-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-from {
    transform: translateX(0);
    opacity: 1;
}

.slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

/* Scroll lock when menu is open */
</style>
