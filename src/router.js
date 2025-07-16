import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ServicePage from "./pages/ServicePage.vue";
import InformationPage from "./pages/InformationPage.vue";

export const routes = [
    {
        path: "/",
        component: HomePage,
        name: "Home"
    },
    {
        path: "/about",
        component: AboutPage,
        name: "About"
    },
    {
        path: "/service",
        component: ServicePage,
        name: "Services",
    },
    {
        path: "/information",
        component: InformationPage,
        name: "Information"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
