<script setup>
import NavigationBar from "../components/NavigationBar.vue";
import FooterSection from "../components/FooterSection.vue";
</script>

<template>
    <NavigationBar />
    <div class="w-full bg-brand-dark overflow-hidden">
        <slot name="top"></slot>
    </div>
    <div>
        <slot name="body"></slot>
    </div>
    <FooterSection />
</template>
