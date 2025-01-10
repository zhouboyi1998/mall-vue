import axios from 'axios'

// 新建 axios 实例
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: import.meta.env.VITE_APP_REQUEST_TIMEOUT
})

// 登录认证
export const login = (params: any) => {
    // 添加 client_id / client_secret 到请求参数中
    params.append('client_id', import.meta.env.VITE_APP_CLIENT_ID)
    params.append('client_secret', import.meta.env.VITE_APP_CLIENT_SECRET)

    return instance({
        url: '/mall-security/oauth/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        },
        data: params
    })
}
