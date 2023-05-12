import axios from 'axios'

// 新建 axios 实例
const instance = axios.create({
    baseURL: process.env.VUE_APP_REQUEST_BASE_URL,
    timeout: process.env.VUE_APP_REQUEST_TIMEOUT
})

// 登录请求
export const login = (params) => {
    // 添加 client_id / client_secret 到请求参数中
    params.append('client_id', process.env.VUE_APP_CLIENT_ID)
    params.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)

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
