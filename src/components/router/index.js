import { createRouter, createWebHistory } from 'vue-router'

import Login from '../login/Login.vue'
import Register from '../login/Register.vue'

import HomeView from '../views/HomeView.vue'
import PublishJob from '../views/PublishJob.vue'
import CompaniesView from '../company/CompaniesView.vue'
import JobDetail from '../jobs/JobDetail.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/cadastro',
        name: 'register',
        component: Register
    },
    {
        path: '/',
        name: 'HomeView',
        component: HomeView,
    },
    {
        path: '/publicar-vaga',
        name: 'PublishJob',
        component: PublishJob,
    },
    {
        path: '/empresas',
        name: 'CompaniesView',
        component: CompaniesView,
    },
    {
        path: '/vaga/:id',
        name: 'JobDetail',
        component: JobDetail,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router