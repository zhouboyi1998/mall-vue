import axios from 'axios'
import { useTokenStore } from '@/store'
import router from '@/router'
import { ElMessage } from 'element-plus'

// 获取存储 Token 的 Pinia 仓库
const tokenStore = useTokenStore()

// 新建 axios 实例
const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// axios 请求拦截器
instance.interceptors.request.use(request => {
    // 添加访问令牌到请求头中
    request.headers.Authorization = tokenStore.accessToken || localStorage.getItem('accessToken')
    return request
}, error => {
    return Promise.reject(new Error(error))
})

// axios 响应拦截器
instance.interceptors.response.use(response => {
    return response
}, async error => {
    // 如果返回 401, 说明访问令牌和刷新令牌都过期了
    // 如果刷新令牌没有过期, 携带过期的访问令牌访问时, 后端会自动刷新
    if (error.response.status === 401) {
        // 重置 Pinia Store
        tokenStore.$reset()
        // 清空 Local Storage
        localStorage.clear()
        // 清空 Session Storage
        sessionStorage.clear()
        // 跳转到登录页
        await router.replace('/login')
        ElMessage.warning('登录已过期 / 请重新登录')
    }
    return Promise.reject(new Error(error))
})

export default instance
