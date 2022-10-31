import axios from 'axios'
import { useTokenStore } from '@/store/token'
import { usePathStore } from '@/store/path'
import { useLayoutStore } from '@/store/layout'
import router from '@/router'
import { ElMessage } from 'element-plus'
import constant from '@/components/Constant'
import { login } from '@/api/login'

// 获取 Pinia 仓库
const tokenStore = useTokenStore()
const pathStore = usePathStore()
const layoutStore = useLayoutStore()

// 新建 axios 实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_REQUEST_BASE_URL,
    timeout: process.env.VUE_APP_REQUEST_TIMEOUT
})

// axios 请求拦截器
instance.interceptors.request.use(request => {
    // 添加 Access Token 到请求头中
    request.headers.Authorization = tokenStore.accessToken
    return request
}, error => {
    return Promise.reject(new Error(error))
})

// axios 响应拦截器
instance.interceptors.response.use(response => {
    return response
}, async error => {
    // Access Token 过期
    if (error.response.status === constant.HttpStatus.UNAUTHORIZED) {
        // 请求参数
        const params = new URLSearchParams()
        // 刷新令牌模式
        params.append('grant_type', 'refresh_token')
        params.append('refresh_token', tokenStore.refreshToken)
        // 发起请求, 使用 Refresh Token 刷新 Access Token 过期时间
        await login(params)
            .then(result => {
                // 将 token 保存到 Pinia Store 中
                tokenStore.$patch({
                    // Access Token (需要添加前缀)
                    accessToken: result.data.tokenPrefix + result.data.accessToken,
                    // Refresh Token
                    refreshToken: result.data.refreshToken,
                    // 当前时间戳 + Access Token 过期时长 == Access Token 过期时间
                    expiresIn: Date.now() + result.data.expiresIn
                })
            })
            .catch(error => {
                // Refresh Token 过期, 刷新失败, 清空所有状态, 跳转至登录页
                // 重置 Pinia Store
                tokenStore.$reset()
                pathStore.$reset()
                layoutStore.$reset()
                // 清空 Local Storage
                localStorage.clear()
                // 清空 Session Storage
                sessionStorage.clear()
                // 跳转到登录页
                router.replace('/login')
                ElMessage.warning({ message: '登录已过期 / 请重新登录', center: true })
            })
    }
    return Promise.reject(new Error(error))
})

export default instance
