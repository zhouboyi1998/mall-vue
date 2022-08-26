import axios from 'axios'

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// axios 请求拦截器
instance.interceptors.request.use(request => {
    // 添加 Access Token 到请求头中
    request.headers.Authorization = localStorage.getItem('token')
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
