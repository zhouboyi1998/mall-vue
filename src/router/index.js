import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: '/',
        component: () => import('../views/index/Index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/index/main/home/Home')
            },
            {
                path: '/category',
                name: 'Category',
                component: () => import('../views/index/main/category/Category')
            },
            {
                path: '/brand',
                name: 'Brand',
                component: () => import('../views/index/main/brand/Brand')
            },
            {
                path: '/goods',
                name: 'Goods',
                component: () => import('../views/index/main/goods/Goods')
            },
            {
                path: '/order',
                name: 'Order',
                component: () => import('../views/index/main/order/Order')
            },
            {
                path: '/user',
                name: 'User',
                component: () => import('../views/index/main/user/User')
            },
            {
                path: '/role',
                name: 'Role',
                component: () => import('../views/index/main/role/Role')
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
