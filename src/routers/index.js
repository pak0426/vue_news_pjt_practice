import { createRouter, createWebHistory } from 'vue-router'
import UserVue from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView";
import NewsView from "@/components/NewsView.vue";
import AsksView from "@/components/AsksView.vue";
import JosView from "@/components/JosView.vue";

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        path: '/news',
        name: 'news',
        // component: createListView('NewsView')
        component: NewsView
    },
    {
        path: '/asks',
        name: 'ask',
        // component: createListView('AskView')
        component: AsksView
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: createListView('JobsView')
        component: JosView
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