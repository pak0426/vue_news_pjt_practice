import { createRouter, createWebHistory } from 'vue-router'
import UserVue from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView";

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'news',
        component: createListView('NewsView')
    },
    {
        path: '/asks',
        name: 'ask',
        component: createListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: createListView('JobsView')
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