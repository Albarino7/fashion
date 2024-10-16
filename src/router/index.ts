import {createRouter, RouteRecordRaw, Router, createWebHashHistory} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/homepage'
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: () => import('../views/HomePage.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutPage.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('../views/LandingPage.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/skinandbacteria',
        name: 'skinandbacteria',
        component: () => import('../views/SkinAndBacteria.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/fementation',
        name: 'fementation',
        component: () => import('../views/FementationPage.vue'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/magicmosaic',
        name: 'magicmosaic',
        component: () => import('../views/MagicMosaic.vue'),
        meta: {
            keepAlive: true
        }
    }
]

const router: Router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
