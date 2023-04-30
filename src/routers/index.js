import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '@/views/NewsView.vue'
import JobsView from "@/views/JobsView.vue";
import AskView from "@/views/AsksView.vue";
import UserVue from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView
    },
    {
        path: '/asks',
        name: 'asks',
        component: AskView
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView
    },
    {
        path: '/user/:id',
        component: UserVue
    },
    {
        path: '/item/:id',
        component: ItemView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router