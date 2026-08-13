import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PublishJob from '../views/PublishJob.vue'
import JobDetail from '../jobs/JobDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/publicar-vaga',
        name: 'publish-job',
        component: PublishJob
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