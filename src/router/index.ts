import {createRouter, RouteRecordRaw, Router, createWebHashHistory} from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import LandingPage from "../views/LandingPage.vue";
import SkinAndBacteria from "../views/SkinAndBacteria.vue";
import FementationPage from "../views/FementationPage.vue";
import MagicMosaic from "../views/MagicMosaic.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/homepage'
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: HomePage,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/landing',
        name: 'landing',
        component: LandingPage,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/skinandbacteria',
        name: 'skinandbacteria',
        component: SkinAndBacteria,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/fementation',
        name: 'fementation',
        component: FementationPage,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/magicmosaic',
        name: 'magicmosaic',
        component: MagicMosaic,
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
