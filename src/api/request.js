import axios from 'axios'
import { useTokenStore } from '@/store'
import { ElMessage } from 'element-plus'

// 新建 axios 实例
const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
})

const tokenStore = useTokenStore()

// axios 请求拦截器
instance.interceptors.request.use(request => {
    // 添加 Access Token 到请求头中 (先去 Pinia Store 中找 Token, 找不到再去 Local Storage 中找)
    request.headers.Authorization = tokenStore.token || localStorage.getItem('token')
    return request
}, error => {
    return Promise.reject(new Error(error))
})

// axios 响应拦截器
instance.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(new Error(error))
})

export default instance
