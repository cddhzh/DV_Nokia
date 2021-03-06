import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import FirstPage from "@/views/FirstPage";

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/',
        component: Login
    },
    {
        path: '/firstPage',
        component: FirstPage
    }
]

const router = new VueRouter({
    routes
})

export default router
