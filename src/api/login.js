import axios from 'axios'

// 新建 axios 实例
const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// 登录请求
export const login = (params) => {
    // 添加 client_id / client_secret 到请求参数中
    params.append('client_id', 'manage')
    params.append('client_secret', '123456')

    return instance({
        url: '/security/oauth/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        },
        data: params
    })
}
