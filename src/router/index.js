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
                path: '/mall-goods/category',
                name: 'Category',
                component: () => import('../views/index/main/category/Category')
            },
            {
                path: '/mall-goods/brand',
                name: 'Brand',
                component: () => import('../views/index/main/brand/Brand')
            },
            {
                path: '/mall-goods/goods',
                name: 'Goods',
                component: () => import('../views/index/main/goods/Goods')
            },
            {
                path: '/mall-order/order',
                name: 'Order',
                component: () => import('../views/index/main/order/Order')
            },
            {
                path: '/mall-member/member',
                name: 'Member',
                component: () => import('../views/index/main/member/Member')
            },
            {
                path: '/mall-user/user',
                name: 'User',
                component: () => import('../views/index/main/user/User')
            },
            {
                path: '/mall-user/role',
                name: 'Role',
                component: () => import('../views/index/main/role/Role')
            },
            {
                path: '/mall-user/menu',
                name: 'Menu',
                component: () => import('../views/index/main/menu/Menu')
            },
            {
                path: '/mall-system/area',
                name: 'Area',
                component: () => import('../views/index/main/area/Area')
            },
            {
                path: '/mall-system/theme',
                name: 'Theme',
                component: () => import('../views/index/main/theme/Theme')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login')
    },
    {
        path: '/401',
        name: '401',
        component: () => import('../views/error/401')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/error/404')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router
