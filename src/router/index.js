import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index/Index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/index/main/home/Home')
            },
            {
                path: '/goods/category',
                name: 'Category',
                component: () => import('../views/index/main/category/Category')
            },
            {
                path: '/goods/brand',
                name: 'Brand',
                component: () => import('../views/index/main/brand/Brand')
            },
            {
                path: '/goods/goods',
                name: 'Goods',
                component: () => import('../views/index/main/goods/Goods')
            },
            {
                path: '/order/order',
                name: 'Order',
                component: () => import('../views/index/main/order/Order')
            },
            {
                path: '/member/member',
                name: 'Member',
                component: () => import('../views/index/main/member/Member')
            },
            {
                path: '/user/user',
                name: 'User',
                component: () => import('../views/index/main/user/User')
            },
            {
                path: '/user/role',
                name: 'Role',
                component: () => import('../views/index/main/role/Role')
            },
            {
                path: '/user/menu',
                name: 'Menu',
                component: () => import('../views/index/main/menu/Menu')
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
    routes: routes
})

export default router
