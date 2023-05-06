import { createRouter, createWebHistory } from 'vue-router'
import UserVue from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import createListView from "@/views/CreateListView";
import NewsView from "@/components/NewsView.vue";
import AsksView from "@/components/AsksView.vue";
import JosView from "@/components/JosView.vue";
import store from "@/store/index";

const routes = [
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        name: 'news',
        // component: createListView('NewsView')
        component: NewsView,
        beforeEnter: (to, from, next) => {
            console.log('to', to);
            console.log('from', from);
            console.log('enter', next);
            store.dispatch('SET_LOADINGSTATUS', true)
                .then(() => {
                    console.log('fetch');
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            next();
                        })
                })
        }
    },
    {
        path: '/asks',
        name: 'ask',
        // component: createListView('AskView')
        component: AsksView,
        beforeEnter: (to, from, next) => {
            console.log('to', to);
            console.log('from', from);
            console.log('enter', next);
            store.dispatch('SET_LOADINGSTATUS', true)
                .then(() => {
                    console.log('fetch');
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            next();
                        })
                })
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: createListView('JobsView')
        component: JosView,
        beforeEnter: (to, from, next) => {
            console.log('to', to);
            console.log('from', from);
            console.log('enter', next);
            store.dispatch('SET_LOADINGSTATUS', true)
                .then(() => {
                    console.log('fetch');
                    store.dispatch('FETCH_LIST', to.name)
                        .then(() => {
                            next();
                        })
                })
        }
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