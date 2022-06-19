import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Layout',
        component: () => import('../views/layout/Layout')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
