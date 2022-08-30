import router from './index'
import { useTokenStore } from '@/store/token'

// 白名单页面 (不需要 token 就可以访问)
const whiteList = ['/login']

// 前置路由守卫
router.beforeEach((to, from, next) => {
    // 获取 Pinia 仓库
    const tokenStore = useTokenStore()
    // 判断 Access Token 是否存在
    if (tokenStore.accessToken == null) {
        // Access Token 不存在, 如果是白名单页面直接放行, 否则跳转到登录页
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    } else {
        // Access Token 存在, 访问登录页直接跳转到首页, 其它页面任意跳转
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    }
})
