import Vue from "vue";
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'datastatistic',
        component: () => import('../view/datastatistic.vue')
    },
    {
        path: '/Database',
        name: 'database',
        component: () => import('../view/database.vue')
    },
    {
        path: '/Log',
        name: 'log',
        component: () => import('../view/log.vue')
    },
    {
        path: '/About',
        name: 'about',
        component: () => import('../view/about.vue')
    }
]

const router = new VueRouter({
    mode:"history",
    routes
})

export default router