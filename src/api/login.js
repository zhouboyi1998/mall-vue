import request from "@/api/request"

export const login = (params) => {

    // 添加登录验证需要的请求参数
    params.append('grant_type', 'password')
    params.append('client_id', 'manage')
    params.append('client_secret', '123456')

    return request({
        url: '/security/oauth/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        },
        data: params
    })
}
