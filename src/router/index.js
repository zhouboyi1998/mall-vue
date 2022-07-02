import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../views/layout/Layout'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/layout/main/home/Home')
            },
            {
                path: '/category',
                name: 'Category',
                component: () => import('../views/layout/main/category/Category')
            },
            {
                path: '/brand',
                name: 'Brand',
                component: () => import('../views/layout/main/brand/Brand')
            },
            {
                path: '/goods',
                name: 'Goods',
                component: () => import('../views/layout/main/goods/Goods')
            },
            {
                path: '/order',
                name: 'Order',
                component: () => import('../views/layout/main/order/Order')
            },
            {
                path: '/user',
                name: 'User',
                component: () => import('../views/layout/main/user/User')
            },
            {
                path: '/role',
                name: 'Role',
                component: () => import('../views/layout/main/role/Role')
            }
        ]
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
