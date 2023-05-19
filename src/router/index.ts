import { createRouter, createWebHistory, Router, RouterOptions } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/index/Index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('../views/index/main/home/Home.vue')
            },
            {
                path: '/mall-goods/category',
                name: 'Category',
                component: () => import('../views/index/main/category/Category.vue')
            },
            {
                path: '/mall-goods/brand',
                name: 'Brand',
                component: () => import('../views/index/main/brand/Brand.vue')
            },
            {
                path: '/mall-goods/goods',
                name: 'Goods',
                component: () => import('../views/index/main/goods/Goods.vue')
            },
            {
                path: '/mall-order/order',
                name: 'Order',
                component: () => import('../views/index/main/order/Order.vue')
            },
            {
                path: '/mall-member/member',
                name: 'Member',
                component: () => import('../views/index/main/member/Member.vue')
            },
            {
                path: '/mall-user/user',
                name: 'User',
                component: () => import('../views/index/main/user/User.vue')
            },
            {
                path: '/mall-user/role',
                name: 'Role',
                component: () => import('../views/index/main/role/Role.vue')
            },
            {
                path: '/mall-user/menu',
                name: 'Menu',
                component: () => import('../views/index/main/menu/Menu.vue')
            },
            {
                path: '/mall-system/area',
                name: 'Area',
                component: () => import('../views/index/main/area/Area.vue')
            },
            {
                path: '/mall-system/theme',
                name: 'Theme',
                component: () => import('../views/index/main/theme/Theme.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/Login.vue')
    },
    {
        path: '/401',
        name: '401',
        component: () => import('../views/error/401.vue')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/error/404.vue')
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes
} as RouterOptions)

export default router
