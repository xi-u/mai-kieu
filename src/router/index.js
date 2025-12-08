import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import AboutMe from "../components/content/about-me/AboutMe.vue";
import Projects from "../components/content/projects/Projects.vue";
import ProjectDetail from "../components/content/projects/ProjectDetail.vue";
import Contact from "../components/content/contact/Contact.vue";
import Resume from "../components/content/resume/Resume.vue";

const routes = [
    {
        path: '/',
        redirect: '/about'
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/project/:id',
        name: 'project-detail',
        component: ProjectDetail
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/resume',
        name: 'resume',
        component: Resume
    },
]

const router = createRouter({
    history: createWebHashHistory('/mai-kieu/'),
    routes
})

export default router