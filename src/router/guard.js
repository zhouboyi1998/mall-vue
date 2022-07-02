import router from './index'

// 白名单页面 (不需要 token 就可以访问)
const whiteList = ['/login']

// 前置路由守卫
router.beforeEach((to, from, next) => {
    // 判断是否存在 token
    if (localStorage.getItem('token') == null) {
        // 不存在 token, 如果是白名单页面直接放行, 否则跳转到登录页
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    } else {
        // 存在 token, 访问登录页直接跳转到首页, 其它页面随便跳转
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    }
})
