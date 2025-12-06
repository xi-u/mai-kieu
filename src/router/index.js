import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from "../components/content/about-me/AboutMe.vue";

const routes= [
    {
        path: '/mai-kieu/about',
        name: 'about',
        component: AboutMe
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router